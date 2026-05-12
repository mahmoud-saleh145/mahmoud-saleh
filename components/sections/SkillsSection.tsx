"use client";

import { motion } from "framer-motion";
import { skillCategories, marqueeSkills } from "@/lib/data/skills";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { cn } from "@/lib/utils/cn";

const categoryAccents = [
  {
    iconBg: "bg-accent/15",
    border: "hover:border-accent/30",
    bar: "from-accent to-accent-2",
  },
  {
    iconBg: "bg-accent-3/15",
    border: "hover:border-accent-3/30",
    bar: "from-accent-3 to-cyan-400",
  },
  {
    iconBg: "bg-amber-500/15",
    border: "hover:border-amber-500/30",
    bar: "from-amber-500 to-orange-500",
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Radial bg */}
      <div
        className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(91,110,245,0.06),transparent_70%)] pointer-events-none"
        aria-hidden
      />

      <div className="container-wide relative">
        {/* Header */}
        <AnimateIn className="max-w-md mb-14">
          <SectionLabel>What I Use</SectionLabel>
          <SectionTitle id="skills-heading">
            My <em className="not-italic text-accent">tech</em>
            <br />
            toolkit
          </SectionTitle>
        </AnimateIn>

        {/* Cards */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {skillCategories.map((cat, i) => (
            <StaggerItem key={cat.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                  "group relative bg-surface border border-border rounded-2xl p-7 h-full overflow-hidden transition-colors duration-300",
                  categoryAccents[i].border
                )}
              >
                {/* Bottom bar */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    categoryAccents[i].bar
                  )}
                />

                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl mb-5",
                    categoryAccents[i].iconBg
                  )}
                  aria-hidden
                >
                  {cat.emoji}
                </div>

                <h3 className="font-syne font-bold text-lg mb-1">{cat.title}</h3>
                <p className="text-xs text-muted mb-5">{cat.subtitle}</p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-surface-2 border border-border text-muted text-xs px-3 py-1.5 rounded-lg hover:text-white hover:border-border-2 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Marquee */}
        <AnimateIn>
          <div
            className="overflow-hidden border-y border-border py-4"
            aria-hidden
          >
            <div className="flex gap-10 animate-marquee whitespace-nowrap">
              {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 text-muted text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-accent opacity-70" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
