'use client';

import { useEffect, useRef } from 'react';

export function CRTEffect() {
  const scanlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let position = 0;

    const animate = () => {
      if (scanlineRef.current) {
        position = (position + 1) % window.innerHeight;
        scanlineRef.current.style.transform = `translateY(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <>
      {/* CRT Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.3)_2px,rgba(0,255,0,0.3)_4px)]" />
      </div>

      {/* Moving scanline */}
      <div
        ref={scanlineRef}
        className="fixed left-0 right-0 h-2 bg-gradient-to-b from-transparent via-green-400/30 to-transparent pointer-events-none z-50 blur-sm"
        style={{ top: 0 }}
      />

      {/* CRT Curvature effect */}
      <div className="fixed inset-0 pointer-events-none z-50 shadow-[inset_0_0_100px_rgba(0,0,0,0.5),inset_0_0_200px_rgba(0,0,0,0.3)]" />

      {/* Vignette effect */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(circle,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Screen flicker */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-black opacity-[0.02] animate-[flicker_0.15s_infinite]" />

      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 0.02; }
          50% { opacity: 0.05; }
        }
      `}</style>
    </>
  );
}
