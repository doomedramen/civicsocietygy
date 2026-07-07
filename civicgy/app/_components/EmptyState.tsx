export default function EmptyState({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-12 text-center">
      <p className="text-lg text-gray-500">{title}</p>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
      )}
    </div>
  );
}
