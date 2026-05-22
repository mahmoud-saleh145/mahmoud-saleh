"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { fadeLeft, fadeRight } from "@/lib/animations/variants";
import { projects } from "@/lib/data/projects";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="container-wide">
        <AnimateIn className="mb-14">
          <SectionLabel>My Journey</SectionLabel>
          <SectionTitle id="experience-heading">
            Education &{" "}
            <em className="not-italic text-accent">Training</em>
          </SectionTitle>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative"
            aria-label="Education timeline"
          >
            {/* Vertical line */}
            <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border-2 to-transparent" aria-hidden />

            <div className="flex flex-col gap-10">
              {education.map((item, i) => (
                <div key={i} className="relative pl-8">
                  {/* Dot */}
                  <div
                    className="absolute left-[-5px] top-2.5 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(91,110,245,0.6)]"
                    aria-hidden
                  />
                  <p className="text-xs text-accent tracking-widest uppercase mb-1 font-medium">
                    {item.year}
                  </p>
                  <h3 className="font-syne font-bold text-lg text-white mb-0.5">
                    {item.role}
                  </h3>
                  <p className="text-sm text-muted mb-3">{item.where}</p>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards + stats */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <StaggerGroup className="flex flex-col gap-4">
              {education.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-4 items-start bg-surface border border-border rounded-2xl p-5 hover:border-border-2 transition-colors">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${item.type === "uni" ? "bg-accent/15" : "bg-accent-3/15"}`}
                      aria-hidden
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-syne font-bold text-sm text-white">
                        {item.role}
                      </p>
                      <p className="text-xs text-muted mt-0.5 mb-1.5">
                        {item.where}
                      </p>
                      <p className="text-xs text-accent">{item.year}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}

              {/* Stats card */}
              <StaggerItem>
                <div className="bg-gradient-to-br from-accent/10 via-accent-2/5 to-transparent border border-accent/20 rounded-2xl p-6 text-center grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-syne font-extrabold text-4xl text-accent leading-none">
                      {projects.length.toString() + "+"}
                    </p>
                    <p className="text-xs text-muted mt-1.5">
                      Production projects
                    </p>
                  </div>
                  <div>
                    <p className="font-syne font-extrabold text-4xl text-accent-2 leading-none">
                      2+
                    </p>
                    <p className="text-xs text-muted mt-1.5">
                      Years of learning
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
