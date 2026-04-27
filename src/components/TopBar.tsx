"use client";

import { useLanguage } from '@/hooks/useLanguage';
import { useEffect, useState } from 'react';
import { fr } from '@/dictionaries/fr';
import { en } from '@/dictionaries/en';

const TopBar = () => {
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const dict = locale === 'fr' ? fr : en;

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <div className="w-full h-[33px] bg-slate-950 border-b border-slate-800" />;
  }

  return (
    <div className="w-full bg-slate-950 border-b border-slate-800 py-2">
      <div className="container mx-auto px-6 text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-400 flex justify-between items-center">
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" />
          </span>
          {dict.common.topbar}
        </span>
        <span className="hidden md:inline-block text-cyan-400 font-bold tracking-wider">
          ● Available for opportunities
        </span>
      </div>
    </div>
  );
};

export default TopBar;
