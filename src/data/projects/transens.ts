// src/data/projects/transens.ts
import { Project } from "@/types";

export const transens: Project = {
  id: "transens",
  category: "academic",
  period: "2025",
  mainImageUrl: "/images/projects/transens.png", // Assure-toi d'avoir une image ou un placeholder
  technologies: [
    "Spring Boot", 
    "React Native", 
    "Kafka", 
    "Redis", 
    "PostGIS", 
    "Next.js"
  ],
  isFeatured: true,  // Top 3
  isActive: false,    // Affiché sur le site
  repoUrl: undefined, // Probablement privé, à remplir si nécessaire
  liveUrl: undefined, // Démo locale/vidéo
};