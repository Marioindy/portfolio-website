'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

/**
 * Sci-Fi Space Hero Section with futuristic design
 */
export function SpaceHero() {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Futuristic entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        '.space-title',
        {
          opacity: 0,
          y: 100,
          scale: 0.5,
          rotationX: -90,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          stagger: 0.15,
        }
      ).fromTo(
        '.space-subtitle',
        {
          opacity: 0,
          letterSpacing: '20px',
        },
        {
          opacity: 1,
          letterSpacing: '4px',
          duration: 1.2,
        },
        '-=0.8'
      );

      // Pulsing glow effect
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Parallax effect on scroll
      gsap.to('.space-hero-content', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 300,
        opacity: 0,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cosmic glow effect */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(138,43,226,0.6) 0%, rgba(75,0,130,0.4) 50%, transparent 70%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(138, 123, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(138, 123, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative space-hero-content">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {/* Sci-fi badge */}
            <motion.div
              className="inline-block mb-8 px-6 py-2 border border-purple-500/50 bg-purple-500/10 backdrop-blur-sm"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            >
              <span className="text-purple-300 text-sm font-mono tracking-widest uppercase">
                ◆ Testing Protocol 28 ◆
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block space-title text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                COSMIC
              </span>
              <span className="block space-title text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                FRONTIER
              </span>
            </h1>

            <p className="space-subtitle text-xl md:text-2xl text-blue-200 font-mono uppercase mb-16 tracking-wider">
              Exploring the infinite reaches of digital space
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <motion.button
                className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg tracking-wide overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-mono uppercase">Launch Mission</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white" />
                <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white" />
                <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white" />
                <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white" />
              </motion.button>

              <motion.button
                className="relative px-12 py-5 border-2 border-purple-500 text-purple-300 font-bold text-lg tracking-wide backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-mono uppercase">Explore Systems</span>
                {/* Animated border */}
                <motion.span
                  className="absolute inset-0 border-2 border-blue-400"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 border border-purple-500/30"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                  transform: `rotate(${i * 45}deg)`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [i * 45, i * 45 + 360],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(138, 123, 255, 0.03) 2px, rgba(138, 123, 255, 0.03) 4px)',
        }}
        animate={{ y: [0, 100] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  );
}
