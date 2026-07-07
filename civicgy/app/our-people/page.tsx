import Image from "next/image";
import PageBanner from "@/app/_components/PageBanner";
import Section from "@/app/_components/Section";
import { Card } from "@/app/_components/Card";
import { Avatar } from "@/app/_components/Avatar";

const management = [
  {
    name: "Henry Cator OBE DL",
    role: "President",
    description: "High Steward of Great Yarmouth",
    image: "/images/people/henry-cator.png",
  },
  {
    name: "Hugh Sturzaker MBE",
    role: "Chair",
    description: "Retired Surgeon",
    email: "info@civicsocietygy.co.uk",
    image: "/images/people/hugh-sturzaker.png",
  },
  {
    name: "Susan Page",
    role: "Treasurer & Membership Secretary",
    description: "Former Chef & Now a Taxi Driver",
    email: "memberships@civicsocietygy.co.uk",
    image: "/images/people/susan-page.png",
  },
  {
    name: "Dr. Catherine Richards",
    role: "Minutes Secretary",
    description: "Principal of East Norfolk Sixth Form",
    image: "/images/people/catherine-richards.png",
  },
];

const committeeMembers = [
  { name: "Peter Bondi", description: "Retired Hotel Manager" },
  { name: "Anne Edwards", description: "Former Editor of the Great Yarmouth Mercury" },
  { name: "Ian McCredie", description: "Managing Director of SPP Digital, Ex Chair of Enterprise GY & School Governor" },
  { name: "Paul Patterson", description: "Retired Managing Director, Director of ATEC Design, Historian and Author" },
  { name: "Michael Musket", description: "Retired Accountant" },
  { name: "Miriam Kikis", description: "Retired Restaurateur" },
  { name: "Kol Kishon", description: "Retired Head of the Imaging Department at the James Paget Hospital" },
  { name: "Ian Miller", description: "Chartered Quantity Surveyor" },
  { name: "Bruce Sturock", description: "Former Chair of Palmers and The Town Centre Partnership" },
  { name: "Michael Zegerman", description: "Retired Businessman" },
];

export default function OurPeoplePage() {
  return (
    <>
      <PageBanner title="Our People" />

      <Section width="lg">
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
          We are very honoured to have the High Steward of Great Yarmouth as our
          President and most grateful for the enthusiasm and hard work put in by
          our committee members.
        </p>

        <h3 className="mb-10 text-center text-2xl font-bold text-primary">Management</h3>
        <div className="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {management.map((person) => (
            <Card key={person.name} className="group text-center" hover>
              <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={person.image!}
                  alt={person.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold text-primary">{person.name}</h4>
              <p className="text-sm font-medium text-secondary">{person.role}</p>
              <p className="mt-2 text-sm text-gray-500">{person.description}</p>
              {"email" in person && (
                <a
                  href={`mailto:${person.email}`}
                  className="mt-3 inline-block text-xs text-secondary hover:text-secondary-dark"
                >
                  {person.email}
                </a>
              )}
            </Card>
          ))}
        </div>

        <h3 className="mb-10 text-center text-2xl font-bold text-primary">Committee Members</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {committeeMembers.map((person) => (
            <div
              key={person.name}
              className="flex items-start gap-4 rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <Avatar size="md">{person.name.charAt(0)}</Avatar>
              <div>
                <h4 className="font-bold text-primary">{person.name}</h4>
                <p className="text-sm text-gray-500">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
