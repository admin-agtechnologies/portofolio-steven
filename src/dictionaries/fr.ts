// src/dictionaries/fr.ts — MBIAMY NGAMENI STEVEN LOIC

export const fr = {

  common: {
    topbar: "Version 2.0 — Mis à jour en 2026",
  },

  contact: {
    invitation: "Je suis actuellement à la recherche de nouvelles opportunités. Mon inbox est ouvert — que ce soit pour un projet, une question ou juste échanger, je vous répondrai avec plaisir.",
    email: "mbiamysteven@gmail.com",
    button: "Dites Bonjour !",
  },

  about: {
    paragraph1: "En fin de cycle ingénieur à l'ENSPY, je me spécialise dans le développement d'interfaces web modernes et performantes. Mon parcours en mathématiques m'a donné la rigueur analytique que j'applique chaque jour dans la conception de composants, l'architecture frontend et la coordination d'équipe.",
    paragraph2: "À travers des projets professionnels comme la plateforme IMA chez ICORP, j'ai appris à travailler en synergie avec des équipes backend pour livrer des applications complètes. Mon approche : des interfaces claires, un code maintenable et une coordination sans friction entre les membres de l'équipe.",
  },

  experience: {
    'icorp-frontend': {
      title: "Lead Developer Frontend — Projet IMA",
      company: "ICORP (Temps partiel)",
      description: "Développement complet de l'interface d'un ERP de gestion académique en React.js / Next.js pour 1 200+ utilisateurs actifs. Intégration des API REST backend (Laravel), gestion des états applicatifs, authentification et conception de tableaux de bord interactifs.",
    },
    'alanya': {
      title: "Stagiaire Développeur Fullstack",
      company: "ALANYA",
      description: "Développement d'une application web complète en contexte professionnel. Conception d'API REST sécurisées avec Spring Boot, connexion à une base de données relationnelle, et développement d'interfaces dynamiques avec React / Next.js.",
    },
    'decatechs': {
      title: "Stagiaire Développeur Web",
      company: "Decatechs",
      description: "Intégration d'interfaces frontend pour un ERP de gestion scolaire. Collaboration avec les équipes backend et design, respect des contraintes fonctionnelles et des standards de qualité du code.",
    },
  },

  metadata: {
    title: "Steven Mbiamy | Développeur Fullstack",
    description: "Portfolio de Steven Mbiamy, développeur fullstack spécialisé en React.js, Next.js et Spring Boot.",
  },

  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
  },

  hero: {
    title: "MBIAMY NGAMENI STEVEN LOIC",
    subtitle_1: "Développeur Fullstack | React.js · Next.js · Spring Boot",
    tagline: "Je conçois des interfaces web modernes et des API robustes, du composant React à l'endpoint Spring Boot. Mon point fort : assurer la continuité entre frontend et backend pour livrer des applications fiables.",
    download_cv: "Télécharger le CV",
    project_link: "Voir mes projets",
  },

  sectionTitles: {
    about: "À Propos de Moi",
    skills: "Compétences Techniques",
    projects: "Projets",
    leadership: "Leadership & Engagement",
    education: "Formation",
    certifications: "Certifications",
    contact: "Me Contacter",
    experience: "Expérience Professionnelle",
  },

  skills: {
    backend: "Back-End",
    frontend: "Front-End",
    ai_data: "IA & Data",
    databases: "Bases de Données",
    tools_methods: "Outils & Méthodes",
  },

  leadership: {
    'club-gi': {
      role: "Membre — Club Génie Informatique",
      organization: "ENSPY",
      descriptionPoints: [
        "Participation aux projets collectifs et ateliers techniques organisés par le club.",
        "Contribution aux hackathons et sessions de montée en compétence sur les technologies web.",
      ],
    },
  },

  education: {
    'engineering-degree': {
      degree: "Diplôme d'Ingénieur en Génie Informatique",
      institution: "École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)",
      details: "Spécialisation en Génie Logiciel.",
      status: "En cours — 5e année",
    },
    'bachelor-maths': {
      degree: "Licence en Mathématiques",
      institution: "Université de Yaoundé I",
      details: "",
      status: "Obtenu en 2023",
    },
  },

  certifications: {
    'java-epfl': {
      title: "Introduction à la programmation orientée objet (en Java)",
      institution: "École Polytechnique Fédérale de Lausanne",
    },
    'web-dev-ucdavis': {
      title: "Introduction to Web Development",
      institution: "University of California, Davis",
    },
    'api-rest-oc': {
      title: "Adoptez les API REST pour vos projets web",
      institution: "OpenClassrooms",
    },
  },

  projects: {
    'ima-frontend': {
      title: "Interface ERP — Plateforme IMA",
      shortDescription: "Lead Frontend de l'interface d'un ERP académique pour 1 200+ utilisateurs.",
      problem: "Absence d'interface unifiée pour les opérations administratives et financières d'un centre de préparation aux concours.",
      role: "Lead Developer Frontend (Temps partiel, ICORP) — coordination directe avec le lead backend.",
      solution: "Interface React.js / Next.js complète : inscriptions, paiements, tableaux de bord par rôle, gestion des accès.",
      features: [
        "Authentification et gestion des sessions",
        "Tableaux de bord interactifs par rôle (admin, étudiant)",
        "Consommation des API REST Laravel",
        "Composants réutilisables et navigation fluide",
      ],
      architecture: "Next.js (App Router) + TypeScript. Consommation API REST Laravel. Gestion d'état côté client.",
      challenges: "Synchronisation de l'état client avec les données backend en temps réel pour les inscriptions et paiements.",
      results: "Interface livrée et opérationnelle, utilisée quotidiennement par plus de 1 200 utilisateurs actifs.",
      perspectives: "Ajout de notifications temps réel et de rapports exportables.",
    },
    'fullstack-app': {
      title: "Application Fullstack Web",
      shortDescription: "Application full-stack complète : API REST Spring Boot + interface Next.js.",
      problem: "Maîtriser l'intégration end-to-end entre un backend Java robuste et un frontend moderne.",
      role: "Concepteur et développeur unique (projet personnel).",
      solution: "Plateforme web avec backend Spring Boot exposant des API REST sécurisées, consommées par une interface Next.js.",
      features: [
        "API REST documentée (Spring Boot / Java)",
        "Interface dynamique React / Next.js",
        "Base de données PostgreSQL",
        "Authentification JWT",
      ],
      architecture: "Spring Boot (backend) + Next.js (frontend) + PostgreSQL. Architecture découplée via API REST.",
      challenges: "Gestion des erreurs cross-layer et cohérence des données entre frontend et backend.",
      results: "Projet fonctionnel démontrant la maîtrise du cycle fullstack complet.",
      perspectives: "Ajout de tests automatisés et déploiement Docker.",
    },
    'data-dashboard': {
      title: "Dashboard de Visualisation de Données",
      shortDescription: "Interface de visualisation avec graphiques interactifs et gestion d'état complexe.",
      problem: "Présenter des données structurées de manière lisible et interactive.",
      solution: "Dashboard React.js avec graphiques dynamiques et consommation d'API REST.",
      features: [
        "Graphiques interactifs (Chart.js)",
        "Gestion d'état complexe",
        "Filtres dynamiques",
        "Consommation API REST",
      ],
    },
  },
};