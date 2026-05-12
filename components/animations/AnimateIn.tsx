"use client";

import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations/variants";

interface AnimateInProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function AnimateIn({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  once = true,
}: AnimateInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
