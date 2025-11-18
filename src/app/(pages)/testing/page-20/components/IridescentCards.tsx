'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

interface CardData {
  id: number;
  title: string;
  description: string;
  gradient: string;
}

const defaultCards: CardData[] = [
  {
    id: 1,
    title: 'Photon Streams',
    description: 'Light manipulation through prismatic refraction',
    gradient: 'from-cyan-400 via-blue-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Crystal Lattice',
    description: 'Molecular structures in holographic space',
    gradient: 'from-purple-400 via-pink-500 to-red-500',
  },
  {
    id: 3,
    title: 'Plasma Fields',
    description: 'Electromagnetic resonance visualization',
    gradient: 'from-green-400 via-cyan-500 to-blue-600',
  },
  {
    id: 4,
    title: 'Quantum Glow',
    description: 'Subatomic particle illumination theory',
    gradient: 'from-yellow-400 via-orange-500 to-pink-600',
  },
];

export function IridescentCards() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Attempt to fetch data from Convex (graceful fallback to default)
  const convexData = useQuery(api.skills.list);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);

    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative py-32 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black"
    >
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Iridescent Systems
        </h2>
        <p className="text-cyan-200/60 text-lg">
          {convexData ? 'Convex-Powered' : 'Static'} Holographic Components
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {defaultCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Card container */}
            <div className="relative h-64 rounded-2xl overflow-hidden backdrop-blur-sm border border-cyan-400/20">
              {/* Holographic gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
              />

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {/* Light reflection */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                }}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3
                  className={`text-2xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-2`}
                >
                  {card.title}
                </h3>
                <p className="text-cyan-100/80 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${card.gradient} opacity-30 blur-2xl`}
              />
            </div>

            {/* Outer glow */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10 rounded-2xl`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
