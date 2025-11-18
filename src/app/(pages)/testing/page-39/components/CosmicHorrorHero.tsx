'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export function CosmicHorrorHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    // Unsettling glitch effect
    const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    glitchTimeline
      .to(titleRef.current, {
        x: -5,
        duration: 0.05,
        ease: 'power1.inOut',
      })
      .to(titleRef.current, {
        x: 5,
        duration: 0.05,
      })
      .to(titleRef.current, {
        x: -3,
        duration: 0.05,
      })
      .to(titleRef.current, {
        x: 0,
        duration: 0.05,
      });

    // Random color shifts
    const colorShift = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    colorShift.to(titleRef.current, {
      textShadow:
        '2px 2px 0 #8b5cf6, -2px -2px 0 #ec4899, 0 0 20px rgba(139, 92, 246, 0.5)',
      duration: 0.1,
      repeat: 3,
      yoyo: true,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          {/* Disturbing title with mixed typography */}
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
            style={{
              fontFamily: 'Georgia, Times New Roman, serif',
              color: '#c084fc',
              textShadow: '3px 3px 0 #7c3aed, -1px -1px 0 #ec4899',
            }}
          >
            <span className="block text-purple-300 font-mono text-4xl md:text-5xl mb-2 tracking-widest">
              [COSMIC_HORROR]
            </span>
            <span className="block" style={{ fontFamily: 'Courier New, monospace' }}>
              THE
            </span>
            <span className="block text-pink-400" style={{ fontFamily: 'Impact, sans-serif' }}>
              UNKNOWABLE
            </span>
            <span className="block text-cyan-400 italic" style={{ fontFamily: 'Palatino, serif' }}>
              VOID
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-purple-200 mb-8 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              fontFamily: 'Garamond, serif',
              textShadow: '0 0 10px rgba(139, 92, 246, 0.3)',
            }}
          >
            Beyond comprehension, beyond reason, beyond reality...
          </motion.p>

          {/* Unsettling subtitle */}
          <motion.div
            className="text-base md:text-lg text-pink-300 font-mono opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            [ELDRITCH_GEOMETRY] :: [EXECUTION]
          </motion.div>
        </motion.div>

        {/* Pulsating void circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-96 h-96 rounded-full bg-purple-500 blur-3xl" />
        </motion.div>
      </div>

      {/* Scroll indicator with unsettling animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-purple-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
