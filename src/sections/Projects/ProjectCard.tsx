import { Project, ProjectDetail } from '@/types';
import { ExternalLink, Star } from 'lucide-react';

interface CardProps {
  project: Project;
  detail: ProjectDetail;
  onOpen: () => void;
  locale: string;
}

const categoryBadge: Record<string, string> = {
  professional: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300',
  personal: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300',
  academic: 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300',
  freelance: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
};

const categoryLabel: Record<string, { fr: string; en: string }> = {
  professional: { fr: 'Pro', en: 'Pro' },
  personal: { fr: 'Personnel', en: 'Personal' },
  academic: { fr: 'Académique', en: 'Academic' },
  freelance: { fr: 'Freelance', en: 'Freelance' },
};

const ProjectCard = ({ project, detail, onOpen, locale }: CardProps) => (
  <div
    onClick={onOpen}
    className={`group cursor-pointer relative bg-white dark:bg-slate-800/70 rounded-2xl overflow-hidden border flex flex-col h-full transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl ${
      project.isFeatured
        ? 'border-cyan-200 dark:border-cyan-500/30 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20'
        : 'border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-none hover:border-cyan-200 dark:hover:border-cyan-500/30'
    }`}
  >
    {/* Featured Badge */}
    {project.isFeatured && (
      <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full shadow-lg">
        <Star size={10} fill="currentColor" />
        Featured
      </div>
    )}

    {/* Image */}
    <div className="relative h-48 w-full overflow-hidden shrink-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
      <img
        src={project.mainImageUrl}
        alt={detail?.title || 'Project'}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-600"
        onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
      />
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
        <div className="flex items-center gap-2 bg-white/95 dark:bg-slate-800/95 text-slate-900 dark:text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
          <ExternalLink size={14} />
          {locale === 'fr' ? 'Voir les détails' : 'View Details'}
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      {/* Category + Year */}
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${categoryBadge[project.category]}`}>
          {categoryLabel[project.category]?.[locale === 'fr' ? 'fr' : 'en'] ?? project.category}
        </span>
        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">{project.period}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
        {detail?.title}
      </h3>

      {/* Short description */}
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2 flex-grow">
        {detail?.shortDescription}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-slate-100 dark:border-slate-700/50">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-[10px] font-bold bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-700/60 text-slate-400 dark:text-slate-500 px-2.5 py-1 rounded-md">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
