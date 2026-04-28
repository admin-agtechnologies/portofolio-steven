"use client";

import { useEffect, useState } from 'react';
import { en } from '@/dictionaries/en';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, ChevronDown, MapPin, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

interface HeroProps {
  dictionary: typeof en;
}

const floatingBadges = [
  { label: '⚛ React.js', color: 'text-cyan-600 dark:text-cyan-400', pos: 'top-[10%] left-[-30px] md:left-[-50px]' },
  { label: '☕ Spring Boot', color: 'text-emerald-600 dark:text-emerald-400', pos: 'top-[40%] right-[-30px] md:right-[-55px]' },
  { label: '▲ Next.js', color: 'text-blue-600 dark:text-blue-400', pos: 'bottom-[15%] left-[-20px] md:left-[-40px]' },
];

const Hero = ({ dictionary }: HeroProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <section className="min-h-screen bg-white dark:bg-dark-background" />;
  }

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-dark-background"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 w-[700px] h-[700px] bg-cyan-500/5 dark:bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/3 dark:bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* ─── Left: Text Content ─── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 flex flex-col"
          >
            {/* Status badge */}
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/25 rounded-full text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                {dictionary.hero.subtitle_1}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-tight tracking-tight text-slate-900 dark:text-white mb-3"
            >
              MBIAMY<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                STEVEN LOIC
              </span>
            </motion.h1>

            {/* Location */}
            <motion.div
              variants={item}
              className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6"
            >
              <MapPin size={15} className="text-cyan-500" />
              <span className="text-sm font-medium">Yaoundé, Cameroun</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-lg"
            >
              {dictionary.hero.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <Link
                href={dictionary === en ? "/CV_MBIAMY_STEVEN_EN.pdf" : "/CV_MBIAMY_STEVEN_FR.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={18} />
                {dictionary.hero.download_cv}
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 hover:-translate-y-0.5"
              >
                {dictionary.hero.project_link}
                <ChevronDown size={18} />
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={item} className="flex items-center gap-3">
              <a
                href="https://github.com/MBIAMY"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/steven-mbiamy"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://wa.me/237697501738"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-green-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="mailto:mbiamysteven@gmail.com"
                aria-label="Email"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-red-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* ─── Right: Profile Photo ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl" />

              {/* Ring gradient border */}
              <div className="relative bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 p-1 rounded-full shadow-2xl shadow-cyan-500/30">
                <div className="bg-white dark:bg-dark-background rounded-full p-1.5">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                    {/* Profile image — /public/photo-s.jpeg */}
                    <img
                      src="/photo-s.jpeg"
                      alt="Steven Mbiamy"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    {/* Fallback initials */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-black text-slate-300 dark:text-slate-600 select-none">SM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              {floatingBadges.map((badge) => (
                <div
                  key={badge.label}
                  className={`absolute ${badge.pos} bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl rounded-xl px-3 py-2 backdrop-blur-sm`}
                >
                  <span className={`text-xs font-bold whitespace-nowrap ${badge.color}`}>
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
