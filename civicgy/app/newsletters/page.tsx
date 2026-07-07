import PageBanner from "@/app/_components/PageBanner";

const newsletters = Array.from({ length: 41 }, (_, i) => ({
  number: 41 - i,
  label: `Newsletter ${41 - i}`,
}));

export default function NewslettersPage() {
  return (
    <>
      <PageBanner title="Newsletters" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
            All our newsletters are listed below. Browse through our archive to
            catch up on past updates and activities.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {newsletters.map((nl) => (
              <div
                key={nl.number}
                className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-20 w-full items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary opacity-20">
                  <span className="text-lg font-bold text-primary">
                    {nl.label}
                  </span>
                </div>
                <h3 className="mb-1 text-center font-bold text-primary">{nl.label}</h3>
                <a
                  href="#"
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
        </div>
      </section>
    </>
  );
}
