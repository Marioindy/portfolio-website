'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export function NeonWaveHero() {
  const waveRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!waveRef.current) return;

    // Animate wave paths with GSAP
    const paths = waveRef.current.querySelectorAll('path');

    paths.forEach((path, index) => {
      gsap.to(path, {
        attr: {
          d: generateWavePath(index, 20),
        },
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Glow pulse animation
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  function generateWavePath(offset: number, amplitude: number): string {
    const points: string[] = [];
    const width = 1200;
    const height = 400;
    const segments = 50;

    for (let i = 0; i <= segments; i++) {
      const x = (width / segments) * i;
      const y =
        height / 2 +
        Math.sin((i / segments) * Math.PI * 4 + offset) * amplitude +
        Math.cos((i / segments) * Math.PI * 2 + offset * 1.5) * (amplitude / 2);
      points.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`);
    }

    return points.join(' ');
  }

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Animated wave background */}
      <div ref={containerRef} className="absolute inset-0 opacity-60">
        <svg
          ref={waveRef}
          viewBox="0 0 1200 400"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="neonPink" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ff0080" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00ffff" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="neonPurple" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8000ff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a000ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8000ff" stopOpacity="0.8" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d={generateWavePath(0, 15)}
            fill="none"
            stroke="url(#neonPink)"
            strokeWidth="3"
            filter="url(#glow)"
          />
          <path
            d={generateWavePath(1, 18)}
            fill="none"
            stroke="url(#neonCyan)"
            strokeWidth="3"
            filter="url(#glow)"
          />
          <path
            d={generateWavePath(2, 12)}
            fill="none"
            stroke="url(#neonPurple)"
            strokeWidth="3"
            filter="url(#glow)"
          />
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-7xl md:text-9xl font-bold mb-6 tracking-wider"
          style={{
            fontFamily: 'monospace',
            textShadow: `
              0 0 10px #ff00ff,
              0 0 20px #ff00ff,
              0 0 30px #ff00ff,
              0 0 40px #00ffff,
              0 0 70px #00ffff,
              0 0 80px #00ffff,
              0 0 100px #00ffff
            `,
          }}
        >
          <span className="bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 text-transparent bg-clip-text">
            NEON WAVES
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-cyan-400 font-mono tracking-wide"
          style={{
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
          }}
        >
          {'[NEON_WAVES], [SYNTHWAVE_VIBES], [EXECUTION]'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="mt-12"
        >
          <button
            className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full
                     shadow-[0_0_20px_rgba(255,0,255,0.5),0_0_40px_rgba(0,255,255,0.3)]
                     hover:shadow-[0_0_30px_rgba(255,0,255,0.8),0_0_60px_rgba(0,255,255,0.5)]
                     transition-all duration-300 transform hover:scale-105"
          >
            ENTER THE GRID
          </button>
        </motion.div>
      </div>
    </div>
  );
}
