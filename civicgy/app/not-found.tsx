import type { Metadata } from "next";
import Section from "@/app/_components/Section";
import { Button } from "@/app/_components/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="bg-primary py-24 text-white sm:py-32">
      <Section width="sm" className="py-0 text-center">
        <p className="mb-2 text-sm font-light tracking-wide text-white/50">
          Error 404
        </p>
        <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
          We can&rsquo;t find that page
        </h1>
        <p className="mx-auto mb-10 max-w-md leading-relaxed text-white/75">
          The page you&rsquo;re looking for may have been moved or no longer
          exists. Let&rsquo;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="outline">Contact Us</Button>
        </div>
      </Section>
    </section>
  );
}
