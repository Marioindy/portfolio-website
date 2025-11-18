'use client';

import React from 'react';
import { GraffitiHeader } from './components/GraffitiHeader';
import { UrbanGrid } from './components/UrbanGrid';
import { SprayPaintSection } from './components/SprayPaintSection';
import { TagWall } from './components/TagWall';

export default function Page25() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white overflow-hidden">
      {/* Concrete Texture Background */}
      <div
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Brick Wall Pattern */}
      <div
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,0.1) 35px,
            rgba(255,255,255,0.1) 36px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 70px,
            rgba(255,255,255,0.1) 70px,
            rgba(255,255,255,0.1) 71px
          )`,
        }}
      />

      <div className="relative z-10">
        <GraffitiHeader />
        <UrbanGrid />
        <SprayPaintSection />
        <TagWall />

        {/* Footer Tags */}
        <div className="py-12 text-center space-y-2">
          <p className="text-xs font-mono text-zinc-500 tracking-widest">
            [STREET_ART_AESTHETIC] [URBAN_DESIGN] [EXECUTION]
          </p>
          <p
            className="text-2xl font-black tracking-wider"
            style={{
              textShadow: '2px 2px 0 #ff006e, 4px 4px 0 #8338ec, 6px 6px 0 #3a86ff',
              transform: 'skew(-5deg)',
            }}
          >
            PAGE 25
          </p>
        </div>
      </div>
    </div>
  );
}
