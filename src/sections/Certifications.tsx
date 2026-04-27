// src/sections/Certifications.tsx
import { en } from '@/dictionaries/en';
import { certificationsData } from '@/data';
import Link from 'next/link';
import Image from 'next/image'; // 1. Importer le composant Image
import  { useEffect, useState } from 'react';

const Certifications = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;
  return (
    <section id="certifications" className="py-20 bg-light-secondary dark:bg-dark-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-light-text dark:text-dark-text">
          {dictionary.sectionTitles.certifications}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map(cert => {
            const certText = dictionary.certifications[cert.id as keyof typeof dictionary.certifications];
            return (
              // On enveloppe la carte dans le lien
              <Link 
                key={cert.id} 
                href={cert.pdfUrl || '#'} 
                target="_blank" 
                className="block bg-light-background dark:bg-dark-background rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                {/* 2. Conteneur pour l'image */}
                <div className="relative h-40 w-full">
                  <Image
                    src={cert.imageUrl}
                    alt={`Certificat: ${certText.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* 3. Conteneur pour le texte */}
                <div className="p-6">
                  <h3 className="font-bold text-light-text dark:text-dark-text mb-1">
                    {certText.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {certText.institution}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Certifications;