// src/components/ui/SectionTitle.tsx
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
      {children}
    </h2>
  );
};

export default SectionTitle;