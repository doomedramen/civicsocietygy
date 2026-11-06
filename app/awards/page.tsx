import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/app/_components/PageBanner";
import Section from "@/app/_components/Section";
import { Badge, Card } from "@/app/_components/Card";
import { awardCategories, TOWN_CENTRE_AWARDS } from "@/app/_lib/awards";
import { withBasePath } from "@/app/_lib/basePath";
import { createPageMetadata } from "@/app/_lib/site";

export const metadata = createPageMetadata({
  title: "Town Centre Awards",
  description:
    "The Civic Society of Great Yarmouth's annual Town Centre Awards recognise the shops, businesses and market stalls that keep the town centre looking its best.",
  path: "/awards/",
});

export default function AwardsPage() {
  return (
    <>
      <PageBanner title="Town Centre Awards" />

      <Section width="md">
        <div className="space-y-6 text-[17px] leading-[1.8] text-gray-700">
          <p>
            Every year the Civic Society of Great Yarmouth recognises the
            shops, businesses, food and drink establishments and market stalls
            that keep the heart of our town looking its best. Judges give
            marks for shop frontages, first impressions, cleanliness and
            window displays - the details that shape how the town feels to
            everyone who lives, works and visits here.
          </p>
        </div>

        <Card className="mt-10" padding="lg">
          <div className="grid gap-8 sm:grid-cols-[1.25fr_1fr] sm:items-center">
            <div>
              <Badge variant="secondary">The ceremony</Badge>
              <h2 className="mt-3 font-serif text-3xl font-medium text-primary">
                Winners announced at the Town Hall
              </h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                All {TOWN_CENTRE_AWARDS.shortlistedCount} shortlisted
                businesses, each displaying a “shortlisted” sticker in their
                window, are invited to the ceremony, where the winner of each
                category will receive a framed certificate and the overall
                winner will be presented with a trophy.
              </p>
            </div>
            <dl className="space-y-4 rounded-lg border border-primary/10 bg-cream p-6 text-sm">
              <div>
                <dt className="font-bold text-gray-500">Date</dt>
                <dd className="mt-0.5 font-serif text-xl text-primary">{TOWN_CENTRE_AWARDS.dateLabel}</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-500">Time</dt>
                <dd className="mt-0.5 text-gray-700">{TOWN_CENTRE_AWARDS.timeLabel}</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-500">Venue</dt>
                <dd className="mt-0.5 text-gray-700">{TOWN_CENTRE_AWARDS.venue}</dd>
              </div>
            </dl>
          </div>
        </Card>

        <h2 className="mt-16 text-2xl font-bold text-primary">This year&rsquo;s categories</h2>
        <p className="mt-2 text-sm text-gray-500">
          {TOWN_CENTRE_AWARDS.shortlistedCount} shops, businesses and market stalls have been shortlisted across{" "}
          {TOWN_CENTRE_AWARDS.categoryCount} categories.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {awardCategories.map((category) => (
            <li
              key={category}
              className="flex items-center gap-3 rounded-lg border border-primary/10 bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm"
            >
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
              {category}
            </li>
          ))}
        </ul>

        <h2 className="mt-16 text-2xl font-bold text-primary">How the awards work</h2>
        <div className="mt-4 space-y-4 leading-[1.8] text-gray-600">
          <p>
            A Team of Civic Society judges carry out a visual audit of premises
            across the town centre, from shop frontage and first impressions
            to cleanliness and window displays. The businesses with the
            highest marks are shortlisted and given a window sticker to
            display, and a second round of judging decides the winner in each
            category.
          </p>
          <p>
            The awards are run by the Civic Society of Great Yarmouth in
            conjunction with the Town Centre Business Improvement District,
            and are supported by Great Yarmouth Borough Council and the Great
            Yarmouth Town Centre Partnership.
          </p>
        </div>

        <figure className="mt-12">
          <Image
            src={withBasePath("/images/gallery/IMG_8844.jpg")}
            alt="Great Yarmouth Town Hall, a red-brick building with a clock tower, where the awards ceremony takes place"
            width={1200}
            height={800}
            className="h-auto w-full rounded-2xl object-cover shadow-sm"
          />
          <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.15em] text-primary/50">
            Great Yarmouth Town Hall - home of the awards ceremony
          </figcaption>
        </figure>

        <div className="mt-12 rounded-lg border border-primary/10 bg-cream p-6 text-center">
          <p className="text-sm leading-relaxed text-gray-600">
            Look out for the “shortlisted” sticker in windows around the town centre — and come along on the day to find out who wins.
          </p>
          <Link
            href="/events"
            className="mt-4 inline-flex items-center gap-2 border-b border-secondary pb-1 text-sm font-bold text-primary transition-colors hover:text-secondary"
          >
            See our other upcoming events
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-5-5 5 5-5 5" />
            </svg>
          </Link>
        </div>
      </Section>
    </>
  );
}