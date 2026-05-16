"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/lib/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";

const socialLinks = [
  {
    icon: Mail,
    label: personalInfo.email,
    href: personalInfo.socials.email,
    display: personalInfo.email,
  },
  {
    icon: Github,
    label: "GitHub",
    href: personalInfo.socials.github,
    display: "github.com/mahmoud-saleh145",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: personalInfo.socials.linkedin,
    display: "mahmoud-saleh-6a7189264",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    href: `tel:${personalInfo.phone}`,
    display: personalInfo.phone,
  },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formState;
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoUrl;
  };

  const inputClass =
    "w-full bg-bg border border-border-2 rounded-xl px-4 py-3 text-white text-sm font-dm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200";

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Radial glow — percentage width so it never exceeds viewport */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[radial-gradient(circle,rgba(14,205,176,0.07),transparent_70%)] pointer-events-none"
        aria-hidden
      />

      <div className="container-narrow relative">
        {/* Header */}
        <AnimateIn className="text-center mb-14">
          <SectionLabel centered>Get In Touch</SectionLabel>
          <SectionTitle id="contact-heading" centered className="mb-4">
            Let&apos;s build something{" "}
            <em className="not-italic text-accent">great</em> together
          </SectionTitle>
          <p className="text-muted text-lg max-w-md mx-auto">
            Open to junior developer roles, internships, and freelance work. Let&apos;s talk!
          </p>
        </AnimateIn>

        {/* Form */}
        <AnimateIn delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="bg-surface border border-border rounded-3xl p-8 md:p-10 mb-8"
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs text-muted tracking-widest uppercase">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs text-muted tracking-widest uppercase">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formState.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="subject" className="text-xs text-muted tracking-widest uppercase">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Job opportunity / Project collaboration..."
                value={formState.subject}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="message" className="text-xs text-muted tracking-widest uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about the project or opportunity..."
                rows={5}
                value={formState.message}
                onChange={handleChange}
                className={`${inputClass} resize-y min-h-[130px]`}
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 bg-accent text-white font-medium py-3.5 rounded-full text-sm glow-accent transition-opacity hover:opacity-90"
            >
              <Send size={16} />
              Send Message
            </motion.button>
          </form>
        </AnimateIn>

        {/* Social links */}
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {socialLinks.map((link) => (
            <StaggerItem key={link.label}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 bg-surface border border-border rounded-xl px-4 py-3 hover:border-accent/40 hover:text-white transition-all duration-200 group"
              >
                <link.icon
                  size={16}
                  className="text-accent flex-shrink-0"
                />
                <span className="text-sm text-muted group-hover:text-white transition-colors truncate">
                  {link.display}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}