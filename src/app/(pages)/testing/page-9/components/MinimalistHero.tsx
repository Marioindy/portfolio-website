'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

/**
 * MINIMALIST_PHILOSOPHY:
 *
 * Emptiness as power. In the void, meaning concentrates. Where others fill space
 * with noise, minimalism carves meaning from silence. Each element earns its place.
 *
 * Negative space is not absence—it is presence refined. The pause between notes
 * that makes music. The breath between words that gives them weight.
 *
 * Constraint breeds creativity. When color is stripped away, form speaks louder.
 * When ornament is removed, structure reveals its truth. Black and white don't
 * limit—they clarify. They force intention. They demand purpose.
 *
 * In design, as in life: what you leave out is as important as what you include.
 * The beauty of nothing is that it makes room for everything that matters.
 */

/**
 * CONTRAST_THEORY:
 *
 * High contrast creates visual hierarchy without color. Pure black against pure
 * white creates the maximum possible difference—no ambiguity, no hesitation.
 * The eye knows exactly where to look.
 *
 * Contrast is clarity. It separates signal from noise. In a world of gradients
 * and soft edges, the hard line between black and white cuts through distraction.
 *
 * Typography in monochrome becomes architecture. Letters are not decorated—they
 * are constructed. Bold sans-serif fonts become geometric forms, each letterform
 * a study in positive and negative space.
 */

export function MinimalistHero() {
  const heroRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    // Animate the minimalist line drawing
    const pathLength = lineRef.current.getTotalLength();

    gsap.fromTo(
      lineRef.current,
      {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      },
      {
        strokeDashoffset: 0,
        duration: 3,
        ease: 'power2.inOut',
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Grid pattern in background - subtle */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, black 1px, transparent 1px),
            linear-gradient(to bottom, black 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Minimalist line drawing - abstract geometric */}
      <svg
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        viewBox="0 0 400 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={lineRef}
          d="M 50 100 L 350 100 L 350 300 L 200 450 L 50 300 Z M 200 450 L 200 700"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="200" cy="200" r="80" stroke="black" strokeWidth="1" fill="none" opacity="0.3" />
        <rect x="280" y="500" width="100" height="100" stroke="black" strokeWidth="1" fill="none" opacity="0.2" />
      </svg>

      {/* Main content - extreme negative space */}
      <div className="container mx-auto px-8 z-10">
        <div className="max-w-5xl">
          {/* Typography-focused layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-[0.9] tracking-tighter text-black mb-16">
              SILENCE
              <br />
              <span className="font-light">IN DESIGN</span>
            </h1>
          </motion.div>

          {/* Geometric divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-32 h-px bg-black mb-16 origin-left"
          />

          {/* Minimal typography */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl font-light text-black max-w-2xl leading-relaxed mb-24"
          >
            Where constraint breeds creativity.
            <br />
            Where emptiness becomes power.
          </motion.p>

          {/* Minimal CTA - just text with underline animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <a
              href="#explore"
              className="inline-block text-lg font-bold text-black tracking-wide group"
            >
              <span className="relative">
                EXPLORE
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Abstract geometric patterns - CSS only */}
      <div className="absolute bottom-0 left-0 w-64 h-64">
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-black opacity-20" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-black opacity-30" />
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5,
        }}
      >
        <div className="w-px h-16 bg-black" />
      </motion.div>
    </section>
  );
}
