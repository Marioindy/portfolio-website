'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const WaveAnimation: React.FC = () => {
  const waveRef = useRef<SVGPathElement>(null);
  const wave2Ref = useRef<SVGPathElement>(null);
  const wave3Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!waveRef.current || !wave2Ref.current || !wave3Ref.current) return;

    const waves = [
      { element: waveRef.current, duration: 8, delay: 0 },
      { element: wave2Ref.current, duration: 6, delay: 0.5 },
      { element: wave3Ref.current, duration: 10, delay: 1 },
    ];

    const animations = waves.map(({ element, duration, delay }) => {
      return gsap.to(element, {
        attr: {
          d: element.getAttribute('data-alt') || '',
        },
        duration,
        delay,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => {
      animations.forEach((anim) => anim.kill());
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Wave 1 */}
        <path
          ref={waveRef}
          fill="url(#wave-gradient-1)"
          d="M0,160 C240,100 480,220 720,180 C960,140 1200,200 1440,160 L1440,320 L0,320 Z"
          data-alt="M0,180 C240,220 480,140 720,200 C960,160 1200,100 1440,180 L1440,320 L0,320 Z"
        />

        {/* Wave 2 */}
        <path
          ref={wave2Ref}
          fill="url(#wave-gradient-2)"
          d="M0,200 C320,140 640,260 960,200 C1280,140 1440,220 1440,200 L1440,320 L0,320 Z"
          data-alt="M0,220 C320,260 640,160 960,220 C1280,180 1440,140 1440,220 L1440,320 L0,320 Z"
        />

        {/* Wave 3 */}
        <path
          ref={wave3Ref}
          fill="url(#wave-gradient-3)"
          d="M0,240 C360,200 720,280 1080,240 C1260,220 1440,260 1440,240 L1440,320 L0,320 Z"
          data-alt="M0,260 C360,280 720,200 1080,260 C1260,240 1440,200 1440,260 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
};
