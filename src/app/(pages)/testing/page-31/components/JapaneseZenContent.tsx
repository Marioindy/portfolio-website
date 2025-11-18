'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { useQuery } from 'convex/react';
import { api } from '../../../../../../convex/_generated/api';

// Japanese Zen color palette
const zenColors = {
  ink: '#1a1a1a',
  paper: '#f5f5dc',
  bamboo: '#8b7355',
  clay: '#a0826d',
  stone: '#708090',
  cherry: '#b23a48',
  gold: '#d4af37',
  mist: '#e8e8e8',
};

// Brush stroke SVG component
const BrushStroke: React.FC<{ className?: string; delay?: number }> = ({
  className = '',
  delay = 0
}) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      gsap.fromTo(
        pathRef.current,
        {
          strokeDasharray: length,
          strokeDashoffset: length,
        },
        {
          strokeDashoffset: 0,
          duration: 2,
          delay,
          ease: 'power2.inOut',
        }
      );
    }
  }, [delay]);

  return (
    <svg
      className={`absolute ${className}`}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M20,100 Q60,20 100,100 T180,100"
        fill="none"
        stroke={zenColors.ink}
        strokeWidth="2"
        opacity="0.3"
      />
    </svg>
  );
};

// Enso circle (Zen circle) component
const EnsoCircle: React.FC<{ size?: number; className?: string }> = ({
  size = 200,
  className = ''
}) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      gsap.fromTo(
        pathRef.current,
        {
          strokeDasharray: length,
          strokeDashoffset: length,
        },
        {
          strokeDashoffset: 0,
          duration: 3,
          delay: 0.5,
          ease: 'power1.inOut',
        }
      );
    }
  }, []);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M100,20 A80,80 0 1,1 100,180 A80,80 0 0,1 100,20"
        fill="none"
        stroke={zenColors.ink}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

// Zen quote component
const ZenQuote: React.FC = () => {
  const quotes = [
    { text: '間', meaning: 'MA - Negative Space', description: 'The space between' },
    { text: '侘寂', meaning: 'WABI-SABI', description: 'Beauty in imperfection' },
    { text: '禅', meaning: 'ZEN', description: 'Meditation and mindfulness' },
    { text: '静寂', meaning: 'SEIJAKU', description: 'Tranquility and stillness' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
      className="text-center space-y-4"
    >
      <div className="text-8xl md:text-9xl font-serif" style={{ color: zenColors.ink }}>
        {quotes[currentIndex].text}
      </div>
      <div className="text-2xl tracking-widest" style={{ color: zenColors.bamboo }}>
        {quotes[currentIndex].meaning}
      </div>
      <div className="text-sm opacity-60" style={{ color: zenColors.stone }}>
        {quotes[currentIndex].description}
      </div>
    </motion.div>
  );
};

// Bamboo element
const Bamboo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <line x1="50" y1="0" x2="50" y2="400" stroke={zenColors.bamboo} strokeWidth="3" />
        <circle cx="50" cy="100" r="2" fill={zenColors.bamboo} />
        <circle cx="50" cy="200" r="2" fill={zenColors.bamboo} />
        <circle cx="50" cy="300" r="2" fill={zenColors.bamboo} />

        {/* Leaves */}
        <path d="M50,80 Q70,90 65,110" fill="none" stroke={zenColors.bamboo} strokeWidth="1.5" />
        <path d="M50,80 Q30,90 35,110" fill="none" stroke={zenColors.bamboo} strokeWidth="1.5" />
        <path d="M50,180 Q70,190 65,210" fill="none" stroke={zenColors.bamboo} strokeWidth="1.5" />
        <path d="M50,280 Q30,290 35,310" fill="none" stroke={zenColors.bamboo} strokeWidth="1.5" />
      </g>
    </svg>
  );
};

// Main component
export function JapaneseZenContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);

  // Convex integration - fetch some data
  const skills = useQuery(api.skills.getSkills);

  useEffect(() => {
    // View Transitions API
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        // Smooth transition on page load
      });
    }

    // GSAP animations for zen elements
    gsap.from('.zen-element', {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1.5,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: zenColors.paper }}
    >
      {/* Decorative bamboo elements */}
      <Bamboo className="absolute left-0 top-0 h-full w-12 md:w-20" />
      <Bamboo className="absolute right-0 top-0 h-full w-12 md:w-20" />

      {/* Brush strokes */}
      <BrushStroke className="top-10 left-1/4 w-32 h-32 opacity-30" delay={0.5} />
      <BrushStroke className="bottom-20 right-1/4 w-40 h-40 opacity-20" delay={1} />

      {/* Hero Section - Maximum Negative Space */}
      <section className="min-h-screen flex items-center justify-center relative px-4 md:px-8">
        <motion.div
          style={{ opacity }}
          className="zen-element max-w-6xl w-full space-y-32"
        >
          {/* Enso Circle */}
          <div className="flex justify-center">
            <EnsoCircle size={300} className="zen-element" />
          </div>

          {/* Minimal Title */}
          <motion.h1
            className="text-center space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <div
              className="text-sm tracking-[0.5em] uppercase"
              style={{ color: zenColors.stone }}
            >
              Testing Page 31
            </div>
            <div
              className="text-4xl md:text-6xl font-serif tracking-wide"
              style={{ color: zenColors.ink }}
            >
              Japanese Zen
            </div>
          </motion.h1>
        </motion.div>
      </section>

      {/* Zen Quotes Section */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="zen-element max-w-4xl w-full">
          <ZenQuote />
        </div>
      </section>

      {/* Negative Space Gallery */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="zen-element max-w-6xl w-full space-y-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="text-3xl md:text-5xl font-serif mb-16"
              style={{ color: zenColors.ink }}
            >
              Negative Space Mastery
            </h2>

            {/* Grid with extreme negative space */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-32 md:gap-48">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <div
                    className="aspect-square relative overflow-hidden"
                    style={{ backgroundColor: zenColors.mist }}
                  >
                    {/* Single element in vast space */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 1.5, ease: 'easeInOut' }}
                    >
                      <div
                        className="w-12 h-12 rounded-full"
                        style={{ backgroundColor: zenColors.ink }}
                      />
                    </motion.div>
                  </div>
                  <div
                    className="mt-8 text-sm tracking-widest"
                    style={{ color: zenColors.stone }}
                  >
                    ELEMENT {item}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Convex Data Display - Zen Style */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="zen-element max-w-4xl w-full space-y-16">
          <h2
            className="text-3xl md:text-5xl font-serif text-center"
            style={{ color: zenColors.ink }}
          >
            Skills
          </h2>

          {skills && skills.length > 0 && (
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              {skills.slice(0, 5).map((skill, index) => (
                <motion.div
                  key={skill._id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between border-b pb-4"
                  style={{ borderColor: zenColors.mist }}
                >
                  <span
                    className="text-xl md:text-2xl font-serif"
                    style={{ color: zenColors.ink }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="text-sm tracking-widest"
                    style={{ color: zenColors.stone }}
                  >
                    {skill.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {(!skills || skills.length === 0) && (
            <div
              className="text-center text-lg"
              style={{ color: zenColors.stone }}
            >
              Empty space, pure potential
            </div>
          )}
        </div>
      </section>

      {/* Calligraphy Section */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8">
        <motion.div
          className="zen-element text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div
            className="text-[10rem] md:text-[15rem] font-serif leading-none"
            style={{ color: zenColors.ink }}
          >

          </div>
          <div
            className="mt-8 text-xl tracking-[0.3em]"
            style={{ color: zenColors.bamboo }}
          >
            MU - EMPTINESS
          </div>
        </motion.div>
      </section>

      {/* Final Zen Message */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8">
        <motion.div
          className="zen-element max-w-2xl text-center space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <EnsoCircle size={150} className="mx-auto" />

          <div className="space-y-6">
            <div
              className="text-2xl md:text-3xl font-serif"
              style={{ color: zenColors.ink }}
            >
              "In the beginner's mind there are many possibilities,
              <br />
              in the expert's mind there are few."
            </div>
            <div
              className="text-sm tracking-widest"
              style={{ color: zenColors.stone }}
            >
              — SHUNRYU SUZUKI
            </div>
          </div>

          <motion.div
            className="h-px w-24 mx-auto"
            style={{ backgroundColor: zenColors.ink }}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </section>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-px h-16"
          style={{ backgroundColor: zenColors.ink }}
          animate={{ height: [64, 48, 64] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}
