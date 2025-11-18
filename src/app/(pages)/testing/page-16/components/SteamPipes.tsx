'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function SteamPipes() {
  const steam1Ref = useRef<HTMLDivElement>(null);
  const steam2Ref = useRef<HTMLDivElement>(null);
  const steam3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const steamRefs = [steam1Ref, steam2Ref, steam3Ref];

    steamRefs.forEach((ref, index) => {
      if (ref.current) {
        gsap.to(ref.current, {
          y: -100,
          opacity: 0,
          duration: 3 + index * 0.5,
          repeat: -1,
          delay: index * 0.7,
          ease: 'power1.out',
        });
      }
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Vertical pipes */}
      <div className="absolute left-10 top-0 bottom-0 w-8 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-800 opacity-20 rounded-full">
        <div className="absolute inset-x-0 top-1/4 h-2 bg-amber-900 rounded-full" />
        <div className="absolute inset-x-0 top-1/2 h-2 bg-amber-900 rounded-full" />
        <div className="absolute inset-x-0 top-3/4 h-2 bg-amber-900 rounded-full" />
      </div>

      <div className="absolute right-10 top-0 bottom-0 w-6 bg-gradient-to-b from-orange-800 via-orange-700 to-orange-800 opacity-20 rounded-full">
        <div className="absolute inset-x-0 top-1/3 h-2 bg-orange-900 rounded-full" />
        <div className="absolute inset-x-0 top-2/3 h-2 bg-orange-900 rounded-full" />
      </div>

      {/* Steam particles */}
      <div className="absolute left-14 top-1/4">
        <div ref={steam1Ref} className="w-4 h-4 bg-amber-100 rounded-full opacity-30 blur-md" />
      </div>
      <div className="absolute left-16 top-1/4">
        <div ref={steam2Ref} className="w-3 h-3 bg-amber-200 rounded-full opacity-25 blur-md" />
      </div>
      <div className="absolute left-12 top-1/4">
        <div ref={steam3Ref} className="w-5 h-5 bg-amber-50 rounded-full opacity-20 blur-lg" />
      </div>

      {/* Horizontal connecting pipes */}
      <div className="absolute left-0 top-1/3 right-0 h-4 bg-gradient-to-r from-transparent via-amber-700/20 to-transparent" />
      <div className="absolute left-0 top-2/3 right-0 h-6 bg-gradient-to-r from-transparent via-orange-700/20 to-transparent" />
    </div>
  );
}
