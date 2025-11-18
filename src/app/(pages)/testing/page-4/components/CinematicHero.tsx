'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  // Note: SplitText is a premium plugin. Using word-based animation instead.
}

/**
 * CINEMATIC HERO
 *
 * The opening shot. The establishing frame.
 * In cinema, the first image tells you everything about the film's language.
 *
 * Typography Hierarchy (inspired by film title cards):
 * - Overline: Small serif, tracking wide (like production company credits)
 * - Headline: Large serif, dramatic reveal (the film title)
 * - Subhead: Medium sans, supporting role (the tagline)
 *
 * Animation Philosophy:
 * Letters don't "appear"—they emerge from darkness, like objects
 * revealed by a slow fade-in of house lights.
 */

export function CinematicHero() {
  const heroRef = useRef<HTMLElement>(null);
  const overlineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline with cinematic pacing
      const tl = gsap.timeline({
        defaults: {
          ease: 'power4.inOut',
        },
      });

      // OVERLINE: Fade in slowly (like opening credits)
      tl.fromTo(
        overlineRef.current,
        {
          opacity: 0,
          y: -20,
          letterSpacing: '0.5em',
        },
        {
          opacity: 0.6,
          y: 0,
          letterSpacing: '0.3em',
          duration: 2,
        }
      );

      // HEADLINE: Character-by-character reveal
      // Since SplitText is premium, we'll use word-based animation
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        tl.fromTo(
          words,
          {
            opacity: 0,
            y: 100,
            rotationX: -90,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            stagger: 0.15,
          },
          '-=1.5'
        );
      }

      // DIVIDER: Horizontal wipe (like a film wipe transition)
      tl.fromTo(
        dividerRef.current,
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.out',
        },
        '-=0.8'
      );

      // SUBHEAD: Soft fade (the supporting text)
      tl.fromTo(
        subheadRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 0.8,
          y: 0,
          duration: 1,
        },
        '-=0.6'
      );

      // Parallax on scroll (like a slow dolly-out shot)
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
          y: 150,
          opacity: 0.3,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12"
    >
      <div className="max-w-6xl w-full z-10">
        {/* OVERLINE: Production credit style */}
        <div
          ref={overlineRef}
          className="text-center mb-8 font-serif text-sm md:text-base tracking-[0.3em] uppercase opacity-0"
          style={{ fontFamily: 'Georgia, Garamond, serif' }}
        >
          A Study in Absence
        </div>

        {/* HEADLINE: Film title card */}
        <h1
          ref={headlineRef}
          className="text-center mb-12 leading-[0.9] opacity-0"
          style={{ fontFamily: 'Georgia, Garamond, serif' }}
        >
          <span className="word block text-6xl md:text-8xl lg:text-9xl font-light mb-2">
            The
          </span>
          <span className="word block text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tight">
            Narrative
          </span>
          <span className="word block text-6xl md:text-8xl lg:text-9xl font-light mt-2">
            of Silence
          </span>
        </h1>

        {/* DIVIDER: Cinematic separator */}
        <div className="flex justify-center mb-12">
          <div
            ref={dividerRef}
            className="h-[1px] w-64 md:w-96 bg-white opacity-0"
            style={{ transformOrigin: 'center' }}
          />
        </div>

        {/* SUBHEAD: Tagline */}
        <p
          ref={subheadRef}
          className="text-center text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-0"
          style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
        >
          Where cinema teaches interface design.
          <br />
          Where darkness becomes the canvas.
          <br />
          Where restraint speaks louder than noise.
        </p>
      </div>

      {/* Scroll indicator - subtle invitation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-700">
          <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
          <div className="w-[1px] h-16 bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
}
