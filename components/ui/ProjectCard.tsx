"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { type Project } from "@/lib/data/projects";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils/cn";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  className?: string;
}

const statusConfig = {
  live: { label: "LIVE", variant: "success" as const },
  api: { label: "API", variant: "accent" as const },
  archived: { label: "ARCHIVED", variant: "surface" as const },
  wip: { label: "WIP", variant: "surface" as const },
};

export function ProjectCard({ project, featured, className }: ProjectCardProps) {
  const status = statusConfig[project.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, borderColor: "rgba(91,110,245,0.4)" }}
      className={cn(
        "group relative bg-surface border border-border rounded-2xl p-6 flex flex-col overflow-hidden cursor-pointer transition-colors duration-300 h-full",
        className
      )}
      onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      {/* Hover radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,205,176,0.07),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Card header */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs text-muted tracking-widest font-medium">
          {project.number}
        </span>
        <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub: ${project.title}`}
            className="w-8 h-8 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-muted hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
          >
            <Github size={14} />
          </Link>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo: ${project.title}`}
              className="w-8 h-8 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-muted hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
            >
              <ExternalLink size={14} />
            </Link>
          )}
        </div>
      </div>

      {/* Preview */}
      <div
        className={cn(
          "relative w-full rounded-xl mb-5 overflow-hidden flex items-center justify-center border border-border/50 bg-gradient-to-br",
          project.gradient,
          featured ? "h-52" : "h-36"
        )}
        aria-hidden
      >
        <span className="text-5xl opacity-50">{project.emoji}</span>
        <div className="absolute top-2.5 left-2.5">
          <Badge variant={status.variant}>{status.label}</Badge>
        </div>
        {project.featured && (
          <div className="absolute top-2.5 right-2.5">
            <Badge variant="featured">⭐ Featured</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <h3
        className={cn(
          "font-syne font-bold tracking-tight mb-2 text-white",
          featured ? "text-xl" : "text-base"
        )}
      >
        {project.title}
      </h3>

      <p className="text-sm text-muted leading-relaxed flex-1 min-h-[112px] max-h-[112px] overflow-y-auto pr-1">
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="bg-accent/8 border border-accent/15 text-accent-2 text-[11px] px-2.5 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <span className="text-xs text-muted">{project.period}</span>
        <motion.div
          className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center text-white"
          whileHover={{ x: 2, y: -2 }}
          transition={{ duration: 0.2 }}
          aria-hidden
        >
          <ArrowUpRight size={14} />
        </motion.div>
      </div>
    </motion.article>
  );
}
