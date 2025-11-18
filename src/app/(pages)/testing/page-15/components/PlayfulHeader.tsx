'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function PlayfulHeader() {
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Bouncy entrance for first word
      gsap.from(title1Ref.current, {
        scale: 0,
        rotation: -20,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      });

      // Bouncy entrance for second word
      gsap.from(title2Ref.current, {
        scale: 0,
        rotation: 20,
        duration: 0.8,
        delay: 0.2,
        ease: 'elastic.out(1, 0.5)',
      });

      // Subtitle pop-in
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: 0.4,
        ease: 'back.out(1.7)',
      });

      // Decorative shapes animation
      if (decorRef.current) {
        const shapes = decorRef.current.querySelectorAll('.shape');
        gsap.from(shapes, {
          scale: 0,
          rotation: 360,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.6,
          ease: 'back.out(1.7)',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="text-center mb-16 relative">
      {/* Decorative geometric shapes around title */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none">
        <div className="shape absolute top-0 left-1/4 w-8 h-8 bg-red-500 rounded-full transform -translate-x-1/2" />
        <div className="shape absolute top-10 right-1/4 w-12 h-12 bg-blue-500 transform rotate-45" />
        <div className="shape absolute top-5 left-1/3 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-14 border-b-yellow-400" />
        <div className="shape absolute top-8 right-1/3 w-10 h-10 bg-green-500 rounded-full" />
      </div>

      <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tight relative">
        <span
          ref={title1Ref}
          className="inline-block text-pink-600 transform -rotate-3"
          style={{
            fontFamily: 'Impact, Arial Black, sans-serif',
            textShadow: '4px 4px 0 #000, 8px 8px 0 #FFF',
          }}
        >
          MEMPHIS
        </span>
        <br />
        <span
          ref={title2Ref}
          className="inline-block text-cyan-500 transform rotate-2"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            textShadow: '4px 4px 0 #000, 8px 8px 0 #FFF',
          }}
        >
          DESIGN
        </span>
      </h1>

      <p
        ref={subtitleRef}
        className="text-2xl md:text-3xl font-black mb-6"
        style={{
          fontFamily: 'Arial Rounded MT Bold, sans-serif',
        }}
      >
        <span className="inline-block px-4 py-2 bg-yellow-400 text-purple-900 transform -rotate-1 mr-2">
          Playful
        </span>
        <span className="inline-block px-4 py-2 bg-red-500 text-white transform rotate-1 mr-2">
          Geometric
        </span>
        <span className="inline-block px-4 py-2 bg-blue-500 text-white transform -rotate-2">
          Fun!
        </span>
      </p>

      <div className="flex items-center justify-center gap-3 flex-wrap text-sm font-bold uppercase">
        <span className="px-4 py-2 bg-pink-500 text-white rounded-full transform rotate-1">
          Bright Colors
        </span>
        <span className="px-4 py-2 bg-yellow-400 text-black rounded-full transform -rotate-2">
          Curved Lines
        </span>
        <span className="px-4 py-2 bg-cyan-500 text-white rounded-full transform rotate-2">
          Bold Shapes
        </span>
        <span className="px-4 py-2 bg-purple-500 text-white rounded-full transform -rotate-1">
          Childlike Joy
        </span>
      </div>
    </div>
  );
}
