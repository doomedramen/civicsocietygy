export default function PageBanner({ title }: { title: string }) {
  return (
    <section className="bg-primary py-10 text-white sm:py-14">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-1 text-sm font-light tracking-wide text-white/50">
          Civic Society of Great Yarmouth
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      </div>
    </section>
  );
}
