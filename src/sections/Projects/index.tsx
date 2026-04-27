"use client";

import { useState, useEffect } from 'react';
import { projectsData } from "@/data";
import { en } from '@/dictionaries/en';
import { useLanguage } from "@/hooks/useLanguage";
import { Project, ProjectCategory } from '@/types';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

export type FilterType = ProjectCategory | 'all' | 'featured';

const Projects = ({ dictionary }: { dictionary: typeof en }) => {
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>('featured');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (!mounted) return null;

  const allActiveProjects = projectsData.filter(p => p.isActive);
  const availableCategories = new Set(allActiveProjects.map(p => p.category));
  const filterOptions: FilterType[] = ['featured', 'all'];

  if (availableCategories.has('professional') || availableCategories.has('freelance')) {
    filterOptions.push('professional');
  }
  if (availableCategories.has('personal')) filterOptions.push('personal');
  if (availableCategories.has('academic')) filterOptions.push('academic');

  const filteredProjects = allActiveProjects
    .sort((a, b) => b.period.localeCompare(a.period))
    .filter(p => {
      if (activeFilter === 'featured') return p.isFeatured;
      if (activeFilter === 'all') return true;
      if (activeFilter === 'professional') return p.category === 'professional' || p.category === 'freelance';
      return p.category === activeFilter;
    })
    .sort((a, b) => {
      if (activeFilter === 'all') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
      }
      return 0;
    });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-background relative">
      <div className="container mx-auto px-6">

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 bg-blue-100 dark:bg-blue-500/15 rounded-xl">
            <Code2 className="text-blue-600 dark:text-blue-400" size={24} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-0.5">03 /</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {dictionary.sectionTitles.projects}
            </h2>
          </div>
        </motion.div>

        <div className="mb-12">
          <FilterBar 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
            locale={locale}
            filterOptions={filterOptions}
          />
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[450px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={project.id}
              >
                <ProjectCard 
                  project={project}
                  detail={dictionary.projects[project.id as keyof typeof dictionary.projects]}
                  onOpen={() => setSelectedProject(project)}
                  locale={locale}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500 dark:text-slate-400 italic">
            {locale === 'fr' ? 'Aucun projet à afficher dans cette catégorie.' : 'No projects to display in this category.'}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject}
            detail={dictionary.projects[selectedProject.id as keyof typeof dictionary.projects]}
            onClose={() => setSelectedProject(null)}
            locale={locale}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
