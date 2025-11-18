'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function GearPattern() {
  const gear1Ref = useRef<SVGGElement>(null);
  const gear2Ref = useRef<SVGGElement>(null);
  const gear3Ref = useRef<SVGGElement>(null);
  const gear4Ref = useRef<SVGGElement>(null);

  useEffect(() => {
    const gears = [
      { ref: gear1Ref, speed: 4, direction: 1 },
      { ref: gear2Ref, speed: 6, direction: -1 },
      { ref: gear3Ref, speed: 5, direction: 1 },
      { ref: gear4Ref, speed: 7, direction: -1 },
    ];

    const animations = gears.map(({ ref, speed, direction }) => {
      if (ref.current) {
        return gsap.to(ref.current, {
          rotation: 360 * direction,
          duration: speed,
          repeat: -1,
          ease: 'none',
          transformOrigin: 'center center',
        });
      }
      return null;
    });

    return () => {
      animations.forEach(anim => anim?.kill());
    };
  }, []);

  return (
    <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="copperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B87333" />
            <stop offset="50%" stopColor="#D4A574" />
            <stop offset="100%" stopColor="#8B5A3C" />
          </linearGradient>
          <linearGradient id="bronzeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CD7F32" />
            <stop offset="50%" stopColor="#E6A85C" />
            <stop offset="100%" stopColor="#A0522D" />
          </linearGradient>
        </defs>

        {/* Gear 1 - Top Left */}
        <g ref={gear1Ref} transform="translate(200, 150)">
          <circle cx="0" cy="0" r="80" fill="url(#copperGradient)" opacity="0.8" />
          <circle cx="0" cy="0" r="60" fill="none" stroke="#B87333" strokeWidth="3" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = Math.cos(angle) * 50;
            const y1 = Math.sin(angle) * 50;
            const x2 = Math.cos(angle) * 80;
            const y2 = Math.sin(angle) * 80;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#8B5A3C"
                strokeWidth="6"
                strokeLinecap="round"
              />
            );
          })}
          <circle cx="0" cy="0" r="25" fill="#3E2723" />
        </g>

        {/* Gear 2 - Top Right */}
        <g ref={gear2Ref} transform="translate(calc(100% - 200), 200)">
          <circle cx="0" cy="0" r="100" fill="url(#bronzeGradient)" opacity="0.8" />
          <circle cx="0" cy="0" r="75" fill="none" stroke="#CD7F32" strokeWidth="3" />
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            const x1 = Math.cos(angle) * 60;
            const y1 = Math.sin(angle) * 60;
            const x2 = Math.cos(angle) * 100;
            const y2 = Math.sin(angle) * 100;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#A0522D"
                strokeWidth="8"
                strokeLinecap="round"
              />
            );
          })}
          <circle cx="0" cy="0" r="30" fill="#3E2723" />
        </g>

        {/* Gear 3 - Bottom Left */}
        <g ref={gear3Ref} transform="translate(150, calc(100% - 150))">
          <circle cx="0" cy="0" r="70" fill="url(#copperGradient)" opacity="0.8" />
          <circle cx="0" cy="0" r="55" fill="none" stroke="#B87333" strokeWidth="3" />
          {[...Array(10)].map((_, i) => {
            const angle = (i * 36 * Math.PI) / 180;
            const x1 = Math.cos(angle) * 45;
            const y1 = Math.sin(angle) * 45;
            const x2 = Math.cos(angle) * 70;
            const y2 = Math.sin(angle) * 70;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#8B5A3C"
                strokeWidth="7"
                strokeLinecap="round"
              />
            );
          })}
          <circle cx="0" cy="0" r="22" fill="#3E2723" />
        </g>

        {/* Gear 4 - Bottom Right */}
        <g ref={gear4Ref} transform="translate(calc(100% - 180), calc(100% - 200))">
          <circle cx="0" cy="0" r="90" fill="url(#bronzeGradient)" opacity="0.8" />
          <circle cx="0" cy="0" r="70" fill="none" stroke="#CD7F32" strokeWidth="3" />
          {[...Array(14)].map((_, i) => {
            const angle = (i * 25.71 * Math.PI) / 180;
            const x1 = Math.cos(angle) * 55;
            const y1 = Math.sin(angle) * 55;
            const x2 = Math.cos(angle) * 90;
            const y2 = Math.sin(angle) * 90;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#A0522D"
                strokeWidth="7"
                strokeLinecap="round"
              />
            );
          })}
          <circle cx="0" cy="0" r="28" fill="#3E2723" />
        </g>
      </svg>
    </div>
  );
}
