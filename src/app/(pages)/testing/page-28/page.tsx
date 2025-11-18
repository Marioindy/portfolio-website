import type { Metadata } from 'next';
import { StarfieldBackground } from './components/StarfieldBackground';
import { SpaceHero } from './components/SpaceHero';
import { CosmicContent } from './components/CosmicContent';

export const metadata: Metadata = {
  title: 'Sci-Fi Space | Testing Page 28',
  description:
    'A sci-fi space aesthetic testing page with starfield backgrounds, futuristic typography, and cosmic colors.',
  openGraph: {
    title: 'Sci-Fi Space | Testing Page 28',
    description:
      'Journey through the cosmic frontier with futuristic design and space-age aesthetics.',
  },
};

// Force dynamic rendering for Convex hooks
export const dynamic = 'force-dynamic';

/**
 * Testing Page 28: Sci-Fi Space Aesthetic
 *
 * Features:
 * - Animated starfield background with parallax
 * - Futuristic tech typography
 * - Cosmic color palette (purples, blues, blacks)
 * - Space-age design language
 * - Cosmic gradients
 * - Space-themed animations
 * - Sci-fi layout patterns
 * - GSAP scroll animations
 * - Framer Motion interactions
 * - Convex database integration
 * - View Transitions API ready
 * - Production-ready TypeScript
 * - Fully responsive design
 */
export default function Page28() {
  return (
    <main className="min-h-screen overflow-x-hidden text-white">
      {/* Animated starfield background */}
      <StarfieldBackground />

      {/* Hero section */}
      <SpaceHero />

      {/* Content sections */}
      <CosmicContent />

      {/* Bottom cosmic gradient */}
      <div
        className="relative z-10 h-32"
        style={{
          background: 'linear-gradient(to top, rgba(10, 0, 30, 1), transparent)',
        }}
      />
    </main>
  );
}
