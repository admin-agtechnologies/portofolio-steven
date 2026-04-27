// src/sections/Projects/FilterBar.tsx
"use client";
import { FilterType } from './index';

interface FilterBarProps {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
  locale: string;
  filterOptions: FilterType[]; // Reçu dynamiquement
}

const FilterBar = ({ activeFilter, setActiveFilter, locale, filterOptions }: FilterBarProps) => {
  
  const labels: Record<FilterType, string> = locale === 'fr' 
    ? { 
        featured: '⭐ Top', 
        all: 'Tous', 
        professional: 'Professionnels', 
        personal: 'Personnels', 
        academic: 'Académiques',
        freelance: 'Freelance' // Gardé au cas où, mais ne sera pas utilisé si filtré
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
    <div className="flex justify-start md:justify-center overflow-x-auto pb-6 md:pb-0 no-scrollbar flex-nowrap md:flex-wrap gap-3 mb-12">
      {filterOptions.map(cat => (
        <button
          key={cat}
          onClick={() => setActiveFilter(cat)}
          className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
            activeFilter === cat 
            ? 'bg-accent text-white shadow-lg shadow-accent/20' 
            : 'bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10'
          }`}
        >
          {labels[cat]}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;