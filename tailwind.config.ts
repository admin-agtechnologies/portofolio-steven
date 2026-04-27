// tailwind.config.ts — STEVEN MBIAMY
// Palette : Cyan/Sky Blue — distinct de Gabriel (orange) et Penka (violet)
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#0d1520',
          secondary: '#162030',
          border: '#1e3448',
          text: '#f1f5f9',
        },
        light: {
          background: '#f0f7ff',
          secondary: '#ffffff',
          border: '#cce0f5',
          text: '#0d1520',
        },
        accent: {
          DEFAULT: '#0ea5e9',   // Sky-500 — cyan vif
          light: '#0284c7',     // Sky-600 — cyan foncé pour hover
        },
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
        mono: ['var(--font-source-code-pro)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;