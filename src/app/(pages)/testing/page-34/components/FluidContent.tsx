'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export function FluidContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const section = sectionRef.current;
    section?.addEventListener('mousemove', handleMouseMove);

    return () => {
      section?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const blobs = sectionRef.current.querySelectorAll('.fluid-blob');

    blobs.forEach((blob) => {
      gsap.to(blob, {
        x: (mousePosition.x - 50) * 0.5,
        y: (mousePosition.y - 50) * 0.5,
        duration: 2,
        ease: 'power2.out',
      });
    });
  }, [mousePosition]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Interactive fluid background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-1/4 left-1/4 w-96 h-96 opacity-20 fluid-blob"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#fluidGradient1)"
            d="M47.5,-60.9C59.6,-50.6,66.3,-33.8,70.7,-16.2C75.1,1.4,77.2,19.8,71.3,36.2C65.4,52.6,51.5,67,34.8,75.1C18.1,83.2,-1.4,84.9,-20.3,80.3C-39.2,75.7,-57.5,64.8,-68.3,48.9C-79.1,33,-82.4,12.1,-80.5,-8.2C-78.6,-28.5,-71.5,-48.2,-58.7,-58.2C-45.9,-68.2,-27.4,-68.5,-9.8,-66.9C7.8,-65.3,35.4,-71.2,47.5,-60.9Z"
            transform="translate(100 100)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 100 100"
              to="360 100 100"
              dur="30s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="fluidGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute bottom-1/4 right-1/4 w-96 h-96 opacity-20 fluid-blob"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#fluidGradient2)"
            d="M41.3,-54.5C52.9,-43.8,61.3,-30.2,66.1,-15.1C70.9,0,72.1,16.6,66.8,31.4C61.5,46.2,49.7,59.2,35.2,67.7C20.7,76.2,3.5,80.2,-13.5,79.8C-30.5,79.4,-47.3,74.6,-59.8,64.3C-72.3,54,-80.5,38.2,-82.3,21.5C-84.1,4.8,-79.5,-12.8,-71.3,-28.2C-63.1,-43.6,-51.3,-56.8,-37.5,-66.8C-23.7,-76.8,-7.9,-83.6,5.5,-81.9C18.9,-80.2,29.7,-65.2,41.3,-54.5Z"
            transform="translate(100 100)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 100 100"
              to="0 100 100"
              dur="25s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="fluidGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Fluid Dynamics
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-2xl text-center text-teal-700/80 mb-20 leading-relaxed"
          >
            Experience design that breathes and flows like a living organism,
            responding to your presence with organic grace.
          </motion.p>

          {/* Feature cards with organic shapes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Morphing Boundaries',
                description:
                  'Shapes that evolve and transform, creating a sense of continuous growth and adaptation.',
                gradient: 'from-emerald-500 to-teal-500',
              },
              {
                title: 'Nature-Inspired Motion',
                description:
                  'Animations that mimic the fluid movements found in water, wind, and living creatures.',
                gradient: 'from-teal-500 to-cyan-500',
              },
              {
                title: 'Organic Color Flow',
                description:
                  'Color transitions that blend seamlessly, like the shifting hues of a sunset or ocean.',
                gradient: 'from-cyan-500 to-blue-500',
              },
              {
                title: 'Living Interfaces',
                description:
                  'Interactive elements that respond with the subtlety and intelligence of living systems.',
                gradient: 'from-blue-500 to-emerald-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/70 backdrop-blur-md rounded-[2rem] p-8 border border-teal-200/50 group-hover:border-teal-300/80 transition-all duration-500 overflow-hidden">
                  {/* Animated gradient blob */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                  />

                  <h3 className="text-2xl font-bold mb-4 text-teal-800 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-teal-600/80 leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 px-12 py-6 rounded-full text-white font-semibold text-xl shadow-xl">
                Experience the Flow
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-400/30 blur-xl"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  );
}
