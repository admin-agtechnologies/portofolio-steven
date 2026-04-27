// src/data/index.ts — MBIAMY NGAMENI STEVEN LOIC
import { SkillsData, Project, Certification, Education, Leadership, Experience } from "@/types";

// ============================================
//              COMPÉTENCES
// ============================================

const backendSkills = [
  { name: "Spring Boot (Java)" },
  { name: "Django (Python)" },
  { name: "NestJS" },
  { name: "Node.js" },
];

const frontendSkills = [
  { name: "React.js" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Flutter" },
];

const databaseSkills = [
  { name: "PostgreSQL" },
  { name: "MySQL" },
];

const toolsAndMethodsSkills = [
  { name: "Git / GitHub" },
  { name: "Docker" },
  { name: "Postman" },
  { name: "Figma" },
  { name: "API REST" },
  { name: "UML" },
  { name: "Agile/Scrum" },
  { name: "Jira" },
];

// Pas de spécialité IA pour Steven — tableau vide pour éviter l'erreur .map()
const aiDataSkills: { name: string }[] = [];

export const skillsData: SkillsData = {
  backend: backendSkills,
  frontend: frontendSkills,
  databases: databaseSkills,
  tools_methods: toolsAndMethodsSkills,
  ai_data: aiDataSkills,
};

// ============================================
//               PROJETS
// ============================================

export const projectsData: Project[] = [
  {
    id: "ima-frontend",
    category: "professional",
    period: "2025",
    mainImageUrl: "/images/projects/ima.png",
    technologies: ["React.js", "Next.js", "TypeScript", "REST API", "Laravel"],
    repoUrl: undefined,
    isFeatured: true,
    isActive: true,
  },
  {
    id: "fullstack-app",
    category: "personal",
    period: "2025",
    mainImageUrl: "/images/projects/fullstack-app.png",
    technologies: ["Spring Boot", "Java", "React.js", "Next.js", "PostgreSQL"],
    repoUrl: "https://github.com/MBIAMY",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "data-dashboard",
    category: "personal",
    period: "2024",
    mainImageUrl: "/images/projects/dashboard.png",
    technologies: ["React.js", "JavaScript", "Chart.js", "REST API"],
    repoUrl: "https://github.com/MBIAMY",
    isFeatured: false,
    isActive: true,
  },
];

// ============================================
//            CERTIFICATIONS
// ============================================

export const certificationsData: Certification[] = [
  {
    id: "java-epfl",
    imageUrl: "/images/certifs/java-epfl.png",
    pdfUrl: "/certifs/java-programming-certification.pdf",
  },
  {
    id: "web-dev-ucdavis",
    imageUrl: "/images/certifs/web-dev-ucdavis.png",
    pdfUrl: "/certifs/web-development-certification.pdf",
  },
  {
    id: "api-rest-oc",
    imageUrl: "/images/certifs/api-rest-oc.png",
    pdfUrl: "/certifs/api-rest-certification.pdf",
  },
];

// ============================================
//              FORMATION
// ============================================

export const educationData: Education[] = [
  {
    id: "engineering-degree",
    startDate: "2021",
    endDate: "current",
  },
  {
    id: "bachelor-maths",
    startDate: "2020",
    endDate: "2023",
  },
];

// ============================================
//             LEADERSHIP
// ============================================

export const leadershipData: Leadership[] = [
  {
    id: "club-gi",
    startDate: "2021",
    endDate: "2025",
  },
];

// ============================================
//             EXPÉRIENCES
// ============================================

export const experienceData: Experience[] = [
  { id: "icorp-frontend", period: "Jan. 2025 – Déc. 2025" },
  { id: "alanya",         period: "Juil. 2025 – Sept. 2025" },
  { id: "decatechs",      period: "Juil. 2024 – Sept. 2024" },
];  