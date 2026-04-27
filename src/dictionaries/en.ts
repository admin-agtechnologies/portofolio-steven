// src/dictionaries/en.ts — MBIAMY NGAMENI STEVEN LOIC

export const en = {

  common: {
    topbar: "Version 2.0 — Updated 2026",
  },

  contact: {
    invitation: "I'm currently looking for new opportunities. My inbox is always open — whether it's about a project, a question, or just saying hi, I'll get back to you.",
    email: "mbiamysteven@gmail.com",
    button: "Say Hello!",
  },

  about: {
    paragraph1: "Completing my engineering degree at ENSPY, I specialize in building modern and performant web interfaces. My background in mathematics gave me the analytical rigor I apply every day in component design, frontend architecture, and team coordination.",
    paragraph2: "Through professional projects like the IMA platform at ICORP, I learned to work in sync with backend teams to deliver complete applications. My approach: clean interfaces, maintainable code, and seamless coordination between team members.",
  },

  experience: {
    'icorp-frontend': {
      title: "Lead Frontend Developer — IMA Project",
      company: "ICORP (Part-time)",
      description: "Full development of the academic ERP interface using React.js / Next.js for 1,200+ active users. REST API integration (Laravel), state management, authentication and interactive dashboards design.",
    },
    'alanya': {
      title: "Fullstack Developer Intern",
      company: "ALANYA",
      description: "Development of a complete web application in a real professional context. Secure REST API design with Spring Boot, database connection, and dynamic interface development with React / Next.js.",
    },
    'decatechs': {
      title: "Web Developer Intern",
      company: "Decatechs",
      description: "Frontend interface integration for a school management ERP. Collaboration with backend and design teams, compliance with functional constraints and code quality standards.",
    },
  },

  metadata: {
    title: "Steven Mbiamy | Fullstack Developer",
    description: "Portfolio of Steven Mbiamy, fullstack developer specialized in React.js, Next.js and Spring Boot.",
  },

  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },

  hero: {
    title: "MBIAMY NGAMENI STEVEN LOIC",
    subtitle_1: "Fullstack Developer | React.js · Next.js · Spring Boot",
    tagline: "I build modern web interfaces and robust APIs, from React components to Spring Boot endpoints. My strength: seamless continuity between frontend and backend to deliver reliable applications.",
    download_cv: "Download CV",
    project_link: "View my projects",
  },

  sectionTitles: {
    about: "About Me",
    skills: "Technical Skills",
    projects: "Projects",
    leadership: "Leadership & Engagement",
    education: "Education",
    certifications: "Certifications",
    contact: "Get in Touch",
    experience: "Professional Experience",
  },

  skills: {
    backend: "Back-End",
    frontend: "Front-End",
    ai_data: "AI & Data",
    databases: "Databases",
    tools_methods: "Tools & Methods",
  },

  leadership: {
    'club-gi': {
      role: "Member — Computer Engineering Club",
      organization: "ENSPY",
      descriptionPoints: [
        "Participation in collective projects and technical workshops organized by the club.",
        "Contribution to hackathons and skill-building sessions focused on web technologies.",
      ],
    },
  },

  education: {
    'engineering-degree': {
      degree: "Engineering Degree in Computer Science",
      institution: "National Advanced School of Engineering of Yaoundé (ENSPY)",
      details: "Specializing in Software Engineering.",
      status: "In progress — 5th year",
    },
    'bachelor-maths': {
      degree: "Bachelor's Degree in Mathematics",
      institution: "University of Yaoundé I",
      details: "",
      status: "Graduated in 2023",
    },
  },

  certifications: {
    'java-epfl': {
      title: "Introduction to Object-Oriented Programming (in Java)",
      institution: "École Polytechnique Fédérale de Lausanne",
    },
    'web-dev-ucdavis': {
      title: "Introduction to Web Development",
      institution: "University of California, Davis",
    },
    'api-rest-oc': {
      title: "REST APIs for Web Projects",
      institution: "OpenClassrooms",
    },
  },

  projects: {
    'ima-frontend': {
      title: "ERP Interface — IMA Platform",
      shortDescription: "Lead Frontend of the academic ERP interface for 1,200+ users.",
      problem: "No unified interface for administrative and financial operations at a competitive exam prep center.",
      role: "Lead Frontend Developer (Part-time, ICORP) — direct coordination with the backend lead.",
      solution: "Complete React.js / Next.js interface: registrations, payments, role-based dashboards, access management.",
      features: [
        "Authentication and session management",
        "Role-based interactive dashboards (admin, student)",
        "Laravel REST API consumption",
        "Reusable components and smooth navigation",
      ],
      architecture: "Next.js (App Router) + TypeScript. Laravel REST API consumption. Client-side state management.",
      challenges: "Synchronizing client state with backend data in real time for registrations and payments.",
      results: "Interface delivered and operational, used daily by over 1,200 active users.",
      perspectives: "Adding real-time notifications and exportable reports.",
    },
    'fullstack-app': {
      title: "Fullstack Web Application",
      shortDescription: "Complete full-stack app: Spring Boot REST API + Next.js interface.",
      problem: "Master end-to-end integration between a robust Java backend and a modern frontend.",
      role: "Sole designer and developer (personal project).",
      solution: "Web platform with a Spring Boot backend exposing secured REST APIs, consumed by a Next.js interface.",
      features: [
        "Documented REST API (Spring Boot / Java)",
        "Dynamic React / Next.js interface",
        "PostgreSQL database",
        "JWT Authentication",
      ],
      architecture: "Spring Boot (backend) + Next.js (frontend) + PostgreSQL. Decoupled via REST API.",
      challenges: "Cross-layer error handling and data consistency between frontend and backend.",
      results: "Working project demonstrating mastery of the complete fullstack cycle.",
      perspectives: "Adding automated tests and Docker deployment.",
    },
    'data-dashboard': {
      title: "Data Visualization Dashboard",
      shortDescription: "Visualization interface with interactive charts and complex state management.",
      problem: "Presenting structured data in a readable and interactive way.",
      solution: "React.js dashboard with dynamic charts and REST API consumption.",
      features: [
        "Interactive charts (Chart.js)",
        "Complex state management",
        "Dynamic filters",
        "REST API consumption",
      ],
    },
  },
};