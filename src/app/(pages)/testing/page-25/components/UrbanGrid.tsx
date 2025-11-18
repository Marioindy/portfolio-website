'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function UrbanGrid() {
  const cards = [
    {
      title: 'WILDSTYLE',
      color: 'from-pink-600 to-purple-600',
      tag: 'STYLE',
      icon: '🎨',
    },
    {
      title: 'THROWUP',
      color: 'from-yellow-500 to-orange-600',
      tag: 'QUICK',
      icon: '⚡',
    },
    {
      title: 'BOMBING',
      color: 'from-blue-600 to-cyan-500',
      tag: 'ACTIVE',
      icon: '💣',
    },
    {
      title: 'PIECES',
      color: 'from-green-500 to-teal-600',
      tag: 'ART',
      icon: '✨',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2
          className="text-4xl md:text-6xl font-black mb-4"
          style={{
            fontFamily: 'Impact, sans-serif',
            WebkitTextStroke: '2px #000',
            textShadow: '4px 4px 0 #ff006e, 8px 8px 0 #8338ec',
            transform: 'skew(-5deg)',
            color: '#fff',
          }}
        >
          STREET GALLERY
        </h2>
        <div className="h-2 w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: Math.random() * 4 - 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              transition: { duration: 0.2 },
            }}
            className="relative group cursor-pointer"
          >
            {/* Card Background */}
            <div
              className="relative h-64 rounded-lg overflow-hidden border-4 border-black"
              style={{
                boxShadow: '8px 8px 0 rgba(0,0,0,0.8)',
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-90`} />

              {/* Noise Texture */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>

                <h3
                  className="text-3xl font-black text-white mb-2"
                  style={{
                    fontFamily: 'Impact, sans-serif',
                    WebkitTextStroke: '1px #000',
                    textShadow: '3px 3px 0 rgba(0,0,0,0.5)',
                    letterSpacing: '2px',
                  }}
                >
                  {card.title}
                </h3>

                <div
                  className="px-3 py-1 bg-black text-white text-xs font-bold tracking-wider border-2 border-white"
                  style={{
                    transform: 'rotate(-3deg)',
                  }}
                >
                  {card.tag}
                </div>
              </div>

              {/* Spray Paint Splatters */}
              <div className="absolute top-2 right-2 w-16 h-16 bg-white rounded-full opacity-20 blur-md" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-black rounded-full opacity-10 blur-lg" />
            </div>

            {/* Graffiti Lines */}
            <div className="absolute -top-1 -left-1 w-full h-full pointer-events-none">
              <svg className="w-full h-full" style={{ filter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.5))' }}>
                <path
                  d={`M ${Math.random() * 20} ${Math.random() * 20} Q ${Math.random() * 100 + 50} ${Math.random() * 50} ${Math.random() * 100 + 100} ${Math.random() * 100}`}
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                  className="group-hover:opacity-60 transition-opacity"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
