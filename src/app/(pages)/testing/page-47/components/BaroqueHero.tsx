'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export function BaroqueHero() {
  const ornamentRefs = useRef<(SVGSVGElement | null)[]>([]);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate ornamental flourishes
    ornamentRefs.current.forEach((ornament, index) => {
      if (!ornament) return;

      gsap.from(ornament, {
        opacity: 0,
        scale: 0.5,
        rotation: index % 2 === 0 ? -45 : 45,
        duration: 1.5,
        delay: index * 0.2,
        ease: 'elastic.out(1, 0.5)',
      });

      // Continuous floating animation
      gsap.to(ornament, {
        y: index % 2 === 0 ? -10 : 10,
        rotation: index % 2 === 0 ? 5 : -5,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Animate golden frame
    if (frameRef.current) {
      gsap.to(frameRef.current, {
        boxShadow: `
          0 0 20px rgba(255, 215, 0, 0.3),
          0 0 40px rgba(255, 215, 0, 0.2),
          inset 0 0 30px rgba(255, 215, 0, 0.1)
        `,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center px-4">
      {/* Ornamental corner decorations */}
      <div className="absolute top-8 left-8 w-32 h-32 md:w-48 md:h-48">
        <svg
          ref={(el) => {
            ornamentRefs.current[0] = el;
          }}
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
            <filter id="baroque-glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 10 10 Q 50 10 70 30 T 90 70 Q 90 100 70 120 T 30 160 Q 10 160 10 140 L 10 10 Z
               M 30 30 Q 40 40 40 50 T 30 70 Q 20 70 20 60 L 20 30 Z
               M 60 60 Q 70 70 70 80 T 60 100 Q 50 100 50 90 L 50 60 Z"
            fill="url(#goldGradient1)"
            filter="url(#baroque-glow)"
            opacity="0.9"
          />
          <path
            d="M 100 100 C 120 80, 140 80, 160 100 C 180 120, 180 140, 160 160 C 140 180, 120 180, 100 160 C 80 140, 80 120, 100 100"
            fill="none"
            stroke="url(#goldGradient1)"
            strokeWidth="2"
            filter="url(#baroque-glow)"
          />
        </svg>
      </div>

      <div className="absolute top-8 right-8 w-32 h-32 md:w-48 md:h-48 transform scale-x-[-1]">
        <svg
          ref={(el) => {
            ornamentRefs.current[1] = el;
          }}
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          <path
            d="M 10 10 Q 50 10 70 30 T 90 70 Q 90 100 70 120 T 30 160 Q 10 160 10 140 L 10 10 Z
               M 30 30 Q 40 40 40 50 T 30 70 Q 20 70 20 60 L 20 30 Z
               M 60 60 Q 70 70 70 80 T 60 100 Q 50 100 50 90 L 50 60 Z"
            fill="url(#goldGradient1)"
            filter="url(#baroque-glow)"
            opacity="0.9"
          />
          <path
            d="M 100 100 C 120 80, 140 80, 160 100 C 180 120, 180 140, 160 160 C 140 180, 120 180, 100 160 C 80 140, 80 120, 100 100"
            fill="none"
            stroke="url(#goldGradient1)"
            strokeWidth="2"
            filter="url(#baroque-glow)"
          />
        </svg>
      </div>

      <div className="absolute bottom-8 left-8 w-32 h-32 md:w-48 md:h-48 transform scale-y-[-1]">
        <svg
          ref={(el) => {
            ornamentRefs.current[2] = el;
          }}
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          <path
            d="M 10 10 Q 50 10 70 30 T 90 70 Q 90 100 70 120 T 30 160 Q 10 160 10 140 L 10 10 Z
               M 30 30 Q 40 40 40 50 T 30 70 Q 20 70 20 60 L 20 30 Z
               M 60 60 Q 70 70 70 80 T 60 100 Q 50 100 50 90 L 50 60 Z"
            fill="url(#goldGradient1)"
            filter="url(#baroque-glow)"
            opacity="0.9"
          />
          <path
            d="M 100 100 C 120 80, 140 80, 160 100 C 180 120, 180 140, 160 160 C 140 180, 120 180, 100 160 C 80 140, 80 120, 100 100"
            fill="none"
            stroke="url(#goldGradient1)"
            strokeWidth="2"
            filter="url(#baroque-glow)"
          />
        </svg>
      </div>

      <div className="absolute bottom-8 right-8 w-32 h-32 md:w-48 md:h-48 transform scale-[-1]">
        <svg
          ref={(el) => {
            ornamentRefs.current[3] = el;
          }}
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          <path
            d="M 10 10 Q 50 10 70 30 T 90 70 Q 90 100 70 120 T 30 160 Q 10 160 10 140 L 10 10 Z
               M 30 30 Q 40 40 40 50 T 30 70 Q 20 70 20 60 L 20 30 Z
               M 60 60 Q 70 70 70 80 T 60 100 Q 50 100 50 90 L 50 60 Z"
            fill="url(#goldGradient1)"
            filter="url(#baroque-glow)"
            opacity="0.9"
          />
          <path
            d="M 100 100 C 120 80, 140 80, 160 100 C 180 120, 180 140, 160 160 C 140 180, 120 180, 100 160 C 80 140, 80 120, 100 100"
            fill="none"
            stroke="url(#goldGradient1)"
            strokeWidth="2"
            filter="url(#baroque-glow)"
          />
        </svg>
      </div>

      {/* Hero content with ornate frame */}
      <div className="relative z-10 text-center max-w-5xl">
        <div
          ref={frameRef}
          className="relative p-12 md:p-20 rounded-3xl border-8 border-double backdrop-blur-sm"
          style={{
            borderColor: '#FFD700',
            background: `
              linear-gradient(135deg, rgba(139, 69, 19, 0.3) 0%, rgba(101, 67, 33, 0.5) 100%),
              radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 70%)
            `,
          }}
        >
          {/* Inner ornamental border */}
          <div className="absolute inset-4 border-2 border-amber-500/30 rounded-2xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <h1
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
              style={{
                fontFamily: 'Georgia, serif',
                textShadow: `
                  2px 2px 4px rgba(0, 0, 0, 0.8),
                  0 0 20px rgba(255, 215, 0, 0.5),
                  0 0 40px rgba(255, 215, 0, 0.3)
                `,
              }}
            >
              <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 text-transparent bg-clip-text">
                BAROQUE
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400 text-transparent bg-clip-text text-7xl md:text-9xl">
                ELEGANCE
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <span className="text-amber-300 text-2xl">✦</span>
              <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xl md:text-2xl text-amber-200 font-serif italic leading-relaxed mb-12"
            >
              {'[BAROQUE_ORNATE], [MAXIMUM_ELEGANCE], [EXECUTION]'}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-5 text-lg font-bold text-amber-950 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500
                       rounded-full overflow-hidden group"
              style={{
                boxShadow: `
                  0 4px 20px rgba(255, 215, 0, 0.4),
                  0 8px 40px rgba(255, 215, 0, 0.2),
                  inset 0 1px 2px rgba(255, 255, 255, 0.5)
                `,
              }}
            >
              <span className="relative z-10 font-serif">ENTER THE PALACE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
