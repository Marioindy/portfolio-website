'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface SteampunkCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  index: number;
}

export function SteampunkCard({ title, description, icon, gradient, index }: SteampunkCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!gearRef.current) return;

    let animation: gsap.core.Tween;

    if (isHovered) {
      animation = gsap.to(gearRef.current, {
        rotation: 360,
        duration: 2,
        ease: 'none',
        repeat: -1,
      });
    } else {
      gsap.to(gearRef.current, {
        rotation: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    return () => {
      animation?.kill();
    };
  }, [isHovered]);

  useEffect(() => {
    if (!cardRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      gsap.to(cardRef.current, {
        rotateX,
        rotateY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const card = cardRef.current;
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Layered background elements for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-neutral-950 rounded-xl transform translate-x-2 translate-y-2 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950 to-stone-900 rounded-xl transform translate-x-1 translate-y-1 opacity-70" />

      {/* Main card */}
      <div className={`relative bg-gradient-to-br ${gradient} p-6 rounded-xl border-4 border-amber-900/50 shadow-2xl overflow-hidden transition-all duration-300 group-hover:border-amber-700/70 group-hover:shadow-amber-900/50`}>
        {/* Rivet decorations */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-amber-950 rounded-full border-2 border-amber-700" />
        <div className="absolute top-2 right-2 w-3 h-3 bg-amber-950 rounded-full border-2 border-amber-700" />
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-amber-950 rounded-full border-2 border-amber-700" />
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-amber-950 rounded-full border-2 border-amber-700" />

        {/* Metallic texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-amber-400/10 to-transparent" />

        {/* Gear decoration */}
        <div ref={gearRef} className="absolute top-4 right-4 w-12 h-12 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" className="text-amber-300" />
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
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="text-amber-400"
                />
              );
            })}
            <circle cx="50" cy="50" r="10" fill="currentColor" className="text-amber-900" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="text-6xl mb-4">{icon}</div>
          <h3 className="text-2xl font-bold text-amber-100 mb-3 font-serif tracking-tight">
            {title}
          </h3>
          <p className="text-amber-200/80 font-mono text-sm leading-relaxed">
            {description}
          </p>

          {/* Industrial detail bar */}
          <div className="mt-6 pt-4 border-t-2 border-amber-800/50">
            <div className="flex items-center justify-between text-xs font-mono text-amber-400/60">
              <span>MODULE-{String(index + 1).padStart(2, '0')}</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                OPERATIONAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
