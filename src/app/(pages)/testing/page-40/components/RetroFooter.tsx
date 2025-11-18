'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export function RetroFooter() {
  const ornamentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ornamentRef.current) return;

    // Gentle rotation animation for the center ornament
    gsap.to(ornamentRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });
  }, []);

  return (
    <footer className="relative py-16 px-4 md:px-8 bg-gradient-to-b from-amber-100 via-orange-100 to-amber-200">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0">
        <svg className="w-full h-4" preserveAspectRatio="none" viewBox="0 0 1000 20">
          <defs>
            <pattern
              id="topBorder"
              x="0"
              y="0"
              width="50"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <polygon points="0,20 25,0 50,20" fill="#d97706" />
            </pattern>
          </defs>
          <rect width="1000" height="20" fill="url(#topBorder)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Main ornamental design */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <div className="relative w-32 h-32">
            {/* Center rotating ornament */}
            <div
              ref={ornamentRef}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 border-4 border-amber-700 rotate-45">
                <div className="absolute inset-2 border-2 border-orange-600 rotate-45" />
              </div>
            </div>

            {/* Corner circles */}
            {[0, 90, 180, 270].map((rotation, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-50px)`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          style={{
            fontFamily: 'Didot, Georgia, serif',
            letterSpacing: '0.15em',
            textShadow: '2px 2px 0 #fbbf24',
          }}
        >
          THE ROARING TWENTIES
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-orange-800 italic mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false }}
          style={{ fontFamily: 'Palatino, serif' }}
        >
          An age of jazz, elegance, and timeless design
        </motion.p>

        {/* Divider with ornaments */}
        <motion.div
          className="flex justify-center items-center gap-6 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: false }}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-amber-700" />
          <div className="flex gap-3">
            <div className="w-3 h-3 rotate-45 bg-amber-700" />
            <div className="w-3 h-3 rounded-full bg-orange-700" />
            <div className="w-3 h-3 rotate-45 bg-amber-700" />
          </div>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-amber-700" />
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: false }}
        >
          {['Art Deco', 'Typography', 'Jazz Colors', 'Elegance'].map(
            (item, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-xl font-bold text-amber-800 tracking-widest"
                  style={{ fontFamily: 'Didot, Georgia, serif' }}
                >
                  {item}
                </div>
              </div>
            )
          )}
        </motion.div>

        {/* Final log statement */}
        <motion.div
          className="text-sm md:text-base text-amber-700 font-mono mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: false }}
        >
          [JAZZ_AGE_ELEGANCE] :: [RETRO_WARMTH] :: [EXECUTION]
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="flex justify-center items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: false }}
        >
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-amber-700 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>

        {/* Copyright text */}
        <motion.p
          className="mt-8 text-sm text-amber-800/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          viewport={{ once: false }}
          style={{ fontFamily: 'Georgia, serif' }}
        >
          A tribute to the golden era of design
        </motion.p>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-4" preserveAspectRatio="none" viewBox="0 0 1000 20">
          <defs>
            <pattern
              id="bottomBorder"
              x="0"
              y="0"
              width="50"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <polygon points="0,0 25,20 50,0" fill="#d97706" />
            </pattern>
          </defs>
          <rect width="1000" height="20" fill="url(#bottomBorder)" />
        </svg>
      </div>
    </footer>
  );
}
