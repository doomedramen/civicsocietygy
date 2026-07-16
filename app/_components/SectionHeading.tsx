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
          className={`mb-4 text-[11px] font-bold uppercase tracking-[0.24em] ${overlineColors[theme]}`}
        >
          {overline}
        </p>
      )}
      <h2 className={`mb-12 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl ${headingColors[theme]}`}>
        {title}
      </h2>
    </div>
  );
}
