"use client";

import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "success" | "surface" | "featured";
  className?: string;
}

export function Badge({ children, variant = "accent", className }: BadgeProps) {
  const variants = {
    accent:
      "bg-accent/10 border border-accent/30 text-accent-2",
    success:
      "bg-accent-3/10 border border-accent-3/30 text-accent-3",
    surface:
      "bg-surface-2 border border-border text-muted",
    featured:
      "bg-gradient-to-r from-accent to-accent-2 text-white border-0",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
