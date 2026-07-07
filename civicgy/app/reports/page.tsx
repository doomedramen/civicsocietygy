import PageBanner from "@/app/_components/PageBanner";
import Section from "@/app/_components/Section";
import { Button } from "@/app/_components/Button";

const reports = [
  { number: 7, year: "2023-24", file: "GYCS_7thAnnualReport.pdf" },
  { number: 6, year: "2022-23", file: "GYCS_6thAnnualReport.pdf" },
  { number: 5, year: "2021-22", file: "GYCS_5thAnnualReport.pdf" },
  { number: 4, year: "2020-21", file: "GYCS_4thAnnualReport.pdf" },
  { number: 3, year: "2019-20", file: "GYCS_3rdAnnualReport.pdf" },
  { number: 2, year: "2018-19", file: "GYCS_2ndAnnualReport.pdf" },
  { number: 1, year: "2017-18", file: "GYCS_1stAnnualReport.pdf" },
];

function ordinal(n: number): string {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

export default function ReportsPage() {
  const latest = reports[0];

  return (
    <>
      <PageBanner title="Reports" />

      <Section width="md">
        <h2 className="mb-8 text-2xl font-bold text-primary">Our Latest Annual Report</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="mb-6 flex aspect-[3/4] items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 sm:aspect-[8.5/11]">
            <div className="text-center">
              <svg className="mx-auto h-16 w-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <p className="mt-3 font-medium text-gray-700">
                {ordinal(latest.number)} Annual Report ({latest.year})
              </p>
              <Button href={`/files/${latest.file}`} download variant="primary" className="mt-4">
                Download PDF
              </Button>
            </div>
          </div>
        </div>

        <h2 className="mb-8 mt-16 text-2xl font-bold text-primary">Our Regeneration Report</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
          <p className="mb-6 leading-relaxed text-gray-600">
            A comprehensive look at regeneration initiatives across Great Yarmouth
            and the society&rsquo;s vision for the town&rsquo;s future development.
          </p>
          <span className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-6 py-2 text-sm font-medium text-gray-500 cursor-not-allowed">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Coming Soon
          </span>
        </div>

        <h2 className="mb-8 mt-16 text-2xl font-bold text-primary">Previous Annual Reports</h2>
        <p className="mb-8 leading-relaxed text-gray-600">
          You can view each of the previous Annual Reports directly from our website
          or you can download the PDF version to your device.
        </p>

        <div className="space-y-3">
          {reports.map((report) => (
            <div
              key={report.file}
              className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  {report.number}
                </span>
                <span className="font-medium text-primary">
                  {ordinal(report.number)} Annual Report ({report.year})
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  href={`/files/${report.file}`}
                  variant="secondary"
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Report
                </Button>
                <Button href={`/files/${report.file}`} download variant="primary" size="sm">
                  Download PDF
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
