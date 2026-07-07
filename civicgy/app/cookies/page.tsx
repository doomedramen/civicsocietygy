import PageBanner from "@/app/_components/PageBanner";

export default function CookiesPage() {
  return (
    <>
      <PageBanner title="Cookies Policy" />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-gray max-w-none">
            <h2>Cookies Policy</h2>
            <p>
              This website uses cookies to enhance your browsing experience. By
              continuing to use this site, you consent to our use of cookies.
            </p>
            <h3>What Are Cookies?</h3>
            <p>
              Cookies are small text files that are placed on your computer by
              websites you visit. They are widely used to make websites work more
              efficiently and to provide information to site owners.
            </p>
            <h3>How We Use Cookies</h3>
            <p>
              We use essential cookies to ensure the proper functioning of our
              website. We may also use analytics cookies to understand how visitors
              use our site, which helps us improve our content and user experience.
            </p>
            <h3>Managing Cookies</h3>
            <p>
              Most web browsers allow you to control cookies through their settings.
              You can choose to block or delete cookies, but this may affect the
              functionality of certain websites.
            </p>
            <p>
              For more information about how we handle your data, please see our{" "}
              <a href="/privacy" className="text-secondary">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
