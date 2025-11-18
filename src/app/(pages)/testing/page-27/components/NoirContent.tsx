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

interface ContentBlock {
  title: string;
  content: string;
  position: 'left' | 'right';
}

const noirBlocks: ContentBlock[] = [
  {
    title: 'The Investigation Begins',
    content:
      'The rain-slicked streets whispered secrets of a city cloaked in mystery. Each shadow held a story, each echo a clue to the truth that lay hidden beneath layers of deception.',
    position: 'left',
  },
  {
    title: 'A Dangerous Discovery',
    content:
      'Evidence surfaced like ghosts from the past, fragments of a puzzle too sinister to ignore. The deeper the investigation went, the more treacherous the path became.',
    position: 'right',
  },
  {
    title: 'The Final Confrontation',
    content:
      'In the dim light of the warehouse, truth and lies collided. The case that had consumed so many nights was finally reaching its climactic conclusion.',
    position: 'left',
  },
];

export function NoirContent() {
  const contentRef = useRef<HTMLDivElement>(null);

  // Example Convex integration - fetch some data
  const exampleData = useQuery(api.skills?.getSkills);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered animations for content blocks
      gsap.utils.toArray<HTMLElement>('.noir-block').forEach((block, index) => {
        gsap.fromTo(
          block,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            rotationY: index % 2 === 0 ? -15 : 15,
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="relative bg-black py-24">
      {/* Dramatic diagonal light streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white/20 via-transparent to-transparent transform -rotate-12"
          style={{ filter: 'blur(2px)' }}
        />
        <div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-white/10 via-transparent to-transparent transform rotate-12"
          style={{ filter: 'blur(2px)' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent mb-24"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />

        {/* Content blocks */}
        <div className="space-y-32">
          {noirBlocks.map((block, index) => (
            <div
              key={index}
              className={`noir-block max-w-4xl ${
                block.position === 'right' ? 'ml-auto' : 'mr-auto'
              }`}
            >
              <motion.article
                className="relative p-12 border-l-4 border-white bg-gradient-to-r from-zinc-900/50 to-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Dramatic number */}
                <div className="absolute -top-8 -left-8 text-8xl font-serif font-bold text-white/10">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">
                  {block.title}
                </h2>

                <p className="text-xl text-zinc-400 font-serif italic leading-relaxed">
                  "{block.content}"
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-white/30" />
              </motion.article>
            </div>
          ))}
        </div>

        {/* Convex integration showcase */}
        {exampleData && (
          <motion.div
            className="mt-32 max-w-4xl mx-auto p-12 border border-white/20 bg-zinc-900/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold text-white mb-6">
              Evidence Collected
            </h3>
            <p className="text-zinc-400 font-serif italic">
              {exampleData.length} pieces of evidence retrieved from the database...
            </p>
          </motion.div>
        )}

        {/* Final divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent mt-24"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
