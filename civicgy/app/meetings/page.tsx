import PageBanner from "@/app/_components/PageBanner";

const pastMeetings2024 = [
  {
    date: "December 2024",
    title: "End of Year Review",
    description: "A look back at what the society achieved in 2024, and a discussion of plans for the year ahead.",
  },
  {
    date: "November 2024",
    title: "Town Centre Regeneration Update",
    description: "An update on regeneration projects in Great Yarmouth town centre and the society's involvement.",
  },
  {
    date: "October 2024",
    title: "Heritage at Risk",
    description: "A discussion on historic buildings in Great Yarmouth at risk and what can be done to protect them.",
  },
  {
    date: "September 2024",
    title: "Annual Community Forum",
    description: "Open forum for residents to share their views on what matters most in Great Yarmouth.",
  },
];

export default function MeetingsPage() {
  return (
    <>
      <PageBanner title="Meetings" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-2xl font-bold text-primary">Upcoming Meetings</h2>

          <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-12 text-center">
            <p className="text-lg text-gray-500">
              We&rsquo;ll be publishing details of the next set of meetings shortly.
            </p>
            <p className="mt-2 leading-relaxed text-gray-400">
              In the meantime, you can see what we got up to in 2024 below, and
              we&rsquo;ll announce new dates here and on our social media as soon as
              they&rsquo;re confirmed.
            </p>
          </div>

          <h2 className="mb-8 mt-20 text-2xl font-bold text-primary">Previous Meetings</h2>
          <p className="mb-8 leading-relaxed text-gray-600">
            Previous Meetings are shown in a yearly archive. Click the year below to
            see the meetings for that year.
          </p>

          <details className="group rounded-xl border border-gray-100 bg-white shadow-sm" open>
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-primary marker:content-none">
              <span>2024 Archive</span>
              <svg
                className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="space-y-3 border-t border-gray-100 p-6 pt-4">
              {pastMeetings2024.map((meeting, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-gray-100 p-5 transition-colors hover:bg-gray-50"
                >
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {meeting.date}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-primary">{meeting.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{meeting.description}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
