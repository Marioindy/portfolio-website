'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

/**
 * ENERGY_ANALYSIS:
 *
 * Neon lime is not a color—it's a voltage. It vibrates at the edge of the visible
 * spectrum, demanding attention, refusing to be ignored. Where monochrome whispers,
 * lime screams. Where minimalism subtracts, lime multiplies.
 *
 * Brightness conveys urgency. The human eye is drawn to high-contrast, high-saturation
 * colors as signals of importance. Neon lime (#CCFF00) sits at maximum luminosity,
 * maximum energy. It's the color of caution tape, of safety vests, of things that
 * matter NOW.
 *
 * But lime alone is chaos. Pair it with electric blue and suddenly there's structure.
 * The gradient from lime to blue is a journey from frenzy to focus, from activation
 * to action. It's the visual equivalent of adrenaline followed by precision.
 *
 * Vitality in design means movement. Static elements die. Animated text pulses like
 * a heartbeat. Color transitions breathe. Geometric shapes shift and dance. Energy
 * is not depicted—it is enacted.
 *
 * This is not decoration. This is stimulation. The design doesn't invite—it excites.
 * It doesn't suggest—it insists. Lime green is confidence without apology.
 */

export function LimeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Color pulse animation on text
    textRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.to(el, {
        color: '#00D4FF', // Electric blue
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        delay: index * 0.2,
        ease: 'sine.inOut',
      });
    });

    // Background gradient animation
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        backgroundPosition: '200% center',
        duration: 8,
        repeat: -1,
        ease: 'linear',
      });
    }
  }, []);

  const letters = 'ENERGY'.split('');

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #CCFF00 0%, #00D4FF 100%)',
        backgroundSize: '200% 200%',
      }}
    >
      {/* Animated geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-black opacity-20 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-1/2 right-20 w-48 h-48 border-8 border-white opacity-30"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          animate={{
            rotate: [0, -90, -180, -270, -360],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-8 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Animated title with color pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <h1 className="text-[15vw] md:text-[12vw] font-black leading-none tracking-tighter text-center">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    textRefs.current[index] = el;
                  }}
                  className="inline-block"
                  style={{ color: '#000000' }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Geometric divider with animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-2 bg-black mb-16 origin-center"
          />

          {/* Subtitle with playful typography */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-black text-center mb-20"
          >
            <span className="inline-block">BRIGHTNESS</span>{' '}
            <span className="inline-block text-white">CONVEYS</span>{' '}
            <span className="inline-block bg-black text-lime-400 px-4">URGENCY</span>
          </motion.p>

          {/* CTA with hover animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-lime-400 font-black text-xl rounded-none border-4 border-black hover:bg-white hover:text-black transition-colors duration-300"
            >
              ACTIVATE
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-black font-black text-xl rounded-none border-4 border-black hover:bg-black hover:text-lime-400 transition-colors duration-300"
            >
              EXPLORE
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-8 h-14 border-4 border-black rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-2 h-2 bg-black rounded-full"
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
