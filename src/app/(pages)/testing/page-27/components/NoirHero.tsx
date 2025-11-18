'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

/**
 * Film Noir Hero Section with dramatic lighting and shadows
 */
export function NoirHero() {
  const heroRef = useRef<HTMLElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dramatic entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        '.noir-title',
        {
          opacity: 0,
          y: 100,
          rotationX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          stagger: 0.2,
        }
      ).fromTo(
        '.noir-subtitle',
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        },
        '-=0.5'
      );

      // Venetian blind shadow effect
      gsap.to(shadowRef.current, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Dramatic spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-zinc-800/50 via-black to-black" />

      {/* Venetian blind shadows */}
      <div
        ref={shadowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            rgba(0, 0, 0, 0.8) 40px,
            rgba(0, 0, 0, 0.8) 50px
          )`,
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8">
              <span className="block noir-title text-white drop-shadow-2xl tracking-tight">
                The
              </span>
              <span className="block noir-title text-white drop-shadow-2xl tracking-tight">
                Mysterious
              </span>
              <span className="block noir-title text-zinc-300 drop-shadow-2xl tracking-tight italic">
                Case
              </span>
            </h1>

            <p className="noir-subtitle text-xl md:text-2xl text-zinc-400 font-serif italic max-w-2xl border-l-4 border-white pl-6 mb-12">
              "In the city's darkest corners, where shadows dance and secrets
              lurk, only the truth can pierce through the veil of deception..."
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.button
                className="px-10 py-4 bg-white text-black font-serif font-bold text-lg tracking-wide hover:bg-zinc-200 transition-all duration-300 shadow-2xl relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Investigate</span>
                <motion.div
                  className="absolute inset-0 bg-zinc-800"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                className="px-10 py-4 border-2 border-white text-white font-serif font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-300 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enter the Shadows
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Silhouette figure */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-30"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50C100 50 80 60 80 80V120C80 120 70 130 70 150V250C70 250 90 280 100 280C110 280 130 250 130 250V150C130 150 120 130 120 120V80C120 60 100 50 100 50Z"
            fill="currentColor"
            className="text-black"
          />
          <circle cx="100" cy="40" r="25" fill="currentColor" className="text-black" />
          <path
            d="M85 45C85 45 60 80 60 100L70 130"
            stroke="currentColor"
            strokeWidth="8"
            className="text-black"
          />
        </svg>
      </motion.div>
    </section>
  );
}
