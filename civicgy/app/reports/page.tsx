import PageBanner from "@/app/_components/PageBanner";

const latestReport = {
  title: "7th Annual Report (2023-24)",
  description:
    "Our latest annual report covering the society's activities, achievements, and financial position for the year 2023-24.",
};

const regenerationReport = {
  title: "Regeneration Report 2021",
  description:
    "A comprehensive look at regeneration initiatives across Great Yarmouth and the society's vision for the town's future development.",
};

const previousReports = [
  "7th Annual Report (2023-24)",
  "6th Annual Report (2022-23)",
  "5th Annual Report (2021-22)",
  "4th Annual Report (2020-21)",
  "3rd Annual Report (2019-20)",
  "2nd Annual Report (2018-19)",
  "1st Annual Report (2017-18)",
];

export default function ReportsPage() {
  return (
    <>
      <PageBanner title="Reports" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-2xl font-bold text-primary">Our Latest Annual Report</h2>
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-6 flex aspect-[3/4] items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 sm:aspect-[8.5/11]">
              <div className="text-center">
                <svg className="mx-auto h-16 w-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <p className="mt-3 text-sm text-gray-500">
                  {latestReport.title}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block rounded-lg bg-secondary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary-dark"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          <h2 className="mb-8 mt-16 text-2xl font-bold text-primary">Our Regeneration Report</h2>
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
            <p className="mb-6 leading-relaxed text-gray-600">{regenerationReport.description}</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary-dark"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Regeneration Report
            </a>
          </div>

          <h2 className="mb-8 mt-16 text-2xl font-bold text-primary">Previous Annual Reports</h2>
          <p className="mb-8 leading-relaxed text-gray-600">
            You can view each of the previous Annual Reports directly from our website
            or you can download the PDF version to your device.
          </p>

          <div className="space-y-3">
            {previousReports.map((report, i) => (
              <div
                key={report}
                className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="font-medium text-primary">{report}</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50"
                  >
                    View Report
                  </a>
                  <a
                    href="#"
                    className="rounded-lg bg-secondary px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-secondary-dark"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
