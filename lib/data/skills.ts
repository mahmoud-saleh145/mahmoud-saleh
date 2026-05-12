// ============================================================
//  SKILLS DATA
//  Add or remove skills here. The UI renders automatically.
// ============================================================

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  accentClass: string; // Tailwind color classes
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Front-End",
    subtitle: "Building beautiful UIs",
    emoji: "🖥️",
    accentClass: "accent",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    id: "backend",
    title: "Back-End",
    subtitle: "Building robust APIs",
    emoji: "⚙️",
    accentClass: "accent-3",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Auth",
      "NextAuth",
      "Session Management",
    ],
  },
  {
    id: "database",
    title: "Database & Tools",
    subtitle: "Managing data efficiently",
    emoji: "🗄️",
    accentClass: "amber",
    skills: ["MongoDB", "Mongoose", "Git", "npm", "RBAC", "Auth & Authorization"],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.skills);

export const marqueeSkills = [
  "Next.js", "React.js", "TypeScript", "MongoDB", "Node.js",
  "Express.js", "Tailwind CSS", "JWT Auth", "RESTful APIs", "Git",
  "Mongoose", "NextAuth", "JavaScript", "HTML5", "CSS3",
];
