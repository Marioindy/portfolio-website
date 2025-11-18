'use client';

import { useEffect, useState } from 'react';

export function CRTOverlay() {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    // Random flicker effect for authentic CRT feel
    const flickerInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setFlicker(true);
        setTimeout(() => setFlicker(false), 50);
      }
    }, 100);

    return () => clearInterval(flickerInterval);
  }, []);

  return (
    <>
      {/* CRT Curve Simulation */}
      <div className="pointer-events-none fixed inset-0 z-40">
        <div
          className="h-full w-full"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)
            `,
          }}
        />
      </div>

      {/* Scanlines */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15),
              rgba(0, 0, 0, 0.15) 1px,
              transparent 1px,
              transparent 2px
            )`,
          }}
        />
      </div>

      {/* RGB Chromatic Aberration */}
      <div className="pointer-events-none fixed inset-0 z-40 mix-blend-screen opacity-20">
        <div
          className="h-full w-full"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(255, 0, 64, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(0, 224, 255, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Flicker Effect */}
      {flicker && (
        <div className="pointer-events-none fixed inset-0 z-50 bg-pixel-white opacity-10" />
      )}

      {/* Vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.8), inset 0 0 200px rgba(0,0,0,0.5)',
        }}
      />
    </>
  );
}
