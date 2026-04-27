// src/components/Footer.tsx
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const translations = locale === 'fr' ? {
    name: 'Gabriel Nomo',
    description: 'Ingénieur de Conception Logiciel & IA passionné par la digitalisation et la création de solutions robustes.',
    navigation: 'Navigation',
    contact: 'Contact',
    location: 'Yaoundé, Cameroun',
    copyright: 'Tous droits réservés.',
    builtWith: 'Conçu avec Next.js & Tailwind CSS',
    navLinks: [
      { href: '#experience', label: 'Expérience' },
      { href: '#projects', label: 'Projets' },
      { href: '#skills', label: 'Compétences' },
      { href: '#contact', label: 'Contact' }
    ]
  } : {
    name: 'Gabriel Nomo',
    description: 'Software Design Engineer & AI passionate about digitalization and building robust solutions.',
    navigation: 'Navigation',
    contact: 'Contact',
    location: 'Yaoundé, Cameroon',
    copyright: 'All rights reserved.',
    builtWith: 'Built with Next.js & Tailwind CSS',
    navLinks: [
      { href: '#experience', label: 'Experience' },
      { href: '#projects', label: 'Projects' },
      { href: '#skills', label: 'Skills' },
      { href: '#contact', label: 'Contact' }
    ]
  };

  return (
    <footer className="bg-white dark:bg-[#1a1625] border-t border-gray-100 dark:border-[#3d3650] mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* Colonne 1: Identité */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tighter">
              GABRIEL <span className="text-accent">NOMO.</span>
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              {translations.description}
            </p>
          </div>

          {/* Colonne 2: Navigation rapide */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
              {translations.navigation}
            </h4>
            <ul className="space-y-2">
              {translations.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Contact Direct */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
              {translations.contact}
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              
              {/* Email */}
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:gabriel.nomo@facsciences-uy1.cm" className="hover:text-accent transition-colors">
                  gabriel.nomo@facsciences-uy1.cm
                </a>
              </li>

              {/* Téléphone (Appel) */}
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+237686285017" className="hover:text-accent transition-colors tracking-tight">
                  +237 686 285 017
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.895-5.335 11.898-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href="https://wa.me/237676738248" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors tracking-tight">
                  +237 676 738 248
                </a>
              </li>

              {/* Localisation */}
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{translations.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-[#3d3650] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} {translations.name}. {translations.copyright}
          </p>
          <p className="text-xs text-gray-400 font-mono italic">
            {translations.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;