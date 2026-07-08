import type { Metadata } from "next";
import PageBanner from "@/app/_components/PageBanner";
import Section from "@/app/_components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the Civic Society of Great Yarmouth collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <Section width="sm">
        <p className="leading-relaxed text-gray-600">
          We take your privacy seriously. What follows is a plain-English
          explanation of what information we collect, why we collect it, and
          what we do with it.
        </p>
        <h3 className="mt-8 text-lg font-bold text-primary">What We Collect</h3>
        <p className="leading-relaxed text-gray-600">
          When you fill in our membership form, contact form, or write to us by
          email, we collect the information you give us. That typically means
          your name, address, email address, and telephone number. Nothing more
          than that.
        </p>
        <h3 className="mt-8 text-lg font-bold text-primary">How We Use It</h3>
        <p className="leading-relaxed text-gray-600">
          We use your details to manage your membership, respond to your
          enquiries, send you our newsletter, and let you know about upcoming
          events and activities. We do not share your information with anyone
          outside the society without your permission.
        </p>
        <h3 className="mt-8 text-lg font-bold text-primary">Keeping It Safe</h3>
        <p className="leading-relaxed text-gray-600">
          We store your information securely and take reasonable steps to make
          sure it isn&rsquo;t accessed by anyone who shouldn&rsquo;t have it.
        </p>
        <h3 className="mt-8 text-lg font-bold text-primary">Your Rights</h3>
        <p className="leading-relaxed text-gray-600">
          You can ask to see what information we hold about you, ask us to
          correct it, or ask us to delete it. If you&rsquo;d like to do any of
          those things, simply drop us a line at{" "}
          <a href="mailto:info@civicsocietygy.co.uk" className="text-secondary underline">
            info@civicsocietygy.co.uk
          </a>
          .
        </p>
      </Section>
    </>
  );
}
