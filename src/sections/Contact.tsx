// src/sections/Contact.tsx
"use client";

import { useEffect, useState } from 'react';
import SectionTitle from "@/components/ui/SectionTitle";
import { en } from '@/dictionaries/en';

const Contact = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="contact" className="py-24 text-center bg-light-secondary dark:bg-dark-secondary transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-light-text dark:text-dark-text tracking-tight">
          {dictionary.sectionTitles.contact}
        </h2>
        
        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {dictionary.contact.invitation}
        </p>
        
        <a 
          href={`mailto:${dictionary.contact.email}`}
          className="inline-flex px-10 py-4 bg-accent text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-accent/20 transition-all hover:-translate-y-1 active:scale-95"
        >
          {dictionary.contact.button}
        </a>
      </div>
    </section>
  );
};

export default Contact;