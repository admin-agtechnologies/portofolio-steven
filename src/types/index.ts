// src/types/index.ts

// ==================================
//          Types Enumérés
// ==================================

/**
 * Définit les catégories possibles pour un projet.
 * - professional: Expérience en entreprise (stage, emploi).
 * - personal: Projet personnel développé de manière indépendante.
 * - academic: Projet réalisé dans le cadre de la formation académique.
 * - freelance: Mission réalisée pour un client en tant que freelance.
 */
export type ProjectCategory = "professional" | "personal" | "academic" | "freelance";


// ==================================
//        Entités Principales
// ==================================

/**
 * Représente une compétence technique ou une méthode.
 * Le nom est une chaîne de caractères universelle (ex: "Laravel") et ne sera pas traduit.
 */
export interface Skill {
  name: string;
  icon?: string; // Optionnel: Identifiant pour une icône (ex: de Devicons).
}

/**
 * Représente une réalisation ou un projet.
 * Le contenu textuel (titre, descriptions) est géré via i18n en utilisant l'ID.
 */
export interface Project {
  id: string; // Clé de liaison unique pour les dictionnaires de traduction.
  category: ProjectCategory;
  period: string;
  
  mainImageUrl: string;     // Image principale pour la carte du projet.
  galleryImageUrls?: string[]; // Optionnel: Galerie d'images pour la vue détaillée.

  technologies: string[];
  repoUrl?: string;      // Optionnel: URL vers le dépôt GitHub.
  liveUrl?: string;      // Optionnel: URL vers la version en ligne.
  isFeatured: boolean;  // Indique si le projet doit être mis en avant dans la section Projets.
  isActive: boolean;    // Indique si le projet est autorisé pour l'affichage sur le site (utile pour les projets en cours de développement ou confidentiels).
}

/**
 * Détail complet d'un projet, utilisé pour la page de détail.
 * Tous les champs sont optionnels car certains projets peuvent ne pas avoir toutes les sections.
 */
export interface ProjectDetail {
  title?: string;
  shortDescription?: string;
  problem?: string;
  role?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  challenges?: string;
  results?: string;
  perspectives?: string;
}

/**
 * Représente une expérience de leadership ou d'engagement communautaire.
 */
export interface Leadership {
  id: 'club-gi';
  startDate: string; // ex: "2024"
  endDate: string; // ex: "2025"
}

/**
 * Représente une étape de la formation académique.
 */
export interface Education {
  id: string; // ex: "engineering-degree"
  startDate: string; // ex: "2021"
  endDate: string | "current"; // ex: "2026" ou "current" pour en cours
}

/**
 * Représente une certification obtenue.
 */
export interface Certification {
  id: string; // ex: "java-epfl".
  imageUrl: string; // Chemin vers une capture d'écran du certificat.
  pdfUrl?: string; // Optionnel: Lien vers le PDF téléchargeable.
}

/**
 * Représente un service offert.
 */
export interface Service {
  id: string; // Clé de liaison pour les traductions (nom, description).
  icon: string; // Nom d'une icône pour représenter le service.
}

/**
 * Représente une expérience professionnelle.
 */
export interface Experience {
  id: string; // 'icorp' ou 'cenadi'
  period: string;
}

// ==================================
//   Types pour la Structure Globale des Données
// ==================================

/**
 * Structure pour organiser les compétences par catégories.
 * La clé de l'objet est le nom de la catégorie (ex: "Back-End"),
 * qui sera lui-même une clé de traduction dans les dictionnaires.
 */
export type SkillsData = {
  [categoryKey: string]: Skill[];
};

