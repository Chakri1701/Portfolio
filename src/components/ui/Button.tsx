"use client";

import Link from "next/link";

export type Variant = "white" | "black" | "outline" | "ghost";  // 👈 includes "ghost"
export type Size = "sm" | "md" | "lg";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
  title?: string;
};

const base =
  "inline-flex items-center justify-center font-semibold tracking-wide " +
  "rounded-xl transition-colors select-none " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "focus-visible:ring-white/80 focus-visible:ring-offset-black";

const sizes: Record<Size, string> = {
  sm: "text-[13px] px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
};

const variants: Record<Variant, string> = {
  white:   "bg-white text-black hover:bg-white/90 active:bg-white shadow-sm",
  black:   "bg-black text-white hover:bg-black/90 active:bg-black/80 border border-white/10",
  outline: "border border-white/70 text-white hover:bg-white/10 active:bg-white/15",
  ghost:   "text-white/90 hover:bg-white/10 active:bg-white/15",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "white",
  size = "md",
  className = "",
  ariaLabel,
  title,
}: Props) {
  const classes = [base, sizes[size], variants[variant], className].join(" ").trim();

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} title={title} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} aria-label={ariaLabel} title={title} className={classes}>
      {children}
    </button>
  );
}
