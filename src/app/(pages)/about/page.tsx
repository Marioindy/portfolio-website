import React from 'react';
import { BioSection } from './components/BioSection';
import { SkillsGridWithConvex } from './components/SkillsGridWithConvex';
import { TechStack } from './components/TechStack';

export const metadata = {
  title: 'About | Portfolio',
  description: 'Learn more about me, my skills, and my experience',
};

// Force dynamic rendering for this page since it uses Convex queries
export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <BioSection />
      <SkillsGridWithConvex />
      <TechStack />
    </div>
  );
}

/**
 * Note: To use the static SkillsGrid instead of the Convex-powered version,
 * replace <SkillsGridWithConvex /> with <SkillsGrid /> and import:
 * import { SkillsGrid } from './components/SkillsGrid';
 */
