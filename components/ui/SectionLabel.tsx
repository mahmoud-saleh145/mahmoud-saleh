"use client";

import { cn } from "@/lib/utils/cn";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionLabel({ children, className, centered }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-accent mb-3",
        centered && "justify-center",
        className
      )}
    >
      {!centered && <span className="w-8 h-px bg-accent flex-shrink-0" />}
      {children}
    </div>
  );
}
