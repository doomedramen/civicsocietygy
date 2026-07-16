export default function EmptyState({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="paper-grid rounded-2xl border border-dashed border-primary/20 bg-cream p-12 text-center">
      <p className="text-lg text-gray-500">{title}</p>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
      )}
    </div>
  );
}
