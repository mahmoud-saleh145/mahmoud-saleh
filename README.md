# Mahmoud Saleh — Portfolio

A premium, production-grade portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Google Fonts (Syne + DM Sans) | Typography |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

```bash
# Build for production
npm run build
npm start
```

---

## Project Structure

```
mahmoud-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata, fonts
│   └── page.tsx            # Home page — assembles all sections
│
├── components/
│   ├── animations/
│   │   ├── AnimateIn.tsx   # Scroll-triggered fade-up wrapper
│   │   └── StaggerGroup.tsx # Staggered children animations
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with active section highlight
│   │   └── Footer.tsx      # Minimal footer
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx   # ← Renders from lib/data/projects.ts
│   │   ├── ExperienceSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── ProjectCard.tsx       # ← Reusable per-project card
│       ├── SectionLabel.tsx
│       └── SectionTitle.tsx
│
├── lib/
│   ├── animations/
│   │   └── variants.ts     # Framer Motion variant presets
│   ├── data/
│   │   ├── projects.ts     # ← ADD NEW PROJECTS HERE
│   │   ├── skills.ts       # Skills / tech categories
│   │   └── site.ts         # Personal info, services, education
│   ├── hooks/
│   │   ├── useInView.ts
│   │   └── useScrollProgress.ts
│   └── utils/
│       └── cn.ts           # tailwind-merge utility
│
├── styles/
│   └── globals.css         # Tailwind base + custom utilities
│
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## ➕ How to Add a New Project

Open `lib/data/projects.ts` and copy-paste the template at the bottom of the file:

```ts
{
  id: "my-new-project",        // unique slug
  number: "06",                // display number
  title: "My New Project",
  shortDescription: "One-liner shown on cards.",
  description: "Full paragraph for the expanded card.",
  tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  githubUrl: "https://github.com/mahmoud-saleh145/my-new-project",
  liveUrl: "https://my-new-project.vercel.app",
  featured: false,             // set true to make it the hero card
  status: "live",              // "live" | "api" | "wip" | "archived"
  period: "Jan 2026",
  gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
  emoji: "🚀",
  highlights: [
    "Key feature one",
    "Key feature two",
  ],
},
```

**That's it.** The UI picks it up automatically — no component changes needed.

---

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys on every push.

### Netlify / GitHub Pages

```bash
npm run build
# Deploy the .next folder
```

---

## Customization

| What to change | Where |
|----------------|-------|
| Personal info, bio, email | `lib/data/site.ts` → `personalInfo` |
| Skills & tech categories | `lib/data/skills.ts` |
| Services section | `lib/data/site.ts` → `services` |
| Education / timeline | `lib/data/site.ts` → `education` |
| Color palette | `tailwind.config.ts` + `styles/globals.css` |
| Animation presets | `lib/animations/variants.ts` |
| SEO metadata | `lib/data/site.ts` → `siteConfig` |
