'use client';

import React from 'react';
import { useFadeInStagger } from '@/hooks/useAnimation';
import { SteampunkCard } from './SteampunkCard';

const mechanicalFeatures = [
  {
    title: 'Gear Mechanisms',
    description: 'Intricate clockwork systems powered by steam and precision engineering',
    icon: '⚙️',
    gradient: 'from-amber-700 via-orange-600 to-amber-800',
  },
  {
    title: 'Copper Pipes',
    description: 'Industrial piping networks distributing steam throughout the machinery',
    icon: '🔩',
    gradient: 'from-orange-700 via-amber-600 to-orange-800',
  },
  {
    title: 'Bronze Rivets',
    description: 'Heavy-duty fasteners holding together the mechanical masterpiece',
    icon: '🔨',
    gradient: 'from-amber-800 via-yellow-700 to-amber-900',
  },
  {
    title: 'Steam Valves',
    description: 'Pressure regulation systems maintaining optimal mechanical performance',
    icon: '💨',
    gradient: 'from-orange-800 via-amber-700 to-orange-900',
  },
  {
    title: 'Vintage Gauges',
    description: 'Analog measurement instruments tracking pressure and temperature',
    icon: '📊',
    gradient: 'from-amber-700 via-orange-700 to-yellow-800',
  },
  {
    title: 'Cog Assembly',
    description: 'Interconnected gear systems creating complex mechanical movements',
    icon: '⚡',
    gradient: 'from-orange-700 via-yellow-600 to-amber-800',
  },
];

export function MechanicalCards() {
  const gridRef = useFadeInStagger<HTMLDivElement>({ stagger: 0.1, delay: 0.5 });

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
    >
      {mechanicalFeatures.map((feature, index) => (
        <SteampunkCard key={index} {...feature} index={index} />
      ))}
    </div>
  );
}
