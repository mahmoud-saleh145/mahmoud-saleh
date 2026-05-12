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
    gradient: "from-accent-3/10 via-cyan-500/5 to-transparent",
    emoji: "⚙️",
    highlights: [
      "Dual auth: session-based for guests, JWT for authenticated users",
      "Role-based access control (RBAC) separating user & admin permissions",
      "RESTful APIs for products, cart, wishlist & orders",
    ],
  },
  {
    id: "react-ecommerce",
    number: "03",
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
    gradient: "from-orange-500/10 via-amber-500/5 to-transparent",
    emoji: "🛍️",
    highlights: [],
  },
  {
    id: "yummy",
    number: "04",
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
    gradient: "from-pink-500/10 via-purple-500/5 to-transparent",
    emoji: "🍔",
    highlights: [],
  },
  {
    id: "daniels-portfolio",
    number: "05",
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
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
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
