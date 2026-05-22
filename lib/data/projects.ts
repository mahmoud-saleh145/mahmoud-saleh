// ============================================================
//  PROJECTS DATA
//  To add a new project: copy one block below and fill it in.
//  The UI renders everything automatically — no component edits needed.
// ============================================================

export interface Project {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  status: "live" | "api" | "archived" | "wip";
  period?: string;
  gradient: string; // Tailwind gradient classes for the preview card
  emoji: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "nasiej",
    number: "01",
    title: "Nasiej — Full Stack E-Commerce",
    shortDescription:
      "Production-grade e-commerce platform handling live customer orders.",
    description:
      "Developed from scratch using Next.js (TypeScript) and MongoDB. A real-world business solution with dual-stage authentication, an Admin Dashboard, persistent cart, wishlist, and dynamic search/filtering.",
    tech: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "JWT", "Mongoose", "Tailwind CSS"],
    githubUrl: "https://github.com/mahmoud-saleh145/Nasiej",
    liveUrl: "https://nasiej.vercel.app",
    featured: true,
    status: "live",
    period: "Sept 2025 – Nov 2025",
    gradient: "from-accent/15 via-accent-2/10 to-transparent",
    emoji: "🛒",
    highlights: [
      "Dual-stage auth: Session IDs for guests + JWT/NextAuth for registered users",
      "Admin Dashboard with real-time product, inventory & order management",
      "Optimized MongoDB schemas with Mongoose for users, products & order histories",
      "Persistent shopping cart, wishlist & dynamic search/filter system",
    ],
  },
  {
    id: "backend-ecommerce",
    number: "02",
    title: "Backend E-Commerce API",
    shortDescription:
      "Scalable REST API with dual auth, RBAC, and full e-commerce feature set.",
    description:
      "Scalable backend system built with Node.js and Express.js. Implements a dual authentication flow (session-based + JWT), RBAC for user/admin separation, and complete CRUD for products, cart, wishlist & orders.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST APIs", "RBAC"],
    githubUrl: "https://github.com/mahmoud-saleh145/Backend-E-Commerce",
    featured: false,
    status: "api",
    period: "2025",
    gradient: "from-accent-2/12 via-accent/6 to-transparent",
    emoji: "⚙️",
    highlights: [
      "Dual auth: session-based for guests, JWT for authenticated users",
      "Role-based access control (RBAC) separating user & admin permissions",
      "RESTful APIs for products, cart, wishlist & orders",
    ],
  },
  {
    id: "spacehub",
    number: "03",

    title: "SpaceHub",
    shortDescription: "Full-stack workspace management dashboard with dual booking system and real-time session tracking.",
    description: "SpaceHub is a production-grade admin dashboard built with Next.js 15 App Router and MongoDB, designed to manage coworking spaces end-to-end. It features a dual booking system: private room reservations with conflict detection and auto-pricing, plus a live open-workspace session tracker with real-time elapsed timers and automatic discount logic. The dashboard includes full CRUD for clients and workspaces, a combined revenue analytics page with stacked bar and area charts, dark/light mode, skeleton loading states, and Framer Motion page transitions. Auth is handled via JWT cookies with middleware-level route protection.",
    tech: [
      "Next.js 15", "TypeScript", "MongoDB", "Mongoose",
      "Tailwind CSS", "Zustand", "React Hook Form",
      "Zod", "Recharts", "Framer Motion", "JWT", "Sonner"
    ],
    githubUrl: "https://github.com/mahmoud-saleh145/Spacehub",
    liveUrl: "https://spacehub-beta.vercel.app/login",
    featured: true,
    status: "live",
    period: "2025",
    gradient: "from-violet-600 to-indigo-500",
    emoji: "🏢",
    highlights: [
      "Dual booking engine: time-slot reservations + live open-workspace sessions",
      "Real-time session timer with automatic 20% discount after 4 hours",
      "Double-booking conflict detection on all reservation writes",
      "Combined revenue analytics with Recharts area + stacked bar charts",
      "JWT auth with HTTP-only cookies and Next.js middleware route guards",
      "CSV export for daily attendance logs",
      "Fully responsive with collapsible sidebar, mobile drawer, and skeleton states"
    ]
  },
  {
    id: "react-ecommerce",
    number: "04",
    title: "E-Commerce Platform",
    shortDescription:
      "React-based storefront with authentication, cart & payment workflow.",
    description:
      "React-based e-commerce application featuring user authentication, a functional shopping cart, and a complete payment workflow. Clean component architecture and responsive design.",
    tech: ["React", "JavaScript", "CSS3", "HTML5"],
    githubUrl: "https://github.com/mahmoud-saleh145/e-commerce",
    liveUrl: "https://e-commerce-omega-sand.vercel.app/",
    featured: false,
    status: "live",
    period: "2024",
    gradient: "from-accent-3/10 via-accent-3/5 to-transparent",
    emoji: "🛍️",
    highlights: [],
  },
  {
    id: "mansoura-college",
    number: "05",

    title: "Mansoura College",
    shortDescription: "Modern multi-page school website for one of Egypt's leading international campuses.",
    description: "A fully responsive React SPA for Mansoura College Educational Campus, featuring 14 routes, multi-system school support, interactive quizzes, news feed, gallery, admissions, and student life pages. Built with React Router v6, smooth animations, mobile-friendly navigation, and dynamic UI interactions.",
    tech: [
      "React 18", "React Router v6", "Vite",
      "CSS Modules", "JavaScript (ES2022)"
    ],
    githubUrl: "https://github.com/mahmoud-saleh145/school",
    liveUrl: "https://school-two-ivory.vercel.app/",
    featured: false,
    status: "live",
    period: "2025",
    gradient: "from-amber-500 to-yellow-400",
    emoji: "🎓",
    highlights: [
      "14-route SPA covering all school stages, admissions, and campus life",
      "Interactive quiz engine with 4 subjects, progress dots, and score screen",
      "CSS-only animated ticker marquee and accordion tip sections",
      "Mobile-first responsive design with sticky navbar and slide-in drawer",
      "Dynamic page titles and scroll restoration on every route change",
      "Embedded Google Maps integration on the contact page"
    ]
  },
  {
    id: "yummy",
    number: "06",
    title: "Global Food Directory",
    shortDescription:
      "API-driven food explorer with advanced search and dynamic filters.",
    description:
      "Responsive web application consuming a public Food API. Features advanced search and dynamic filtering by category, area, and ingredients. Showcases clean API integration and responsive UI patterns.",
    tech: ["JavaScript", "HTML5", "CSS3", "REST API"],
    githubUrl: "https://github.com/mahmoud-saleh145/yummy",
    liveUrl: "https://mahmoud-saleh145.github.io/yummy/",
    featured: false,
    status: "live",
    period: "2024",
    gradient: "from-accent/10 via-accent-2/8 to-transparent",
    emoji: "🍔",
    highlights: [],
  },
  {
    id: "daniels-portfolio",
    number: "07",
    title: "Daniels Portfolio",
    shortDescription:
      "Bootstrap portfolio with animated sections and filterable projects.",
    description:
      "Bootstrap-based responsive portfolio featuring animated sections, filterable project showcase, and testimonials. One of the earlier projects demonstrating solid HTML/CSS/JS fundamentals.",
    tech: ["Bootstrap", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/mahmoud-saleh145/daniels",
    liveUrl: "https://mahmoud-saleh145.github.io/daniels",
    featured: false,
    status: "live",
    period: "2024",
    gradient: "from-accent-2/10 via-accent/5 to-transparent",
    emoji: "💼",
    highlights: [],
  },

  // ─── ADD NEW PROJECTS BELOW ───────────────────────────────────────────────
  // {
  //   id: "my-new-project",
  //   number: "06",
  //   title: "My New Project",
  //   shortDescription: "One-liner description.",
  //   description: "Full paragraph description.",
  //   tech: ["Next.js", "TypeScript"],
  //   githubUrl: "https://github.com/mahmoud-saleh145/...",
  //   liveUrl: "https://...",
  //   featured: false,
  //   status: "live",
  //   period: "2026",
  //   gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
  //   emoji: "🚀",
  //   highlights: [],
  // },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
export const otherProjects = projects.filter((p) => !p.featured);
