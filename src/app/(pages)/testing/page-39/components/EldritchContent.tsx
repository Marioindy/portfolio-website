'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

export function EldritchContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!isInView) return;

    // Weird text animation
    textRefs.current.forEach((ref, index) => {
      if (!ref) return;

      gsap.fromTo(
        ref,
        {
          opacity: 0,
          y: 50,
          rotationX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          delay: index * 0.3,
          ease: 'power3.out',
        }
      );
    });
  }, [isInView]);

  const horrorTexts = [
    {
      title: 'NON-EUCLIDEAN SPACE',
      content:
        'Where angles refuse to add to 180 degrees and parallel lines meet in impossible dimensions.',
      font: 'font-mono',
      color: 'text-purple-300',
    },
    {
      title: 'TEMPORAL ANOMALIES',
      content:
        'Time flows backwards, sideways, and through itself. Past, present, and future exist simultaneously.',
      font: 'font-serif italic',
      color: 'text-pink-300',
    },
    {
      title: 'UNKNOWABLE ENTITIES',
      content:
        'Beings that exist beyond human comprehension, whose very presence distorts reality itself.',
      font: 'font-sans',
      color: 'text-cyan-300',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-black text-center mb-16 text-purple-200"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          style={{
            fontFamily: 'Impact, sans-serif',
            textShadow: '2px 2px 0 #7c3aed, -1px -1px 0 #ec4899',
            letterSpacing: '0.1em',
          }}
        >
          MANIFESTATIONS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {horrorTexts.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Weird border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg transform rotate-1 group-hover:rotate-3 transition-transform duration-500" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 group-hover:border-purple-400/50 transition-colors duration-500">
                {/* Unsettling title */}
                <h3
                  className={`text-2xl font-bold mb-4 ${item.color} tracking-wider`}
                  style={{
                    fontFamily: 'Courier New, monospace',
                    textShadow: '0 0 10px currentColor',
                  }}
                  ref={(el) => {
                    textRefs.current[index * 2] = el;
                  }}
                >
                  [{item.title}]
                </h3>

                {/* Content with mixed typography */}
                <p
                  className={`${item.font} text-purple-100/80 leading-relaxed`}
                  ref={(el) => {
                    textRefs.current[index * 2 + 1] = el;
                  }}
                >
                  {item.content}
                </p>

                {/* Pulsating corner indicators */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Weird divider */}
        <motion.div
          className="mt-16 flex items-center justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 1.5 }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="px-4">
            <motion.div
              className="w-8 h-8 border-2 border-purple-400 rotate-45"
              animate={{ rotate: [45, 135, 225, 315, 45] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
