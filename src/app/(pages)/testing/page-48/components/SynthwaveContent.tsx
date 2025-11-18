'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';

gsap.registerPlugin(ScrollTrigger);

export function SynthwaveContent() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Convex integration - fetch data
  const projects = useQuery(api.projects.getProjects);

  useEffect(() => {
    if (!gridRef.current) return;

    // Animate perspective grid
    gsap.to(gridRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Animate cards on scroll
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.synthwave-card');
      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          rotation: -5,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: 1,
          },
        });
      });
    }
  }, []);

  const features = [
    {
      title: 'WAVE PATTERNS',
      description: 'Animated SVG wave patterns with neon glow effects',
      icon: '〰️',
      color: 'from-pink-500 to-purple-500',
      glow: 'rgba(255, 0, 255, 0.5)',
    },
    {
      title: 'NEON GRADIENTS',
      description: 'Dynamic color palette with pink, cyan, and purple',
      icon: '🌈',
      color: 'from-cyan-500 to-blue-500',
      glow: 'rgba(0, 255, 255, 0.5)',
    },
    {
      title: 'LIGHT FLOW',
      description: 'Flowing light effects with smooth animations',
      icon: '✨',
      color: 'from-purple-500 to-pink-500',
      glow: 'rgba(128, 0, 255, 0.5)',
    },
    {
      title: 'SYNTHWAVE VIBES',
      description: 'Retro 80s aesthetic with modern technology',
      icon: '🎮',
      color: 'from-pink-500 to-cyan-500',
      glow: 'rgba(255, 0, 128, 0.5)',
    },
  ];

  return (
    <div className="relative py-24 px-4">
      {/* Perspective grid */}
      <div
        ref={gridRef}
        className="absolute bottom-0 left-0 right-0 h-96 opacity-30"
        style={{
          background: `
            linear-gradient(to bottom, transparent 0%, rgba(255, 0, 255, 0.1) 100%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(255, 0, 255, 0.3) 40px,
              rgba(255, 0, 255, 0.3) 42px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(0, 255, 255, 0.3) 40px,
              rgba(0, 255, 255, 0.3) 42px
            )
          `,
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom',
        }}
      />

      {/* Content cards */}
      <div ref={cardsRef} className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 font-mono"
          style={{
            textShadow: `
              0 0 10px #00ffff,
              0 0 20px #00ffff,
              0 0 30px #ff00ff
            `,
          }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            SYNTHWAVE FEATURES
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="synthwave-card group"
            >
              <div
                className="relative p-8 rounded-lg border-2 backdrop-blur-sm
                         transition-all duration-300 transform hover:scale-105"
                style={{
                  borderColor: feature.glow,
                  background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(20,20,40,0.9) 100%)`,
                  boxShadow: `
                    0 0 20px ${feature.glow},
                    inset 0 0 20px rgba(255,255,255,0.05)
                  `,
                }}
              >
                <div
                  className="text-6xl mb-4 filter drop-shadow-lg"
                  style={{
                    filter: `drop-shadow(0 0 10px ${feature.glow})`,
                  }}
                >
                  {feature.icon}
                </div>

                <h3
                  className={`text-2xl font-bold mb-3 font-mono bg-gradient-to-r ${feature.color} text-transparent bg-clip-text`}
                >
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{feature.description}</p>

                {/* Animated corner accents */}
                <div
                  className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-all duration-300
                           group-hover:w-8 group-hover:h-8"
                  style={{ borderColor: feature.glow }}
                />
                <div
                  className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-all duration-300
                           group-hover:w-8 group-hover:h-8"
                  style={{ borderColor: feature.glow }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Convex data display */}
        {projects && projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <h3
              className="text-3xl font-bold text-center mb-8 font-mono"
              style={{
                textShadow: '0 0 10px #ff00ff, 0 0 20px #00ffff',
              }}
            >
              <span className="bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text">
                CONNECTED TO CONVEX
              </span>
            </h3>
            <div className="text-center text-cyan-400 font-mono">
              <p className="text-lg">
                {projects.length} {projects.length === 1 ? 'project' : 'projects'} loaded from
                database
              </p>
            </div>
          </motion.div>
        )}

        {/* Retro scanlines effect */}
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-10"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.15),
                rgba(0, 0, 0, 0.15) 1px,
                transparent 1px,
                transparent 2px
              )
            `,
          }}
        />
      </div>
    </div>
  );
}
