export default function PageBanner({ title }: { title: string }) {
  return (
    <section className="paper-grid relative overflow-hidden border-b border-primary/10 bg-cream py-14 sm:py-20">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-primary/10" />
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-secondary/30" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-secondary">
          Civic Society · Great Yarmouth
        </p>
        <h1 className="font-serif text-5xl font-medium leading-none tracking-[-0.03em] text-primary sm:text-7xl">{title}</h1>
      </div>
    </section>
  );
}
