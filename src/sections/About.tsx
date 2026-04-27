// src/sections/About.tsx
"use client";

import { useEffect, useState } from 'react';
import { en } from '@/dictionaries/en';
import Image from 'next/image';

interface SectionProps {
  dictionary: typeof en;
}

const About = ({ dictionary }: SectionProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Correction du bug d'hydratation
  if (!mounted) return null;

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
        
        {/* Texte (Prend 2/3 de l'espace sur desktop) */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 text-light-text dark:text-dark-text">
            {dictionary.sectionTitles.about}
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            <p>
              {dictionary.about.paragraph1}
            </p>
            <p>
              {dictionary.about.paragraph2}
            </p>
          </div>
        </div>

        {/* Image (Prend 1/3 de l'espace sur desktop) */}
        <div className="relative w-full max-w-sm mx-auto aspect-square"> 
          <Image
            src="/images/about-photo.jpg"
            alt="Gabriel Nomo"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="rounded-lg object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default About;