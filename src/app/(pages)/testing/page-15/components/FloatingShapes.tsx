'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const shapes = containerRef.current.querySelectorAll('.float-shape');

    shapes.forEach((shape, index) => {
      // Create unique floating animation for each shape
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(shape, {
        y: gsap.utils.random(-100, 100),
        x: gsap.utils.random(-80, 80),
        rotation: gsap.utils.random(-180, 180),
        duration: gsap.utils.random(4, 8),
        ease: 'sine.inOut',
      }).to(shape, {
        y: 0,
        x: 0,
        rotation: 0,
        duration: gsap.utils.random(4, 8),
        ease: 'sine.inOut',
      });

      // Stagger the start time
      tl.progress(index / shapes.length);
    });

    return () => {
      gsap.killTweensOf(shapes);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {/* Large geometric shapes */}
      <div className="float-shape absolute top-20 left-1/4 w-32 h-32 bg-pink-500/30 rounded-full backdrop-blur-sm border-4 border-pink-600" />

      <div className="float-shape absolute top-1/3 right-1/4 w-28 h-28 bg-cyan-500/30 backdrop-blur-sm border-4 border-cyan-600 transform rotate-45" />

      <div className="float-shape absolute bottom-1/4 left-1/3">
        <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-yellow-400/30 backdrop-blur-sm" style={{ filter: 'drop-shadow(0 0 0 4px #facc15)' }} />
      </div>

      <div className="float-shape absolute top-1/2 left-20 w-24 h-24 bg-purple-500/30 rounded-full backdrop-blur-sm border-4 border-purple-600" />

      <div className="float-shape absolute bottom-1/3 right-1/3 w-36 h-36 bg-red-500/30 backdrop-blur-sm border-4 border-red-600 transform -rotate-12" />

      {/* Medium shapes */}
      <div className="float-shape absolute top-1/4 right-1/3 w-20 h-20 bg-blue-500/30 rounded-full backdrop-blur-sm border-4 border-blue-600" />

      <div className="float-shape absolute bottom-20 left-1/4 w-16 h-16 bg-green-500/30 backdrop-blur-sm border-4 border-green-600 transform rotate-30" />

      <div className="float-shape absolute top-2/3 right-20">
        <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[65px] border-b-orange-400/30" style={{ filter: 'drop-shadow(0 0 0 4px #fb923c)' }} />
      </div>

      {/* Curved line shapes */}
      <svg className="float-shape absolute top-1/3 left-1/4 w-40 h-40" viewBox="0 0 100 100">
        <path
          d="M10 50 Q 50 10, 90 50 T 170 50"
          stroke="#ec4899"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>

      <svg className="float-shape absolute bottom-1/4 right-1/4 w-36 h-36" viewBox="0 0 100 100">
        <path
          d="M10 10 Q 50 50 90 10"
          stroke="#06b6d4"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>

      {/* Squiggly lines */}
      <svg className="float-shape absolute top-1/2 right-1/3 w-32 h-32" viewBox="0 0 100 100">
        <path
          d="M10 50 Q 25 30, 40 50 T 70 50 T 100 50"
          stroke="#8b5cf6"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      {/* Small accent shapes */}
      <div className="float-shape absolute top-40 right-40 w-12 h-12 bg-yellow-400/40 rounded-full backdrop-blur-sm border-3 border-yellow-500" />
      <div className="float-shape absolute bottom-40 left-40 w-10 h-10 bg-pink-500/40 backdrop-blur-sm border-3 border-pink-600 transform rotate-45" />
    </div>
  );
}
