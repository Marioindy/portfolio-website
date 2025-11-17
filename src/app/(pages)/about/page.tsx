import React from 'react';
import { BioSection } from './components/BioSection';
import { SkillsGrid } from './components/SkillsGrid';

export const metadata = {
  title: 'About | Portfolio',
  description: 'Learn more about me, my skills, and my experience',
};

export default function AboutPage() {
  return (
    <div>
      <BioSection />
      <SkillsGrid />
    </div>
  );
}
