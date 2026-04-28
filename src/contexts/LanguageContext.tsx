// src/contexts/LanguageContext.tsx
"use client";

import { createContext, useState, useEffect, ReactNode } from 'react';

export type Locale = 'fr' | 'en';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Always start with 'en' so server and client initial render match → no hydration error
  const [locale, setLocaleState] = useState<Locale>('en');

  // After mount: load the user's saved preference from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('locale') as Locale | null;
      if (saved && ['fr', 'en'].includes(saved)) {
        setLocaleState(saved);
      }
    } catch {
      // localStorage unavailable (SSR guard)
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('locale', newLocale);
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};
