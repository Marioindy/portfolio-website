'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

export function ArtDecoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isInView) return;

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      gsap.fromTo(
        ref,
        {
          opacity: 0,
          y: 80,
          rotationY: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1.2,
          delay: index * 0.2,
          ease: 'power3.out',
        }
      );
    });
  }, [isInView]);

  const features = [
    {
      title: 'ART DECO',
      subtitle: 'Geometric Elegance',
      description: 'Bold geometric patterns and symmetrical designs that defined an era.',
      color: 'from-amber-600 to-orange-600',
      icon: '◆',
    },
    {
      title: 'RETRO TYPE',
      subtitle: 'Classic Typography',
      description: 'Sophisticated serif fonts with distinctive character and timeless appeal.',
      color: 'from-orange-700 to-amber-800',
      icon: '✦',
    },
    {
      title: 'JAZZ WARMTH',
      subtitle: 'Rich Color Palette',
      description: 'Warm tones of gold, burgundy, and cream creating intimate ambiance.',
      color: 'from-amber-700 to-orange-800',
      icon: '♪',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-transparent via-amber-100/50 to-transparent"
    >
      {/* Art deco border pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-amber-900 mb-4"
            style={{
              fontFamily: 'Didot, Georgia, serif',
              letterSpacing: '0.1em',
              textShadow: '2px 2px 0 #fbbf24',
            }}
          >
            DESIGN ELEMENTS
          </h2>

          {/* Art deco divider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-20 h-px bg-amber-700" />
            <div className="w-2 h-2 rotate-45 bg-amber-700" />
            <div className="w-20 h-px bg-amber-700" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group perspective-1000"
            >
              <motion.div
                className="relative bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-lg shadow-lg border-2 border-amber-300 overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Art deco corner ornaments */}
                <div className="absolute top-0 left-0 w-16 h-16">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M 0 0 L 100 0 L 0 100 Z"
                      fill="#d97706"
                      opacity="0.2"
                    />
                    <path d="M 0 0 L 50 0 L 0 50 Z" fill="#92400e" opacity="0.3" />
                  </svg>
                </div>

                <div className="absolute bottom-0 right-0 w-16 h-16 rotate-180">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M 0 0 L 100 0 L 0 100 Z"
                      fill="#d97706"
                      opacity="0.2"
                    />
                    <path d="M 0 0 L 50 0 L 0 50 Z" fill="#92400e" opacity="0.3" />
                  </svg>
                </div>

                {/* Icon */}
                <motion.div
                  className={`text-6xl mb-6 text-center bg-gradient-to-br ${feature.color} bg-clip-text text-transparent font-bold`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-amber-900 mb-2 text-center tracking-widest"
                  style={{ fontFamily: 'Didot, Georgia, serif' }}
                >
                  {feature.title}
                </h3>

                {/* Subtitle */}
                <p
                  className="text-orange-800 text-center mb-4 italic"
                  style={{ fontFamily: 'Palatino, serif' }}
                >
                  {feature.subtitle}
                </p>

                {/* Divider */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-px bg-amber-600" />
                </div>

                {/* Description */}
                <p className="text-amber-800 text-center leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-16 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="relative">
            {/* Center diamond */}
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rotate-45 shadow-lg" />

            {/* Surrounding circles */}
            <motion.div
              className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-amber-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-orange-600"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-orange-700"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-amber-700"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
