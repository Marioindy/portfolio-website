'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface PixelCard {
  id: number;
  title: string;
  color: string;
  icon: string;
  description: string;
}

const pixelCards: PixelCard[] = [
  {
    id: 1,
    title: 'NOSTALGIA',
    color: '#FF0040',
    icon: '♥',
    description: 'MEMORY IN PIXELS',
  },
  {
    id: 2,
    title: 'CONSTRAINT',
    color: '#00E0FF',
    icon: '▲',
    description: 'LIMITS AS ART',
  },
  {
    id: 3,
    title: 'REBELLION',
    color: '#FFED00',
    icon: '★',
    description: 'RETRO REVOLUTION',
  },
  {
    id: 4,
    title: 'PRECISION',
    color: '#00FF41',
    icon: '■',
    description: 'PIXEL PERFECT',
  },
  {
    id: 5,
    title: 'PLAYFUL',
    color: '#B200FF',
    icon: '♪',
    description: 'JOY IN BLOCKS',
  },
  {
    id: 6,
    title: 'WARMTH',
    color: '#FF6A00',
    icon: '◆',
    description: 'LOW-FI LOVE',
  },
];

export function PixelGrid() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      // Stagger animation for grid items
      gsap.fromTo(
        gridRef.current.children,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative py-20 px-4 bg-pixel-black">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-6xl font-bitmap mb-4"
            style={{
              color: '#00E0FF',
              textShadow: '4px 4px 0 #FF0040',
            }}
          >
            THE GRID
          </h2>
          <p className="text-pixel-yellow font-bitmap text-sm md:text-base">
            &gt; AESTHETIC ARCHITECTURE IN 8-BIT
          </p>
        </motion.div>
      </div>

      {/* Pixel Grid */}
      <div
        ref={gridRef}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {pixelCards.map((card) => (
          <motion.div
            key={card.id}
            className="group relative"
            onHoverStart={() => setActiveCard(card.id)}
            onHoverEnd={() => setActiveCard(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Card */}
            <div
              className="relative p-8 border-4 border-pixel-white bg-pixel-black shadow-pixel hover:shadow-pixel-lg transition-all duration-300"
              style={{
                borderColor: activeCard === card.id ? card.color : '#FFFFFF',
              }}
            >
              {/* Icon */}
              <div
                className="text-6xl mb-4 font-bitmap transition-all duration-300 group-hover:animate-pixel-bounce"
                style={{
                  color: card.color,
                  textShadow: `4px 4px 0 rgba(0,0,0,0.3)`,
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bitmap mb-3 transition-colors duration-300"
                style={{
                  color: activeCard === card.id ? card.color : '#FFFFFF',
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-pixel-gray font-bitmap text-xs leading-relaxed">
                {card.description}
              </p>

              {/* Hover Effect - Pixel Border Animation */}
              {activeCard === card.id && (
                <>
                  <motion.div
                    className="absolute top-0 left-0 w-2 h-2"
                    style={{ backgroundColor: card.color }}
                    animate={{
                      x: [0, 4, 4, 0, 0],
                      y: [0, 0, 4, 4, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.div
                    className="absolute top-0 right-0 w-2 h-2"
                    style={{ backgroundColor: card.color }}
                    animate={{
                      x: [0, -4, -4, 0, 0],
                      y: [0, 0, 4, 4, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: 0.2,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-2 h-2"
                    style={{ backgroundColor: card.color }}
                    animate={{
                      x: [0, -4, -4, 0, 0],
                      y: [0, 0, -4, -4, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: 0.4,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-2 h-2"
                    style={{ backgroundColor: card.color }}
                    animate={{
                      x: [0, 4, 4, 0, 0],
                      y: [0, 0, -4, -4, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: 0.6,
                    }}
                  />
                </>
              )}

              {/* Status Indicator */}
              <div className="absolute top-4 right-4">
                <div
                  className="w-3 h-3 animate-blink"
                  style={{ backgroundColor: card.color }}
                />
              </div>
            </div>

            {/* Pixel Shadow Effect */}
            <div
              className="absolute -bottom-2 -right-2 w-full h-full border-4 border-pixel-gray -z-10 opacity-30"
              style={{
                backgroundColor: card.color,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Interactive Pixel Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FF0040 1px, transparent 1px),
              linear-gradient(to bottom, #FF0040 1px, transparent 1px)
            `,
            backgroundSize: '16px 16px',
          }}
        />
      </div>
    </section>
  );
}
