// src/components/Header.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Correction du bug d'hydratation
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = locale === 'fr'
    ? [
        { href: '#experience', label: 'Expérience' },
        { href: '#projects', label: 'Projets' },
        { href: '#skills', label: 'Compétences' },
        { href: '#contact', label: 'Contact' }
      ]
    : [
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' }
      ];

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#1a1625]/90 backdrop-blur-md shadow-sm border-b border-light-border dark:border-dark-border'
          : 'bg-white dark:bg-[#1a1625]'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center h-16">
        
        {/* Branding */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-tighter text-light-text dark:text-dark-text hover:text-accent transition-colors"
        >
          GABRIEL <span className="text-accent">NOMO.</span>
        </Link>

        {/* Navigation Desktop - On n'affiche les liens que si mounted est true */}
        <div className="hidden md:flex items-center space-x-8">
          {mounted && navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-accent dark:hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>

        {/* Bouton Mobile */}
        <div className="flex items-center space-x-4 md:hidden">
            <ThemeSwitcher />
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 dark:text-gray-300"
            >
                {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
            </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMobileMenuOpen && mounted && (
        <div className="md:hidden border-t border-light-border dark:border-dark-border bg-white dark:bg-[#1a1625]">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-accent dark:hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;