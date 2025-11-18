'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function IndustrialHeader() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with metallic shimmer effect
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Create shimmer effect
      gsap.to(titleRef.current, {
        backgroundPosition: '200% center',
        duration: 3,
        repeat: -1,
        ease: 'none',
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      });

      // Decorative elements
      gsap.from(decorRef.current, {
        scaleX: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power3.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="text-center mb-16">
      {/* Industrial decorative top bar */}
      <div
        ref={decorRef}
        className="mx-auto w-full max-w-4xl h-2 mb-8 bg-gradient-to-r from-transparent via-amber-700 to-transparent rounded-full shadow-lg"
      />

      <h1
        ref={titleRef}
        className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
        style={{
          background: 'linear-gradient(90deg, #B87333 0%, #F4D03F 25%, #B87333 50%, #CD7F32 75%, #B87333 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 4px 20px rgba(184, 115, 51, 0.5)',
          fontFamily: 'ui-serif, Georgia, serif',
          letterSpacing: '-0.05em',
        }}
      >
        STEAMPUNK
      </h1>

      <p
        ref={subtitleRef}
        className="text-xl md:text-2xl text-amber-200 font-mono tracking-wider uppercase mb-4"
      >
        Industrial • Retro-Futuristic • Mechanical
      </p>

      <div className="flex items-center justify-center gap-4 text-amber-400/60 font-mono text-sm">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          Bronze Tones
        </span>
        <span>•</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          Copper Gradients
        </span>
        <span>•</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
          Vintage Machinery
        </span>
      </div>
    </div>
  );
}
