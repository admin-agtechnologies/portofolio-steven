// src/sections/Experience.tsx
"use client";

import { useEffect, useState } from 'react';
import { en } from '@/dictionaries/en';
import { experienceData } from '@/data';

interface SectionProps {
  dictionary: typeof en;
}

const Experience = ({ dictionary }: SectionProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Correction du bug d'hydratation
  if (!mounted) return null;

  return (
    <section id="experience" className="py-20 bg-light-secondary dark:bg-dark-secondary transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-light-text dark:text-dark-text">
          {dictionary.sectionTitles.experience}
        </h2>
        
        <div className="max-w-3xl mx-auto relative pl-8 border-l-2 border-light-border dark:border-dark-border">
          {experienceData.map((exp) => {
            const expText = dictionary.experience[exp.id as keyof typeof dictionary.experience];
            return (
              <div key={exp.id} className="mb-12 relative">
                {/* Point sur la timeline */}
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[41px] mt-1.5 border-4 border-light-secondary dark:border-dark-secondary"></div>
                
                <p className="text-sm font-mono text-accent mb-1 font-semibold italic">
                  {exp.period}
                </p>
                
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                  {expText.title}
                </h3>
                
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  {expText.company}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {expText.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;