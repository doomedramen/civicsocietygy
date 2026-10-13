import PageBanner from "@/app/_components/PageBanner";
import Section from "@/app/_components/Section";
import EmptyState from "@/app/_components/EmptyState";
import { Badge } from "@/app/_components/Card";
import { createPageMetadata } from "@/app/_lib/site";

export const metadata = createPageMetadata({
  title: "Meetings",
  description:
    "Upcoming and past committee meetings of the Civic Society of Great Yarmouth.",
  path: "/meetings/",
});

const pastMeetings2026 = [
  {
    date: "27 January",
    title: "Redevelopment of North Quay and Other Matters",
    description: "Members discussed the proposed redevelopment of North Quay and other matters affecting the town."
  },
  {
    date: "24 February",
    title: "Improving the Environment in Great Yarmouth",
    description: "A discussion explored opportunities to improve Great Yarmouth's environment and public spaces."
  },
  {
    date: "21 March",
    title: "Great Yarmouth and Rambouillet Twinned for 70 Years",
    description: "Members marked 70 years of town twinning between Great Yarmouth and Rambouillet and reflected on the relationship."
  },
  {
    date: "16 April",
    title: "Non-Designated Heritage Assets in Great Yarmouth",
    description: "Members explored the importance of identifying and protecting locally significant heritage assets that are not formally listed."
  },
  {
    date: "22 June",
    title: "Rejuvenation and Regeneration",
    description: "A discussion focused on opportunities to rejuvenate Great Yarmouth and support the town's regeneration."
  },
  {
    date: "10 July",
    title: "Presentation of the Latest Masterplan for North Quay",
    description: "Members were presented with the latest masterplan for the proposed North Quay development."
  },
  {
    date: "19 July",
    title: "Visit to Beccles Civic Society",
    description: "Members visited Beccles Civic Society to learn about its work and exchange ideas on civic improvement."
  },
  {
    date: "22 September",
    title: "Talk on Great Yarmouth’s Railways",
    description: "Richard Gallard explores the history and development of Great Yarmouth’s railways."
  }
];

const pastMeetings2025 = [
  {
    date: "15 January",
    title: "Discussion with the Conservation Officer",
    description: "Members discussed conservation matters and the protection of Great Yarmouth's historic environment."
  },
  {
    date: "21 January",
    title: "Strategic Planning and Economic Development",
    description: "A discussion explored strategic planning and opportunities for economic development in Great Yarmouth."
  },
  {
    date: "25 February",
    title: "Community Chaplaincy Norfolk Mentoring",
    description: "Members learned about the work of Community Chaplaincy Norfolk and its mentoring support for people rebuilding their lives."
  },
  {
    date: "25 March",
    title: "St George's Theatre: The History and Present Position",
    description: "A presentation explored the history of St George's Theatre and its current role in the town."
  },
  {
    date: "22 April",
    title: "The Elizabethan House: A New Perspective",
    description: "Members learned about the history of the Elizabethan House and new perspectives on its heritage."
  },
  {
    date: "13 May",
    title: "The Development of Great Yarmouth Port",
    description: "The Port Director discussed the port's development, operations, economic contribution and future opportunities."
  },
  {
    date: "14 May",
    title: "Visit to Great Yarmouth Gasometer",
    description: "Members visited the Grade II listed gasometer and discussed possible future uses for the site."
  },
  {
    date: "14 June",
    title: "20th Century Seaside Architecture",
    description: "Historian Kathryn Ferry explored the evolution of seaside architecture and its influence on British coastal towns."
  },
  {
    date: "30 September",
    title: "St Elizabeth Hospice: Improving Palliative and End of Life Care",
    description: "Judi Newman outlined hospice services, plans for a new facility and efforts to improve palliative and end-of-life care locally."
  },
  {
    date: "14 October",
    title: "Curing Energy Poverty Together",
    description: "Rob Haslam discussed energy poverty and the potential for sustainable energy projects to reduce heating costs in Great Yarmouth."
  },
  {
    date: "18 November",
    title: "The Rows of Great Yarmouth",
    description: "Archaeologist and historian Stuart Burgess explored the history and significance of Great Yarmouth's historic Rows."
  },
  {
    date: "5 December",
    title: "Improving Chances of Getting a Job in Great Yarmouth",
    description: "Members discussed ways to improve local employment prospects and support people seeking work."
  }
];

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

      <Section width="md">
        <h2 className="mb-8 text-2xl font-bold text-primary">Upcoming Meetings</h2>

        <EmptyState
          title="We'll be publishing details of the next set of meetings shortly."
          description="In the meantime, you can browse our past meetings below, and we'll announce new dates here and on our social media as soon as they're confirmed."
        />

        <h2 className="mb-8 mt-16 text-2xl font-bold text-primary">Previous Meetings</h2>
        <p className="mb-8 leading-relaxed text-gray-600">
          Previous Meetings are shown in a yearly archive. Click the year below to
          see the meetings for that year.
        </p>

        <details className="group rounded-xl border border-gray-100 bg-white shadow-sm">
          <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-primary marker:content-none">
            <span>2026 Archive</span>
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
            {pastMeetings2026.map((meeting, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-100 p-5 transition-colors hover:bg-gray-50"
              >
                <Badge variant="primary">{meeting.date}</Badge>
                <h3 className="mt-3 text-lg font-bold text-primary">{meeting.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{meeting.description}</p>
              </div>
            ))}
          </div>
        </details>

        <details className="group rounded-xl border border-gray-100 bg-white shadow-sm">
          <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-primary marker:content-none">
            <span>2025 Archive</span>
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
            {pastMeetings2025.map((meeting, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-100 p-5 transition-colors hover:bg-gray-50"
              >
                <Badge variant="primary">{meeting.date}</Badge>
                <h3 className="mt-3 text-lg font-bold text-primary">{meeting.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{meeting.description}</p>
              </div>
            ))}
          </div>
        </details>

        <details className="group rounded-xl border border-gray-100 bg-white shadow-sm">
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
                <Badge variant="primary">{meeting.date}</Badge>
                <h3 className="mt-3 text-lg font-bold text-primary">{meeting.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{meeting.description}</p>
              </div>
            ))}
          </div>
        </details>
      </Section>
    </>
  );
}
