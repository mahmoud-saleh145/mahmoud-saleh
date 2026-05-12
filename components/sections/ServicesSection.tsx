"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding bg-bg-2"
      aria-labelledby="services-heading"
    >
      <div className="container-wide">
        <AnimateIn className="mb-14">
          <SectionLabel>What I Do</SectionLabel>
          <SectionTitle id="services-heading">
            Services I{" "}
            <em className="not-italic text-accent">Offer</em>
          </SectionTitle>
        </AnimateIn>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative bg-surface border border-border rounded-2xl p-7 h-full overflow-hidden hover:border-border-2 transition-colors duration-300"
              >
                {/* Large muted number */}
                <span
                  className="absolute top-4 right-5 font-syne font-extrabold text-5xl leading-none text-white/[0.04] select-none"
                  aria-hidden
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div className="w-13 h-13 w-[52px] h-[52px] rounded-[14px] bg-surface-2 border border-border flex items-center justify-center text-2xl mb-6">
                  {service.emoji}
                </div>

                <h3 className="font-syne font-bold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-2 border border-border text-muted text-xs px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
