import Link from "next/link";
import { type ReactNode } from "react";

const base = "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3";

const variants = {
  primary: "bg-secondary text-white shadow-[0_8px_20px_rgba(145,69,46,.18)] hover:-translate-y-0.5 hover:bg-secondary-dark",
  secondary: "border border-primary/15 bg-white text-primary hover:border-primary/35 hover:bg-cream",
  outline: "border border-white/40 text-white hover:border-white hover:bg-white/10",
  ghost: "text-white/80 hover:bg-white/10 hover:text-white",
};

const sizes = {
  sm: "px-4 py-2.5 text-xs",
  md: "px-6 py-3.5 text-sm",
  lg: "px-8 py-4 text-base",
};

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  download,
  target,
  rel,
}: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (href.startsWith("/") || href.startsWith("#")) {
      return (
        <Link href={href} className={cls} download={download} target={target} rel={rel}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={cls} download={download} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type="submit" className={cls}>
      {children}
    </button>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className="w-full rounded-lg bg-secondary px-8 py-4 text-base font-bold text-white transition-colors hover:bg-secondary-dark sm:w-auto"
    >
      {children}
    </button>
  );
}
