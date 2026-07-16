import Image from "next/image";
import Link from "next/link";
import { Button } from "./_components/Button";
import { withBasePath } from "./_lib/basePath";

const pathways = [
  {
    number: "01",
    title: "Protecting our heritage",
    text: "We champion the buildings and places that give Great Yarmouth its character.",
    href: "/activities",
  },
  {
    number: "02",
    title: "Shaping what comes next",
    text: "We take part in consultations and speak up for thoughtful, lasting development.",
    href: "/reports",
  },
  {
    number: "03",
    title: "Bringing people together",
    text: "Walks, talks and gatherings make the town’s story something we can all share.",
    href: "/events",
  },
];

const galleryImages = [
  {
    file: "573.jpg",
    alt: "The Minster Church of St Nicholas, Great Yarmouth, seen across its churchyard",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    file: "IMG_7543.jpg",
    alt: "The decorative tiled entrance of the former Municipal School of Art in Great Yarmouth",
    className: "",
  },
  {
    file: "IMG_7480.jpg",
    alt: "A black-and-white timber-framed hotel building on a Great Yarmouth street",
    className: "",
  },
  {
    file: "IMG_7559.jpg",
    alt: "The brick almshouses of the Fishermen's Hospital in Great Yarmouth",
    className: "sm:col-span-2",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-primary text-white lg:min-h-[720px]">
        <Image
          src={withBasePath("/images/gallery/header-image.jpg")}
          alt="The historic Tollhouse Museum in Great Yarmouth"
          fill
          priority
          className="object-cover object-[62%_center]"
          sizes="100vw"
        />
        <div className="image-wash absolute inset-0" />
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:min-h-[720px]">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-secondary-light">
              <span className="h-px w-10 bg-secondary-light" />
              Our town · Our shared responsibility
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl sm:leading-[0.9] sm:tracking-[-0.04em] md:text-[clamp(3.6rem,8vw,7.2rem)] md:leading-[0.88] md:tracking-[-0.045em]">
              Pride in our past.<br />A voice for our future.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              A society for everyone who cares about Great Yarmouth—its buildings,
              its streets, its story and the place it is becoming.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/join" size="lg">
                Become a member
                <ArrowIcon />
              </Button>
              <Button href="/activities" variant="outline" size="lg">See what we do</Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden border-l border-t border-white/15 bg-primary/80 px-10 py-7 backdrop-blur-md md:block">
          <p className="font-serif text-3xl">£10</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">Annual membership</p>
        </div>
      </section>

      <section className="border-b border-primary/10 bg-[#faf8f2]">
        <div className="mx-auto grid max-w-7xl divide-y divide-primary/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ["Upcoming", "Events & talks", "/events"],
            ["From the archive", "Annual reports", "/reports"],
            ["Stay informed", "Read our newsletters", "/newsletters"],
          ].map(([eyebrow, label, href]) => (
            <Link key={href} href={href} className="group flex items-center justify-between py-7 md:px-7 first:pl-0 last:pr-0">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>
                <p className="mt-1 font-serif text-xl text-primary">{label}</p>
              </div>
              <span className="text-xl text-primary/30 transition-transform group-hover:translate-x-1 group-hover:text-secondary">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="paper-grid bg-cream py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-secondary">A welcome from our Chair</p>
            <h2 className="font-serif text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-primary sm:text-6xl">Great Yarmouth has a rich heritage, a vibrancy, and very high potential.</h2>
            <div className="mt-10 border-l-2 border-secondary pl-5">
              <p className="font-bold text-primary">Hugh Sturzaker MBE</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-primary/50">Chair of the Society</p>
            </div>
          </div>
          <div className="space-y-6 text-[17px] leading-[1.8] text-gray-700 lg:pt-9">
            <p>
              The Civic Society of Great Yarmouth was founded to develop civic pride
              in the town. Our aims are not just about pride in the town&rsquo;s buildings
              and architecture, but also in its environment, its cleanliness, the first
              impressions visitors have and its new developments.
            </p>
            <p>
              We want to hear about the town&rsquo;s good and bad points from the people
              who live and work here. What does it do well? Where could improvements
              be made? How can we make it a more welcoming place and give the local
              economy a boost?
            </p>
            <p>
              By bringing people together to help improve our town, we believe that
              potential can be achieved. On this website you can explore our annual
              reports, newsletters and activities—and find out how to take part.
            </p>
            <Link href="/our-people" className="inline-flex items-center gap-2 border-b border-secondary pb-1 text-sm font-bold text-primary transition-colors hover:text-secondary">
              Meet the people behind the Society <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f2] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-secondary">Our purpose</p>
              <h2 className="font-serif text-5xl font-medium leading-none tracking-[-0.03em] text-primary sm:text-6xl">Care, challenge,<br />and connection.</h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-gray-600 lg:justify-self-end">We believe civic pride is active: looking closely, speaking constructively and helping good ideas take root.</p>
          </div>
          <div className="grid border-y border-primary/15 md:grid-cols-3 md:divide-x md:divide-primary/15">
            {pathways.map((item) => (
              <Link key={item.number} href={item.href} className="group border-b border-primary/15 py-9 last:border-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0">
                <p className="text-xs font-bold text-secondary">{item.number}</p>
                <h3 className="mt-8 font-serif text-3xl font-medium text-primary">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-600">{item.text}</p>
                <span className="mt-7 inline-flex text-xl text-primary/35 transition-all group-hover:translate-x-1 group-hover:text-secondary">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-secondary-light">Around the town</p>
              <h2 className="font-serif text-5xl font-medium tracking-[-0.03em] sm:text-6xl">Look a little closer.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">The details, landmarks and lived-in places that make Great Yarmouth unmistakably itself.</p>
          </div>
          <div className="grid auto-rows-[220px] gap-3 sm:grid-cols-4 sm:auto-rows-[240px]">
            {galleryImages.map((image) => (
              <div key={image.file} className={`group relative overflow-hidden ${image.className}`}>
                <Image src={withBasePath(`/images/gallery/${image.file}`)} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}
