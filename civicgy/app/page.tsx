import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { id: 1, color: "from-slate-700 to-slate-500", label: "Town Wall" },
  { id: 2, color: "from-blue-800 to-blue-600", label: "Heritage Building" },
  { id: 3, color: "from-amber-700 to-amber-500", label: "Seafront" },
  { id: 4, color: "from-emerald-700 to-emerald-500", label: "Gardens" },
  { id: 5, color: "from-rose-700 to-rose-500", label: "Market Place" },
  { id: 6, color: "from-indigo-700 to-indigo-500", label: "Town Centre" },
  { id: 7, color: "from-teal-700 to-teal-500", label: "River View" },
  { id: 8, color: "from-orange-700 to-orange-500", label: "Pier" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-40" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Image
              src="/images/logo-white.png"
              alt="Civic Society of Great Yarmouth"
              width={480}
              height={73}
              className="mx-auto mb-8 h-auto w-72 sm:w-96 lg:w-[480px]"
              priority
            />
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Developing civic pride in our town &mdash; its buildings, environment,
            heritage, and community.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/join"
              className="rounded-lg bg-secondary px-6 py-3 font-medium text-white transition-colors hover:bg-secondary-dark"
            >
              Become a Member
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/30 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">
            Welcome
          </h2>
          <div className="space-y-5 text-left leading-relaxed text-gray-700">
            <p>
              The Civic Society of Great Yarmouth was founded to develop civic pride
              in the town. Our aims are not just about pride in the town&rsquo;s
              buildings and architecture, but also in its environment, its
              cleanliness, the first impressions that visitors have when they arrive
              and its new developments.
            </p>
            <p>
              The society wants to hear about the town&rsquo;s good and bad points
              from the people who live and work there. What does it do well? Where
              could improvements be made? How can it be made a more welcoming place
              and boost the local economy.
            </p>
            <p>
              Great Yarmouth has a rich heritage, a vibrancy, and a very high
              potential. We hope that by bringing people together to help improve our
              town, that potential can be achieved.
            </p>
            <p>
              Thank you for taking the time to visit our website. Here you can find
              digital copies of our Annual Report, Regeneration Report and many other
              pieces of information about what we do. If you would like to find
              something out that is not listed on our website, please get in touch
              with us via our contact page.
            </p>
          </div>
          <p className="mt-8 font-medium text-primary">
            Best wishes,
          </p>
          <p className="font-bold text-primary">
            Hugh Sturzaker MBE
          </p>
          <p className="text-sm text-gray-500">
            Chair of The Civic Society of Great Yarmouth
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary sm:text-4xl">
            Gallery
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className="group relative aspect-[3/2] overflow-hidden rounded-lg"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${img.color}`}
                />
                <div className="absolute inset-0 flex items-end bg-black/0 p-4 transition-colors group-hover:bg-black/30">
                  <span className="translate-y-2 text-sm font-medium text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Get Involved
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/80">
            Join us in making Great Yarmouth an even better place to live, work, and
            visit. Membership costs just &pound;10 per year.
          </p>
          <Link
            href="/join"
            className="inline-block rounded-lg bg-secondary px-8 py-3 font-medium text-white transition-colors hover:bg-secondary-dark"
          >
            Join Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
