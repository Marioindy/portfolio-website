'use client';

import React, { useEffect, useRef } from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useFadeInStagger, useScaleIn } from '@/hooks/useAnimation';

// Log markers
console.log('[MAXIMALIST_REBELLION] Initializing sensory overload design');
console.log('[SENSORY_DESIGN] Dense, layered, baroque-inspired aesthetics');

export const MaximalistShowcase: React.FC = () => {
  const gridRef = useFadeInStagger<HTMLDivElement>({ stagger: 0.05 });
  const layersRef = useScaleIn<HTMLDivElement>();
  const chaosRef = useRef<HTMLDivElement>(null);

  // Convex integration for dynamic content
  const skillsGrouped = useQuery(api.skills.getAllSkillsGrouped);

  // Convert to array format for rendering
  const skills = skillsGrouped
    ? Object.entries(skillsGrouped).map(([category, skills]) => ({
        category,
        skills: skills as Array<{ _id: string; name: string; category: string; level: number; icon?: string }>,
      }))
    : [];

  // Chaotic animations
  useEffect(() => {
    if (chaosRef.current) {
      const elements = chaosRef.current.querySelectorAll('.chaos-element');
      gsap.to(elements, {
        rotation: 'random(-15, 15)',
        scale: 'random(0.95, 1.05)',
        x: 'random(-10, 10)',
        y: 'random(-10, 10)',
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.1,
          from: 'random',
        },
      });
    }
    console.log('[EXECUTION] Maximalist chaos animations initialized');
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-600 via-purple-800 to-emerald-900">
      {/* Overwhelming Background Patterns */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,0,128,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(255,255,0,0.4),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ff00ff 0px, #ff00ff 2px, transparent 2px, transparent 10px),
                              repeating-linear-gradient(-45deg, #00ffff 0px, #00ffff 2px, transparent 2px, transparent 10px)`,
          }}
        />
      </div>

      {/* Baroque-Inspired Header with Dense Typography */}
      <section className="relative container mx-auto px-4 pt-20 pb-12 overflow-hidden">
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
            className="relative inline-block"
          >
            {/* Layered Text Effects */}
            <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-cyan-400 drop-shadow-[0_0_30px_rgba(255,0,255,0.8)]">
              MAXIMALISM
            </h1>
            <h1
              className="absolute top-1 left-1 text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-70 blur-sm"
              aria-hidden="true"
            >
              MAXIMALISM
            </h1>
            <h1
              className="absolute -top-1 -left-1 text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50 blur-md"
              aria-hidden="true"
            >
              MAXIMALISM
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-4xl font-bold text-yellow-300 drop-shadow-[0_0_20px_rgba(255,255,0,0.8)] leading-tight">
              ⚡ OVERWHELMING COLORS ⚡ RICH TEXTURES ⚡ DENSE TYPOGRAPHY ⚡
              LAYERED ELEMENTS ⚡
            </p>
            <p className="mt-4 text-xl md:text-2xl font-extrabold text-pink-400 drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]">
              Baroque-Inspired • Collage Style • Sensory Overload by Design
            </p>
          </motion.div>
        </div>

        {/* Decorative Chaos Elements */}
        <div ref={chaosRef} className="absolute inset-0 pointer-events-none">
          <div className="chaos-element absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400 to-red-600 rounded-lg rotate-12 opacity-60 shadow-2xl" />
          <div className="chaos-element absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-50 shadow-2xl" />
          <div className="chaos-element absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-br from-pink-500 to-purple-700 rotate-45 opacity-60 shadow-2xl" />
          <div className="chaos-element absolute top-1/2 right-10 w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-700 rounded-lg -rotate-12 opacity-50 shadow-2xl" />
        </div>
      </section>

      {/* Dense Layered Content Grid */}
      <section className="relative container mx-auto px-4 py-12">
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
        >
          {[
            {
              title: 'RICH',
              subtitle: 'COLORS',
              bg: 'from-red-500 via-pink-500 to-purple-600',
              rotate: 'rotate-1',
            },
            {
              title: 'DENSE',
              subtitle: 'LAYERS',
              bg: 'from-yellow-400 via-orange-500 to-red-600',
              rotate: '-rotate-2',
            },
            {
              title: 'BOLD',
              subtitle: 'TEXTURES',
              bg: 'from-cyan-400 via-blue-500 to-purple-700',
              rotate: 'rotate-2',
            },
            {
              title: 'CHAOS',
              subtitle: 'BEAUTY',
              bg: 'from-green-400 via-emerald-600 to-teal-700',
              rotate: '-rotate-1',
            },
            {
              title: 'BAROQUE',
              subtitle: 'STYLE',
              bg: 'from-pink-500 via-rose-600 to-red-700',
              rotate: 'rotate-3',
            },
            {
              title: 'SENSORY',
              subtitle: 'OVERLOAD',
              bg: 'from-purple-500 via-violet-600 to-fuchsia-700',
              rotate: '-rotate-2',
            },
            {
              title: 'LAYERED',
              subtitle: 'DESIGN',
              bg: 'from-orange-400 via-amber-600 to-yellow-700',
              rotate: 'rotate-1',
            },
            {
              title: 'MAXIMAL',
              subtitle: 'IMPACT',
              bg: 'from-blue-500 via-indigo-600 to-purple-800',
              rotate: '-rotate-3',
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className={`relative ${card.rotate}`}
            >
              <div
                className={`bg-gradient-to-br ${card.bg} p-6 md:p-8 border-4 border-white/80 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(255,255,255,0.8)] transition-all overflow-hidden`}
              >
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)] opacity-50" />
                <h3 className="relative text-3xl md:text-4xl font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] tracking-tighter">
                  {card.title}
                </h3>
                <p className="relative text-xl md:text-2xl font-bold text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mt-2">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Collage-Style Overlapping Sections */}
      <section className="relative container mx-auto px-4 py-20">
        <div ref={layersRef} className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-500 to-pink-600 mb-12 drop-shadow-[0_0_40px_rgba(255,0,0,0.8)]"
          >
            LAYERED ELEMENTS
          </motion.h2>

          <div className="relative h-[600px] md:h-[800px]">
            {/* Overlapping Panels */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
              className="absolute top-0 left-0 w-72 md:w-96 h-80 md:h-96 bg-gradient-to-br from-red-600 via-pink-600 to-purple-700 border-8 border-yellow-400 shadow-2xl p-8 z-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <h3 className="relative text-4xl font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                OVERWHELMING COLORS
              </h3>
              <p className="relative mt-4 text-lg font-bold text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Every hue fights for attention in a symphony of visual chaos
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
              className="absolute top-40 md:top-60 left-48 md:left-80 w-80 md:w-[28rem] h-72 md:h-80 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-800 border-8 border-pink-500 shadow-2xl p-8 z-[11]"
            >
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_15px,rgba(255,255,255,0.1)_15px,rgba(255,255,255,0.1)_30px)]" />
              <h3 className="relative text-4xl font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                DENSE TYPOGRAPHY
              </h3>
              <p className="relative mt-4 text-lg font-bold text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Words collide, stack, and overflow in deliberate information
                abundance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, rotate: -5 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
              className="absolute bottom-20 right-0 md:right-10 w-72 md:w-[26rem] h-80 md:h-96 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-800 border-8 border-orange-400 shadow-2xl p-8 z-[12]"
            >
              <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg,transparent_0deg_90deg,rgba(255,255,255,0.1)_90deg_180deg)] opacity-40" />
              <h3 className="relative text-4xl font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                COLLAGE STYLE
              </h3>
              <p className="relative mt-4 text-lg font-bold text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Elements overlap without hierarchy, creating beautiful organized
                chaos
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 2, scale: 1.05, zIndex: 20 }}
              className="absolute top-10 right-20 md:right-40 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-br from-yellow-400 via-orange-600 to-red-700 border-8 border-cyan-400 shadow-2xl p-8 z-[13] rotate-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse,rgba(0,0,0,0.2)_0%,transparent_70%)]" />
              <h3 className="relative text-4xl font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                BAROQUE INSPIRED
              </h3>
              <p className="relative mt-4 text-lg font-bold text-purple-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Ornate, excessive, luxurious—more is more
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Convex Integration - Maximalist Data Display */}
      {skills.length > 0 && (
        <section className="relative container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 mb-16 drop-shadow-[0_0_50px_rgba(255,0,255,0.9)]"
            >
              DYNAMIC CHAOS
            </motion.h2>

            <div className="bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 border-8 border-yellow-400 shadow-[0_0_60px_rgba(255,255,0,0.6)] p-10">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.05)_2px,rgba(255,255,255,0.05)_4px)]" />
              <p className="relative text-center text-2xl md:text-3xl font-black text-yellow-300 mb-10 drop-shadow-[0_0_20px_rgba(255,255,0,1)]">
                ⚡ POWERED BY CONVEX • REAL-TIME SENSORY OVERLOAD ⚡
              </p>

              <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, rotate: -10 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.15,
                      rotate: Math.random() > 0.5 ? 5 : -5,
                      zIndex: 20,
                    }}
                    className={`relative p-4 border-4 shadow-xl transform ${
                      index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                    }`}
                    style={{
                      background: `linear-gradient(${Math.random() * 360}deg,
                        hsl(${Math.random() * 360}, 80%, 50%),
                        hsl(${Math.random() * 360}, 80%, 40%))`,
                      borderColor: `hsl(${(index * 40) % 360}, 90%, 60%)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:10px_10px] opacity-50" />
                    <h3 className="relative text-xl md:text-2xl font-black text-white drop-shadow-[0_2px_6px_rgba(0,0,0,1)] mb-2">
                      {skillGroup.category}
                    </h3>
                    <p className="relative text-lg font-bold text-yellow-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      {skillGroup.skills.length} SKILLS
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer - Sensory Overload Statement */}
      <section className="relative container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-yellow-400 via-red-600 to-purple-800 border-[12px] border-cyan-400 shadow-[0_0_80px_rgba(255,0,255,0.9)] p-16 overflow-hidden">
            {/* Multiple overlapping texture layers */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_15px,rgba(255,255,255,0.1)_15px,rgba(255,255,255,0.1)_30px)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />

            <h2 className="relative text-6xl md:text-8xl font-black text-center text-white drop-shadow-[0_0_30px_rgba(0,0,0,1)] mb-8">
              SENSORY OVERLOAD
            </h2>
            <p className="relative text-2xl md:text-4xl font-extrabold text-center text-yellow-300 drop-shadow-[0_0_20px_rgba(0,0,0,1)] leading-tight mb-10">
              More colors • More layers • More textures • More everything •
              Maximalism rebellion against minimalism
            </p>

            <div className="relative flex flex-wrap justify-center gap-4">
              {[
                'EXPLORE',
                'EXPERIENCE',
                'EMBRACE',
                'EXCESS',
                'EXUBERANCE',
              ].map((text, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="px-8 py-4 text-xl md:text-2xl font-black border-4 shadow-2xl transform hover:shadow-[0_0_40px_rgba(255,255,255,1)]"
                  style={{
                    background: `linear-gradient(${index * 72}deg,
                      hsl(${index * 72}, 90%, 50%),
                      hsl(${(index * 72 + 60) % 360}, 90%, 40%))`,
                    borderColor: `hsl(${(index * 72 + 180) % 360}, 100%, 60%)`,
                    color: 'white',
                    textShadow: '0 4px 8px rgba(0,0,0,0.9)',
                  }}
                >
                  {text}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final Visual Chaos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${Math.random() * 360}, 80%, 50%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
    </div>
  );
};
