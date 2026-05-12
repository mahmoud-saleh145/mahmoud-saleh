"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data/site";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-bg">
      <div className="container-wide section-padding py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-accent font-medium">{personalInfo.name}</span>
            . Built with Next.js & ❤️ from Mansoura, Egypt.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </Link>
            <Link
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href={personalInfo.socials.email}
              className="text-muted hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </Link>
            <div className="w-px h-4 bg-border-2 mx-1" />
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
