'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { useQuery } from 'convex/react';
import { api } from '../../../../../../convex/_generated/api';

// Psychedelic color palette - vibrant 1960s inspired colors
const psychedelicColors = {
  electric: '#FF00FF',
  neon: '#00FFFF',
  cosmic: '#FF1493',
  groovy: '#FFD700',
  funkadelic: '#FF4500',
  purple: '#9400D3',
  lime: '#32CD32',
  sunset: '#FF69B4',
  orange: '#FF8C00',
  blue: '#1E90FF',
};

// Kaleidoscope pattern component
const KaleidoscopePattern: React.FC<{ className?: string }> = ({ className = '' }) => {
  const patternRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (patternRef.current) {
      gsap.to(patternRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);

  return (
    <svg
      className={`${className} absolute`}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="psychGrad1">
          <stop offset="0%" stopColor={psychedelicColors.electric} />
          <stop offset="50%" stopColor={psychedelicColors.cosmic} />
          <stop offset="100%" stopColor={psychedelicColors.purple} />
        </radialGradient>
        <radialGradient id="psychGrad2">
          <stop offset="0%" stopColor={psychedelicColors.neon} />
          <stop offset="50%" stopColor={psychedelicColors.groovy} />
          <stop offset="100%" stopColor={psychedelicColors.funkadelic} />
        </radialGradient>
      </defs>

      <g ref={patternRef}>
        {[...Array(8)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 45} 200 200)`}>
            <circle
              cx="200"
              cy="100"
              r="30"
              fill="url(#psychGrad1)"
              opacity="0.6"
            />
            <circle
              cx="200"
              cy="100"
              r="20"
              fill="url(#psychGrad2)"
              opacity="0.8"
            />
          </g>
        ))}
      </g>
    </svg>
  );
};

// Swirling pattern component
const SwirlPattern: React.FC<{ className?: string; reverse?: boolean }> = ({
  className = '',
  reverse = false
}) => {
  const swirlRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (swirlRef.current) {
      gsap.to(swirlRef.current, {
        rotation: reverse ? -360 : 360,
        transformOrigin: 'center',
        duration: 15,
        repeat: -1,
        ease: 'none',
      });
    }
  }, [reverse]);

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`swirl-${reverse ? 'rev' : 'norm'}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={psychedelicColors.electric}>
            <animate
              attributeName="stop-color"
              values={`${psychedelicColors.electric};${psychedelicColors.cosmic};${psychedelicColors.neon};${psychedelicColors.electric}`}
              dur="10s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor={psychedelicColors.neon}>
            <animate
              attributeName="stop-color"
              values={`${psychedelicColors.neon};${psychedelicColors.groovy};${psychedelicColors.purple};${psychedelicColors.neon}`}
              dur="10s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>

      <path
        ref={swirlRef}
        d="M100,100 Q150,50 150,100 T100,100 Q50,150 50,100 T100,100"
        fill="none"
        stroke={`url(#swirl-${reverse ? 'rev' : 'norm'})`}
        strokeWidth="4"
      />
    </svg>
  );
};

// Optical illusion component - moving circles
const OpticalIllusion: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(10)].map((_, i) => (
        <circle
          key={i}
          cx="200"
          cy="200"
          r={20 + i * 20}
          fill="none"
          stroke={i % 2 === 0 ? psychedelicColors.electric : psychedelicColors.neon}
          strokeWidth="3"
        >
          <animate
            attributeName="r"
            values={`${20 + i * 20};${30 + i * 20};${20 + i * 20}`}
            dur={`${2 + i * 0.3}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
};

// Trippy text component with color cycling
const TrippyText: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = Object.values(psychedelicColors);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 500);
    return () => clearInterval(interval);
  }, [colors.length]);

  return (
    <motion.div
      className={className}
      animate={{
        color: colors[colorIndex],
        textShadow: [
          `0 0 10px ${colors[colorIndex]}`,
          `0 0 20px ${colors[(colorIndex + 1) % colors.length]}`,
          `0 0 10px ${colors[colorIndex]}`,
        ],
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

// Psychedelic card component
const PsychedelicCard: React.FC<{ title: string; index: number }> = ({
  title,
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        backgroundPosition: '200% 200%',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  const gradients = [
    `linear-gradient(45deg, ${psychedelicColors.electric}, ${psychedelicColors.cosmic}, ${psychedelicColors.purple})`,
    `linear-gradient(135deg, ${psychedelicColors.neon}, ${psychedelicColors.groovy}, ${psychedelicColors.funkadelic})`,
    `linear-gradient(225deg, ${psychedelicColors.sunset}, ${psychedelicColors.orange}, ${psychedelicColors.cosmic})`,
  ];

  return (
    <motion.div
      ref={cardRef}
      className="relative p-8 rounded-3xl overflow-hidden group cursor-pointer"
      style={{
        background: gradients[index % gradients.length],
        backgroundSize: '200% 200%',
      }}
      whileHover={{
        scale: 1.05,
        rotate: [0, -2, 2, 0],
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${psychedelicColors.groovy}33, transparent)`,
        }}
      />

      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h3>
        <KaleidoscopePattern className="w-24 h-24 opacity-50" />
      </div>
    </motion.div>
  );
};

// Groovy button component
const GroovyButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({
  children,
  onClick
}) => {
  return (
    <motion.button
      className="relative px-8 py-4 text-2xl font-bold text-white rounded-full overflow-hidden"
      style={{
        background: `linear-gradient(45deg, ${psychedelicColors.electric}, ${psychedelicColors.cosmic})`,
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: `0 0 30px ${psychedelicColors.electric}`,
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        backgroundPosition: {
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        },
      }}
    >
      <motion.span
        animate={{
          textShadow: [
            `0 0 10px ${psychedelicColors.groovy}`,
            `0 0 20px ${psychedelicColors.neon}`,
            `0 0 10px ${psychedelicColors.groovy}`,
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

// Main component
export function PsychedelicContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  // Convex integration
  const skills = useQuery(api.skills.getSkills);

  const [tripLevel, setTripLevel] = useState(1);

  useEffect(() => {
    // View Transitions API
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        // Smooth transition on page load
      });
    }

    // Background color animation
    const colors = Object.values(psychedelicColors);
    let colorIndex = 0;

    const interval = setInterval(() => {
      if (containerRef.current) {
        colorIndex = (colorIndex + 1) % colors.length;
        gsap.to(containerRef.current, {
          backgroundColor: colors[colorIndex] + '11',
          duration: 2,
          ease: 'sine.inOut',
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-black"
      style={{ perspective: '1000px' }}
    >
      {/* Animated background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <KaleidoscopePattern className="w-full h-full opacity-20" />
        <SwirlPattern className="absolute top-10 left-10 w-64 h-64 opacity-30" />
        <SwirlPattern
          className="absolute bottom-10 right-10 w-64 h-64 opacity-30"
          reverse
        />
        <OpticalIllusion className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 md:px-8 z-10">
        <motion.div
          className="text-center space-y-12"
          style={{ scale, rotate }}
        >
          <TrippyText className="text-6xl md:text-9xl font-black uppercase tracking-wider">
            Psychedelic
          </TrippyText>

          <motion.div
            className="text-2xl md:text-4xl font-bold"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              background: `linear-gradient(90deg, ${psychedelicColors.electric}, ${psychedelicColors.neon}, ${psychedelicColors.cosmic}, ${psychedelicColors.groovy})`,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Testing Page 30
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center">
            {['✌️', '🌈', '☮️', '🎨', '🌺'].map((emoji, i) => (
              <motion.div
                key={i}
                className="text-6xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Trippy Cards Section */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative z-10">
        <div className="max-w-7xl w-full space-y-12">
          <TrippyText className="text-4xl md:text-6xl font-black text-center uppercase">
            Far Out Patterns
          </TrippyText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Groovy Vibes', 'Cosmic Energy', 'Trippy Dreams'].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <PsychedelicCard title={title} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Trip Level Section */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative z-10">
        <div className="max-w-4xl w-full space-y-16 text-center">
          <TrippyText className="text-4xl md:text-6xl font-black uppercase">
            Turn Up The Trip
          </TrippyText>

          <div className="space-y-8">
            <motion.div
              className="text-8xl font-black"
              style={{
                color: psychedelicColors.electric,
                textShadow: `0 0 ${tripLevel * 20}px ${psychedelicColors.neon}`,
              }}
              animate={{
                scale: [1, 1 + tripLevel * 0.1, 1],
                rotate: [0, tripLevel * 10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {tripLevel}
            </motion.div>

            <div className="flex gap-4 justify-center flex-wrap">
              {[1, 2, 3, 4, 5].map((level) => (
                <GroovyButton
                  key={level}
                  onClick={() => setTripLevel(level)}
                >
                  Level {level}
                </GroovyButton>
              ))}
            </div>
          </div>

          <motion.div
            className="relative h-64"
            animate={{
              filter: `hue-rotate(${tripLevel * 72}deg) saturate(${1 + tripLevel * 0.2})`,
            }}
          >
            <OpticalIllusion className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Convex Data Display - Psychedelic Style */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative z-10">
        <div className="max-w-6xl w-full space-y-16">
          <TrippyText className="text-4xl md:text-6xl font-black text-center uppercase">
            Groovy Skills
          </TrippyText>

          {skills && skills.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.slice(0, 6).map((skill, index) => (
                <motion.div
                  key={skill._id}
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -5, 5, 0],
                  }}
                  className="relative p-6 rounded-2xl overflow-hidden cursor-pointer group"
                  style={{
                    background: `linear-gradient(${45 + index * 30}deg, ${
                      Object.values(psychedelicColors)[index % 10]
                    }, ${Object.values(psychedelicColors)[(index + 5) % 10]})`,
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    style={{
                      background: `radial-gradient(circle at center, ${psychedelicColors.groovy}33, transparent)`,
                      backgroundSize: '200% 200%',
                    }}
                  />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {skill.name}
                    </h3>
                    <p className="text-white/80 font-semibold">
                      {skill.category}
                    </p>
                  </div>

                  <motion.div
                    className="absolute -right-8 -bottom-8 w-32 h-32 opacity-0 group-hover:opacity-50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  >
                    <SwirlPattern className="w-full h-full" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}

          {(!skills || skills.length === 0) && (
            <div className="text-center">
              <TrippyText className="text-3xl font-bold">
                No skills loaded - but the trip continues! ✌️
              </TrippyText>
            </div>
          )}
        </div>
      </section>

      {/* Kaleidoscope Gallery */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative z-10">
        <div className="max-w-6xl w-full space-y-16">
          <TrippyText className="text-4xl md:text-6xl font-black text-center uppercase">
            Kaleidoscope Dreams
          </TrippyText>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="aspect-square relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 180 }}
              >
                <KaleidoscopePattern className="w-full h-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative z-10">
        <motion.div
          className="max-w-4xl text-center space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <TrippyText className="text-5xl md:text-7xl font-black uppercase leading-tight">
            "Expand Your Mind,
            <br />
            Free Your Soul"
          </TrippyText>

          <motion.div
            className="text-2xl font-bold"
            style={{
              background: `linear-gradient(90deg, ${psychedelicColors.electric}, ${psychedelicColors.neon}, ${psychedelicColors.cosmic})`,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            — Peace, Love & Code ✌️
          </motion.div>

          <div className="flex justify-center gap-8 text-6xl">
            {['☮️', '❤️', '🌈'].map((emoji, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Floating scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className="w-8 h-12 border-4 rounded-full flex items-start justify-center pt-2"
          style={{ borderColor: psychedelicColors.electric }}
        >
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: psychedelicColors.neon }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
