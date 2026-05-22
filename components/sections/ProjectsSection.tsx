"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { projects, featuredProject, otherProjects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { personalInfo } from "@/lib/data/site";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding bg-bg-2"
      aria-labelledby="projects-heading"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <AnimateIn>
            <SectionLabel>What I&apos;ve Built</SectionLabel>
            <SectionTitle id="projects-heading">
              Featured{" "}
              <em className="not-italic text-accent">Projects</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <Link
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors pb-1 self-end"
            >
              <Github size={15} />
              View all on GitHub →
            </Link>
          </AnimateIn>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Featured — spans 7 cols */}
          <div className="md:col-span-7 h-full">
            <ProjectCard project={featuredProject} featured />
          </div>

          {/* Second project — spans 5 cols */}
          {otherProjects[0] && (
            <div className="md:col-span-5 h-full">
              <ProjectCard project={otherProjects[0]} />
            </div>
          )}

          {/* Remaining projects — 3 equal cols */}
          {otherProjects.slice(1).map((project) => (
            <div
              key={project.id}
              className="md:col-span-4 h-full"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Total count note */}
        <AnimateIn delay={0.2}>
          <p className="text-center text-xs text-muted mt-10">
            Showing {projects.length} projects ·{" "}
            <Link
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              See all on GitHub
            </Link>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
