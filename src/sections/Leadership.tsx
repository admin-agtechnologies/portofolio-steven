// src/sections/Leadership.tsx
"use client";

import { useEffect, useState } from 'react';
import { en } from '@/dictionaries/en';
import { leadershipData } from '@/data';

const Leadership = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);
  const clubGi = leadershipData[0];
  const clubGiText = dictionary.leadership['club-gi'];

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;
  
  return (
    <section id="leadership" className="py-20 bg-white dark:bg-dark-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-light-text dark:text-dark-text tracking-tight">
          {dictionary.sectionTitles.leadership}
        </h2>
        
        <div className="p-8 border-2 border-dashed border-light-border dark:border-dark-border rounded-xl">
          <h3 className="text-xl font-bold text-accent mb-1">{clubGiText.role}</h3>
          <p className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-wider">
            {clubGiText.organization} — {clubGi.startDate} - {clubGi.endDate}
          </p>
          
          <ul className="space-y-4">
            {clubGiText.descriptionPoints.map((point, index) => (
              <li key={index} className="flex gap-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                <span className="text-accent text-lg">▹</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Leadership;