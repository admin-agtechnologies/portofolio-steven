// src/sections/Projects/ProjectCard.tsx
import Image from 'next/image';
import { Project, ProjectDetail } from '@/types';

interface CardProps {
  project: Project;
  detail: ProjectDetail;
  onOpen: () => void;
  locale: string;
}

const ProjectCard = ({ project, detail, onOpen, locale }: CardProps) => (
  <div className={`group relative bg-light-secondary dark:bg-dark-secondary rounded-xl overflow-hidden border-2 transition-all duration-500 ${
      project.isFeatured ? 'border-accent/40 shadow-xl scale-[1.01]' : 'border-transparent shadow-sm'
    }`}>
    
    {project.isFeatured && (
      <div className="absolute top-4 left-4 z-10 bg-accent text-white text-[10px] font-black uppercase px-2 py-1 rounded">
        Top Project
      </div>
    )}

    <div className="relative h-52 w-full overflow-hidden">
       <Image 
       src={project.mainImageUrl} alt={detail?.title || "Project"} 
       fill 
       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
       className="object-cover group-hover:scale-110 transition-transform duration-700" 
       />
       <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
          <p className="text-white text-xs mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {detail?.shortDescription}
          </p>
          <button onClick={onOpen} className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">
            {locale === 'fr' ? 'Détails Techniques' : 'Technical Details'}
          </button>
       </div>
    </div>

    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-light-text dark:text-dark-text leading-tight">{detail?.title}</h3>
        <span className="text-[10px] font-mono text-gray-400">{project.period}</span>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologies.slice(0, 3).map(tech => (
          <span key={tech} className="text-[9px] font-bold bg-gray-100 dark:bg-white/5 px-2 py-1 rounded text-gray-500 uppercase tracking-tighter">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;