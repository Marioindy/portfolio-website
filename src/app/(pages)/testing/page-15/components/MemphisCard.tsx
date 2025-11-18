'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface MemphisCardProps {
  title: string;
  description: string;
  emoji: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  rotation: number;
  index: number;
}

export function MemphisCard({ title, description, emoji, colors, rotation, index }: MemphisCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    if (isHovered) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  useEffect(() => {
    if (!cardRef.current) return;

    if (isHovered) {
      gsap.to(cardRef.current, {
        scale: 1.05,
        rotation: 0,
        duration: 0.4,
        ease: 'back.out(1.7)',
      });
    } else {
      gsap.to(cardRef.current, {
        scale: 1,
        rotation,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [isHovered, rotation]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer relative"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Layered shadow shapes */}
      <div className={`absolute inset-0 ${colors.secondary} rounded-3xl transform translate-x-3 translate-y-3 opacity-60`} />
      <div className={`absolute inset-0 ${colors.accent} rounded-3xl transform translate-x-1.5 translate-y-1.5 opacity-80`} />

      {/* Main card */}
      <div className={`relative ${colors.primary} p-8 rounded-3xl border-6 border-black shadow-2xl overflow-hidden`}>
        {/* Decorative geometric elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full opacity-40" />
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-black transform rotate-45 opacity-20" />
        <div className="absolute top-1/2 right-8 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-10 border-b-white opacity-30" />

        {/* Squiggly line decoration */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 200 200">
          <path
            d="M10 100 Q 50 50, 100 100 T 190 100"
            stroke="white"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10">
          <div className="text-7xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            {emoji}
          </div>

          <h3
            className="text-3xl font-black text-white mb-4 leading-tight"
            style={{
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '3px 3px 0 #000',
            }}
          >
            {title}
          </h3>

          <p
            className="text-white text-base leading-relaxed font-bold"
            style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0 rgba(0,0,0,0.3)',
            }}
          >
            {description}
          </p>

          {/* Fun detail elements */}
          <div className="mt-6 pt-4 border-t-4 border-black/30 flex items-center justify-between">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-white rounded-full" />
              <div className="w-3 h-3 bg-black rounded-full" />
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <span className="text-xs font-black text-white bg-black px-3 py-1 rounded-full">
              #{String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
