'use client';

import React from 'react';
import { PlayfulHeader } from './PlayfulHeader';
import { GeometricPattern } from './GeometricPattern';
import { MemphisCards } from './MemphisCards';
import { CurvedDivider } from './CurvedDivider';
import { FloatingShapes } from './FloatingShapes';
import { useFadeIn } from '@/hooks/useAnimation';

export function MemphisShowcase() {
  const containerRef = useFadeIn<HTMLDivElement>({ duration: 1, delay: 0.1 });

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Geometric pattern background */}
      <GeometricPattern />

      {/* Floating playful shapes */}
      <FloatingShapes />

      {/* Main content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PlayfulHeader />

          <CurvedDivider />

          <MemphisCards />

          {/* Fun footer section */}
          <div className="mt-20 text-center">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-white font-black text-sm tracking-wider uppercase">
                [PLAYFUL_GEOMETRY] • [MEMPHIS_THEORY] • [EXECUTION]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
