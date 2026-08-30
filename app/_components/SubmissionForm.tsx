"use client";

import Script from "next/script";
import { type FormEvent, type ReactNode, useState } from "react";

const endpoint = "https://civicgy-forms.susanpageuk.workers.dev/submit";
const turnstileSiteKey = "0x4AAAAAAEiGXOkuxuxErBL7";

type FormType = "contact" | "membership";
type SubmissionState =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

export default function SubmissionForm({
  children,
  formType,
  className,
}: {
  children: ReactNode;
  formType: FormType;
  className: string;
}) {
  const [state, setState] = useState<SubmissionState>({ type: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (window.location.protocol !== "https:") {
      setState({
        type: "error",
        message: "For your privacy, forms are available once this site is served securely over HTTPS.",
      });
      return;
    }

    const form = event.currentTarget;
    setState({ type: "submitting" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
      });
      const body = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(body.message ?? "We could not send your form. Please try again.");
      }

      form.reset();
      window.turnstile?.reset();
      setState({
        type: "success",
        message: body.message ?? "Thank you. Your form has been sent.",
      });
    } catch (error) {
      setState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your form. Please try again.",
      });
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit} noValidate={false}>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      <input name="form-type" type="hidden" value={formType} />
      {children}
      <div className="cf-turnstile" data-sitekey={turnstileSiteKey} />
      <p aria-live="polite" className={state.type === "error" ? "text-sm text-red-700" : "text-sm text-gray-600"}>
        {state.type === "submitting" ? "Sending your form…" : state.type === "idle" ? "" : state.message}
      </p>
    </form>
  );
}
