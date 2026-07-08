import PageBanner from "@/app/_components/PageBanner";
import Section from "@/app/_components/Section";

const newsletters = [
  { number: 41, file: "Civic-Society-Newsletter-41.pdf" },
  { number: 40, file: "Civic-Society-Newsletter-40.pdf" },
  { number: 39, file: "Civic-Society-Newsletter-39.pdf" },
  { number: 38, file: "Civic-Society-Newsletter-38.pdf" },
  { number: 37, file: "Civic-Society-Newsletter-37.pdf" },
  { number: 36, file: "Civic-Society-Newsletter-36.pdf" },
  { number: 35, file: "Civic-Society-Newsletter-35.pdf" },
  { number: 34, file: "Civic-Society-Newsletter-34.pdf" },
  { number: 33, file: "Civic-Society-Newsletter-33.pdf" },
  { number: 32, file: "Civic-Society-Newsletter-32.pdf" },
  { number: 31, file: "Civic-Society-Newsletter-31.pdf" },
  { number: 30, file: "Civic-Society-Newsletter-30.pdf" },
  { number: 29, file: "Civic-Society-Newsletter-29.pdf" },
  { number: 28, file: "Civic-Society-Newsletter-28.pdf" },
  { number: 27, file: "Civic-Society-Newsletter-27.pdf" },
  { number: 26, file: "Civic-Society-Newsletter-26.pdf" },
  { number: 17, file: "Civic-Society-Newsletter-17.pdf" },
  { number: 15, file: "Civic-Society-Newsletter-15.pdf" },
  { number: 14, file: "Civic-Society-Newsletter-14.pdf" },
];

export default function NewslettersPage() {
  return (
    <>
      <PageBanner title="Newsletters" />

      <Section width="lg">
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
          Our newsletters are listed below. Use the Download button next to
          each one to view or save a copy.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {newsletters.map((nl) => (
            <div
              key={nl.number}
              className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-20 w-full items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary opacity-20">
                <span className="text-lg font-bold text-primary">
                  Newsletter {nl.number}
                </span>
              </div>
              <h3 className="mb-1 text-center font-bold text-primary">
                Newsletter {nl.number}
              </h3>
              <a
                href={`/files/newsletters/${nl.file}`}
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Newsletter
              </a>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
