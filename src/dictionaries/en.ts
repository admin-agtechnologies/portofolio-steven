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
    paragraph1: "Completing my engineering degree at ENSPY, I specialize in modern fullstack development and Machine Learning. My mathematics background gives me the analytical rigor I apply every day — from REST API architecture to training CNN models with TensorFlow.",
    paragraph2: "I have contributed to diverse real-world projects: frontend development for Bibliothèque ZTF, REST API and P2P video at ALANYA, and Deep Learning image classification at GreenScan (98% accuracy). My approach: clean code, intuitive interfaces, and ownership of the full application stack.",
  },

  experience: {
    'alanya': {
      title: "Fullstack Developer Intern",
      company: "ALANYA",
      description: "Architected a secure RESTful API (Node.js/Express) with JWT authentication connected to MariaDB. Set up Peer-to-Peer (P2P) video calls via WebRTC, orchestrated by a WebSocket signaling server (Socket.IO). Built a unified iOS/Android interface with Flutter.",
    },
    'greenscan': {
      title: "Machine Learning Developer",
      company: "GreenScan",
      description: "Designed and trained a CNN model (TensorFlow/Keras) for plant disease image classification, achieving 98% accuracy. Applied Transfer Learning (VGG16) and built a Flask REST API for real-time inference. Data analysis with Pandas, Scikit-learn, and Matplotlib.",
    },
    'ztf-frontend': {
      title: "Frontend Developer",
      company: "Bibliothèque ZTF",
      description: "Integrated backend REST APIs for a library management web application. Handled application state management, authentication and navigation. Designed reusable components and interactive dashboards.",
    },
  },

  metadata: {
    title: "Steven Mbiamy | Fullstack Developer & Machine Learning",
    description: "Portfolio of Steven Mbiamy, fullstack developer specialized in React.js, Next.js, Node.js and Machine Learning (TensorFlow/Keras).",
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
    subtitle_1: "Fullstack Developer & ML | React.js · Node.js · TensorFlow",
    tagline: "I build complete web applications — React/Next.js interfaces, robust REST APIs — and Machine Learning models with TensorFlow. My strength: owning the full stack, from UI components to CNN models.",
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
    frontend: "Front-End",
    backend: "Back-End",
    ai_data: "AI & Machine Learning",
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
      institution: "École Polytechnique Fédérale de Lausanne (EPFL)",
    },
  },

  projects: {
    'greenscan-ml': {
      title: "GreenScan — Plant Disease Classification",
      shortDescription: "CNN model (TensorFlow/Keras) detecting plant diseases from photos with 98% accuracy.",
      problem: "Plant diseases cause major agricultural losses. There was no automated, accessible tool to diagnose them from a simple photo.",
      role: "Machine Learning Developer — model design, training and REST API exposure (GreenScan).",
      solution: "CNN model trained on the PlantVillage dataset with Transfer Learning (VGG16). Flask REST API for real-time inference via image upload.",
      features: [
        "CNN model (TensorFlow / Keras) — 98% accuracy",
        "Transfer Learning from VGG16",
        "Flask REST API for real-time inference",
        "Data analysis and preprocessing (Pandas, Scikit-learn)",
        "Performance visualization (confusion matrices, Matplotlib)",
      ],
      architecture: "TensorFlow/Keras (CNN model) + Flask (REST API) + Python scientific stack (Pandas, Scikit-learn, Matplotlib).",
      challenges: "Optimizing model convergence and managing class imbalance in the dataset.",
      results: "98% accuracy on the test set. Operational API for real-time inference.",
      perspectives: "Cloud deployment and integration into a Flutter mobile app.",
    },
    'alanya-app': {
      title: "P2P Video App — ALANYA",
      shortDescription: "Fullstack app with JWT RESTful API, WebRTC P2P video calls and Flutter mobile interface.",
      problem: "Need for a unified communication platform: messaging, P2P video calls, compatible with web and mobile (iOS/Android).",
      role: "Fullstack Developer Intern — API architecture, WebRTC integration and Flutter interface development.",
      solution: "Secure Node.js/Express RESTful API with JWT, P2P video calls via WebRTC orchestrated by Socket.IO, and a cross-platform Flutter interface.",
      features: [
        "Node.js/Express RESTful API with JWT authentication",
        "Peer-to-Peer video calls (WebRTC + Socket.IO)",
        "Unified iOS/Android interface (Flutter)",
        "MariaDB database",
        "Native dependency management and cross-platform compatibility",
      ],
      architecture: "Node.js/Express (API) + WebSocket/Socket.IO (signaling) + Flutter (mobile) + MariaDB.",
      challenges: "Orchestrating WebRTC signaling and managing native Flutter dependencies on iOS and Android.",
      results: "Functional app with stable P2P video on iOS and Android.",
      perspectives: "Adding real-time messaging system and push notifications.",
    },
    'fullstack-app': {
      title: "Fullstack Web Application",
      shortDescription: "Full-stack app: Spring Boot REST API + React/Next.js interface + PostgreSQL database.",
      problem: "Master end-to-end integration between a robust Java backend and a modern frontend.",
      role: "Sole designer and developer (personal project).",
      solution: "Web platform with a Spring Boot backend exposing secured REST APIs, consumed by a Next.js interface.",
      features: [
        "REST API (Spring Boot / Java)",
        "Dynamic React / Next.js interface",
        "PostgreSQL database",
        "JWT Authentication",
      ],
      architecture: "Spring Boot (backend) + Next.js (frontend) + PostgreSQL. Decoupled via REST API.",
      challenges: "Cross-layer error handling and data consistency between frontend and backend.",
      results: "Working project demonstrating mastery of the complete fullstack cycle.",
    },
    'data-dashboard': {
      title: "Data Visualization Dashboard",
      shortDescription: "Visualization interface with interactive charts and REST API consumption.",
      problem: "Presenting structured data in a readable and interactive way.",
      solution: "React.js dashboard with dynamic charts (Chart.js) and REST API consumption.",
      features: [
        "Interactive charts (Chart.js)",
        "Complex state management",
        "Dynamic filters",
        "REST API consumption",
      ],
    },
  },
};