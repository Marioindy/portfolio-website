'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function GoldenDecorations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const decorations = containerRef.current.querySelectorAll('.golden-ornament');

    decorations.forEach((decoration, index) => {
      // Floating animation
      gsap.to(decoration, {
        y: index % 2 === 0 ? -15 : 15,
        x: index % 3 === 0 ? 10 : -10,
        rotation: index % 2 === 0 ? 3 : -3,
        duration: 4 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Sparkle effect
      gsap.to(decoration, {
        opacity: 0.4,
        duration: 2 + index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });

    return () => {
      gsap.killTweensOf(decorations);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40"
    >
      {/* Floating ornamental elements */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="golden-ornament absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <svg
            width={40 + Math.random() * 60}
            height={40 + Math.random() * 60}
            viewBox="0 0 100 100"
          >
            <defs>
              <radialGradient id={`goldRadial-${i}`} cx="50%" cy="50%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#FFA500" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="0.1" />
              </radialGradient>
            </defs>

            {i % 4 === 0 ? (
              // Fleur-de-lis
              <path
                d="M 50 10 Q 45 20, 45 30 L 45 60 Q 45 70, 40 75 Q 45 73, 50 73 Q 55 73, 60 75 Q 55 70, 55 60 L 55 30 Q 55 20, 50 10 Z
                   M 30 35 Q 35 30, 40 30 Q 42 35, 40 40 Q 35 42, 30 40 Z
                   M 70 35 Q 65 30, 60 30 Q 58 35, 60 40 Q 65 42, 70 40 Z
                   M 40 80 Q 45 85, 50 85 Q 55 85, 60 80 L 55 75 Q 50 78, 45 75 Z"
                fill={`url(#goldRadial-${i})`}
              />
            ) : i % 4 === 1 ? (
              // Ornate circle
              <>
                <circle cx="50" cy="50" r="30" fill={`url(#goldRadial-${i})`} />
                <circle cx="50" cy="50" r="20" fill="none" stroke="#FFD700" strokeWidth="2" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="#FFD700" strokeWidth="1" />
              </>
            ) : i % 4 === 2 ? (
              // Baroque flourish
              <path
                d="M 50 20 Q 60 25, 65 35 T 70 55 Q 68 65, 60 70 Q 55 65, 52 60 L 50 50 L 48 60 Q 45 65, 40 70 Q 32 65, 30 55 Q 32 45, 35 35 T 50 20 Z"
                fill={`url(#goldRadial-${i})`}
              />
            ) : (
              // Star ornament
              <path
                d="M 50 15 L 55 40 L 80 40 L 60 55 L 70 80 L 50 65 L 30 80 L 40 55 L 20 40 L 45 40 Z"
                fill={`url(#goldRadial-${i})`}
              />
            )}
          </svg>
        </div>
      ))}

      {/* Decorative border elements */}
      <div className="absolute top-0 left-0 right-0 h-24">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <linearGradient id="topBorderGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFD700" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 20 Q 25 10, 50 20 T 100 20 Q 125 10, 150 20 T 200 20 Q 225 10, 250 20 T 300 20 Q 325 10, 350 20 T 400 20"
            fill="none"
            stroke="url(#topBorderGold)"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <path
            d="M 0 4 Q 25 14, 50 4 T 100 4 Q 125 14, 150 4 T 200 4 Q 225 14, 250 4 T 300 4 Q 325 14, 350 4 T 400 4"
            fill="none"
            stroke="url(#topBorderGold)"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Corner embellishments */}
      <div className="absolute top-24 left-4 w-16 h-16 opacity-60">
        <svg viewBox="0 0 100 100">
          <path
            d="M 10 50 Q 30 30, 50 50 T 90 50 M 50 10 Q 30 30, 50 50 T 50 90"
            fill="none"
            stroke="#FFD700"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="absolute top-24 right-4 w-16 h-16 opacity-60 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100">
          <path
            d="M 10 50 Q 30 30, 50 50 T 90 50 M 50 10 Q 30 30, 50 50 T 50 90"
            fill="none"
            stroke="#FFD700"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Particle sparkles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute rounded-full bg-amber-400"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `sparkle ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            boxShadow: '0 0 8px rgba(255, 215, 0, 0.8)',
          }}
        />
      ))}

      <style jsx>{`
        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
