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
    paragraph1: "En fin de cycle ingénieur à l'ENSPY, je me spécialise dans le développement fullstack moderne et le Machine Learning. Mon parcours en mathématiques m'a donné la rigueur analytique que j'applique au quotidien : de l'architecture d'APIs REST à l'entraînement de modèles CNN avec TensorFlow.",
    paragraph2: "J'ai contribué à des projets variés et concrets : développement frontend pour la Bibliothèque ZTF, architecture API REST et vidéo P2P chez ALANYA, et classification d'images par Deep Learning chez GreenScan (98 % de précision). Mon approche : du code propre, des interfaces intuitives et une maîtrise de toute la chaîne applicative.",
  },

  experience: {
    'alanya': {
      title: "Stagiaire Développeur Fullstack",
      company: "ALANYA",
      description: "Architecture d'une API RESTful (Node.js/Express) sécurisée par JWT, connectée à MariaDB. Mise en place d'appels vidéo Peer-to-Peer (P2P) avec WebRTC, orchestrés par un serveur de signalisation WebSocket (Socket.IO). Développement d'une interface unifiée iOS/Android avec Flutter.",
    },
    'greenscan': {
      title: "Développeur Machine Learning",
      company: "GreenScan",
      description: "Conception et entraînement d'un modèle CNN (TensorFlow/Keras) pour la classification de maladies végétales avec 98 % de précision. Transfer Learning (VGG16), API REST Flask pour l'inférence en temps réel, et analyse de données avec Pandas, Scikit-learn et Matplotlib.",
    },
    'ztf-frontend': {
      title: "Développeur Frontend",
      company: "Bibliothèque ZTF",
      description: "Intégration des API REST fournies par le backend pour une application web de gestion bibliothécaire. Gestion des états applicatifs, authentification et navigation. Conception de composants réutilisables et tableaux de bord interactifs.",
    },
  },

  metadata: {
    title: "Steven Mbiamy | Développeur Fullstack & Machine Learning",
    description: "Portfolio de Steven Mbiamy, développeur fullstack spécialisé en React.js, Next.js, Node.js et Machine Learning (TensorFlow/Keras).",
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
    subtitle_1: "Développeur Fullstack & ML | React.js · Node.js · TensorFlow",
    tagline: "Je conçois des applications web complètes — interfaces React/Next.js, APIs REST robustes — et des modèles de Machine Learning avec TensorFlow. Mon point fort : maîtriser toute la chaîne, du composant UI au modèle CNN.",
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
    frontend: "Front-End",
    backend: "Back-End",
    ai_data: "IA & Machine Learning",
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
      institution: "École Polytechnique Fédérale de Lausanne (EPFL)",
    },
  },

  projects: {
    'greenscan-ml': {
      title: "GreenScan — Classification de Maladies Végétales",
      shortDescription: "Modèle CNN (TensorFlow/Keras) pour détecter les maladies des plantes avec 98 % de précision.",
      problem: "Les maladies végétales causent des pertes agricoles importantes. Il manquait un outil automatisé, accessible et fiable pour les diagnostiquer à partir d'une simple photo.",
      role: "Développeur Machine Learning — conception, entraînement du modèle et exposition via API REST (GreenScan).",
      solution: "Modèle CNN entraîné sur le dataset PlantVillage avec Transfer Learning (VGG16). API Flask pour l'inférence en temps réel via upload d'image.",
      features: [
        "Modèle CNN (TensorFlow / Keras) — 98 % de précision",
        "Transfer Learning depuis VGG16",
        "API REST Flask pour l'inférence temps réel",
        "Analyse et prétraitement des données (Pandas, Scikit-learn)",
        "Visualisation des performances (matrices de confusion, Matplotlib)",
      ],
      architecture: "TensorFlow/Keras (modèle CNN) + Flask (API REST) + Python scientifique (Pandas, Scikit-learn, Matplotlib).",
      challenges: "Optimisation de la convergence du modèle et gestion du déséquilibre de classes dans le dataset.",
      results: "Précision de 98 % sur le jeu de test. API opérationnelle pour l'inférence en temps réel.",
      perspectives: "Déploiement cloud et intégration dans une application mobile Flutter.",
    },
    'alanya-app': {
      title: "Application de Vidéo P2P — ALANYA",
      shortDescription: "Application fullstack avec API RESTful JWT, vidéo P2P WebRTC et interface mobile Flutter.",
      problem: "Besoin d'une plateforme de communication unifiée : messagerie, appels vidéo P2P, compatible web et mobile (iOS/Android).",
      role: "Stagiaire Développeur Fullstack — architecture API, intégration WebRTC et développement de l'interface Flutter.",
      solution: "API RESTful Node.js/Express sécurisée par JWT, appels vidéo P2P via WebRTC orchestrés par Socket.IO, et interface Flutter multi-plateformes.",
      features: [
        "API RESTful Node.js/Express avec authentification JWT",
        "Appels vidéo Peer-to-Peer (WebRTC + Socket.IO)",
        "Interface iOS/Android unifiée (Flutter)",
        "Base de données MariaDB",
        "Gestion des dépendances natives et compatibilité cross-platform",
      ],
      architecture: "Node.js/Express (API) + WebSocket/Socket.IO (signalisation) + Flutter (mobile) + MariaDB.",
      challenges: "Orchestration de la signalisation WebRTC et compatibilité des dépendances natives Flutter sur iOS et Android.",
      results: "Application fonctionnelle avec vidéo P2P stable sur iOS et Android.",
      perspectives: "Ajout d'un système de messagerie temps réel et notifications push.",
    },
    'fullstack-app': {
      title: "Application Fullstack Web",
      shortDescription: "Application full-stack : API REST Spring Boot + interface React/Next.js + base de données PostgreSQL.",
      problem: "Maîtriser l'intégration end-to-end entre un backend Java robuste et un frontend moderne.",
      role: "Concepteur et développeur unique (projet personnel).",
      solution: "Plateforme web avec backend Spring Boot exposant des API REST sécurisées, consommées par une interface Next.js.",
      features: [
        "API REST (Spring Boot / Java)",
        "Interface dynamique React / Next.js",
        "Base de données PostgreSQL",
        "Authentification JWT",
      ],
      architecture: "Spring Boot (backend) + Next.js (frontend) + PostgreSQL. Architecture découplée via API REST.",
      challenges: "Gestion des erreurs cross-layer et cohérence des données entre frontend et backend.",
      results: "Projet fonctionnel démontrant la maîtrise du cycle fullstack complet.",
    },
    'data-dashboard': {
      title: "Dashboard de Visualisation de Données",
      shortDescription: "Interface de visualisation avec graphiques interactifs et consommation d'API REST.",
      problem: "Présenter des données structurées de manière lisible et interactive.",
      solution: "Dashboard React.js avec graphiques dynamiques (Chart.js) et consommation d'API REST.",
      features: [
        "Graphiques interactifs (Chart.js)",
        "Gestion d'état complexe",
        "Filtres dynamiques",
        "Consommation API REST",
      ],
    },
  },
};