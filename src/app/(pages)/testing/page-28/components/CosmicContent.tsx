'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CosmicSection {
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

const cosmicSections: CosmicSection[] = [
  {
    title: 'NEBULA CORE',
    subtitle: 'Data Convergence Point',
    description:
      'At the heart of the cosmic network lies the Nebula Core, where streams of data converge into a singular point of infinite potential.',
    color: 'from-purple-600 to-blue-600',
  },
  {
    title: 'STELLAR MATRIX',
    subtitle: 'Neural Pathways',
    description:
      'Interconnected nodes forming a vast stellar matrix, processing information at the speed of light across dimensional boundaries.',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'QUANTUM FLUX',
    subtitle: 'Reality Interface',
    description:
      'Where quantum possibilities collapse into definitive outcomes, bridging the gap between imagination and manifestation.',
    color: 'from-pink-600 to-purple-600',
  },
];

export function CosmicContent() {
  const contentRef = useRef<HTMLDivElement>(null);

  // Convex integration - fetch data
  const skillsData = useQuery(api.skills?.getSkills);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered animations for cosmic sections
      gsap.utils.toArray<HTMLElement>('.cosmic-section').forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Floating animation for data cards
      gsap.utils.toArray<HTMLElement>('.cosmic-card').forEach((card, index) => {
        gsap.to(card, {
          y: -20,
          duration: 2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={contentRef}
      className="relative z-10 py-32"
      style={{
        background: 'linear-gradient(to bottom, transparent, rgba(10, 0, 30, 0.8), transparent)',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Cosmic sections */}
        <div className="space-y-48">
          {cosmicSections.map((section, index) => (
            <motion.div
              key={index}
              className="cosmic-section max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Hexagonal frame */}
                <div className="absolute -top-8 -left-8 w-full h-full">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-24 h-24 text-purple-500/30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
                  </svg>
                </div>

                <div className="relative border border-purple-500/30 bg-black/40 backdrop-blur-sm p-12">
                  {/* Glitch effect number */}
                  <motion.div
                    className="absolute -top-12 right-8 text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 font-mono"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(138, 43, 226, 0.5)',
                        '0 0 20px rgba(138, 43, 226, 0.8)',
                        '0 0 10px rgba(138, 43, 226, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>

                  {/* Section header */}
                  <div className="mb-8">
                    <motion.h2
                      className={`text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${section.color} font-mono`}
                      whileHover={{ scale: 1.02 }}
                    >
                      {section.title}
                    </motion.h2>

                    <div className="flex items-center gap-4 mb-6">
                      <div className={`h-px flex-1 bg-gradient-to-r ${section.color}`} />
                      <span className="text-blue-300 text-sm font-mono tracking-widest uppercase">
                        {section.subtitle}
                      </span>
                      <div className={`h-px flex-1 bg-gradient-to-l ${section.color}`} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xl text-blue-200 leading-relaxed mb-8">
                    {section.description}
                  </p>

                  {/* Tech readout */}
                  <div className="grid grid-cols-3 gap-4">
                    {['ALPHA', 'BETA', 'GAMMA'].map((label, i) => (
                      <motion.div
                        key={i}
                        className="cosmic-card border border-purple-500/30 bg-purple-900/20 p-4 text-center"
                        whileHover={{ borderColor: 'rgba(138, 123, 255, 0.8)' }}
                      >
                        <div className="text-purple-300 text-sm font-mono mb-2">{label}</div>
                        <motion.div
                          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-mono"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          {Math.floor(Math.random() * 999)
                            .toString()
                            .padStart(3, '0')}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Convex data showcase */}
        {skillsData && skillsData.length > 0 && (
          <motion.div
            className="mt-48 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="border border-purple-500/30 bg-black/60 backdrop-blur-sm p-12">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8 font-mono">
                DATABASE CONNECTION: ACTIVE
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillsData.slice(0, 8).map((skill, index) => (
                  <motion.div
                    key={skill._id}
                    className="border border-blue-500/30 bg-blue-900/20 p-4 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(138, 123, 255, 0.8)' }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-300 text-sm font-mono">{skill.name}</div>
                    <motion.div
                      className="mt-2 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-purple-300 font-mono text-sm">
                  ◆ {skillsData.length} RECORDS RETRIEVED FROM CONVEX DATABASE ◆
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Energy beam divider */}
        <motion.div
          className="mt-32 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
