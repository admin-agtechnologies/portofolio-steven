// src/contexts/LanguageContext.tsx
"use client";

import { createContext, useState, ReactNode } from 'react';

// Définir les langues possibles
export type Locale = 'fr' | 'en';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

// Créer le contexte avec une valeur par défaut
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Créer le "Provider" qui enveloppera notre application
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem('locale') as Locale | null;
      if (saved && ['fr', 'en'].includes(saved)) {
        return saved;
      }
    } catch {
      // localStorage might be unavailable or throw; fall back to default
    }
    return 'en';
  }); // Anglais par défaut au premier chargement

  // Fonction pour changer la langue et la sauvegarder
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};