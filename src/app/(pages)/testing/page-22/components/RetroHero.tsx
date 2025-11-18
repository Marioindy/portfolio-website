'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function RetroHero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'RETRO COMPUTING EXPERIENCE';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgb(0, 255, 0)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Glitchy Title */}
        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-8 text-green-500 font-mono tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            textShadow: `
              0 0 10px rgba(0, 255, 0, 0.8),
              0 0 20px rgba(0, 255, 0, 0.6),
              0 0 30px rgba(0, 255, 0, 0.4),
              2px 2px 0px rgba(0, 255, 0, 0.3)
            `
          }}
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            _
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl text-green-400/80 font-mono mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          [ 80s / 90s Computing Vibes ]
        </motion.p>

        {/* Retro Stats Display */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          {[
            { label: 'CPU', value: '486 DX2' },
            { label: 'RAM', value: '640K' },
            { label: 'DISPLAY', value: 'VGA' },
            { label: 'YEAR', value: '1995' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-black/60 border-2 border-green-500/50 p-4 rounded"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.5 + index * 0.1, type: 'spring' }}
              whileHover={{
                borderColor: 'rgb(0, 255, 0)',
                boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)'
              }}
            >
              <div className="text-green-300 text-xs mb-1 font-mono">
                {stat.label}
              </div>
              <div className="text-green-500 text-lg font-bold font-mono">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-3 bg-green-500 text-black font-bold font-mono border-4 border-green-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            whileHover={{
              scale: 1.05,
              boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            [ EXECUTE ]
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-black text-green-500 font-bold font-mono border-4 border-green-500 shadow-[4px_4px_0px_0px_rgba(0,255,0,0.5)]"
            whileHover={{
              scale: 1.05,
              boxShadow: '6px 6px 0px 0px rgba(0,255,0,0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            [ MANUAL ]
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
