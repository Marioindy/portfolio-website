'use client';

import React from 'react';
import { GearPattern } from './GearPattern';
import { IndustrialHeader } from './IndustrialHeader';
import { MechanicalCards } from './MechanicalCards';
import { SteamPipes } from './SteamPipes';
import { CopperDivider } from './CopperDivider';
import { useFadeIn } from '@/hooks/useAnimation';

export function SteampunkShowcase() {
  const containerRef = useFadeIn<HTMLDivElement>({ duration: 1.2, delay: 0.2 });

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated gear background pattern */}
      <GearPattern />

      {/* Steam pipes decoration */}
      <SteamPipes />

      {/* Main content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <IndustrialHeader />

          <CopperDivider />

          <MechanicalCards />

          {/* Industrial footer section */}
          <div className="mt-20 text-center">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 rounded-lg shadow-2xl border-2 border-amber-900">
              <p className="text-amber-100 font-mono text-sm tracking-widest">
                [INDUSTRIAL_AESTHETICS] • [STEAMPUNK_THEORY] • [EXECUTION]
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vignette overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/40 z-0" />
    </div>
  );
}
