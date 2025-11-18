'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function CopperDivider() {
  const dividerRef = useRef<HTMLDivElement>(null);
  const gear1Ref = useRef<HTMLDivElement>(null);
  const gear2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Divider entrance animation
      gsap.from(dividerRef.current, {
        scaleX: 0,
        duration: 1.5,
        delay: 0.8,
        ease: 'power3.inOut',
      });

      // Continuous gear rotation
      if (gear1Ref.current) {
        gsap.to(gear1Ref.current, {
          rotation: 360,
          duration: 8,
          repeat: -1,
          ease: 'none',
        });
      }

      if (gear2Ref.current) {
        gsap.to(gear2Ref.current, {
          rotation: -360,
          duration: 6,
          repeat: -1,
          ease: 'none',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={dividerRef} className="relative w-full h-24 my-12 flex items-center justify-center">
      {/* Main divider bar */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-3 bg-gradient-to-r from-transparent via-amber-700 to-transparent rounded-full shadow-lg">
        {/* Rivet details */}
        <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-900 rounded-full border-2 border-amber-600" />
        <div className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-900 rounded-full border-2 border-amber-600" />
      </div>

      {/* Center gear decoration */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Left gear */}
        <div ref={gear1Ref} className="w-16 h-16">
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-lg">
            <circle cx="50" cy="50" r="35" fill="#78350f" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#d97706" strokeWidth="3" />
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x1 = 50 + Math.cos(angle) * 25;
              const y1 = 50 + Math.sin(angle) * 25;
              const x2 = 50 + Math.cos(angle) * 40;
              const y2 = 50 + Math.sin(angle) * 40;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#b45309"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              );
            })}
            <circle cx="50" cy="50" r="12" fill="#451a03" />
          </svg>
        </div>

        {/* Center medallion */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-700 via-orange-600 to-amber-800 flex items-center justify-center border-4 border-amber-900 shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-900 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-amber-950 border-2 border-amber-700" />
          </div>
        </div>

        {/* Right gear */}
        <div ref={gear2Ref} className="w-16 h-16">
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-lg">
            <circle cx="50" cy="50" r="35" fill="#78350f" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#d97706" strokeWidth="3" />
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x1 = 50 + Math.cos(angle) * 25;
              const y1 = 50 + Math.sin(angle) * 25;
              const x2 = 50 + Math.cos(angle) * 40;
              const y2 = 50 + Math.sin(angle) * 40;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#b45309"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              );
            })}
            <circle cx="50" cy="50" r="12" fill="#451a03" />
          </svg>
        </div>
      </div>
    </div>
  );
}
