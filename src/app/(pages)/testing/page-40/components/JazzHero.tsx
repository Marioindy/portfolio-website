'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export function JazzHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ornamentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!titleRef.current) return;

    // Smooth jazz entrance animation
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
      }
    );

    // Animate art deco ornaments
    ornamentRefs.current.forEach((ref, index) => {
      if (!ref) return;
      gsap.fromTo(
        ref,
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          delay: 0.5 + index * 0.2,
          ease: 'back.out(1.7)',
        }
      );
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Art deco background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <pattern
              id="artDecoPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 75 50 L 50 100 L 25 50 Z"
                fill="#d97706"
                opacity="0.3"
              />
              <circle cx="50" cy="50" r="10" fill="#92400e" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#artDecoPattern)" />
        </svg>
      </div>

      {/* Warm glow effect */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-amber-400/30 via-orange-300/20 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Top art deco ornament */}
        <motion.div
          ref={(el) => {
            ornamentRefs.current[0] = el;
          }}
          className="mb-8 flex justify-center"
        >
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
        </motion.div>

        {/* Main title with elegant typography */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
          style={{
            fontFamily: 'Didot, Georgia, serif',
            color: '#92400e',
            textShadow: '2px 2px 0 #fbbf24, 4px 4px 0 #d97706',
            letterSpacing: '0.05em',
          }}
        >
          <span className="block text-amber-700">THE</span>
          <span className="block text-orange-800">JAZZ</span>
          <span className="block text-amber-900">AGE</span>
        </h1>

        {/* Subtitle with art deco flair */}
        <motion.div
          className="text-xl md:text-2xl text-amber-800 mb-8 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            fontFamily: 'Palatino, serif',
            fontStyle: 'italic',
          }}
        >
          An Era of Elegance & Sophistication
        </motion.div>

        {/* Log statement */}
        <motion.div
          className="text-sm md:text-base text-amber-700 font-mono mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          [JAZZ_AGE_ELEGANCE] :: [RETRO_WARMTH] :: [EXECUTION]
        </motion.div>

        {/* Bottom art deco ornament */}
        <motion.div
          ref={(el) => {
            ornamentRefs.current[1] = el;
          }}
          className="mt-12 flex justify-center items-center gap-4"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent to-amber-700" />
          <div className="w-3 h-3 rotate-45 bg-amber-700" />
          <div className="w-24 h-1 bg-gradient-to-l from-transparent to-amber-700" />
        </motion.div>

        {/* Decorative circles */}
        <div className="mt-8 flex justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              ref={(el) => {
                ornamentRefs.current[i + 2] = el;
              }}
              className="w-4 h-4 rounded-full border-2 border-amber-700"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #d97706)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-amber-800 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-2 bg-amber-800 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-xs text-amber-800 tracking-widest font-serif">
            SCROLL
          </span>
        </div>
      </motion.div>
    </section>
  );
}
