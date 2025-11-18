'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * HeroGlow - Hero section with neon purple glow effects
 * Features animated text with cyberpunk aesthetic
 */
export function HeroGlow() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP entrance animations
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1.2,
        ease: 'power4.out',
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Pulsing glow animation
      gsap.to(glowRef.current, {
        opacity: 0.6,
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-32 px-6 text-center">
      {/* Animated glow backdrop */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] opacity-40"
        aria-hidden="true"
      />

      {/* Title with neon glow */}
      <h1
        ref={titleRef}
        className="relative text-6xl md:text-8xl font-bold tracking-tight mb-6"
        style={{
          textShadow: `
            0 0 10px rgba(147, 51, 234, 0.8),
            0 0 20px rgba(147, 51, 234, 0.6),
            0 0 40px rgba(147, 51, 234, 0.4),
            0 0 80px rgba(147, 51, 234, 0.2)
          `,
        }}
      >
        <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
          CYBER_LAB
        </span>
      </h1>

      <p
        ref={subtitleRef}
        className="relative text-xl md:text-2xl text-cyan-300/80 font-light tracking-wide max-w-2xl mx-auto"
        style={{
          textShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
        }}
      >
        Exploring the intersection of{' '}
        <span className="text-purple-400 font-medium">neon aesthetics</span>,{' '}
        <span className="text-cyan-400 font-medium">3D geometry</span>, and{' '}
        <span className="text-purple-300 font-medium">digital minimalism</span>
      </p>

      {/* Decorative line elements */}
      <div className="mt-12 flex items-center justify-center gap-4">
        <div className="w-20 h-px bg-gradient-to-r from-transparent to-purple-500" />
        <div className="w-2 h-2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
        <div className="w-32 h-px bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500" />
        <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
        <div className="w-20 h-px bg-gradient-to-l from-transparent to-cyan-500" />
      </div>
    </section>
  );
}
