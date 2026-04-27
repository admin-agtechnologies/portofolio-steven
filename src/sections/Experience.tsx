"use client";

import { useEffect, useState } from 'react';
import { en } from '@/dictionaries/en';
import { experienceData } from '@/data';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Calendar, MapPin } from 'lucide-react';

interface SectionProps {
  dictionary: typeof en;
}

const companyColors: Record<string, { dot: string; badge: string; ring: string }> = {
  'icorp-frontend': {
    dot: 'bg-cyan-500',
    badge: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/25',
    ring: 'ring-cyan-500/20',
  },
  alanya: {
    dot: 'bg-blue-500',
    badge: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/25',
    ring: 'ring-blue-500/20',
  },
  decatechs: {
    dot: 'bg-indigo-500',
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/25',
    ring: 'ring-indigo-500/20',
  },
};

const Experience = ({ dictionary }: SectionProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <section id="experience" className="py-24 bg-white dark:bg-dark-background">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-blue-100 dark:bg-blue-500/15 rounded-xl">
            <BriefcaseBusiness className="text-blue-600 dark:text-blue-400" size={24} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-0.5">02 /</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {dictionary.sectionTitles.experience}
            </h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent opacity-30 hidden md:block" />

          <div className="space-y-10">
            {experienceData.map((exp, index) => {
              const expText = dictionary.experience[exp.id as keyof typeof dictionary.experience];
              const colors = companyColors[exp.id] || companyColors['decatechs'];

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-0 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-3 top-6 w-5 h-5 rounded-full ${colors.dot} ring-4 ring-white dark:ring-dark-background hidden md:block shadow-lg`} />

                  <div className={`bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-7 border border-slate-100 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ring-2 ${colors.ring} ring-transparent hover:ring-opacity-100`}>

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-1">
                          {expText.title}
                        </h3>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold border ${colors.badge}`}>
                          {expText.company}
                        </span>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                        <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                          <MapPin size={11} />
                          Yaoundé
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                      {expText.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
