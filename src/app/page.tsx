// src/app/page.tsx
"use client";

import { en } from '@/dictionaries/en';
import { fr } from '@/dictionaries/fr';
import { useLanguage } from '@/hooks/useLanguage';

// Import de toutes les sections
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects/index';
import Skills from '@/sections/Skills';
import Leadership from '@/sections/Leadership';
import Education from '@/sections/Education';
import Certifications from '@/sections/Certifications';
import Contact from '@/sections/Contact';

export default function Home() {
  const { locale } = useLanguage();
  const dictionary = locale === 'fr' ? fr : en;

  return (
    <>
      <Hero dictionary={dictionary} />
      <About dictionary={dictionary} />
      <Experience dictionary={dictionary} />
      <Projects dictionary={dictionary} />
      <Skills dictionary={dictionary} />
      <Leadership dictionary={dictionary} />
      <Education dictionary={dictionary} />
      <Certifications dictionary={dictionary} />
      <Contact dictionary={dictionary} />
    </>
  );
}