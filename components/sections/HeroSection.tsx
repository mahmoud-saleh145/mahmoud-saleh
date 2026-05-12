"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Send } from "lucide-react";
import { personalInfo, stats } from "@/lib/data/site";
import { fadeUp, fadeIn, staggerContainer, slideUpItem } from "@/lib/animations/variants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-grid mask-radial-fade opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_50%,rgba(91,110,245,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(167,139,250,0.07),transparent)]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Badge */}
          <motion.div variants={slideUpItem}>
            <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 text-xs font-medium text-accent-2 tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-3 animate-pulse" />
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={slideUpItem}
            className="font-syne font-extrabold leading-none tracking-tighter mb-6"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            <span className="block text-white">Mahmoud</span>
            <span className="block text-outline">Saleh</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={slideUpItem}
            className="text-accent font-syne font-semibold tracking-widest uppercase text-sm mb-6"
          >
            {personalInfo.role}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={slideUpItem}
            className="text-muted text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={slideUpItem} className="flex flex-wrap gap-4 items-center mb-16">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-full text-sm glow-accent hover:-translate-y-0.5 hover:opacity-90 transition-all duration-200"
            >
              View Projects
              <ArrowDown size={16} />
            </Link>
            <Link
              href="https://wa.me/01015508532"
              target="_blank"
              className="inline-flex items-center gap-2 border border-border-2 text-muted font-medium px-7 py-3.5 rounded-full text-sm hover:text-white hover:border-white/25 transition-all duration-200"
            >
              <Send size={14} />
              Get in Touch
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={slideUpItem} className="flex gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-accent pl-4">
                <div className="font-syne font-extrabold text-3xl leading-none text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-muted tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        aria-hidden
      >
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent animate-scroll-pulse" />
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
