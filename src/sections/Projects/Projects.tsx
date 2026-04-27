// src/sections/Projects.tsx
"use client";

import { useState, useEffect } from 'react';
import SectionTitle from "@/components/ui/SectionTitle";
import { projectsData } from "@/data";
import { en } from '@/dictionaries/en';
import { useLanguage } from "@/hooks/useLanguage";
import Image from 'next/image';
import Link from 'next/link';
import { Project, ProjectCategory, ProjectDetail } from '@/types';

const Projects = ({ dictionary }: { dictionary: typeof en }) => {
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setMounted(true);
    // Fermer la modale avec la touche Echap
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (!mounted) return null;

  // 1. Filtrage : Uniquement les projets ACTIFS
  const activeProjects = projectsData.filter(p => p.isActive);

  // 2. Filtrage par catégorie
  const filteredProjects = activeFilter === 'all'
    ? activeProjects
    : activeProjects.filter(p => p.category === activeFilter);

  const categories: (ProjectCategory | 'all')[] = ['all', 'professional', 'personal', 'academic', 'freelance'];
  
  const categoryTranslations: Record<ProjectCategory | 'all', string> = locale === 'fr' 
    ? { all: 'Tous', professional: 'Professionnels', personal: 'Personnels', academic: 'Académiques', freelance: 'Freelance' }
    : { all: 'All', professional: 'Professional', personal: 'Personal', academic: 'Academic', freelance: 'Freelance' };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-light-text dark:text-dark-text tracking-tight">
          {dictionary.sectionTitles.projects}
        </h2>

        {/* Filtres */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeFilter === cat 
                ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                : 'bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {categoryTranslations[cat]}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const detail = dictionary.projects[project.id as keyof typeof dictionary.projects] as ProjectDetail;
            
            return (
              <div 
                key={project.id} 
                className={`group relative bg-light-secondary dark:bg-dark-secondary rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  project.isFeatured ? 'border-accent/30 shadow-xl' : 'border-transparent shadow-sm'
                }`}
              >
                {/* Badge Featured */}
                {project.isFeatured && (
                  <div className="absolute top-4 left-4 z-10 bg-accent text-white text-[10px] font-black uppercase px-2 py-1 rounded shadow-lg">
                    Top Project
                  </div>
                )}

                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                   <Image 
                      src={project.mainImageUrl} 
                      alt={detail?.title || "Project"} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform"
                      >
                        {locale === 'fr' ? 'Détails Techniques' : 'Technical Details'}
                      </button>
                   </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-light-text dark:text-dark-text">{detail?.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">{detail?.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[10px] font-mono bg-gray-100 dark:bg-white/5 px-2 py-1 rounded text-gray-600 dark:text-gray-400">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && <span className="text-[10px] font-mono text-gray-400">+{project.technologies.length - 3}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- LA MODALE --- */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          detail={dictionary.projects[selectedProject.id as keyof typeof dictionary.projects] as ProjectDetail}
          onClose={() => setSelectedProject(null)}
          locale={locale}
        />
      )}
    </section>
  );
};

// Composant Interne : Fiche Technique du Projet
const ProjectModal = ({ project, detail, onClose, locale }: { project: Project, detail: ProjectDetail, onClose: () => void, locale: string }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-dark-background/95 backdrop-blur-md" onClick={onClose}></div>
      
      {/* Contenu de la Modale */}
      <div className="relative w-full max-w-4xl max-h-full bg-white dark:bg-dark-secondary rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Header Modale */}
        <div className="flex justify-between items-center p-6 border-b border-light-border dark:border-dark-border">
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-widest">{project.category}</span>
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">{detail.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Corps de la Modale (Scrollable) */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-10">
          
          {/* Grille d'ingénierie */}
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Colonne Gauche : Le "Pourquoi" et "Comment" */}
            <div className="space-y-8">
              {detail.problem && (
                <div>
                  <h4 className="text-xs font-black uppercase text-accent mb-2 tracking-tighter italic underline decoration-accent/30 underline-offset-4">Problème à résoudre</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{detail.problem}</p>
                </div>
              )}
              {detail.role && (
                <div>
                  <h4 className="text-xs font-black uppercase text-accent mb-2 tracking-tighter italic underline decoration-accent/30 underline-offset-4">Mon Rôle</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{detail.role}</p>
                </div>
              )}
              {detail.architecture && (
                <div>
                  <h4 className="text-xs font-black uppercase text-accent mb-2 tracking-tighter italic underline decoration-accent/30 underline-offset-4">Architecture Technique</h4>
                  <p className="text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-black/20 p-4 rounded-lg border border-light-border dark:border-dark-border">
                    {detail.architecture}
                  </p>
                </div>
              )}
            </div>

            {/* Colonne Droite : Solution et Features */}
            <div className="space-y-8">
              {detail.solution && (
                <div>
                  <h4 className="text-xs font-black uppercase text-accent mb-2 tracking-tighter italic underline decoration-accent/30 underline-offset-4">Solution apportée</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{detail.solution}</p>
                </div>
              )}
              {detail.features && (
                <div>
                  <h4 className="text-xs font-black uppercase text-accent mb-2 tracking-tighter italic underline decoration-accent/30 underline-offset-4">Fonctionnalités clés</h4>
                  <ul className="grid grid-cols-1 gap-2 mt-3">
                    {detail.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-accent mt-1">▹</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Section Inférieure : Impact et Futur */}
          <div className="grid md:grid-cols-3 gap-6 pt-10 border-t border-light-border dark:border-dark-border text-center md:text-left">
              <div>
                <h4 className="text-[10px] font-black uppercase text-gray-400 mb-2">Résultats / Impact</h4>
                <p className="text-sm font-bold text-light-text dark:text-dark-text">{detail.results || "—"}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase text-gray-400 mb-2">Challenges Techniques</h4>
                <p className="text-sm text-gray-500">{detail.challenges || "—"}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase text-gray-400 mb-2">Perspectives</h4>
                <p className="text-sm text-gray-500 italic">{detail.perspectives || "—"}</p>
              </div>
          </div>

          {/* Liens */}
          <div className="flex flex-wrap gap-4 pt-6 justify-center">
            {project.repoUrl && (
              <Link href={project.repoUrl} target="_blank" className="px-6 py-2 bg-gray-800 text-white rounded-full text-sm font-bold hover:bg-black transition-colors">
                GitHub Repo
              </Link>
            )}
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" className="px-6 py-2 bg-accent text-white rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-accent/20">
                {locale === 'fr' ? 'Consulter le site' : 'Visit Live Site'}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;  