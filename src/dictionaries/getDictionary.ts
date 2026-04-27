// src/dictionaries/getDictionary.ts

import 'server-only'; // Assure que ce code ne s'exécute que sur le serveur

import { fr } from './fr';
import { en } from './en';

const dictionaries = {
  fr: fr, // On met directement l'objet
  en: en,
};

export const getDictionary = async (locale: 'fr' | 'en') => {
  return locale === 'fr' ? dictionaries.fr : dictionaries.en; // On retourne l'objet directement
};