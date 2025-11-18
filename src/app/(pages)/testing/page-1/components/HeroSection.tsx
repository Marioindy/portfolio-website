'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * [CONCEPT] HeroSection: Typography as Dimensional Space
 *
 * The text doesn't decorate—it dominates.
 * Each letter is architecture, not ornament.
 * Scale creates emotional gravity.
 */
export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      // [ITERATION] Letter-by-letter materialization
      // Not a fade—a reveal that suggests weight, substance, presence
      const tl = gsap.timeline({
        defaults: {
          ease: 'power4.out',
        },
      });

      // Title characters reveal with stagger
      tl.from(charsRef.current, {
        opacity: 0,
        y: 200,
        rotationX: -90,
        transformOrigin: '50% 50%',
        stagger: {
          each: 0.03,
          from: 'start',
        },
        duration: 1.2,
      });

      // Subtitle slides up with opacity
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 1,
        },
        '-=0.6'
      );

      // [REFINEMENT] Parallax effect on scroll
      gsap.to(titleRef.current, {
        y: -150,
        opacity: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(subtitleRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Split text into individual characters for animation
  const splitText = (text: string): JSX.Element[] => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        ref={(el) => {
          if (el) charsRef.current[index] = el;
        }}
        className="inline-block"
        style={{
          // Preserve whitespace
          whiteSpace: char === ' ' ? 'pre' : 'normal',
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center px-6 py-20 md:px-12"
    >
      {/* [VISION] Oversized Typography - The Message IS the Medium */}
      <div className="relative z-10 max-w-7xl">
        <h1
          ref={titleRef}
          className="mb-8 font-serif text-7xl font-black leading-[0.9] text-black md:text-9xl lg:text-[12rem] xl:text-[16rem]"
          style={{
            // Additional emphasis through text-shadow
            textShadow: '0 4px 30px rgba(0, 0, 0, 0.15)',
            letterSpacing: '-0.05em',
          }}
        >
          {splitText('IMMERSIVE')}
        </h1>

        <p
          ref={subtitleRef}
          className="max-w-2xl font-sans text-lg font-light text-white/90 md:text-2xl lg:text-3xl"
          style={{
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
          }}
        >
          Where typography transcends decoration and becomes dimensional space.
          Scale is emotion. Contrast is rhythm. Silence is loud.
        </p>
      </div>

      {/* [CRITIQUE] Subtle gradient overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.2) 100%)',
        }}
      />
    </section>
  );
}
