'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface ColorConcept {
  title: string;
  question: string;
  insight: string;
  colorA: string;
  colorB: string;
  colorC: string;
}

const colorConcepts: ColorConcept[] = [
  {
    title: 'Emotional Urgency',
    question: 'How does saturation create urgency?',
    insight:
      'Pure wavelengths bypass rational processing—our evolutionary wiring responds to saturated colors as signals demanding immediate attention. High chroma triggers arousal states: elevated heart rate, dilated pupils, heightened awareness.',
    colorA: '#FF006E',
    colorB: '#FF0080',
    colorC: '#FF1493',
  },
  {
    title: 'Neon Psychology',
    question: 'What does neon signal culturally?',
    insight:
      'Neon carries the weight of artificial optimism—Tokyo nights, Times Square energy, retrofuturism. It signals youth culture, digital-native aesthetics, and celebrates the synthetic as virtue rather than compromise.',
    colorA: '#00F0FF',
    colorB: '#FF00FF',
    colorC: '#CCFF00',
  },
  {
    title: 'Organized Chaos',
    question: 'Can chaos feel structured?',
    insight:
      'Yes—through invisible constraints. Jazz improvisation model: freedom within rules. Visual chaos organized by consistent spacing, repeated shapes, rhythmic color relationships. Intentionality transforms randomness into pattern.',
    colorA: '#9D00FF',
    colorB: '#CCFF00',
    colorC: '#FF6B00',
  },
  {
    title: 'Chromatic Discord',
    question: 'Where does harmony end and discord begin?',
    insight:
      'Discord creates energy—vibrating edges where cyan meets magenta, temperature clashes between hot pink and cool lime. The tension is intentional. Mother Design lives in this liminal space where colors battle but composition wins.',
    colorA: '#00F0FF',
    colorB: '#FF006E',
    colorC: '#FFFF00',
  },
];

function ConceptCard({ concept, index }: { concept: ColorConcept; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Color indicators */}
      <div className="flex gap-3 mb-6">
        <motion.div
          className="w-8 h-8 rounded-full"
          style={{ backgroundColor: concept.colorA }}
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              `0 0 0px ${concept.colorA}`,
              `0 0 20px ${concept.colorA}`,
              `0 0 0px ${concept.colorA}`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="w-8 h-8 rounded-full"
          style={{ backgroundColor: concept.colorB }}
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              `0 0 0px ${concept.colorB}`,
              `0 0 20px ${concept.colorB}`,
              `0 0 0px ${concept.colorB}`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div
          className="w-8 h-8 rounded-full"
          style={{ backgroundColor: concept.colorC }}
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              `0 0 0px ${concept.colorC}`,
              `0 0 20px ${concept.colorC}`,
              `0 0 0px ${concept.colorC}`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
      </div>

      {/* Title */}
      <h3
        className="text-3xl font-black mb-4"
        style={{
          background: `linear-gradient(135deg, ${concept.colorA}, ${concept.colorB})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {concept.title}
      </h3>

      {/* Question */}
      <p
        className="text-xl font-semibold mb-4"
        style={{
          color: concept.colorC,
          textShadow: `0 0 10px ${concept.colorC}`,
        }}
      >
        {concept.question}
      </p>

      {/* Insight (expandable) */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="text-white/90 text-lg leading-relaxed font-medium">
          {concept.insight}
        </p>
      </motion.div>

      {/* Expand indicator */}
      <motion.div
        className="mt-4 flex items-center gap-2 text-sm font-bold"
        style={{ color: concept.colorA }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>{isExpanded ? 'COLLAPSE' : 'EXPAND'}</span>
        <motion.svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.div>

      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${concept.colorA}22, ${concept.colorB}11, transparent)`,
          filter: 'blur(20px)',
        }}
      />
    </motion.div>
  );
}

function InteractiveColorWheel() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto">
      <motion.div
        ref={wheelRef}
        className="w-full h-full rounded-full"
        style={{
          background: `conic-gradient(from ${rotation}deg, #FF006E, #FF0080, #FF00FF, #9D00FF, #0066FF, #00F0FF, #CCFF00, #FFFF00, #FF6B00, #FF006E)`,
          boxShadow: '0 0 60px rgba(255,0,110,0.5), 0 0 120px rgba(0,240,255,0.3)',
        }}
        animate={{
          rotate: rotation,
        }}
        transition={{ duration: 0.05, ease: 'linear' }}
      />
      <div className="absolute inset-8 bg-black rounded-full flex items-center justify-center">
        <span className="text-2xl font-black text-neon-cyan">
          {rotation}°
        </span>
      </div>
    </div>
  );
}

export function ColorTheoryExplorer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative py-32 px-4 md:px-8 lg:px-16">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-6 animate-chromaticGlitch"
        >
          COLOR THEORY DEEP DIVE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 font-medium"
        >
          Exploring the intersection of psychology, culture, and chromatic rebellion
        </motion.p>
      </div>

      {/* Interactive color wheel */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-20"
      >
        <InteractiveColorWheel />
        <p className="text-center mt-6 text-neon-lime font-semibold text-lg">
          Pure wavelength rotation • Continuous hue shift • Saturation at maximum
        </p>
      </motion.div>

      {/* Concept cards grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {colorConcepts.map((concept, index) => (
          <ConceptCard key={index} concept={concept} index={index} />
        ))}
      </div>

      {/* Final manifesto */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-4xl mx-auto mt-32 text-center"
      >
        <div
          className="text-6xl md:text-8xl font-black leading-tight mb-8"
          style={{
            background: 'linear-gradient(180deg, #FF006E, #00F0FF, #CCFF00, #FF00FF)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 60px rgba(255,0,110,0.3)',
          }}
        >
          DESIGN IS REBELLION
        </div>
        <p className="text-2xl text-white/90 font-semibold leading-relaxed">
          When we saturate the spectrum, we refuse to whisper.
          <br />
          When we clash complementaries, we reject comfort.
          <br />
          When we pulse neon, we celebrate the artificial as authentic.
          <br />
          <span className="text-neon-cyan">This is chromatic maximalism.</span>
        </p>
      </motion.div>

      {/* Background ambient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-neon-magenta rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-neon-lime rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>
    </section>
  );
}
