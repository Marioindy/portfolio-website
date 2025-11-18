'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';

gsap.registerPlugin(ScrollTrigger);

export function OrnateContent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Convex integration
  const projects = useQuery(api.projects.getProjects);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.baroque-card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        rotation: index % 2 === 0 ? -3 : 3,
        scale: 0.95,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          end: 'top center',
          scrub: 1,
        },
      });
    });
  }, []);

  const features = [
    {
      title: 'Ornate Patterns',
      description: 'Intricate SVG decorative elements with baroque flourishes and golden details',
      symbol: '❦',
    },
    {
      title: 'Rich Textures',
      description: 'Layered gradients and damask patterns creating depth and luxury',
      symbol: '✣',
    },
    {
      title: 'Curved Layouts',
      description: 'Flowing baroque curves and complex compositional arrangements',
      symbol: '❧',
    },
    {
      title: 'Golden Embellishments',
      description: 'Opulent gold accents and ornamental typography throughout',
      symbol: '✤',
    },
    {
      title: 'Maximalist Design',
      description: 'Over-the-top elegance with no detail left behind',
      symbol: '✥',
    },
    {
      title: 'Regal Aesthetics',
      description: 'Palace-worthy luxury and aristocratic visual language',
      symbol: '✦',
    },
  ];

  return (
    <div ref={contentRef} className="relative py-24 px-4">
      {/* Ornamental divider */}
      <div className="flex items-center justify-center mb-16">
        <svg viewBox="0 0 600 100" className="w-full max-w-4xl h-24">
          <defs>
            <linearGradient id="ornamentGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M 0 50 Q 50 30, 100 50 T 200 50 Q 250 70, 300 50 T 400 50 Q 450 30, 500 50 T 600 50"
            fill="none"
            stroke="url(#ornamentGold)"
            strokeWidth="2"
          />
          <circle cx="100" cy="50" r="8" fill="#FFD700" opacity="0.8" />
          <circle cx="200" cy="50" r="8" fill="#FFD700" opacity="0.8" />
          <circle cx="300" cy="50" r="12" fill="#FFD700" />
          <circle cx="400" cy="50" r="8" fill="#FFD700" opacity="0.8" />
          <circle cx="500" cy="50" r="8" fill="#FFD700" opacity="0.8" />
        </svg>
      </div>

      <div ref={cardsRef} className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center mb-20 font-serif"
          style={{
            textShadow: `
              2px 2px 4px rgba(0, 0, 0, 0.8),
              0 0 20px rgba(255, 215, 0, 0.4)
            `,
          }}
        >
          <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-transparent bg-clip-text">
            BAROQUE FEATURES
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="baroque-card group"
            >
              <div
                className="relative p-8 rounded-2xl border-4 border-double backdrop-blur-sm
                         transition-all duration-500 transform hover:scale-105 hover:-rotate-1"
                style={{
                  borderColor: '#FFD700',
                  background: `
                    linear-gradient(135deg, rgba(101, 67, 33, 0.6) 0%, rgba(139, 69, 19, 0.8) 100%),
                    radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 50%)
                  `,
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.4),
                    0 0 20px rgba(255, 215, 0, 0.2),
                    inset 0 1px 2px rgba(255, 215, 0, 0.3)
                  `,
                }}
              >
                {/* Corner ornaments */}
                <div className="absolute top-2 left-2 text-amber-400 text-xl opacity-60">❦</div>
                <div className="absolute top-2 right-2 text-amber-400 text-xl opacity-60 transform scale-x-[-1]">
                  ❦
                </div>
                <div className="absolute bottom-2 left-2 text-amber-400 text-xl opacity-60 transform scale-y-[-1]">
                  ❦
                </div>
                <div className="absolute bottom-2 right-2 text-amber-400 text-xl opacity-60 transform scale-[-1]">
                  ❦
                </div>

                <div className="text-center mb-6">
                  <span
                    className="text-6xl inline-block transform group-hover:scale-110 transition-transform duration-300"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
                    }}
                  >
                    {feature.symbol}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center font-serif bg-gradient-to-r from-yellow-300 to-amber-400 text-transparent bg-clip-text">
                  {feature.title}
                </h3>

                <p className="text-amber-100 text-center leading-relaxed font-serif text-sm">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
                  <span className="text-amber-500 text-xs">✦</span>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Convex data display with ornate styling */}
        {projects && projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <div
              className="max-w-2xl mx-auto p-12 rounded-3xl border-4 border-double backdrop-blur-sm"
              style={{
                borderColor: '#FFD700',
                background: `
                  linear-gradient(135deg, rgba(101, 67, 33, 0.6) 0%, rgba(139, 69, 19, 0.8) 100%),
                  radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 70%)
                `,
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.4),
                  0 0 30px rgba(255, 215, 0, 0.3),
                  inset 0 2px 4px rgba(255, 215, 0, 0.2)
                `,
              }}
            >
              <h3
                className="text-4xl font-bold text-center mb-6 font-serif"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.4)',
                }}
              >
                <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 text-transparent bg-clip-text">
                  CONNECTED TO CONVEX
                </span>
              </h3>

              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                <span className="text-amber-400 text-2xl">✦</span>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              </div>

              <p className="text-center text-amber-200 font-serif text-lg">
                <span className="text-3xl font-bold text-amber-300">
                  {projects.length}
                </span>{' '}
                {projects.length === 1 ? 'project' : 'projects'} retrieved from the royal archives
              </p>
            </div>
          </motion.div>
        )}

        {/* Bottom ornamental divider */}
        <div className="flex items-center justify-center mt-24">
          <svg viewBox="0 0 400 60" className="w-full max-w-2xl h-16">
            <path
              d="M 0 30 Q 100 10, 200 30 T 400 30"
              fill="none"
              stroke="url(#ornamentGold)"
              strokeWidth="2"
            />
            <path
              d="M 0 30 Q 100 50, 200 30 T 400 30"
              fill="none"
              stroke="url(#ornamentGold)"
              strokeWidth="2"
            />
            <circle cx="200" cy="30" r="10" fill="#FFD700" />
          </svg>
        </div>
      </div>

      {/* Vignette effect */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)`,
        }}
      />
    </div>
  );
}
