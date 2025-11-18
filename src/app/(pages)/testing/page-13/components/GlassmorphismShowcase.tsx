'use client';

import React, { useEffect, useRef } from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useFadeIn, useFadeInStagger, useScaleIn } from '@/hooks/useAnimation';

// Log markers
console.log('[GLASS_THEORY] Initializing glassmorphism aesthetic');
console.log('[TRANSPARENCY] Multi-layered glass components ready');

export const GlassmorphismShowcase: React.FC = () => {
  const heroRef = useFadeIn<HTMLElement>();
  const cardsRef = useFadeInStagger<HTMLDivElement>({ stagger: 0.2 });
  const featuresRef = useScaleIn<HTMLDivElement>();
  const floatingRef = useRef<HTMLDivElement>(null);

  // Example Convex integration
  const skillsGrouped = useQuery(api.skills.getAllSkillsGrouped);

  // Convert to array format for rendering
  const skills = skillsGrouped
    ? Object.entries(skillsGrouped).map(([category, skills]) => ({
        category,
        skills: skills as Array<{ _id: string; name: string; category: string; level: number; icon?: string }>,
      }))
    : [];

  // Floating animation for glass orbs
  useEffect(() => {
    if (floatingRef.current) {
      const orbs = floatingRef.current.querySelectorAll('.glass-orb');
      gsap.to(orbs, {
        y: '+=30',
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.5,
          from: 'random',
        },
      });
    }
    console.log('[EXECUTION] Glass animations initialized');
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Floating Glass Orbs Background */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div className="glass-orb absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200/40 to-purple-200/40 blur-3xl" />
        <div className="glass-orb absolute top-40 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-pink-200/40 to-yellow-200/40 blur-3xl" />
        <div className="glass-orb absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-purple-200/40 to-blue-200/40 blur-3xl" />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative container mx-auto px-4 pt-32 pb-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-gray-900 mb-6">
            Glassmorphism
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto">
            Frosted glass aesthetics with translucent layers and soft blurs
          </p>
        </motion.div>

        {/* Large Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 mt-16 max-w-4xl mx-auto"
        >
          <div className="glass-card backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl p-12 shadow-2xl shadow-purple-200/50">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Modern Minimalism
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experience the elegance of glass-inspired design with soft
              shadows, translucent layers, and a serene color palette that
              brings depth through transparency.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Glass Cards Grid */}
      <section className="relative container mx-auto px-4 py-20">
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Frosted Layers',
              description:
                'Multiple translucent layers create depth and visual hierarchy',
              color: 'from-blue-300/20 to-purple-300/20',
            },
            {
              title: 'Soft Blurs',
              description:
                'Backdrop filters provide the signature frosted glass effect',
              color: 'from-purple-300/20 to-pink-300/20',
            },
            {
              title: 'Light Elegance',
              description:
                'Subtle shadows and light backgrounds enhance the glass aesthetic',
              color: 'from-pink-300/20 to-yellow-300/20',
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-feature-card"
            >
              <div
                className={`backdrop-blur-lg bg-gradient-to-br ${card.color} border border-white/50 rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300`}
              >
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Glass Panels */}
      <section className="relative container mx-auto px-4 py-20">
        <div ref={featuresRef} className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light text-center text-gray-900 mb-16">
            Translucent Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Glass Panel 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="backdrop-blur-2xl bg-white/20 border border-white/40 p-10 shadow-xl shadow-blue-200/40">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-2xl rounded-full" />
                <h3 className="text-3xl font-light text-gray-900 mb-4 relative z-10">
                  RGBA Backgrounds
                </h3>
                <p className="text-gray-700 leading-relaxed relative z-10">
                  Precise control over transparency using RGBA color values
                  combined with backdrop filters for the perfect frosted effect.
                </p>
                <div className="mt-6 space-y-3 relative z-10">
                  <div className="backdrop-blur-sm bg-white/40 rounded-lg p-3 text-sm text-gray-800">
                    backdrop-blur-xl + bg-white/30
                  </div>
                  <div className="backdrop-blur-md bg-blue-200/30 rounded-lg p-3 text-sm text-gray-800">
                    backdrop-blur-md + bg-blue-200/30
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Glass Panel 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="backdrop-blur-2xl bg-gradient-to-br from-purple-100/30 to-pink-100/30 border border-white/40 p-10 shadow-xl shadow-purple-200/40">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-pink-400/30 to-yellow-400/30 blur-2xl rounded-full" />
                <h3 className="text-3xl font-light text-gray-900 mb-4 relative z-10">
                  Soft Shadows
                </h3>
                <p className="text-gray-700 leading-relaxed relative z-10">
                  Delicate drop shadows with subtle color tints enhance depth
                  without overwhelming the minimalist aesthetic.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 relative z-10">
                  <div className="backdrop-blur-sm bg-white/50 rounded-xl p-4 shadow-lg shadow-blue-200/50 text-center text-sm text-gray-800">
                    shadow-lg
                  </div>
                  <div className="backdrop-blur-sm bg-white/50 rounded-xl p-4 shadow-2xl shadow-purple-200/50 text-center text-sm text-gray-800">
                    shadow-2xl
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Convex Data Integration - Glass Skills Grid */}
      {skills.length > 0 && (
        <section className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-light text-center text-gray-900 mb-16">
              Dynamic Glass Components
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="backdrop-blur-xl bg-white/25 border border-white/50 rounded-3xl p-10 shadow-2xl shadow-purple-200/50"
            >
              <p className="text-center text-gray-700 text-lg mb-8">
                Powered by Convex • Real-time data through glass layers
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.slice(0, 8).map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all"
                  >
                    <p className="text-sm font-light text-gray-900">
                      {skillGroup.category}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {skillGroup.skills.length} skills
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer Glass Section */}
      <section className="relative container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="backdrop-blur-2xl bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30 border border-white/50 rounded-3xl p-16 shadow-2xl shadow-purple-200/60">
            <h2 className="text-5xl font-light text-gray-900 mb-6">
              Glass Theory
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Modern design principles meet translucent elegance. Every layer
              tells a story through light, blur, and transparency.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-lg bg-white/50 border border-white/70 px-8 py-3 rounded-full text-gray-900 font-light shadow-lg hover:shadow-xl transition-all"
              >
                Explore More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-lg bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-white/60 px-8 py-3 rounded-full text-gray-900 font-light shadow-lg hover:shadow-xl transition-all"
              >
                View Transitions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
