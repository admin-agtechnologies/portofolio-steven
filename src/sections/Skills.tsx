"use client";

import { en } from '@/dictionaries/en';
import { skillsData } from '@/data';
import { motion } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';
import { Skill } from '@/types';

interface SkillsProps {
  dictionary: typeof en;
}

const categoryColors: Record<string, { bg: string; border: string; header: string; dot: string }> = {
  frontend: {
    bg: 'bg-cyan-50 dark:bg-cyan-500/5',
    border: 'border-cyan-100 dark:border-cyan-500/20',
    header: 'text-cyan-700 dark:text-cyan-400',
    dot: 'bg-cyan-500',
  },
  backend: {
    bg: 'bg-blue-50 dark:bg-blue-500/5',
    border: 'border-blue-100 dark:border-blue-500/20',
    header: 'text-blue-700 dark:text-blue-400',
    dot: 'bg-blue-500',
  },
  databases: {
    bg: 'bg-indigo-50 dark:bg-indigo-500/5',
    border: 'border-indigo-100 dark:border-indigo-500/20',
    header: 'text-indigo-700 dark:text-indigo-400',
    dot: 'bg-indigo-500',
  },
  tools_methods: {
    bg: 'bg-violet-50 dark:bg-violet-500/5',
    border: 'border-violet-100 dark:border-violet-500/20',
    header: 'text-violet-700 dark:text-violet-400',
    dot: 'bg-violet-500',
  },
  ai_data: {
    bg: 'bg-rose-50 dark:bg-rose-500/5',
    border: 'border-rose-100 dark:border-rose-500/20',
    header: 'text-rose-700 dark:text-rose-400',
    dot: 'bg-rose-500',
  },
};

const defaultColors = {
  bg: 'bg-slate-50 dark:bg-slate-800/50',
  border: 'border-slate-100 dark:border-slate-700',
  header: 'text-slate-700 dark:text-slate-300',
  dot: 'bg-slate-400',
};

const Skills = ({ dictionary }: SkillsProps) => {
  const categories = Object.entries(skillsData).filter(
    ([, skills]: [string, Skill[]]) => skills.length > 0
  );

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-violet-100 dark:bg-violet-500/15 rounded-xl">
            <LayoutGrid className="text-violet-600 dark:text-violet-400" size={24} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-0.5">04 /</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {dictionary.sectionTitles.skills}
            </h2>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map(([categoryKey, skills], index) => {
            const colors = categoryColors[categoryKey] ?? defaultColors;
            const label =
              dictionary.skills[categoryKey as keyof typeof dictionary.skills] ??
              categoryKey;

            return (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-2xl border p-6 ${colors.bg} ${colors.border} hover:-translate-y-1 transition-transform duration-300`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2.5 h-2.5 rounded-full ${colors.dot} shrink-0`} />
                  <h3 className={`text-sm font-black uppercase tracking-wider ${colors.header}`}>
                    {label}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {(skills as Skill[]).map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
