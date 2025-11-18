'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GridCell {
  id: number;
  delay: number;
}

export function ShimmerGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cells: GridCell[] = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate grid cells with stagger
      gsap.from('.grid-cell', {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        stagger: {
          amount: 1.5,
          from: 'random',
        },
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Continuous shimmer animation
      gsap.to('.grid-cell', {
        backgroundPosition: '200% center',
        duration: 3,
        ease: 'none',
        stagger: {
          each: 0.05,
          repeat: -1,
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative py-32 px-4 bg-black">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Photonic Matrix
          </span>
        </h2>
        <p className="text-purple-200/60 text-lg">
          Light reflection grid with shimmer dynamics
        </p>
      </motion.div>

      {/* Shimmer grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-10 gap-3 max-w-6xl mx-auto mb-16"
      >
        {cells.map((cell) => (
          <motion.div
            key={cell.id}
            className="grid-cell aspect-square rounded-lg bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer hover:scale-110"
            style={{
              backgroundSize: '200% auto',
            }}
            whileHover={{
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
            }}
          />
        ))}
      </div>

      {/* Holographic data visualization */}
      <div className="max-w-4xl mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 border border-purple-400/30 backdrop-blur-xl overflow-hidden"
        >
          {/* Animated scan lines */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse" />

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Holographic Data Stream
            </h3>

            <div className="space-y-4">
              {['Alpha', 'Beta', 'Gamma', 'Delta'].map((wave, index) => (
                <div key={wave} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-200/80 font-mono text-sm">
                      {wave} Wave
                    </span>
                    <span className="text-purple-200/60 font-mono text-xs">
                      {Math.floor(Math.random() * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-cyan-400/20">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.random() * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/30 to-transparent blur-3xl" />
        </motion.div>
      </div>

      {/* Bottom spacing */}
      <div className="h-32" />
    </div>
  );
}
