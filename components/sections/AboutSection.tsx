"use client";

import { motion } from "framer-motion";
import { personalInfo, highlights } from "@/lib/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { fadeLeft, fadeRight, staggerContainer, slideUpItem } from "@/lib/animations/variants";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-bg-2"
      aria-labelledby="about-heading"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <SectionLabel>Who I Am</SectionLabel>
            <SectionTitle id="about-heading" className="mb-8">
              Turning ideas into{" "}
              <em className="not-italic text-accent">real products</em>
            </SectionTitle>

            <div className="space-y-4 text-muted leading-relaxed mb-10">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i} className="text-[1.0625rem]">
                  {paragraph}
                </p>
              ))}
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              {highlights.map((h) => (
                <motion.div
                  key={h.title}
                  variants={slideUpItem}
                  className="flex items-center gap-4 bg-surface border border-border rounded-xl px-4 py-3.5 hover:border-border-2 transition-colors"
                >
                  <span className="text-xl" aria-hidden>{h.emoji}</span>
                  <div>
                    <p className="text-sm font-medium text-white">{h.title}</p>
                    <p className="text-xs text-muted mt-0.5">{h.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="hidden lg:flex justify-center"
            aria-hidden
          >
            <div className="relative animate-float">
              {/* Main card */}
              <div className="relative bg-surface border border-border-2 rounded-3xl p-8 w-80 overflow-hidden">
                {/* Gradient top bar */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent via-accent-2 to-transparent" />

                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center font-syne text-2xl font-extrabold text-white mb-6">
                  MS
                </div>

                <h3 className="font-syne text-xl font-bold mb-1">Mahmoud Saleh</h3>
                <p className="text-sm text-muted mb-6">Junior Full-Stack Developer</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Next.js", "TypeScript", "MongoDB", "React"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent/10 border border-accent/20 text-accent-2 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-border pt-4 flex justify-between text-xs text-muted">
                  <span>Status</span>
                  <span className="text-accent-3">✦ Open to work</span>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-8 bg-surface-2 border border-border-2 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-accent-3" />
                <span className="text-xs text-white whitespace-nowrap">Production-grade apps</span>
              </div>

              {/* Floating badge bottom-left */}
              <div className="absolute -bottom-4 -left-8 bg-surface-2 border border-border-2 rounded-xl px-3 py-2 shadow-lg">
                <span className="text-xs text-white">🇪🇬 Mansoura · Remote OK</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
