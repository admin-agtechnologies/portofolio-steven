// src/data/projects/portfolio-v2.ts
import { Project } from "@/types";

export const portfolioV2: Project = {
  id: "portfolio-v2",
  category: "personal",
  period: "2025",
  mainImageUrl: "/images/projects/portfolio-v2.png", // À adapter
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  repoUrl: "https://github.com/NOMO-Gabriel/my-porfolio/tree/cv-novembre-2025", // Lien direct vers la branche
  isFeatured: false,
  isActive: false,
};