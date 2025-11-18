'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NeumorphicCard } from './NeumorphicCard';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const NeumorphicFeatureCards: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '🎨',
      title: 'Soft Shadows',
      description: 'Beautiful depth created with subtle shadow effects',
    },
    {
      icon: '✨',
      title: 'Minimalist Design',
      description: 'Clean and modern aesthetic with monochromatic palette',
    },
    {
      icon: '🌊',
      title: 'Smooth Transitions',
      description: 'Fluid animations that feel natural and responsive',
    },
    {
      icon: '💎',
      title: 'Premium Feel',
      description: '3D-like depth without bold colors or gradients',
    },
    {
      icon: '🔮',
      title: 'Interactive Elements',
      description: 'Tactile feedback with pressed and hover states',
    },
    {
      icon: '🎯',
      title: 'Modern UI',
      description: 'Contemporary design patterns for optimal UX',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {features.map((feature, index) => (
        <motion.div key={index} variants={itemVariants}>
          <NeumorphicCard className="p-6 h-full bg-[#e0e5ec]">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </NeumorphicCard>
        </motion.div>
      ))}
    </motion.div>
  );
};
