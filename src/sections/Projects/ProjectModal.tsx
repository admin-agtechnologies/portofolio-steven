import Link from 'next/link';
import { Project, ProjectDetail } from '@/types';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface ModalProps {
  project: Project;
  detail: ProjectDetail;
  onClose: () => void;
  locale: string;
}

const ProjectModal = ({ project, detail, onClose, locale }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col border border-slate-200 dark:border-slate-800 overflow-hidden"
      >
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 md:px-10 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-md mb-3">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              {detail?.title}
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-2.5 bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-full transition-colors border border-slate-200 dark:border-slate-700 shadow-sm hover:border-slate-300 dark:hover:border-slate-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-12">
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <DetailSection title={locale === 'fr' ? 'Le Problème' : 'The Problem'} content={detail?.problem} />
              <DetailSection title={locale === 'fr' ? 'Mon Rôle' : 'My Role'} content={detail?.role} />
              {detail?.architecture && (
                <div>
                  <h4 className="text-sm font-bold uppercase text-blue-600 dark:text-blue-400 mb-3 tracking-wider">Architecture</h4>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="text-sm font-mono text-slate-600 dark:text-slate-300 leading-relaxed">
                      {detail.architecture}
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-8">
              <DetailSection title={locale === 'fr' ? 'La Solution' : 'The Solution'} content={detail?.solution} />
              {detail?.features && (
                <div>
                  <h4 className="text-sm font-bold uppercase text-blue-600 dark:text-blue-400 mb-3 tracking-wider">
                    {locale === 'fr' ? 'Fonctionnalités' : 'Features'}
                  </h4>
                  <ul className="space-y-3 mt-4">
                    {detail.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Additional Info Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-100 dark:border-slate-800">
              <InfoBlock title={locale === 'fr' ? 'Résultats' : 'Results'} content={detail?.results} />
              <InfoBlock title="Challenges" content={detail?.challenges} />
              <InfoBlock title={locale === 'fr' ? 'Perspectives' : 'Perspectives'} content={detail?.perspectives} />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-8 justify-center">
            {project.repoUrl && (
              <Link 
                href={project.repoUrl} 
                target="_blank" 
                className="flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 border border-transparent dark:border-slate-700 text-white rounded-xl font-bold transition-all shadow-lg hover:-translate-y-0.5"
              >
                <FaGithub size={20} />
                Code Source
              </Link>
            )}
            {project.liveUrl && (
              <Link 
                href={project.liveUrl} 
                target="_blank" 
                className="flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <ExternalLink size={20} />
                {locale === 'fr' ? 'Consulter le site' : 'View Live Site'}
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const DetailSection = ({ title, content }: { title: string, content?: string }) => {
  if (!content) return null;
  return (
    <div>
      <h4 className="text-sm font-bold uppercase text-blue-600 dark:text-blue-400 mb-3 tracking-wider">{title}</h4>
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{content}</p>
    </div>
  );
};

const InfoBlock = ({ title, content }: { title: string, content?: string }) => (
  <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/50">
    <h4 className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-3 tracking-widest">{title}</h4>
    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{content || "—"}</p>
  </div>
);

export default ProjectModal;
