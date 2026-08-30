const ALLOWED_ORIGINS = new Set([
  "https://civicsocietygy.uk",
  "https://www.civicsocietygy.uk",
]);

const GIFT_AID_DECLARATION =
  "I want the Civic Society of Great Yarmouth to treat this membership payment and all future donations as Gift Aid donations. I confirm that I am a UK taxpayer and understand that, if I pay less Income Tax and/or Capital Gains Tax in the current tax year than the amount of Gift Aid claimed on all my donations, it is my responsibility to pay the difference.";

const SENDER = "Civic Society Forms <forms@civicsocietygy.uk>";
const TREASURER = "susanpageuk@gmail.com";

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function json(origin, status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

function value(formData, name) {
  const raw = formData.get(name);
  return typeof raw === "string" ? raw.trim() : "";
}

function validEmail(email) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function required(fields) {
  return Object.values(fields).every((field) => typeof field === "string" && field.length > 0);
}

function withinLimits(fields) {
  return Object.values(fields).every((field) => typeof field === "string" && field.length <= 5000);
}

async function verifyTurnstile(request, formData, secret) {
  const token = value(formData, "cf-turnstile-response");
  if (!token || token.length > 2048) return false;

  const verification = new FormData();
  verification.append("secret", secret);
  verification.append("response", token);
  const remoteIp = request.headers.get("CF-Connecting-IP");
  if (remoteIp) verification.append("remoteip", remoteIp);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: verification,
  });
  const result = await response.json();
  return result.success === true && result.hostname === "civicsocietygy.uk";
}

async function sendEmail(apiKey, message, idempotencyKey) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(message),
  });

  if (!response.ok) throw new Error("Email delivery failed");
  return response.json();
}

async function ensureMembershipTable(db) {
  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS membership_submissions (
        id TEXT PRIMARY KEY,
        submitted_at TEXT NOT NULL,
        email TEXT NOT NULL,
        payload_json TEXT NOT NULL,
        gift_aid_declaration TEXT,
        delivery_status TEXT NOT NULL,
        admin_email_id TEXT,
        applicant_email_id TEXT
      )`,
    )
    .run();
}

function contactText(data) {
  return `New ${data.enquiryType} enquiry\n\nName: ${data.title} ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\n\nMessage:\n${data.message}`;
}

function membershipText(data, id, submittedAt) {
  return `Membership application ${id}\nSubmitted: ${submittedAt}\n\nName: ${data.firstName} ${data.lastName}\nAddress: ${data.addressLine1}, ${data.city}, ${data.county || ""} ${data.postcode}\nEmail: ${data.email}\nMobile: ${data.mobile}\nGift Aid: ${data.giftAid === "yes" ? "Yes" : "No"}\n\n${data.giftAid === "yes" ? `Gift Aid declaration:\n${GIFT_AID_DECLARATION}` : ""}`;
}

const worker = {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    if (!origin || !ALLOWED_ORIGINS.has(origin)) {
      return new Response("Not allowed", { status: 403 });
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== "POST" || new URL(request.url).pathname !== "/submit") {
      return json(origin, 404, { message: "Not found." });
    }

    const formData = await request.formData();
    if (!(await verifyTurnstile(request, formData, env.TURNSTILE_SECRET))) {
      return json(origin, 400, { message: "Please complete the verification and try again." });
    }

    const formType = value(formData, "form-type");
    if (formType === "contact") {
      const data = {
        title: value(formData, "title"),
        enquiryType: value(formData, "enquiry-type"),
        firstName: value(formData, "first-name"),
        lastName: value(formData, "last-name"),
        email: value(formData, "email"),
        phone: value(formData, "phone"),
        message: value(formData, "message"),
      };
      if (!required({ ...data, phone: "optional" }) || !withinLimits(data) || !validEmail(data.email)) {
        return json(origin, 400, { message: "Please complete each required field with a valid email address." });
      }

      const id = crypto.randomUUID();
      await sendEmail(
        env.RESEND_API_KEY,
        {
          from: SENDER,
          to: [TREASURER],
          reply_to: data.email,
          subject: `[Contact] ${data.enquiryType} from ${data.firstName} ${data.lastName}`,
          text: contactText(data),
        },
        `${id}-admin`,
      );
      await sendEmail(
        env.RESEND_API_KEY,
        {
          from: SENDER,
          to: [data.email],
          reply_to: TREASURER,
          subject: "We received your message",
          text: "Thank you for contacting the Civic Society of Great Yarmouth. We have received your message and will reply as soon as we can.",
        },
        `${id}-receipt`,
      );
      return json(origin, 200, { message: "Thank you. Your message has been sent." });
    }

    if (formType === "membership") {
      const data = {
        firstName: value(formData, "first-name"),
        lastName: value(formData, "last-name"),
        addressLine1: value(formData, "address-line1"),
        city: value(formData, "city"),
        county: value(formData, "county"),
        postcode: value(formData, "postcode"),
        email: value(formData, "email"),
        mobile: value(formData, "mobile"),
        giftAid: value(formData, "gift-aid"),
      };
      if (
        !required({ ...data, county: "optional" }) ||
        !withinLimits(data) ||
        !validEmail(data.email) ||
        !["yes", "no"].includes(data.giftAid)
      ) {
        return json(origin, 400, { message: "Please complete each required field and choose your Gift Aid preference." });
      }

      const id = crypto.randomUUID();
      const submittedAt = new Date().toISOString();
      const application = membershipText(data, id, submittedAt);
      await ensureMembershipTable(env.SUBMISSIONS);
      await env.SUBMISSIONS.prepare(
        `INSERT INTO membership_submissions
          (id, submitted_at, email, payload_json, gift_aid_declaration, delivery_status)
         VALUES (?, ?, ?, ?, ?, ?)`,
      )
        .bind(
          id,
          submittedAt,
          data.email,
          JSON.stringify(data),
          data.giftAid === "yes" ? GIFT_AID_DECLARATION : null,
          "pending",
        )
        .run();

      try {
        const admin = await sendEmail(
          env.RESEND_API_KEY,
          {
            from: SENDER,
            to: [TREASURER],
            reply_to: data.email,
            subject: `[Membership] ${data.firstName} ${data.lastName} — ${id}`,
            text: application,
          },
          `${id}-admin`,
        );
        const receipt = await sendEmail(
          env.RESEND_API_KEY,
          {
            from: SENDER,
            to: [data.email],
            reply_to: TREASURER,
            subject: "Your Civic Society membership application",
            text: `Thank you for your membership application. Please pay the annual membership fee by BACS, using your name as the payment reference.\n\nYour application reference is ${id}.\n\n${application}`,
          },
          `${id}-receipt`,
        );
        await env.SUBMISSIONS.prepare(
          `UPDATE membership_submissions
           SET delivery_status = ?, admin_email_id = ?, applicant_email_id = ?
           WHERE id = ?`,
        )
          .bind("sent", admin.id ?? null, receipt.id ?? null, id)
          .run();
      } catch {
        await env.SUBMISSIONS.prepare("UPDATE membership_submissions SET delivery_status = ? WHERE id = ?")
          .bind("delivery_failed", id)
          .run();
        return json(origin, 502, { message: "We could not deliver your application. Please contact us directly." });
      }

      return json(origin, 200, {
        message: "Thank you. Your membership application has been sent, and we have emailed you a confirmation.",
      });
    }

    return json(origin, 400, { message: "Unknown form." });
  },
};

export default worker;
