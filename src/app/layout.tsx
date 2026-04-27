// src/app/layout.tsx — STEVEN MBIAMY
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import "@/styles/global.css";
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';
import { Sora, Source_Code_Pro } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Steven Mbiamy | Développeur Fullstack | React.js · Next.js · Spring Boot",
  description: "Portfolio de Steven Mbiamy, développeur fullstack spécialisé en React.js, Next.js et Spring Boot. Intégration API, interfaces performantes, coordination frontend/backend.",
  keywords: [
    "Développeur Fullstack",
    "Steven Mbiamy",
    "React.js",
    "Next.js",
    "Spring Boot",
    "ENSPY",
    "Cameroun",
    "REST API",
    "TypeScript",
    "Django",
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Steven Mbiamy | Développeur Fullstack",
    description: "Interfaces web modernes et APIs robustes — React.js, Next.js, Spring Boot.",
    siteName: "Portfolio Steven Mbiamy",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${sourceCodePro.variable}`} suppressHydrationWarning>
      <body className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <TopBar />
            <Header />
            <main className="pt-20 px-6 sm:px-8 lg:px-12 container mx-auto max-w-6xl">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}