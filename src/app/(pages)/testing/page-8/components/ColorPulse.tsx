'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * EXECUTION:
 *
 * Responsive design with vibrant themes means maintaining energy across all
 * breakpoints. Lime green on mobile should feel as electric as on desktop.
 * Scale the shapes, but keep the voltage constant.
 *
 * Production-ready vibrant design requires performance optimization. GSAP for
 * smooth 60fps animations. Framer Motion for declarative transitions. View
 * Transitions API for page-level choreography. No jank. Energy without lag.
 *
 * TypeScript strict mode enforces precision in chaos. The design may be wild,
 * but the code is disciplined. Every animation typed. Every color constant
 * defined. Chaos in presentation, order in implementation.
 *
 * Convex integration means real-time data can pulse with the same energy as
 * the design. Numbers don't just update—they explode onto screen. Status
 * changes trigger color shifts. The backend becomes part of the performance.
 */

export function ColorPulse() {
  const sectionRef = useRef<HTMLElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Staggered pulse animation for circles
    circleRefs.current.forEach((circle, index) => {
      if (!circle) return;

      gsap.fromTo(
        circle,
        {
          scale: 1,
          opacity: 0.8,
        },
        {
          scale: 1.3,
          opacity: 1,
          duration: 1,
          delay: index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-lime-400 py-32 px-8 relative overflow-hidden">
      {/* Pulsing circles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              circleRefs.current[i] = el;
            }}
            className="absolute rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              background:
                i % 3 === 0
                  ? 'rgba(0, 212, 255, 0.2)'
                  : i % 3 === 1
                    ? 'rgba(0, 0, 0, 0.1)'
                    : 'rgba(255, 255, 255, 0.3)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main heading with gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32 text-center"
        >
          <h2
            className="text-9xl md:text-[12rem] font-black leading-none tracking-tighter mb-8"
            style={{
              background: 'linear-gradient(135deg, #000000 0%, #00D4FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            PULSE
          </h2>
        </motion.div>

        {/* Interactive grid of colored blocks */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-32">
          {[...Array(18)].map((_, index) => (
            <motion.div
              key={index}
              className="aspect-square cursor-pointer"
              style={{
                backgroundColor:
                  index % 3 === 0 ? '#000000' : index % 3 === 1 ? '#00D4FF' : '#FFFFFF',
              }}
              whileHover={{
                scale: 1.2,
                backgroundColor: '#CCFF00',
                rotate: 180,
                zIndex: 10,
              }}
              transition={{ duration: 0.4, ease: 'backOut' }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              custom={index}
              animate={{ opacity: 1, scale: 1 }}
            />
          ))}
        </div>

        {/* Typographic statement */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-black text-5xl md:text-7xl font-black mb-12 leading-tight">
            NEON LIME
            <br />
            <span className="text-blue-600">IS NOT A COLOR</span>
            <br />
            <span className="bg-black text-lime-400 px-8">IT'S A VOLTAGE</span>
          </p>

          {/* Animated bars */}
          <div className="flex justify-center gap-4 mt-16">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-4 md:w-8 bg-black"
                initial={{ height: 40 }}
                animate={{
                  height: [40, 200, 80, 160, 40],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Final CTA section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="px-16 py-8 bg-black text-lime-400 font-black text-3xl border-8 border-black hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
          >
            EXPERIENCE THE ENERGY
          </motion.button>
        </motion.div>
      </div>

      {/* Corner geometric accents */}
      <motion.div
        className="absolute top-0 left-0 w-48 h-48 bg-black opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }}
      />
    </section>
  );
}
