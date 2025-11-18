import type { Metadata } from 'next';
import { NoirHero } from './components/NoirHero';
import { NoirContent } from './components/NoirContent';
import { FilmGrain } from './components/FilmGrain';

export const metadata: Metadata = {
  title: 'Film Noir | Testing Page 27',
  description:
    'A retro film noir aesthetic testing page with high contrast black and white, dramatic lighting, and classic 1940s vibes.',
  openGraph: {
    title: 'Film Noir | Testing Page 27',
    description:
      'Experience the dramatic world of film noir with high contrast visuals and mysterious atmosphere.',
  },
};

// Force dynamic rendering for Convex hooks
export const dynamic = 'force-dynamic';

/**
 * Testing Page 27: Film Noir Aesthetic
 *
 * Features:
 * - High contrast black and white design
 * - Dramatic shadows and lighting
 * - Mysterious serif typography
 * - Classic 1940s film noir vibes
 * - Film grain effect
 * - Venetian blind shadows
 * - GSAP scroll animations
 * - Framer Motion interactions
 * - Convex integration
 * - View Transitions API ready
 * - Production-ready TypeScript
 */
export default function Page27() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Film grain overlay */}
      <FilmGrain />

      {/* Hero section */}
      <NoirHero />

      {/* Content sections */}
      <NoirContent />

      {/* Bottom noir gradient */}
      <div className="h-32 bg-gradient-to-t from-zinc-950 to-black" />
    </main>
  );
}
