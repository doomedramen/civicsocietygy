type Theme = "light" | "dark";

const overlineColors: Record<Theme, string> = {
  light: "text-secondary",
  dark: "text-secondary-light",
};

const headingColors: Record<Theme, string> = {
  light: "text-primary",
  dark: "text-white",
};

export default function SectionHeading({
  overline,
  title,
  theme = "light",
  className = "",
}: {
  overline?: string;
  title: string;
  theme?: Theme;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      {overline && (
        <p
          className={`mb-2 text-xs font-medium uppercase tracking-[0.2em] ${overlineColors[theme]}`}
        >
          {overline}
        </p>
      )}
      <h2 className={`mb-12 text-3xl font-bold sm:text-4xl ${headingColors[theme]}`}>
        {title}
      </h2>
    </div>
  );
}
