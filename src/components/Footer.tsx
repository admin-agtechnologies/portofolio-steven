"use client";

import { useLanguage } from '@/hooks/useLanguage';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const { locale } = useLanguage();

  const content = locale === 'fr'
    ? { rights: 'Tous droits réservés.', built: 'Conçu avec Next.js · Tailwind CSS · Framer Motion' }
    : { rights: 'All rights reserved.', built: 'Built with Next.js · Tailwind CSS · Framer Motion' };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-background py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Branding */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
              STEVEN<span className="text-cyan-500">.</span>
            </span>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              © {new Date().getFullYear()} Mbiamy Ngameni Steven Loic. {content.rights}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MBIAMY"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors hover:-translate-y-0.5 transition-transform duration-200"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/steven-mbiamy"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 text-slate-400 hover:text-blue-600 bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors hover:-translate-y-0.5 transition-transform duration-200"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://wa.me/237697501738"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 text-slate-400 hover:text-green-500 bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors hover:-translate-y-0.5 transition-transform duration-200"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="mailto:mbiamysteven@gmail.com"
              aria-label="Email"
              className="p-2.5 text-slate-400 hover:text-red-500 bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors hover:-translate-y-0.5 transition-transform duration-200"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Tech stack line */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-center">
          <p className="text-[10px] font-mono uppercase tracking-widest text-slate-300 dark:text-slate-600">
            {content.built}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
