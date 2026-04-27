// src/sections/Projects/index.tsx
"use client";

import { useState, useEffect } from 'react';
import { projectsData } from "@/data";
import { en } from '@/dictionaries/en';
import { useLanguage } from "@/hooks/useLanguage";
import { Project, ProjectCategory } from '@/types';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

// Définition du type de filtre pour l'orchestrateur
export type FilterType = ProjectCategory | 'all' | 'featured';

const Projects = ({ dictionary }: { dictionary: typeof en }) => {
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  // Par défaut, on affiche les projets "Top" (isFeatured)
  const [activeFilter, setActiveFilter] = useState<FilterType>('featured');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setMounted(true);
    // Gestion de la fermeture de la modale via la touche Échap
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (!mounted) return null;

  // --- LOGIQUE DE DONNÉES ---

  // 1. On ne travaille que sur les projets marqués comme actifs
  const allActiveProjects = projectsData.filter(p => p.isActive);

  // 2. Détermination dynamique des filtres à afficher (Éviter les filtres vides)
  const availableCategories = new Set(allActiveProjects.map(p => p.category));
  const filterOptions: FilterType[] = ['featured', 'all'];

  // Fusion stratégique : Si "professional" OU "freelance" existent, on affiche "professional"
  if (availableCategories.has('professional') || availableCategories.has('freelance')) {
    filterOptions.push('professional');
  }
  if (availableCategories.has('personal')) filterOptions.push('personal');
  if (availableCategories.has('academic')) filterOptions.push('academic');

  // 3. Filtrage et Tri
  const filteredProjects = allActiveProjects
    // Tri primaire : Par période (Récence : 2025 avant 2024)
    .sort((a, b) => b.period.localeCompare(a.period))
    // Application du filtre sélectionné
    .filter(p => {
      if (activeFilter === 'featured') return p.isFeatured;
      if (activeFilter === 'all') return true;
      // Fusion visuelle : le filtre 'professional' englobe les catégories 'professional' et 'freelance'
      if (activeFilter === 'professional') return p.category === 'professional' || p.category === 'freelance';
      return p.category === activeFilter;
    })
    // Tri secondaire : Si filtre "Tous", on fait remonter les projets phares en premier
    .sort((a, b) => {
      if (activeFilter === 'all') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
      }
      return 0;
    });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-background transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Titre de section */}
        <h2 className="text-3xl font-bold mb-12 text-center text-light-text dark:text-dark-text tracking-tight">
          {dictionary.sectionTitles.projects}
        </h2>

        {/* Barre de filtres dynamique */}
        <FilterBar 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
          locale={locale}
          filterOptions={filterOptions}
        />

        {/* Grille des projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[450px]">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              // Liaison i18n via l'ID du projet
              detail={dictionary.projects[project.id as keyof typeof dictionary.projects]}
              onOpen={() => setSelectedProject(project)}
              locale={locale}
            />
          ))}
        </div>

        {/* Message si aucun projet (cas rare grâce au filtrage dynamique des boutons) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400 italic">
            {locale === 'fr' ? 'Aucun projet à afficher dans cette catégorie.' : 'No projects to display in this category.'}
          </div>
        )}
      </div>

      {/* Modale Technique (Fiche projet) */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          detail={dictionary.projects[selectedProject.id as keyof typeof dictionary.projects]}
          onClose={() => setSelectedProject(null)}
          locale={locale}
        />
      )}
    </section>
  );
};

export default Projects;