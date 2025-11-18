'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * [CONCEPT] FloatingElements: Gravity-Defying Affordance
 *
 * Cursor magnetism creates digital gravity
 * Elements breathe with subtle scale (1.02, not 1.1)
 * View Transitions API for cinematic state changes
 */
export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeState, setActiveState] = useState<'minimal' | 'expanded'>('minimal');

  // Magnetic cursor effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const magneticElements = container.querySelectorAll('[data-magnetic]');

    const handleMouseMove = (e: MouseEvent) => {
      magneticElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Magnetic threshold: 150px
        const magneticRadius = 150;

        if (distance < magneticRadius) {
          const strength = 1 - distance / magneticRadius;
          const moveX = deltaX * strength * 0.3;
          const moveY = deltaY * strength * 0.3;

          gsap.to(element, {
            x: moveX,
            y: moveY,
            duration: 0.6,
            ease: 'power2.out',
          });
        } else {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)',
          });
        }
      });
    };

    const handleMouseLeave = () => {
      magneticElements.forEach((element) => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.5)',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // View Transitions API integration
  const toggleState = () => {
    const newState = activeState === 'minimal' ? 'expanded' : 'minimal';

    // Check if View Transitions API is supported
    if ('startViewTransition' in document) {
      // @ts-expect-error - View Transitions API not yet in TypeScript DOM types
      document.startViewTransition(() => {
        setActiveState(newState);
      });
    } else {
      // Fallback for browsers without support
      setActiveState(newState);
    }

    console.log(`[VISION] State transitioned to: ${newState}`);
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4"
    >
      {/* [ITERATION] Magnetic floating button */}
      <button
        data-magnetic
        onClick={toggleState}
        className="group relative overflow-hidden rounded-full border border-white/30 bg-white/10 px-8 py-4 font-sans text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B35]/50 hover:bg-[#FF6B35]/20"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          viewTransitionName: activeState === 'minimal' ? 'toggle-button' : 'none',
        }}
      >
        {/* Animated background gradient on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.3) 0%, transparent 70%)',
          }}
        />

        <span className="relative z-10">
          {activeState === 'minimal' ? 'Expand Vision' : 'Minimize'}
        </span>
      </button>

      {/* [REFINEMENT] Expandable content with View Transitions */}
      {activeState === 'expanded' && (
        <div
          className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            viewTransitionName: 'expanded-panel',
            maxWidth: '300px',
          }}
        >
          <h4 className="mb-3 font-serif text-xl font-bold text-white">
            Design States
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#FF6B35]" />
              GSAP Animations Active
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#8B2FC9]" />
              View Transitions Enabled
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-white/50" />
              Cursor Magnetism Live
            </li>
          </ul>
        </div>
      )}

      {/* [VISION] Additional magnetic decorative elements */}
      <div className="pointer-events-none absolute -bottom-4 -right-4 flex gap-4">
        <div
          data-magnetic
          className="pointer-events-auto h-16 w-16 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 backdrop-blur-sm"
          style={{
            boxShadow: '0 4px 20px rgba(255, 107, 53, 0.2)',
          }}
        />
        <div
          data-magnetic
          className="pointer-events-auto h-12 w-12 rounded-full border border-[#8B2FC9]/30 bg-[#8B2FC9]/10 backdrop-blur-sm"
          style={{
            boxShadow: '0 4px 20px rgba(139, 47, 201, 0.2)',
          }}
        />
      </div>
    </div>
  );
}
