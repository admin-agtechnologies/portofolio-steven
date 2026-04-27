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
  title: "Steven Mbiamy | Développeur Fullstack — React.js · Next.js · Spring Boot",
  description: "Portfolio de Mbiamy Ngameni Steven Loic, développeur fullstack spécialisé en React.js, Next.js et Spring Boot. Intégration API REST, interfaces performantes, 5e année ENSPY.",
  keywords: [
    "Développeur Fullstack",
    "Mbiamy Ngameni Steven Loic",
    "Steven Mbiamy",
    "React.js",
    "Next.js",
    "Spring Boot",
    "Django",
    "ENSPY",
    "Cameroun",
    "Yaoundé",
    "REST API",
    "TypeScript",
    "PostgreSQL",
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Steven Mbiamy | Développeur Fullstack",
    description: "Interfaces web modernes et APIs robustes — React.js, Next.js, Spring Boot, Django.",
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
    <html lang="en" className={`${sora.variable} ${sourceCodePro.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <TopBar />
            <Header />
            <main className="pt-20">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
