// src/data/projects/portfolio-v1.ts
import { Project } from "@/types";

export const portfolioV1: Project = {
  id: "portfolio-v1",
  category: "personal",
  period: "2024",
  mainImageUrl: "/images/projects/portfolio-v1.gif", // À adapter
  technologies: ["Next.js", "TypeScript", "React"],
  repoUrl: "https://github.com/NOMO-Gabriel/my-porfolio/tree/cv-septembre-2024", // Lien direct vers la branche
  isFeatured: false,
  isActive: false,
};