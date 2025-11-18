'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function ChromaticHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      // GSAP stagger animation for title letters
      const letters = titleRef.current.querySelectorAll('.letter');
      gsap.fromTo(
        letters,
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.05,
          ease: 'elastic.out(1, 0.5)',
        }
      );
    }

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, delay: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  const title = 'CHROMATIC REBELLION';
  const letters = title.split('').map((char, i) => (
    <span
      key={i}
      className="letter inline-block"
      style={{
        color: i % 3 === 0 ? '#FF006E' : i % 3 === 1 ? '#00F0FF' : '#CCFF00',
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Chromatic aberration background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-neon-pink opacity-20 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-neon-cyan opacity-20 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="relative z-10 text-center max-w-6xl">
        {/* Main title with chromatic aberration */}
        <h1
          ref={titleRef}
          className="text-7xl md:text-9xl font-black tracking-tighter mb-8 perspective-1000"
          style={{
            textShadow: '3px 3px 0 #FF006E, -3px -3px 0 #00F0FF, 0 0 40px rgba(255,0,110,0.5)',
          }}
        >
          {letters}
        </h1>

        {/* Subtitle with gradient and pulse */}
        <motion.p
          ref={subtitleRef}
          className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-neon-lime via-neon-cyan to-neon-magenta bg-clip-text text-transparent animate-neonPulse"
          style={{
            backgroundSize: '200% auto',
          }}
        >
          Where color saturation creates emotional urgency
        </motion.p>

        {/* Animated taglines */}
        <div className="mt-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-neon-lime text-xl md:text-2xl font-semibold animate-chromaticGlitch"
          >
            Neon is rebellion against minimalism's tyranny
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-neon-cyan text-xl md:text-2xl font-semibold"
            style={{
              textShadow: '2px 2px 0 #FF00FF, -2px -2px 0 #CCFF00',
            }}
          >
            Can chaos feel organized?
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-neon-hotpink text-xl md:text-2xl font-semibold"
            style={{
              textShadow: '0 0 20px #FF1493, 0 0 40px #FF00FF',
            }}
          >
            Chromatic harmony and discord
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="inline-flex flex-col items-center gap-2">
            <span className="text-neon-lime text-sm font-semibold tracking-widest">
              EXPLORE
            </span>
            <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-neon-cyan rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
