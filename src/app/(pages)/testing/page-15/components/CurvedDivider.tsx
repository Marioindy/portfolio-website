'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CurvedDivider() {
  const svgRef = useRef<SVGSVGElement>(null);
  const circle1Ref = useRef<SVGCircleElement>(null);
  const circle2Ref = useRef<SVGCircleElement>(null);
  const circle3Ref = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(svgRef.current, {
        scaleX: 0,
        duration: 1,
        delay: 0.6,
        ease: 'elastic.out(1, 0.5)',
      });

      // Bouncing circles
      if (circle1Ref.current) {
        gsap.to(circle1Ref.current, {
          y: -10,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (circle2Ref.current) {
        gsap.to(circle2Ref.current, {
          y: -15,
          duration: 1.3,
          delay: 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (circle3Ref.current) {
        gsap.to(circle3Ref.current, {
          y: -12,
          duration: 1.1,
          delay: 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full h-32 my-12 flex items-center justify-center overflow-hidden">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 800 120"
        preserveAspectRatio="none"
      >
        {/* Wavy curved line */}
        <path
          d="M0 60 Q 100 20, 200 60 T 400 60 T 600 60 T 800 60"
          stroke="#ec4899"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Secondary wavy line */}
        <path
          d="M0 70 Q 100 40, 200 70 T 400 70 T 600 70 T 800 70"
          stroke="#06b6d4"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        {/* Decorative dots */}
        <circle ref={circle1Ref} cx="200" cy="60" r="12" fill="#facc15" stroke="#000" strokeWidth="3" />
        <circle ref={circle2Ref} cx="400" cy="60" r="12" fill="#f43f5e" stroke="#000" strokeWidth="3" />
        <circle ref={circle3Ref} cx="600" cy="60" r="12" fill="#8b5cf6" stroke="#000" strokeWidth="3" />

        {/* Small accent circles */}
        <circle cx="100" cy="45" r="6" fill="#3b82f6" />
        <circle cx="300" cy="75" r="6" fill="#f97316" />
        <circle cx="500" cy="45" r="6" fill="#10b981" />
        <circle cx="700" cy="75" r="6" fill="#ec4899" />

        {/* Zigzag pattern */}
        <path
          d="M50 30 L70 50 L90 30"
          stroke="#facc15"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M710 30 L730 50 L750 30"
          stroke="#f43f5e"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Small triangles */}
        <polygon points="150,20 160,35 140,35" fill="#06b6d4" stroke="#000" strokeWidth="2" />
        <polygon points="650,85 660,100 640,100" fill="#8b5cf6" stroke="#000" strokeWidth="2" />
      </svg>
    </div>
  );
}
