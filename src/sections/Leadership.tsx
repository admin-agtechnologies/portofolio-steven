"use client";

import { useEffect, useState } from 'react';
import { en } from '@/dictionaries/en';
import { leadershipData } from '@/data';
import { motion } from 'framer-motion';
import { Users, ChevronRight } from 'lucide-react';

const Leadership = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);
  const clubGi = leadershipData[0];
  const clubGiText = dictionary.leadership['club-gi'];

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <section id="leadership" className="py-24 bg-white dark:bg-dark-background">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-rose-100 dark:bg-rose-500/15 rounded-xl">
            <Users className="text-rose-600 dark:text-rose-400" size={24} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-0.5">05 /</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {dictionary.sectionTitles.leadership}
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-8 md:p-10 border border-slate-100 dark:border-slate-700 hover:border-rose-300 dark:hover:border-rose-500/40 transition-all duration-300 overflow-hidden group"
        >
          {/* Decorative glow */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-rose-400/15 to-orange-400/15 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-700 mb-8">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-rose-600 dark:text-rose-400 mb-1">
                  {clubGiText.role}
                </h3>
                <p className="font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                  {clubGiText.organization}
                </p>
              </div>
              <span className="font-mono text-sm font-semibold bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-xl text-slate-500 dark:text-slate-300 whitespace-nowrap self-start sm:self-auto">
                {clubGi.startDate} — {clubGi.endDate}
              </span>
            </div>

            {/* Points */}
            <ul className="space-y-4">
              {clubGiText.descriptionPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.1 }}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300 leading-relaxed"
                >
                  <ChevronRight className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
