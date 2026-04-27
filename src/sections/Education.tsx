"use client";

import { useEffect, useState } from 'react';
import { educationData } from '@/data';
import { en } from '@/dictionaries/en';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, CheckCircle, Clock } from 'lucide-react';

const Education = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <section id="education" className="py-24 bg-white dark:bg-dark-background">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-indigo-100 dark:bg-indigo-500/15 rounded-xl">
            <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-0.5">06 /</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {dictionary.sectionTitles.education}
            </h2>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {educationData.map((edu, index) => {
            const eduText = dictionary.education[edu.id as keyof typeof dictionary.education];
            const isCurrent = edu.endDate === 'current';

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-7 border border-slate-100 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group"
              >
                {/* Decorative bg gradient */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                {/* Status badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${
                    isCurrent
                      ? 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/25'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/25'
                  }`}>
                    {isCurrent
                      ? <Clock size={12} />
                      : <CheckCircle size={12} />
                    }
                    {eduText.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    {edu.startDate} — {isCurrent ? '···' : edu.endDate}
                  </span>
                </div>

                {/* Degree */}
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 leading-snug">
                  {eduText.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400 font-medium text-sm mb-3">
                  <MapPin size={14} className="text-indigo-500 mt-0.5 shrink-0" />
                  <span>{eduText.institution}</span>
                </div>

                {/* Details */}
                {eduText.details && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 border-l-2 border-indigo-200 dark:border-indigo-500/30 pl-3 py-1 mt-4">
                    {eduText.details}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
