import type { Metadata } from "next";
import PageBanner from "@/app/_components/PageBanner";
import Section from "@/app/_components/Section";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description:
    "How the Civic Society of Great Yarmouth uses cookies on this website.",
};

export default function CookiesPage() {
  return (
    <>
      <PageBanner title="Cookies Policy" />
      <Section width="sm">
        <p className="leading-relaxed text-gray-600">
          Like most websites these days, this one uses a few small cookies to
          work properly. Here&rsquo;s a straightforward explanation.
        </p>
        <h3 className="mt-8 text-lg font-bold text-primary">What Is a Cookie?</h3>
        <p className="leading-relaxed text-gray-600">
          A cookie is a tiny text file that a website places on your computer or
          phone when you visit. They&rsquo;ve been around for decades and are
          used by practically every website on the internet.
        </p>
        <h3 className="mt-8 text-lg font-bold text-primary">How We Use Them</h3>
        <p className="leading-relaxed text-gray-600">
          We only use essential cookies to make sure the site functions
          correctly. We may also use a simple analytics cookie to get a rough
          idea of how many people visit and which pages they look at &mdash;
          this helps us improve the site.
        </p>
        <h3 className="mt-8 text-lg font-bold text-primary">Turning Them Off</h3>
        <p className="leading-relaxed text-gray-600">
          If you&rsquo;d rather not have cookies, your browser lets you block or
          delete them. You&rsquo;ll find the settings under Preferences or
          Privacy in your browser menu. Do be aware that blocking them may
          affect how some websites work.
        </p>
        <p className="mt-8 leading-relaxed text-gray-600">
          For more detail on how we handle your data, have a look at our{" "}
          <a href="/privacy" className="text-secondary underline">
            Privacy Policy
          </a>
          .
        </p>
      </Section>
    </>
  );
}
