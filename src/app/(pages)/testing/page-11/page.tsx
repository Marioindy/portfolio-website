'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Force dynamic rendering for Convex integration
export const dynamic = 'force-dynamic';

/**
 * GEOMETRIC_LUXE:
 * Art Deco principles - symmetry, geometry, luxury.
 * Gold and black palette. Bold sans-serif hierarchy.
 * Patterns from the Machine Age. Glamour through precision.
 *
 * ART_DECO_THEORY:
 * Streamlined modernity meets classical elegance.
 * Geometric abstraction as ornamentation.
 * Luxury democratized through industrial design.
 */

export default function ArtDecoPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // View Transitions API setup
    if ('startViewTransition' in document) {
      console.log('[GEOMETRIC_LUXE] View Transitions enabled');
    }

    // GSAP entrance animations with Art Deco flair
    const ctx = gsap.context(() => {
      // Staggered geometric reveal
      gsap.from('[data-deco-element]', {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Gold accent shimmer
      gsap.to('[data-gold-accent]', {
        backgroundPosition: '200% center',
        duration: 3,
        repeat: -1,
        ease: 'none',
      });

      // Geometric pattern rotation
      gsap.to('[data-geometric-pattern]', {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, containerRef);

    console.log('[ART_DECO_THEORY] Geometric systems initialized');
    console.log('[EXECUTION] Production-ready Art Deco environment active');

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white relative overflow-hidden"
      style={{
        fontFamily: '"Futura", "Century Gothic", "Avant Garde", sans-serif',
      }}
    >
      {/* Art Deco Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="art-deco-grid"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 100 50 L 50 100 L 0 50 Z"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.5"
              />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              <rect x="30" y="30" width="40" height="40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#art-deco-grid)" />
        </svg>
      </div>

      {/* Header - Geometric luxury */}
      <header
        data-deco-element
        className="relative z-10 border-b-2 border-[#D4AF37] py-8"
        style={{ viewTransitionName: 'deco-header' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4">
            {/* Left geometric accent */}
            <svg width="60" height="60" viewBox="0 0 60 60">
              <polygon points="30,5 55,30 30,55 5,30" fill="none" stroke="#D4AF37" strokeWidth="2" />
              <circle cx="30" cy="30" r="15" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            </svg>

            <div className="text-center">
              <h1
                className="text-6xl font-black uppercase tracking-widest mb-2"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% auto',
                }}
                data-gold-accent
              >
                PAGE XI
              </h1>
              <div className="flex items-center gap-4 justify-center">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Art Deco Luxe
                </p>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              </div>
            </div>

            {/* Right geometric accent */}
            <svg width="60" height="60" viewBox="0 0 60 60">
              <polygon points="30,5 55,30 30,55 5,30" fill="none" stroke="#D4AF37" strokeWidth="2" />
              <circle cx="30" cy="30" r="15" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section - Symmetrical luxury */}
        <section
          ref={heroRef}
          data-deco-element
          className="mb-24 text-center relative"
        >
          {/* Geometric sunburst background */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20"
            data-geometric-pattern
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              {Array.from({ length: 24 }).map((_, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="0"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                  transform={`rotate(${i * 15} 100 100)`}
                />
              ))}
              <circle cx="100" cy="100" r="80" fill="none" stroke="#D4AF37" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="1" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#D4AF37" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2
              className="text-8xl font-black uppercase leading-none mb-8"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.1em',
              }}
            >
              GEOMETRIC
              <br />
              LUXE
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300 tracking-wide">
              Where precision meets opulence. The Machine Age rendered in gold and geometry.
              Streamlined modernity embracing classical elegance.
            </p>
          </div>
        </section>

        {/* Feature Grid - Symmetrical layout */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              data-deco-element
              className="relative group"
            >
              <div className="border-2 border-[#D4AF37] p-8 bg-gradient-to-b from-black via-gray-900 to-black h-full hover:border-[#FFD700] transition-colors duration-500">
                <div className="flex justify-center mb-6">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <polygon
                      points="40,10 70,40 40,70 10,40"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="2"
                    />
                    <polygon
                      points="40,20 60,40 40,60 20,40"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                    />
                    <circle cx="40" cy="40" r="10" fill="#D4AF37" opacity="0.3" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black uppercase text-center mb-4 text-[#D4AF37]">
                  Precision
                </h3>
                <p className="text-sm text-gray-400 text-center leading-relaxed">
                  Mathematical perfection in every angle. Geometric abstraction as the new
                  ornamentation.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              data-deco-element
              className="relative group"
            >
              <div className="border-2 border-[#D4AF37] p-8 bg-gradient-to-b from-gray-900 via-black to-gray-900 h-full hover:border-[#FFD700] transition-colors duration-500">
                <div className="flex justify-center mb-6">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <rect
                      x="15"
                      y="15"
                      width="50"
                      height="50"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="2"
                    />
                    <rect
                      x="25"
                      y="25"
                      width="30"
                      height="30"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                    />
                    <circle cx="40" cy="40" r="8" fill="#D4AF37" opacity="0.3" />
                    <line x1="40" y1="15" x2="40" y2="65" stroke="#D4AF37" strokeWidth="1" />
                    <line x1="15" y1="40" x2="65" y2="40" stroke="#D4AF37" strokeWidth="1" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black uppercase text-center mb-4 text-[#D4AF37]">
                  Symmetry
                </h3>
                <p className="text-sm text-gray-400 text-center leading-relaxed">
                  Balance in all things. Mirror perfection. The classical harmony of proportion.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              data-deco-element
              className="relative group"
            >
              <div className="border-2 border-[#D4AF37] p-8 bg-gradient-to-b from-black via-gray-900 to-black h-full hover:border-[#FFD700] transition-colors duration-500">
                <div className="flex justify-center mb-6">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="30" fill="none" stroke="#D4AF37" strokeWidth="2" />
                    <circle cx="40" cy="40" r="20" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                    <circle cx="40" cy="40" r="10" fill="#D4AF37" opacity="0.3" />
                    {Array.from({ length: 8 }).map((_, i) => (
                      <line
                        key={i}
                        x1="40"
                        y1="40"
                        x2="40"
                        y2="10"
                        stroke="#D4AF37"
                        strokeWidth="0.5"
                        transform={`rotate(${i * 45} 40 40)`}
                      />
                    ))}
                  </svg>
                </div>
                <h3 className="text-3xl font-black uppercase text-center mb-4 text-[#D4AF37]">
                  Luxury
                </h3>
                <p className="text-sm text-gray-400 text-center leading-relaxed">
                  Opulence through industrial means. Glamour democratized. The golden ratio
                  realized.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Showcase */}
        <section data-deco-element className="mb-24">
          <div className="border-4 border-[#D4AF37] p-12 relative overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-r-2 border-b-2 border-[#D4AF37]" />
            <div className="absolute top-0 right-0 w-16 h-16 border-l-2 border-b-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-r-2 border-t-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-l-2 border-t-2 border-[#D4AF37]" />

            <div className="text-center mb-8">
              <h2
                className="text-6xl font-black uppercase mb-4"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '0.2em',
                }}
              >
                TYPOGRAPHIC HIERARCHY
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent max-w-md mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-5xl font-black uppercase text-[#D4AF37] mb-2">Display</h3>
                <p className="text-sm text-gray-400 tracking-widest">BOLD • GEOMETRIC • MODERN</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-light uppercase text-[#FFD700] mb-2">Accent</h4>
                <p className="text-sm text-gray-400 tracking-widest">LIGHT • ELEGANT • REFINED</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Visualization - Art Deco Style */}
        <section data-deco-element className="mb-24">
          <h2 className="text-5xl font-black uppercase text-center mb-12 text-[#D4AF37]">
            TECHNICAL SPECIFICATIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-[#D4AF37] p-8 bg-gradient-to-br from-gray-900 to-black">
              <h3 className="text-3xl font-black uppercase mb-6 text-[#FFD700]">Stack</h3>
              <dl className="space-y-4">
                {[
                  { term: 'FRAMEWORK', def: 'Next.js 15 + React 18' },
                  { term: 'LANGUAGE', def: 'TypeScript (Strict)' },
                  { term: 'STYLING', def: 'Tailwind CSS' },
                  { term: 'ANIMATION', def: 'GSAP + Framer Motion' },
                  { term: 'DATABASE', def: 'Convex' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <dt className="text-sm font-black uppercase text-[#D4AF37] w-32">
                      {item.term}
                    </dt>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
                    <dd className="text-sm text-gray-300">{item.def}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-2 border-[#D4AF37] p-8 bg-gradient-to-bl from-gray-900 to-black">
              <h3 className="text-3xl font-black uppercase mb-6 text-[#FFD700]">Features</h3>
              <ul className="space-y-4">
                {[
                  'View Transitions API',
                  'Geometric SVG Patterns',
                  'Gold Gradient Accents',
                  'Symmetrical Layouts',
                  'Responsive Design',
                  'Production-Ready',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <polygon
                        points="12,4 20,12 12,20 4,12"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="12" r="3" fill="#D4AF37" />
                    </svg>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section data-deco-element className="mb-24">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#D4AF37] opacity-30 text-9xl font-serif">
              "
            </div>
            <blockquote className="text-3xl font-light italic text-gray-300 leading-relaxed mb-8 relative z-10">
              The modern spirit is a spirit of geometry, a spirit of construction and synthesis.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <cite className="text-sm uppercase tracking-widest text-[#D4AF37] not-italic">
                Art Deco Manifesto
              </cite>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>
          </div>
        </section>

        {/* Footer - Execution Log */}
        <footer data-deco-element className="border-t-2 border-[#D4AF37] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-black uppercase text-[#D4AF37] mb-4">
                [GEOMETRIC_LUXE]
              </h3>
              <p className="text-sm text-gray-400">Patterns initialized</p>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase text-[#D4AF37] mb-4">
                [ART_DECO_THEORY]
              </h3>
              <p className="text-sm text-gray-400">Principles applied</p>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase text-[#D4AF37] mb-4">[EXECUTION]</h3>
              <p className="text-sm text-gray-400">Production ready</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <polygon
                  points="20,5 35,20 20,35 5,20"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                />
                <circle cx="20" cy="20" r="8" fill="#D4AF37" opacity="0.3" />
              </svg>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Testing Environment • 2025
              </p>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <polygon
                  points="20,5 35,20 20,35 5,20"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                />
                <circle cx="20" cy="20" r="8" fill="#D4AF37" opacity="0.3" />
              </svg>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
