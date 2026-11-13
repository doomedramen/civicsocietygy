import PageBanner from "@/app/_components/PageBanner";
import Section from "@/app/_components/Section";
import { Badge } from "@/app/_components/Card";
import { createPageMetadata } from "@/app/_lib/site";
import UpcomingTalks from "@/app/events/UpcomingTalks";

export const metadata = createPageMetadata({
  title: "Events",
  description:
    "Upcoming and past talks, walks, and gatherings run by the Civic Society of Great Yarmouth.",
  path: "/events/",
});

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

const upcomingTalks = [
  {
    date: "2026-10-27",
    dateLabel: "Tuesday 27 October 2026, 2.30pm",
    title: "Tales of the Unexpected: A Career in Heritage Conservation",
    speaker: "Lorraine Finch",
    description: "At the Old Rectory.",
  },
  {
    date: "2026-11-24",
    dateLabel: "Tuesday 24 November 2026, 2.30pm",
    title: "South Denes: A New Chapter for Great Yarmouth",
    subtitle: "A masterplan for investment, jobs and long-term growth",
    speaker:
      "Councillor Daniel Candon, responsible for economic growth and development",
    description: "At the Old Rectory.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageBanner title="Events" />

      <Section width="md">
        <h2 className="mb-3 text-2xl font-bold text-primary">Future Talks</h2>
        <p className="mb-8 text-sm leading-relaxed text-gray-600">
          Free for members; £2 for non-members.
        </p>
        <UpcomingTalks talks={upcomingTalks} />

        <h2 className="mb-8 mt-16 text-2xl font-bold text-primary">Past Events</h2>
        <div className="space-y-4">
          {pastEvents.map((event, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Badge variant="primary">{event.date}</Badge>
              <h3 className="mt-3 text-xl font-bold text-primary">{event.title}</h3>
              {event.speaker && (
                <p className="text-sm font-medium text-secondary">{event.speaker}</p>
              )}
              <p className="mt-2 leading-relaxed text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
