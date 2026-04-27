// src/sections/Education.tsx
"use client";

import { useEffect, useState } from 'react';
import { educationData } from "@/data";
import { en } from '@/dictionaries/en';

const Education = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-light-text dark:text-dark-text tracking-tight">
          {dictionary.sectionTitles.education}
        </h2>

        <div className="relative max-w-2xl mx-auto pl-8 border-l-2 border-light-border dark:border-dark-border">
          {educationData.map((edu, index) => {
            const eduText = dictionary.education[edu.id as keyof typeof dictionary.education];
            return (
              <div key={edu.id} className={`mb-12 ${index === educationData.length - 1 ? 'pb-0' : 'pb-8'}`}>
                {/* Point sur la timeline */}
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] mt-1.5 border-4 border-white dark:border-dark-background"></div>

                <div className="relative">
                  <p className="text-sm font-mono text-accent mb-1 font-bold italic">
                    {eduText.status}
                  </p>
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                    {eduText.degree}
                  </h3>
                  <h4 className="font-semibold text-gray-600 dark:text-gray-400">
                    {eduText.institution}
                  </h4>
                  {eduText.details && (
                    <p className="mt-2 text-gray-500 dark:text-gray-500 text-sm italic">
                      {eduText.details}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;