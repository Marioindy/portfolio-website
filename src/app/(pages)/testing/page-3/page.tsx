import type { Metadata } from 'next';
import { ChromaticHero } from './components/ChromaticHero';
import { NeonProjectGrid } from './components/NeonProjectGrid';
import { ColorTheoryExplorer } from './components/ColorTheoryExplorer';

export const metadata: Metadata = {
  title: 'Testing Page 3 | Chromatic Rebellion',
  description:
    'Exploring the intersection of neon aesthetics, color psychology, and modern web design through explosive gradients and vibrant interactions.',
  openGraph: {
    title: 'Testing Page 3 | Chromatic Rebellion',
    description:
      'Exploring the intersection of neon aesthetics, color psychology, and modern web design through explosive gradients and vibrant interactions.',
  },
};

export const dynamic = 'force-dynamic';

export default function TestingPage3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neon-magenta via-neon-purple to-neon-blue overflow-hidden">
      {/* Animated background layer */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-neon-cyan via-transparent to-neon-lime animate-hueRotate" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-pink rounded-full blur-3xl opacity-40 animate-floatUp" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-electric rounded-full blur-3xl opacity-40 animate-floatUp" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content layers */}
      <div className="relative z-10">
        <ChromaticHero />
        <NeonProjectGrid />
        <ColorTheoryExplorer />
      </div>
    </div>
  );
}
