import { type ReactNode } from "react";

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}) {
  const pad = { sm: "p-4", md: "p-6", lg: "p-8" }[padding];
  const hov = hover ? "transition-shadow hover:shadow-md" : "";
  return (
    <div className={`rounded-2xl border border-primary/10 bg-white shadow-[0_12px_40px_rgba(22,59,58,.06)] ${pad} ${hov} ${className}`}>
      {children}
    </div>
  );
}

export function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
}) {
  const colors = {
    default: "bg-gray-100 text-gray-500",
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
  };
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${colors[variant]}`}
    >
      {children}
    </span>
  );
}
