'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NeumorphicCard } from './NeumorphicCard';

export const NeumorphicHero: React.FC = () => {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <NeumorphicCard className="p-8 md:p-12 bg-[#e0e5ec] text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600 bg-clip-text text-transparent">
            Neumorphism Design
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the elegance of soft UI with shadows creating depth,
            gentle gradients, and a monochromatic color scheme that brings
            a 3D-like feel without bold colors.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span className="px-4 py-2 rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
              [SOFT_UI_THEORY]
            </span>
            <span className="px-4 py-2 rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
              [DEPTH_DESIGN]
            </span>
            <span className="px-4 py-2 rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
              [EXECUTION]
            </span>
          </div>
        </motion.div>
      </NeumorphicCard>
    </motion.div>
  );
};
