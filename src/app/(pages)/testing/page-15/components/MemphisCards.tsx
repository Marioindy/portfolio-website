'use client';

import React from 'react';
import { useFadeInStagger } from '@/hooks/useAnimation';
import { MemphisCard } from './MemphisCard';

const memphisFeatures = [
  {
    title: 'Geometric Shapes',
    description: 'Bold, playful shapes that dance across the canvas with childlike wonder',
    emoji: '🔷',
    colors: {
      primary: 'bg-pink-500',
      secondary: 'bg-yellow-400',
      accent: 'bg-cyan-500',
    },
    rotation: 2,
  },
  {
    title: 'Bright Colors',
    description: 'Vibrant primary colors that pop and celebrate the joy of design',
    emoji: '🎨',
    colors: {
      primary: 'bg-red-500',
      secondary: 'bg-blue-500',
      accent: 'bg-yellow-400',
    },
    rotation: -3,
  },
  {
    title: 'Curved Lines',
    description: 'Smooth, flowing curves that add movement and energy to every element',
    emoji: '〰️',
    colors: {
      primary: 'bg-purple-500',
      secondary: 'bg-pink-500',
      accent: 'bg-orange-400',
    },
    rotation: 1,
  },
  {
    title: 'Fun Typography',
    description: 'Mixed fonts and styles creating a playful typographic playground',
    emoji: '✨',
    colors: {
      primary: 'bg-cyan-500',
      secondary: 'bg-green-500',
      accent: 'bg-yellow-400',
    },
    rotation: -2,
  },
  {
    title: 'Bold Patterns',
    description: 'Eye-catching patterns that break all the rules with confidence',
    emoji: '⚡',
    colors: {
      primary: 'bg-orange-500',
      secondary: 'bg-pink-500',
      accent: 'bg-purple-500',
    },
    rotation: 3,
  },
  {
    title: 'Playful Spirit',
    description: 'A celebration of creativity, joy, and the freedom to be different',
    emoji: '🎉',
    colors: {
      primary: 'bg-yellow-400',
      secondary: 'bg-red-500',
      accent: 'bg-blue-500',
    },
    rotation: -1,
  },
];

export function MemphisCards() {
  const gridRef = useFadeInStagger<HTMLDivElement>({ stagger: 0.12, delay: 0.4 });

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
    >
      {memphisFeatures.map((feature, index) => (
        <MemphisCard key={index} {...feature} index={index} />
      ))}
    </div>
  );
}
