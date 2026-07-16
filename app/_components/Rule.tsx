export default function Rule() {
  return (
    <div className="flex items-center gap-4 py-6" aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/15" />
      <span className="text-[10px] tracking-[0.3em] text-primary/25">&#9670;</span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/15" />
    </div>
  );
}
