export default function PageBanner({ title }: { title: string }) {
  return (
    <section className="bg-primary py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-2 text-sm text-white/60">
          You are Here: Civic Society of Great Yarmouth &gt; {title}
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      </div>
    </section>
  );
}
