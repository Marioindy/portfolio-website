import type { Metadata } from 'next';
import { LightingSystem } from './components/LightingSystem';
import { CinematicHero } from './components/CinematicHero';
import { ProjectGrid } from './components/ProjectGrid';
import './cinematic.css';

/**
 * TESTING PAGE 4: CINEMATIC DESIGN EXPLORATION
 *
 * Inspired by Siena Film Foundation's dark cinema aesthetic.
 * A meditation on:
 * - The narrative of silence in dark space
 * - How cinema teaches UI design
 * - The luxury of emptiness and negative space
 *
 * Core Principles:
 * 1. Darkness as canvas, not absence
 * 2. Light as sculptural element
 * 3. Typography with cinematic hierarchy
 * 4. Color restraint as power
 * 5. Storytelling through absence
 *
 * Technical Stack:
 * - Next.js 15 with App Router
 * - TypeScript (strict mode)
 * - GSAP for cinematic animations
 * - Framer Motion for interactive transitions
 * - Tailwind CSS for styling
 * - Convex for data management
 * - View Transitions API for page transitions
 */

export const metadata: Metadata = {
  title: 'Cinematic Testing Page 4 | The Narrative of Silence',
  description:
    'A dark cinema aesthetic exploration inspired by Siena Film Foundation. Where silence becomes narrative and darkness becomes canvas.',
  openGraph: {
    title: 'Cinematic Testing Page 4 | The Narrative of Silence',
    description:
      'A dark cinema aesthetic exploration. Where cinema teaches UI design.',
  },
};

// Force dynamic rendering for Convex integration
export const dynamic = 'force-dynamic';

export default function CinematicTestingPage() {
  return (
    <>
      {/* Global Lighting System - The foundation of our visual language */}
      <LightingSystem />

      {/* Main Content - Layered above the lighting */}
      <div className="relative z-10">
        {/* Hero Section - The opening shot */}
        <CinematicHero />

        {/* Project Grid - The portfolio showcase */}
        <ProjectGrid />

        {/* Closing Credits Section */}
        <section className="relative py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="text-sm tracking-[0.3em] uppercase opacity-40 mb-8"
              style={{ fontFamily: 'Georgia, Garamond, serif' }}
            >
              Design Philosophy
            </div>

            <div className="space-y-12 text-lg md:text-xl leading-relaxed opacity-70">
              <p style={{ fontFamily: 'Georgia, Garamond, serif' }}>
                In cinema, the most powerful moments often happen in silence.
                The pause between dialogue. The held breath before revelation.
                The frame that lingers just a second too long.
              </p>

              <p style={{ fontFamily: 'Georgia, Garamond, serif' }}>
                Interface design can learn from this restraint. Not every pixel
                needs to shout. Not every element needs to move. Sometimes, the
                luxury of dark space—the willingness to let emptiness
                exist—communicates more than any amount of visual noise.
              </p>

              <p style={{ fontFamily: 'Georgia, Garamond, serif' }}>
                Color, when it arrives, becomes an event. A bloom of warmth in
                a monochrome world. This is not minimalism for aesthetics sake.
                This is minimalism as narrative device.
              </p>

              <div className="pt-12">
                <div className="h-[1px] w-48 bg-white/20 mx-auto mb-12" />
                <div
                  className="text-xs tracking-[0.4em] uppercase opacity-30"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                >
                  End Credits
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
