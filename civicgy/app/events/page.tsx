import PageBanner from "@/app/_components/PageBanner";

const pastEvents = [
  {
    date: "5 April 2022",
    title: "A Future for Our Great Historic Buildings",
    speaker: "Kit Martin, CBE",
    description:
      "Mr Martin spoke about his work converting and preserving historic buildings, drawing on his experience with the old St Nicholas hospital site.",
  },
  {
    date: "9 February 2022",
    title: "Preparations for the Queen's Platinum Jubilee",
    speaker: "Bruno Peek, LVO, OBE, OPR",
    description:
      "The Pageantmaster gave us a fascinating look at the planning behind the Jubilee celebrations across the country.",
  },
  {
    date: "18 January 2022",
    title: "Ambassador Programme and Community Champions",
    speaker: "Jade Martin & James Dudley",
    description:
      "An evening on two local initiatives that encourage residents to take an active role in promoting and improving Great Yarmouth.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageBanner title="Events" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-primary">Upcoming Events</h2>

          <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-12 text-center">
            <p className="text-lg text-gray-500">
              We&rsquo;re finalising our 2025 programme at the moment.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Details of talks, walks, and gatherings will be posted here and on our
              social media once dates are confirmed. Do check back &mdash; or better
              yet, follow us on Facebook or LinkedIn where we announce things first.
            </p>
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
