import PageBanner from "@/app/_components/PageBanner";
import Section from "@/app/_components/Section";

const activities = [
  {
    title: "Heritage Walks",
    description:
      "We run occasional guided walks around the town, pointing out the architectural details and hidden corners that people often walk straight past.",
  },
  {
    title: "Community Clean-ups",
    description:
      "From time to time we gather volunteers to tidy up a particular street or green space. Tea and biscuits are usually involved.",
  },
  {
    title: "Historic Building Conservation",
    description:
      "We keep an eye on the town's listed buildings and work with the council and heritage bodies when sites need protecting.",
  },
  {
    title: "Public Consultations",
    description:
      "When planning applications or development proposals affect the character of the town, we make sure residents' views are heard.",
  },
  {
    title: "Educational Outreach",
    description:
      "We give the occasional talk to schools and community groups about the town's history, and why looking after it matters.",
  },
  {
    title: "Events & Social Gatherings",
    description:
      "We hold regular talks and social evenings. Some are on local history, some on current affairs, and some are simply an excuse for a chat.",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <PageBanner title="Activities" />

      <Section width="lg">
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
          The society undertakes a range of activities to promote and enhance our
          town. There are plenty of ways to get involved, whether you have an hour
          to spare or would like to take on a larger role.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold text-primary">{activity.title}</h3>
              <p className="leading-relaxed text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
