// src/sections/Projects/ProjectModal.tsx
import Link from 'next/link';
import { Project, ProjectDetail } from '@/types';

interface ModalProps {
  project: Project;
  detail: ProjectDetail;
  onClose: () => void;
  locale: string;
}

const ProjectModal = ({ project, detail, onClose, locale }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-dark-background/95 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-dark-secondary rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-light-border dark:border-dark-border">
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-widest">{project.category}</span>
            <h3 className="text-2xl font-bold">{detail.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <DetailSection title="Problème" content={detail.problem} />
              <DetailSection title="Mon Rôle" content={detail.role} />
              {detail.architecture && (
                <div>
                  <h4 className="text-xs font-black uppercase text-accent mb-2">Architecture</h4>
                  <p className="text-sm font-mono text-gray-500 bg-gray-50 dark:bg-black/20 p-4 rounded-lg border border-light-border dark:border-dark-border">
                    {detail.architecture}
                  </p>
                </div>
              )}
            </div>
            <div className="space-y-6">
              <DetailSection title="Solution" content={detail.solution} />
              {detail.features && (
                <div>
                  <h4 className="text-xs font-black uppercase text-accent mb-2">Fonctionnalités</h4>
                  <ul className="space-y-2 mt-3 text-sm text-gray-600 dark:text-gray-400">
                    {detail.features.map((f, i) => <li key={i}><span className="text-accent mr-2">▹</span>{f}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Footer Infos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-light-border dark:border-dark-border">
              <InfoBlock title="Résultats" content={detail.results} />
              <InfoBlock title="Challenges" content={detail.challenges} />
              <InfoBlock title="Perspectives" content={detail.perspectives} />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-6 justify-center">
            {project.repoUrl && (
              <Link href={project.repoUrl} target="_blank" className="px-8 py-3 bg-gray-800 text-white rounded-lg font-bold hover:bg-black transition-colors">Code Source</Link>
            )}
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" className="px-8 py-3 bg-accent text-white rounded-lg font-bold hover:opacity-90 transition-opacity">Consulter le site</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Petits utilitaires pour le texte
const DetailSection = ({ title, content }: { title: string, content?: string }) => {
  if (!content) return null;
  return (
    <div>
      <h4 className="text-xs font-black uppercase text-accent mb-2 tracking-tighter">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{content}</p>
    </div>
  );
};

const InfoBlock = ({ title, content }: { title: string, content?: string }) => (
  <div>
    <h4 className="text-[10px] font-black uppercase text-gray-400 mb-2">{title}</h4>
    <p className="text-sm font-semibold">{content || "—"}</p>
  </div>
);

export default ProjectModal;