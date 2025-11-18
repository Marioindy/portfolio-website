'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface WaveSectionProps {
  title: string;
  description: string;
  index: number;
}

export function WaveSection({ title, description, index }: WaveSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !waveRef.current) return;

    const ctx = gsap.context(() => {
      // Animate wave on scroll
      gsap.to(waveRef.current, {
        attr: {
          d: index % 2 === 0
            ? 'M0,50 Q25,30 50,50 T100,50 V100 H0 Z'
            : 'M0,50 Q25,70 50,50 T100,50 V100 H0 Z'
        },
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play pause resume pause'
        }
      });

      // Fade in section content
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Wave SVG */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={`absolute ${index % 2 === 0 ? 'top-0' : 'bottom-0'} left-0 w-full h-32 opacity-20`}
      >
        <defs>
          <linearGradient id={`wave-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path
          ref={waveRef}
          d="M0,50 Q25,40 50,50 T100,50 V100 H0 Z"
          fill={`url(#wave-grad-${index})`}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
