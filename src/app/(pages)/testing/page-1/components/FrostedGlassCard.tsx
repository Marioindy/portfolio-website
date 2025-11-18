'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FrostedGlassCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * [CONCEPT] FrostedGlassCard: Layered Digital Reality
 *
 * Backdrop-filter creates depth without traditional z-axis.
 * Information floats, suggesting stratification.
 * Blur = mystery. Clarity = purpose.
 */
export default function FrostedGlassCard({
  children,
  delay = 0,
  className = '',
}: FrostedGlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      // [ITERATION] Cards materialize with purpose
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`
        group relative overflow-hidden rounded-2xl
        border border-white/20
        p-8
        transition-all duration-500
        hover:scale-[1.02]
        hover:border-white/40
        ${className}
      `}
      style={{
        // [VISION] Frosted glass effect
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        boxShadow: `
          0 8px 32px 0 rgba(0, 0, 0, 0.37),
          inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)
        `,
      }}
    >
      {/* Subtle gradient overlay on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
