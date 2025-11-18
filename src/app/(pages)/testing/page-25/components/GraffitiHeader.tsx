'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function GraffitiHeader() {
  const spraypaintRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Spray paint drip animation
    if (spraypaintRef.current) {
      const drips = spraypaintRef.current.querySelectorAll('.drip');
      gsap.fromTo(
        drips,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: 'elastic.out(1, 0.5)',
        }
      );
    }

    // Tag rotation animation
    if (tagRef.current) {
      gsap.to(tagRef.current, {
        rotation: '+=2',
        yoyo: true,
        repeat: -1,
        duration: 2,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4"
    >
      {/* Background Spray Paint Splashes */}
      <div className="absolute inset-0">
        {/* Pink Splash */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 15 }}
          transition={{ duration: 0.8, ease: 'backOut' }}
          className="absolute top-20 left-10 w-64 h-64 bg-pink-500 rounded-full opacity-30 blur-3xl"
        />
        {/* Purple Splash */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'backOut' }}
          className="absolute top-32 right-20 w-80 h-80 bg-purple-600 rounded-full opacity-25 blur-3xl"
        />
        {/* Blue Splash */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 10 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'backOut' }}
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl"
        />
        {/* Yellow Splash */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -15 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'backOut' }}
          className="absolute bottom-32 right-1/4 w-56 h-56 bg-yellow-400 rounded-full opacity-25 blur-2xl"
        />
      </div>

      {/* Main Graffiti Text */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ y: -100, opacity: 0, rotate: -10 }}
          animate={{ y: 0, opacity: 1, rotate: -3 }}
          transition={{ duration: 0.8, ease: 'backOut' }}
          className="mb-8"
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none"
            style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              WebkitTextStroke: '3px #000',
              paintOrder: 'stroke fill',
              textShadow: `
                3px 3px 0 #ff006e,
                6px 6px 0 #8338ec,
                9px 9px 0 #3a86ff,
                12px 12px 0 #ffbe0b,
                15px 15px 20px rgba(0,0,0,0.5)
              `,
              transform: 'skew(-5deg, -2deg)',
            }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              URBAN
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0, rotate: 10 }}
          animate={{ y: 0, opacity: 1, rotate: 2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'backOut' }}
        >
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wide"
            style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              WebkitTextStroke: '2px #000',
              paintOrder: 'stroke fill',
              textShadow: `
                -3px -3px 0 #fb5607,
                -6px -6px 0 #ff006e,
                -9px -9px 0 #8338ec,
                -12px -12px 15px rgba(0,0,0,0.4)
              `,
              transform: 'skew(5deg, 1deg)',
            }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 via-orange-500 to-red-500">
              VIBES
            </span>
          </h2>
        </motion.div>

        {/* Spray Paint Drips */}
        <div ref={spraypaintRef} className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="drip w-2 bg-gradient-to-b from-purple-500 to-transparent opacity-60 blur-[1px]"
              style={{
                height: `${Math.random() * 60 + 40}px`,
                marginTop: `${Math.random() * 20}px`,
              }}
            />
          ))}
        </div>

        {/* Graffiti Tags */}
        <motion.div
          ref={tagRef}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute -top-10 -right-10 md:top-0 md:right-20"
        >
          <div
            className="px-4 py-2 bg-yellow-400 text-black font-black text-xl md:text-2xl border-4 border-black"
            style={{
              transform: 'rotate(12deg)',
              boxShadow: '4px 4px 0 rgba(0,0,0,0.8)',
              fontFamily: 'Impact, sans-serif',
            }}
          >
            FRESH!
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute -bottom-10 -left-10 md:bottom-10 md:left-20"
        >
          <div
            className="px-4 py-2 bg-pink-500 text-white font-black text-xl md:text-2xl border-4 border-black"
            style={{
              transform: 'rotate(-8deg)',
              boxShadow: '-4px 4px 0 rgba(0,0,0,0.8)',
              fontFamily: 'Impact, sans-serif',
            }}
          >
            STREET
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
