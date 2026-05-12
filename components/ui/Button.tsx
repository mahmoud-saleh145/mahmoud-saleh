"use client";

import { cn } from "@/lib/utils/cn";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";

  const variants = {
    primary:
      "bg-accent text-white px-6 py-3 text-sm glow-accent-sm hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98]",
    secondary:
      "border border-border-2 text-muted px-6 py-3 text-sm hover:text-white hover:border-white/25 active:scale-[0.98]",
    ghost:
      "text-muted text-sm hover:text-white px-3 py-2",
  };

  const classes = cn(base, variants[variant], disabled && "opacity-50 pointer-events-none", className);

  if (href) {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
