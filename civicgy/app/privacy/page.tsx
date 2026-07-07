import PageBanner from "@/app/_components/PageBanner";

export default function PrivacyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-gray max-w-none">
            <h2>Privacy Policy</h2>
            <p>
              The Civic Society of Great Yarmouth is committed to protecting your
              privacy. This policy explains how we collect, use, and safeguard your
              personal information.
            </p>
            <h3>Information We Collect</h3>
            <p>
              We collect information you provide when you fill in our membership form,
              contact form, or correspond with us by email. This may include your
              name, address, email address, and telephone number.
            </p>
            <h3>How We Use Your Information</h3>
            <p>
              We use your information to manage your membership, respond to enquiries,
              send newsletters, and keep you informed about our activities and events.
            </p>
            <h3>Data Security</h3>
            <p>
              We take appropriate measures to ensure your personal information is
              stored securely and is not accessible to unauthorised persons.
            </p>
            <h3>Your Rights</h3>
            <p>
              You have the right to request access to, correction of, or deletion of
              your personal data. To exercise these rights, please contact us at{" "}
              <a href="mailto:info@civicsocietygy.co.uk" className="text-secondary">
                info@civicsocietygy.co.uk
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
