// src/components/Footer.tsx
"use client";

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { locale } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Traductions
  const translations = locale === 'fr' ? {
    name: 'Gabriel Nomo',
    description: 'Développeur Full-Stack passionné par la création d\'applications web modernes et performantes.',
    navigation: 'Navigation',
    contact: 'Contact',
    location: 'Yaoundé, Cameroun',
    copyright: 'Tous droits réservés.',
    builtWith: 'Conçu avec Next.js & Tailwind CSS',
    backToTop: 'Retour en haut',
    navLinks: [
      { href: '#home', label: 'Accueil' },
      { href: '#about', label: 'À propos' },
      { href: '#experience', label: 'Expérience' },
      { href: '#projects', label: 'Projets' },
      { href: '#skills', label: 'Compétences' },
      { href: '#leadership', label: 'Leadership' }, 
      { href: '#education', label: 'Formation' },    
      { href: '#certifications', label: 'Certifications' }, 
      { href: '#contact', label: 'Contact' }
    ]
  } : {
    name: 'Gabriel Nomo',
    description: 'Full-Stack Developer passionate about building modern and performant web applications.',
    navigation: 'Navigation',
    contact: 'Contact',
    location: 'Yaoundé, Cameroon',
    copyright: 'All rights reserved.',
    builtWith: 'Built with Next.js & Tailwind CSS',
    backToTop: 'Back to top',
    navLinks: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#experience', label: 'Experience' },
      { href: '#projects', label: 'Projects' },
      { href: '#skills', label: 'Skills' },
      { href: '#leadership', label: 'Leadership' },
      { href: '#education', label: 'Education' },   
      { href: '#certifications', label: 'Certifications' },
      { href: '#contact', label: 'Contact' }
    ]
  };

  return (
    <footer className="bg-white dark:bg-[#1a1625] border-t border-gray-200 dark:border-[#3d3650] mt-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
        
        {/* Contenu principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* Colonne 1: À propos */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {translations.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {translations.description}
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/NOMO-Gabriel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/nomo-gabriel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:gabriel.nomo@facsciences-uy1.cm"
                className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Colonne 2: Navigation */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              {translations.navigation}
            </h4>
            <ul className="space-y-3">
              {translations.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-orange-600 dark:bg-orange-500 group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Contact */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              {translations.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:gabriel.nomo@facsciences-uy1.cm"
                  className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  gabriel.nomo@facsciences-uy1.cm
                </a>
              </li>
              <li>
                <a
                  href="tel:+237676738248"
                  className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +237 676 738 248
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {translations.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-200 dark:border-[#3d3650] my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
            © {currentYear} {translations.name}. {translations.copyright}
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://nomo-gabriel-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
            >
              Portfolio
            </a>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <p className="text-gray-500 dark:text-gray-400">
              {translations.builtWith}
            </p>
          </div>
        </div>

        {/* Bouton Retour en haut */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 transition-colors font-medium group"
          >
            <span>{translations.backToTop}</span>
            <svg
              className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;