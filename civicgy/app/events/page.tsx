import PageBanner from "@/app/_components/PageBanner";

const events = [
  {
    date: "Coming Soon",
    title: "2025 Event Programme",
    description:
      "Our events programme for 2025 is currently being finalised. Please check back soon or follow our social media for the latest updates on upcoming talks, walks, and community gatherings.",
  },
];

const pastEvents = [
  {
    date: "5 April 2022",
    title: "A Future for Our Great Historic Buildings",
    speaker: "Kit Martin, CBE",
    description:
      "British Architectural designer and country house property developer who converted the old St. Nicholas hospital site.",
  },
  {
    date: "9 February 2022",
    title: "Preparations for the Queen's Platinum Jubilee",
    speaker: "Bruno Peek, LVO, OBE, OPR",
    description: "The Pageantmaster discussed preparations for the Platinum Jubilee celebrations.",
  },
  {
    date: "18 January 2022",
    title: "Ambassador Programme and Community Champions for Great Yarmouth",
    speaker: "Jade Martin & James Dudley",
    description:
      "An overview of the Ambassador Programme and Community Champion initiatives in Great Yarmouth.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageBanner title="Events" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-primary">Upcoming Events</h2>

          {events.length === 0 && (
            <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-12 text-center">
              <p className="text-lg text-gray-500">No upcoming events at this time.</p>
              <p className="mt-2 text-sm text-gray-400">
                Check back soon or follow us on social media for event announcements.
              </p>
            </div>
          )}

          <div className="mt-6 space-y-4">
            {events.map((event, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                  {event.date}
                </span>
                <h3 className="mt-3 text-xl font-bold text-primary">{event.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-10 mt-20 text-2xl font-bold text-primary">Past Events</h2>
          <div className="space-y-4">
            {pastEvents.map((event, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                  {event.date}
                </span>
                <h3 className="mt-3 text-xl font-bold text-primary">{event.title}</h3>
                {event.speaker && (
                  <p className="text-sm font-medium text-secondary">{event.speaker}</p>
                )}
                <p className="mt-2 leading-relaxed text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
