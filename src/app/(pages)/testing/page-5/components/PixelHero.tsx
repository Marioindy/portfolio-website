'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export function PixelHero() {
  const glitchRef = useRef<HTMLDivElement>(null);
  const pixelArtRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Glitch Animation
    if (glitchRef.current) {
      gsap.to(glitchRef.current, {
        duration: 0.1,
        x: () => Math.random() * 4 - 2,
        y: () => Math.random() * 4 - 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }

    // Pixel art bounce animation
    if (pixelArtRef.current) {
      gsap.to(pixelArtRef.current, {
        duration: 2,
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00E0FF 1px, transparent 1px),
            linear-gradient(to bottom, #00E0FF 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Glitch Title */}
          <div className="relative">
            <h1
              ref={glitchRef}
              className="text-5xl md:text-7xl font-bold font-bitmap leading-tight"
              style={{
                color: '#FF0040',
                textShadow: `
                  2px 2px 0 #00E0FF,
                  4px 4px 0 #FFED00
                `,
              }}
            >
              PIXEL
              <br />
              PERFECT
            </h1>
            {/* Glitch layers */}
            <h1
              className="absolute top-0 left-0 text-5xl md:text-7xl font-bold font-bitmap leading-tight opacity-70 mix-blend-screen"
              style={{
                color: '#00E0FF',
                transform: 'translate(-2px, 2px)',
              }}
              aria-hidden="true"
            >
              PIXEL
              <br />
              PERFECT
            </h1>
          </div>

          {/* Subtitle with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-2"
          >
            <p className="text-pixel-blue text-lg md:text-xl font-bitmap">
              &gt; LOADING NOSTALGIA...
            </p>
            <p className="text-pixel-yellow text-sm md:text-base font-bitmap leading-relaxed">
              WHERE CONSTRAINT BECOMES ART
            </p>
          </motion.div>

          {/* Retro Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button className="group relative px-8 py-4 bg-pixel-red border-4 border-pixel-white shadow-pixel hover:shadow-pixel-lg transition-all duration-200 hover:translate-y-1">
              <span className="text-pixel-white font-bitmap text-sm md:text-base">
                START GAME
              </span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-pixel-yellow animate-blink" />
            </button>
          </motion.div>

          {/* Stats Display */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            {[
              { label: 'PIXELS', value: '8-BIT' },
              { label: 'COLORS', value: '256' },
              { label: 'STYLE', value: 'RETRO' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="border-2 border-pixel-blue p-3 bg-pixel-black/50"
              >
                <div className="text-pixel-yellow font-bitmap text-xs">
                  {stat.label}
                </div>
                <div className="text-pixel-white font-bitmap text-sm mt-1">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pixel Art Illustration */}
        <motion.div
          ref={pixelArtRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <PixelArtIllustration />
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-pixel-blue"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
}

// Pixel Art Illustration Component
function PixelArtIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main Character - Retro Computer */}
      <div className="relative aspect-square">
        {/* Monitor */}
        <motion.div
          className="absolute inset-0 bg-pixel-gray border-8 border-pixel-white shadow-pixel-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Screen */}
          <div className="absolute inset-4 bg-pixel-black border-4 border-pixel-blue overflow-hidden">
            {/* Screen Content - Animated Pixels */}
            <div className="relative w-full h-full p-4">
              {/* Code Text */}
              <div className="font-bitmap text-pixel-green text-xs leading-relaxed">
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &gt; HELLO WORLD_
                </motion.div>
                <div className="mt-2 text-pixel-yellow">
                  &gt; SYSTEM OK
                </div>
                <div className="mt-2 text-pixel-blue">
                  &gt; READY_
                </div>
              </div>

              {/* Pixel Grid Pattern */}
              <div className="absolute bottom-4 right-4 grid grid-cols-8 gap-1">
                {[...Array(64)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1"
                    style={{
                      backgroundColor: [
                        '#FF0040',
                        '#00E0FF',
                        '#FFED00',
                        '#00FF41',
                      ][Math.floor(Math.random() * 4)],
                    }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.02,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Screen Glare */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
              }}
            />
          </div>

          {/* Power Button */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-pixel-red border-2 border-pixel-white animate-pixel-pulse" />
        </motion.div>

        {/* Keyboard Base */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-pixel-gray border-4 border-pixel-white shadow-pixel">
          <div className="grid grid-cols-12 gap-0.5 p-2">
            {[...Array(36)].map((_, i) => (
              <div
                key={i}
                className="w-full h-1 bg-pixel-black border border-pixel-white"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Pixels */}
      <div className="absolute -top-8 -right-8 w-16 h-16 grid grid-cols-4 gap-1">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3"
            style={{
              backgroundColor: ['#FF0040', '#00E0FF', '#FFED00'][i % 3],
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}
