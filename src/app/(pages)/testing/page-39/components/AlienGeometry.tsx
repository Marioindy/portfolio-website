'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function AlienGeometry() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Animate alien geometry patterns
    const paths = svgRef.current.querySelectorAll('path');

    gsap.to(paths, {
      strokeDashoffset: -1000,
      duration: 20,
      repeat: -1,
      ease: 'none',
      stagger: {
        each: 0.5,
        from: 'random',
      },
    });

    // Pulsating effect for circles
    const circles = svgRef.current.querySelectorAll('circle');
    gsap.to(circles, {
      r: '+=5',
      opacity: 0.3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none opacity-20">
      <svg
        ref={svgRef}
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Unsettling gradient patterns */}
          <linearGradient id="eldritchGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>

          <radialGradient id="voidGrad">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Non-Euclidean geometry patterns */}
        <path
          d="M 100 100 Q 200 50, 300 100 T 500 100 Q 600 150, 700 100 T 900 100"
          stroke="url(#eldritchGrad1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 5"
          strokeDashoffset="0"
        />

        <path
          d="M 150 200 C 250 100, 350 300, 450 200 S 650 100, 750 200"
          stroke="#a855f7"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="15 10"
          opacity="0.4"
        />

        <path
          d="M 50 300 Q 150 250, 250 300 T 450 300 Q 550 350, 650 300 T 850 300"
          stroke="#ec4899"
          strokeWidth="1"
          fill="none"
          strokeDasharray="20 8"
          opacity="0.3"
        />

        {/* Alien circular entities */}
        <circle cx="20%" cy="30%" r="15" fill="url(#voidGrad)" opacity="0.2" />
        <circle cx="80%" cy="60%" r="20" fill="url(#voidGrad)" opacity="0.15" />
        <circle cx="50%" cy="80%" r="18" fill="url(#voidGrad)" opacity="0.18" />
        <circle cx="30%" cy="70%" r="12" fill="url(#voidGrad)" opacity="0.2" />
        <circle cx="70%" cy="20%" r="16" fill="url(#voidGrad)" opacity="0.17" />

        {/* Strange polygons - unsettling shapes */}
        <polygon
          points="100,50 120,90 80,90"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="1"
          opacity="0.3"
        />

        <polygon
          points="300,150 340,180 320,220 280,220 260,180"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1.5"
          opacity="0.25"
        />

        <polygon
          points="600,100 650,120 640,170 590,170 580,120"
          fill="none"
          stroke="#c026d3"
          strokeWidth="1"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}
