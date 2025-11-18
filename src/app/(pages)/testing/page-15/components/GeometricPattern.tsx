'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function GeometricPattern() {
  const patternRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!patternRef.current) return;

    const shapes = patternRef.current.querySelectorAll('.animated-shape');

    shapes.forEach((shape, index) => {
      // Random floating animation for each shape
      gsap.to(shape, {
        y: `${gsap.utils.random(-20, 20)}px`,
        x: `${gsap.utils.random(-15, 15)}px`,
        rotation: gsap.utils.random(-15, 15),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <div ref={patternRef} className="fixed inset-0 pointer-events-none z-0 opacity-30">
      {/* Circles */}
      <div className="animated-shape absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full" />
      <div className="animated-shape absolute top-1/4 right-20 w-16 h-16 bg-blue-500 rounded-full" />
      <div className="animated-shape absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-400 rounded-full" />
      <div className="animated-shape absolute top-1/3 left-1/2 w-12 h-12 bg-green-500 rounded-full" />
      <div className="animated-shape absolute bottom-1/4 right-1/4 w-20 h-20 bg-pink-500 rounded-full" />

      {/* Squares */}
      <div className="animated-shape absolute top-1/2 left-20 w-16 h-16 bg-cyan-500 transform rotate-12" />
      <div className="animated-shape absolute top-40 right-1/3 w-20 h-20 bg-purple-500 transform rotate-45" />
      <div className="animated-shape absolute bottom-40 left-1/3 w-14 h-14 bg-orange-500 transform -rotate-12" />

      {/* Triangles */}
      <div className="animated-shape absolute top-20 right-40 w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-b-20 border-b-pink-600 transform rotate-30" />
      <div className="animated-shape absolute bottom-1/3 left-40 w-0 h-0 border-l-16 border-l-transparent border-r-16 border-r-transparent border-b-28 border-b-blue-600 transform -rotate-15" />
      <div className="animated-shape absolute top-1/3 right-1/4 w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-16 border-b-yellow-500 transform rotate-45" />

      {/* Lines and zigzags */}
      <svg className="animated-shape absolute top-1/4 left-1/3 w-32 h-32" viewBox="0 0 100 100">
        <path
          d="M10 50 L30 30 L50 50 L70 30 L90 50"
          stroke="#ef4444"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <svg className="animated-shape absolute bottom-1/3 right-20 w-40 h-40" viewBox="0 0 100 100">
        <path
          d="M10 10 Q 50 50 90 10"
          stroke="#8b5cf6"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Dots pattern */}
      <div className="animated-shape absolute top-2/3 left-1/4">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-blue-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
        </div>
      </div>

      {/* Squiggly lines */}
      <svg className="animated-shape absolute top-1/2 right-1/3 w-28 h-28" viewBox="0 0 100 100">
        <path
          d="M10 50 Q 25 30, 40 50 T 70 50 T 100 50"
          stroke="#06b6d4"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
