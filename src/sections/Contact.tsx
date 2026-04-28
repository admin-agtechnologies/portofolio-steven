"use client";

import { en } from '@/dictionaries/en';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

interface ContactProps {
  dictionary: typeof en;
}

const socialLinks = [
  {
    href: 'https://github.com/MBIAMY',
    icon: FaGithub,
    label: 'GitHub',
    color: 'hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900',
  },
  {
    href: 'https://linkedin.com/in/steven-mbiamy',
    icon: FaLinkedin,
    label: 'LinkedIn',
    color: 'hover:bg-blue-600 hover:text-white',
  },
  {
    href: 'https://wa.me/237697501738',
    icon: FaWhatsapp,
    label: 'WhatsApp',
    color: 'hover:bg-green-500 hover:text-white',
  },
];

const Contact = ({ dictionary }: ContactProps) => {
  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden bg-slate-50 dark:bg-slate-900/60">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/8 via-blue-500/8 to-indigo-500/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-cyan-100 dark:bg-cyan-500/15 rounded-xl">
            <Mail className="text-cyan-600 dark:text-cyan-400" size={24} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-0.5">07 /</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {dictionary.sectionTitles.contact}
            </h2>
          </div>
        </motion.div>

        <div className="max-w-2xl">
          {/* Invitation text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10"
          >
            {dictionary.contact.invitation}
          </motion.p>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href={`mailto:${dictionary.contact.email}`}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-base rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              {dictionary.contact.button}
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <span className="text-sm font-mono text-slate-400 dark:text-slate-500">
              {dictionary.contact.email}
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Retrouvez-moi sur
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 ${color} transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md`}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
