"use client";

import { motion } from "framer-motion";
import { staggerContainer, slideUpItem } from "@/lib/animations/variants";

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  fast?: boolean;
}

export function StaggerGroup({ children, className, fast }: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fast ? { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } } : staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={slideUpItem} className={className}>
      {children}
    </motion.div>
  );
}
