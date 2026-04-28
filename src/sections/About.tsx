"use client";

import { en } from '@/dictionaries/en';
import { motion } from 'framer-motion';
import { Code2, Server, Database, BrainCircuit, User } from 'lucide-react';

interface AboutProps {
  dictionary: typeof en;
}

const strengthCards = [
  {
    icon: Code2,
    label: 'Front-End',
    desc: 'React.js · Next.js · TypeScript · Flutter',
    bg: 'bg-cyan-50 dark:bg-cyan-500/10',
    border: 'border-cyan-100 dark:border-cyan-500/20',
    icon_color: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    icon: Server,
    label: 'Back-End',
    desc: 'Spring Boot · Django · NestJS · Node.js',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    border: 'border-blue-100 dark:border-blue-500/20',
    icon_color: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: BrainCircuit,
    label: 'IA & Machine Learning',
    desc: 'TensorFlow · Keras · Flask · Pandas',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10',
    border: 'border-emerald-100 dark:border-emerald-500/20',
    icon_color: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: Database,
    label: 'Data & DevOps',
    desc: 'PostgreSQL · MySQL · Docker · Git',
    bg: 'bg-violet-50 dark:bg-violet-500/10',
    border: 'border-violet-100 dark:border-violet-500/20',
    icon_color: 'text-violet-600 dark:text-violet-400',
  },
];

const About = ({ dictionary }: AboutProps) => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/60">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-cyan-100 dark:bg-cyan-500/15 rounded-xl">
            <User className="text-cyan-600 dark:text-cyan-400" size={24} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-0.5">01 /</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {dictionary.sectionTitles.about}
            </h2>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {dictionary.about.paragraph1}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {dictionary.about.paragraph2}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '3+', label: 'Années de code', sub: 'Depuis 2022' },
              { value: '3', label: 'Expériences pro', sub: 'Stages & CDI' },
              { value: '3+', label: 'Projets livrés', sub: 'Fullstack' },
              { value: '3', label: 'Certifications', sub: 'EPFL · UC Davis' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-500/40 transition-colors shadow-sm"
              >
                <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 mb-1">
                  {stat.value}
                </p>
                <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">{stat.label}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-mono">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Strength Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengthCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              className={`group p-6 rounded-2xl border ${card.bg} ${card.border} hover:-translate-y-1 transition-transform duration-300`}
            >
              <card.icon className={`${card.icon_color} mb-4`} size={28} />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{card.label}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
