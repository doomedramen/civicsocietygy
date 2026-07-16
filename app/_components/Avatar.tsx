import { type ReactNode } from "react";

export function Avatar({
  children,
  size = "md",
  className = "",
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-10 w-10 text-sm",
    md: "h-12 w-12 text-sm",
    lg: "h-24 w-24 text-3xl",
  };
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}
