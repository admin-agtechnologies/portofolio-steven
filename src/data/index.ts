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
  { name: "MariaDB" },
];

const toolsAndMethodsSkills = [
  { name: "Git / GitHub" },
  { name: "Docker" },
  { name: "Postman" },
  { name: "Figma" },
  { name: "WebRTC / Socket.IO" },
  { name: "REST API" },
  { name: "JWT" },
  { name: "Agile/Scrum" },
];

const aiDataSkills = [
  { name: "TensorFlow / Keras" },
  { name: "Flask" },
  { name: "Pandas" },
  { name: "Scikit-learn" },
  { name: "Matplotlib" },
];

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
    id: "greenscan-ml",
    category: "professional",
    period: "2025",
    mainImageUrl: "/images/projects/greenscan.png",
    technologies: ["TensorFlow", "Keras", "Flask", "Python", "Pandas", "VGG16"],
    repoUrl: "https://github.com/MBIAMY",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "alanya-app",
    category: "professional",
    period: "2025",
    mainImageUrl: "/images/projects/alanya-app.png",
    technologies: ["Node.js", "Express", "Flutter", "WebRTC", "Socket.IO", "MariaDB"],
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
    isFeatured: false,
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
  { id: "alanya",        period: "Juil. 2025 – Sept. 2025" },
  { id: "greenscan",     period: "Avr. 2025 – Mai 2025" },
  { id: "ztf-frontend",  period: "Juin 2024 – Sep. 2024" },
];  