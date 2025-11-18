'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

/**
 * GEOMETRIC_COMPOSITION:
 *
 * Bold geometric shapes are the vocabulary of energy. Circles pulse. Triangles
 * point with intention. Squares provide stability in chaos. Hexagons suggest
 * complexity and connection.
 *
 * Color blocking creates rhythm. Lime here, blue there, black as punctuation.
 * The eye bounces between regions of high saturation, creating a visual tempo.
 * Fast. Urgent. Alive.
 *
 * Playful typography breaks rules—intentionally. Letters overlap. Sizes vary
 * without hierarchy. Baselines ignore grids. This isn't chaos; it's controlled
 * disorder. Every "mistake" is deliberate.
 *
 * Interactive elements must respond with energy matching the aesthetic. No fade
 * transitions—snap to attention. No gentle easing—spring with force. The cursor
 * isn't a passive pointer; it's a trigger for reactions.
 */

interface CardData {
  id: number;
  title: string;
  number: string;
  color: string;
  shape: 'circle' | 'square' | 'triangle' | 'hexagon';
}

const cards: CardData[] = [
  { id: 1, title: 'VITALITY', number: '01', color: 'bg-lime-400', shape: 'circle' },
  { id: 2, title: 'MOTION', number: '02', color: 'bg-blue-500', shape: 'square' },
  { id: 3, title: 'IMPACT', number: '03', color: 'bg-black', shape: 'triangle' },
  { id: 4, title: 'PULSE', number: '04', color: 'bg-white', shape: 'hexagon' },
];

function GeometricShape({ shape, color }: { shape: string; color: string }) {
  const baseClasses = `absolute top-4 right-4 w-20 h-20 ${color}`;

  switch (shape) {
    case 'circle':
      return <div className={`${baseClasses} rounded-full`} />;
    case 'square':
      return <div className={baseClasses} />;
    case 'triangle':
      return (
        <div
          className={`${baseClasses}`}
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
      );
    case 'hexagon':
      return (
        <div
          className={`${baseClasses}`}
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
        />
      );
    default:
      return null;
  }
}

function Card({ card }: { card: CardData }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: 'back.out(1.7)',
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: card.id * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-square border-8 border-black cursor-pointer overflow-hidden bg-white group"
    >
      {/* Background color transition */}
      <motion.div
        className="absolute inset-0 bg-lime-400"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        {/* Number */}
        <motion.span
          className="text-8xl font-black text-black opacity-20 group-hover:opacity-100 transition-opacity duration-300"
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {card.number}
        </motion.span>

        {/* Title */}
        <motion.h3
          className="text-4xl font-black text-black group-hover:text-white transition-colors duration-300"
          animate={isHovered ? { x: 10 } : { x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {card.title}
        </motion.h3>
      </div>

      {/* Geometric shape */}
      <motion.div
        animate={isHovered ? { rotate: 180, scale: 1.5 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
      >
        <GeometricShape
          shape={card.shape}
          color={isHovered ? 'bg-blue-500' : card.color}
        />
      </motion.div>
    </motion.div>
  );
}

export function GeometricCards() {
  return (
    <section className="min-h-screen bg-black py-32 px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <h2 className="text-8xl md:text-9xl font-black text-lime-400 mb-8 tracking-tighter">
            IMPACT
          </h2>
          <div className="flex gap-4 items-center">
            <div className="w-32 h-2 bg-lime-400" />
            <div className="w-16 h-2 bg-blue-500" />
            <div className="w-8 h-2 bg-white" />
          </div>
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>

        {/* Typography playground */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-white text-4xl md:text-6xl font-black leading-tight mb-8">
            <span className="text-lime-400">HIGH</span>{' '}
            <span className="text-blue-500">CONTRAST</span>{' '}
            <span className="text-white">CREATES</span>
            <br />
            <span className="text-lime-400 text-7xl">VISUAL</span>{' '}
            <span className="bg-lime-400 text-black px-6">HIERARCHY</span>
          </p>

          {/* Animated accent */}
          <motion.div
            className="w-full h-4 bg-gradient-to-r from-lime-400 via-blue-500 to-purple-600 mt-16"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ backgroundSize: '200% 100%' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
