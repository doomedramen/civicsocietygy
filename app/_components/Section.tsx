import { type ReactNode } from "react";

type Width = "sm" | "md" | "lg" | "xl";

const widths: Record<Width, string> = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
};

export default function Section({
  children,
  width = "md",
  className = "",
}: {
  children: ReactNode;
  width?: Width;
  className?: string;
}) {
  return (
    <section className={`py-20 sm:py-28 ${className}`}>
      <div className={`mx-auto px-5 sm:px-8 ${widths[width]}`}>{children}</div>
    </section>
  );
}
