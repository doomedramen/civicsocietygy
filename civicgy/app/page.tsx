import Image from "next/image";
import Rule from "./_components/Rule";
import SectionHeading from "./_components/SectionHeading";
import { Button } from "./_components/Button";
import Section from "./_components/Section";

const galleryImages = [
  "496.jpg",
  "573.jpg",
  "609-1.jpg",
  "620.jpg",
  "828.jpg",
  "IMG_7480.jpg",
  "IMG_7543.jpg",
  "IMG_7559.jpg",
  "IMG_7561.jpg",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-30" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Image
            src="/images/logo-white.png"
            alt="Civic Society of Great Yarmouth"
            width={480}
            height={73}
            className="mx-auto mb-10 h-auto w-72 sm:w-96 lg:w-[480px]"
            priority
          />
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A society for everyone who cares about Great Yarmouth &mdash; its
            buildings, its streets, its story, and its future.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/join">Become a Member</Button>
            <Button href="/contact" variant="outline">Get in Touch</Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading overline="A note from our Chairman" title="Welcome" />
          <div className="-mt-4 space-y-5 text-left leading-relaxed text-gray-700">
            <p>
              The Civic Society of Great Yarmouth was founded to develop civic pride
              in the town. Our aims are not just about pride in the town&rsquo;s
              buildings and architecture, but also in its environment, its
              cleanliness, the first impressions that visitors have when they arrive
              and its new developments.
            </p>
            <p>
              The society wants to hear about the town&rsquo;s good and bad points
              from the people who live and work here. What does it do well? Where
              could improvements be made? How can we make it a more welcoming place
              and give the local economy a boost.
            </p>
            <p>
              Great Yarmouth has a rich heritage, a vibrancy, and a very high
              potential. We hope that by bringing people together to help improve our
              town, that potential can be achieved.
            </p>
            <p>
              Thank you for taking the time to visit our website. Here you can find
              digital copies of our Annual Report, Regeneration Report and a good
              deal of other information about what we do. If you would like to find
              out something that isn&rsquo;t listed on our website, please do get in
              touch via our contact page.
            </p>
          </div>
          <div className="mt-8">
            <p className="font-medium text-primary">Best wishes,</p>
            <p className="font-bold text-primary">Hugh Sturzaker MBE</p>
            <p className="text-sm text-gray-400">Chair, The Civic Society of Great Yarmouth</p>
          </div>
        </div>
      </section>

      <Section width="xl" className="text-center">
        <SectionHeading overline="A few sights around the town" title="Gallery" />
        <div className="-mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((filename) => (
            <div
              key={filename}
              className="relative aspect-[3/2] overflow-hidden rounded-lg"
            >
              <Image
                src={`/images/gallery/${filename}`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Section>

      <div className="mx-auto max-w-7xl px-6">
        <Rule />
      </div>

      <section className="bg-primary py-20 text-white sm:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <SectionHeading
            overline="Membership"
            title="Join the Society"
            theme="dark"
          />
          <p className="-mt-4 mb-8 text-lg leading-relaxed text-white/75">
            Membership costs &pound;10 a year. It&rsquo;s a small contribution, but
            together it helps us do a great deal for the town. We&rsquo;d be
            delighted to have you with us.
          </p>
          <Button href="/join" size="lg">Find Out More</Button>
        </div>
      </section>
    </>
  );
}
