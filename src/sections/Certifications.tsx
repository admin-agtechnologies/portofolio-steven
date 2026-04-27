"use client";

import { en } from '@/dictionaries/en';
import { certificationsData } from '@/data';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText } from 'lucide-react';

const Certifications = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-900/60">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-amber-100 dark:bg-amber-500/15 rounded-xl">
            <Award className="text-amber-600 dark:text-amber-400" size={24} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-0.5">07 /</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {dictionary.sectionTitles.certifications}
            </h2>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => {
            const certText = dictionary.certifications[cert.id as keyof typeof dictionary.certifications];

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <Link
                  href={cert.pdfUrl || '#'}
                  target="_blank"
                  className="group flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-500/40 shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Certificate image */}
                  <div className="relative h-44 w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden flex items-center justify-center">
                    <img
                      src={cert.imageUrl}
                      alt={`Certification: ${certText.title}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    {/* Fallback icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <FileText className="text-slate-300 dark:text-slate-600" size={48} />
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" size={28} />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-black text-base text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-3">
                      {certText.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-auto flex items-center gap-1.5">
                      <Award size={13} className="text-amber-500 shrink-0" />
                      {certText.institution}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
