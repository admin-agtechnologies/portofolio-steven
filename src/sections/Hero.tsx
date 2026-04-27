// src/sections/Hero.tsx
"use client";

import { useEffect, useState } from 'react';
import { en } from '@/dictionaries/en';
import Link from 'next/link';

interface HeroProps {
  dictionary: typeof en;
}

const Hero = ({ dictionary }: HeroProps) => {
  const [mounted, setMounted] = useState(false);

  // Correction du bug d'hydratation : on attend que le client soit prêt
  useEffect(() => {
    setMounted(true);
  }, []);

  // Pendant le rendu serveur, on affiche une structure vide de même hauteur
  // pour éviter le "layout shift" et les erreurs de texte.
  if (!mounted) {
    return <section className="min-h-[70vh] flex items-center container mx-auto px-6" />;
  }

  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center py-12 md:py-20">
      <div className="container mx-auto px-6">
        
        {/* Badge de spécialité - Look Ingénieur */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-md bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 mb-8 transition-all">
          {/* Indicateur d'état (Dot) */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
          </span>
          
          {/* Texte du titre */}
          <span className="text-sm font-semibold text-orange-900 dark:text-orange-400 tracking-tight">
            {dictionary.hero.subtitle_1}
          </span>
        </div>

        {/* Titre Massif & Statique */}
        <h1 className="text-4xl md:text-7xl font-bold text-light-text dark:text-dark-text mb-6 tracking-tight leading-[1.1]">
          {dictionary.hero.title}
        </h1>

        {/* Tagline orientée Conception */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
          {dictionary.hero.tagline}
        </p>

        {/* CTAs : 2 boutons maximum */}
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
           
          {/* Bouton 1 : Télécharger le CV (Primaire) */}
          <Link 
            href={dictionary === en ? "/CV_NOMO_GABRIEL_23_02_2026_EN.pdf" : "/CV_NOMO_GABRIEL_23_02_2026_FR.pdf"} 
            download
            className="
              inline-flex px-8 py-4 rounded-lg font-bold shadow-lg transition-all duration-300 border-2 
              /* Mode Clair */
              bg-accent text-white border-accent hover:bg-white hover:text-accent 
              /* Mode Sombre */
              dark:hover:bg-dark-background dark:hover:text-accent
              text-center w-full sm:w-auto
            "
          >
            {dictionary.hero.download_cv}
          </Link>
          
          {/* Bouton 2 : Découvrir mes projets (Secondaire) */}
          <Link 
            href="#projects" 
            className="
              inline-flex px-8 py-4 rounded-lg font-bold transition-all duration-300 border-2 
              /* Mode Clair */
              bg-transparent border-light-border text-light-text hover:bg-accent hover:border-accent hover:text-white
              /* Mode Sombre */
              dark:border-dark-border dark:text-dark-text dark:hover:bg-accent dark:hover:border-accent dark:hover:text-white
              text-center w-full sm:w-auto
            "
          >
            {dictionary.hero.project_link}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;