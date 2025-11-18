'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function FlowingLights() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lights = containerRef.current.querySelectorAll('.flowing-light');

    lights.forEach((light, index) => {
      // Random starting position
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;

      // Create flowing animation
      const tl = gsap.timeline({ repeat: -1 });

      tl.set(light, {
        x: `${startX}vw`,
        y: `${startY}vh`,
        opacity: 0,
        scale: 0.5,
      });

      tl.to(light, {
        x: `${(startX + 30 + Math.random() * 40) % 100}vw`,
        y: `${(startY + 40 + Math.random() * 30) % 100}vh`,
        opacity: 0.8,
        scale: 1.5,
        duration: 4 + index * 0.5,
        ease: 'sine.inOut',
      });

      tl.to(light, {
        opacity: 0,
        scale: 0.5,
        duration: 2,
        ease: 'power2.in',
      });

      // Stagger the start times
      tl.delay(index * 0.8);
    });

    return () => {
      gsap.killTweensOf(lights);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Multiple flowing light orbs */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="flowing-light absolute rounded-full blur-3xl"
          style={{
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
            background:
              i % 3 === 0
                ? 'radial-gradient(circle, rgba(255,0,255,0.4) 0%, transparent 70%)'
                : i % 3 === 1
                  ? 'radial-gradient(circle, rgba(0,255,255,0.4) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(128,0,255,0.4) 0%, transparent 70%)',
          }}
        />
      ))}

      {/* Horizontal light streaks */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`streak-${i}`}
          className="absolute h-px opacity-30"
          style={{
            width: '100%',
            top: `${20 + i * 15}%`,
            background: `linear-gradient(to right,
              transparent 0%,
              ${i % 2 === 0 ? '#ff00ff' : '#00ffff'} 50%,
              transparent 100%)`,
            animation: `slideHorizontal ${8 + i * 2}s linear infinite`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes slideHorizontal {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
