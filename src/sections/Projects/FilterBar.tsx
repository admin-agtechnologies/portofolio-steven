"use client";
import { FilterType } from './index';
import { motion } from 'framer-motion';

interface FilterBarProps {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
  locale: string;
  filterOptions: FilterType[]; 
}

const FilterBar = ({ activeFilter, setActiveFilter, locale, filterOptions }: FilterBarProps) => {
  
  const labels: Record<FilterType, string> = locale === 'fr' 
    ? { 
        featured: '⭐ Top', 
        all: 'Tous', 
        professional: 'Professionnels', 
        personal: 'Personnels', 
        academic: 'Académiques',
        freelance: 'Freelance'
      }
    : { 
        featured: '⭐ Top', 
        all: 'All', 
        professional: 'Professional', 
        personal: 'Personal', 
        academic: 'Academic',
        freelance: 'Freelance'
      };

  return (
    <div className="flex justify-start md:justify-center overflow-x-auto pb-4 no-scrollbar flex-nowrap md:flex-wrap gap-3">
      {filterOptions.map(cat => {
        const isActive = activeFilter === cat;
        return (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`relative px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-colors whitespace-nowrap overflow-hidden ${
              isActive 
              ? 'text-white' 
              : 'bg-slate-100 dark:bg-slate-800/50 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterBubble"
                className="absolute inset-0 bg-cyan-500 dark:bg-cyan-500"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{labels[cat]}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
