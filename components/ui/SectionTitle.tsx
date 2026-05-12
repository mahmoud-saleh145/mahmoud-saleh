"use client";

import { cn } from "@/lib/utils/cn";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  id?: string;
}

export function SectionTitle({ children, className, centered }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight",
        centered && "text-center",
        className
      )}
    >
      {children}
    </h2>
  );
}
