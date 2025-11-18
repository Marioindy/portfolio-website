'use client';

import { useEffect, useRef, useState } from 'react';
import type { Metadata } from 'next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// [STEALTH_INTERFACE] [HIDDEN_REVEALS] [EXECUTION]
export default function TestingPage36() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [revealedSections, setRevealedSections] = useState<Set<number>>(new Set());
  const [scanlinePosition, setScanlinePosition] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stealth entrance animation - elements fade in from darkness
      gsap.from('.stealth-element', {
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        ease: 'power2.inOut',
      });

      // Hidden text reveal on scroll
      gsap.to('.hidden-reveal', {
        scrollTrigger: {
          trigger: '.hidden-reveal',
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
      });

      // Glitch effect for titles
      const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 3 });
      glitchTimeline
        .to('.glitch-text', {
          x: -2,
          duration: 0.1,
          ease: 'power2.inOut',
        })
        .to('.glitch-text', {
          x: 2,
          duration: 0.1,
          ease: 'power2.inOut',
        })
        .to('.glitch-text', {
          x: 0,
          duration: 0.1,
          ease: 'power2.inOut',
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scanning line effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScanlinePosition((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleSectionReveal = (index: number) => {
    setRevealedSections((prev) => new Set(prev).add(index));
  };

  const handleSectionHide = (index: number) => {
    setRevealedSections((prev) => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-black cursor-none"
      style={{ fontFamily: 'monospace' }}
    >
      {/* Noise texture overlay for hacker aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Scanning line effect */}
      <div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent pointer-events-none"
        style={{
          top: `${scanlinePosition}%`,
          boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)',
        }}
      />

      {/* Custom stealth cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border border-green-500/50 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
        }}
      >
        <div className="absolute inset-0 border border-green-500/30 scale-150" />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-500 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Minimal grid overlay - barely visible */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hidden title - reveals on hover */}
          <div className="stealth-element mb-20 group">
            <div className="relative overflow-hidden">
              <h1 className="glitch-text text-6xl md:text-8xl font-bold text-transparent group-hover:text-white transition-all duration-500">
                <span
                  className="block group-hover:text-white"
                  style={{
                    textShadow:
                      '0 0 10px rgba(255,255,255,0), 0 0 20px rgba(255,255,255,0)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow =
                      '0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow =
                      '0 0 10px rgba(255,255,255,0), 0 0 20px rgba(255,255,255,0)';
                  }}
                >
                  STEALTH MODE
                </span>
              </h1>
              <p className="text-sm text-transparent group-hover:text-green-500/60 transition-all duration-700 mt-4 tracking-widest">
                TESTING.PAGE.36 // CLASSIFIED
              </p>
            </div>
          </div>

          {/* Hidden interface elements */}
          <div className="space-y-8 mb-16">
            {[
              { label: 'SYSTEM.STATUS', value: 'OPERATIONAL', level: 'HIGH' },
              { label: 'VISIBILITY.MODE', value: 'STEALTH', level: 'MAXIMUM' },
              { label: 'SECURITY.LEVEL', value: 'ENCRYPTED', level: 'CRITICAL' },
            ].map((item, index) => (
              <div
                key={index}
                className="stealth-element hidden-reveal opacity-0 translate-y-4"
                onMouseEnter={() => handleSectionReveal(index)}
                onMouseLeave={() => handleSectionHide(index)}
              >
                <div
                  className={`
                    relative border border-white/0 hover:border-green-500/30
                    bg-black hover:bg-green-950/10
                    p-6 transition-all duration-700
                    ${revealedSections.has(index) ? 'shadow-[0_0_20px_rgba(34,197,94,0.1)]' : ''}
                  `}
                >
                  <div className="flex justify-between items-center">
                    <span
                      className={`
                        text-sm font-mono tracking-wider
                        ${revealedSections.has(index) ? 'text-green-500' : 'text-white/0'}
                        transition-colors duration-500
                      `}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`
                        text-lg font-bold
                        ${revealedSections.has(index) ? 'text-white' : 'text-white/0'}
                        transition-colors duration-500
                      `}
                    >
                      {item.value}
                    </span>
                  </div>
                  <div className="mt-2 h-1 bg-white/5 overflow-hidden">
                    <div
                      className={`
                        h-full bg-green-500 transition-all duration-1000
                        ${revealedSections.has(index) ? 'w-full' : 'w-0'}
                      `}
                      style={{
                        boxShadow: revealedSections.has(index)
                          ? '0 0 10px rgba(34, 197, 94, 0.5)'
                          : 'none',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hidden code blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[0, 1].map((index) => (
              <div
                key={index}
                className="stealth-element group relative"
                onMouseEnter={() => handleSectionReveal(index + 10)}
                onMouseLeave={() => handleSectionHide(index + 10)}
              >
                <div
                  className={`
                    border border-white/0 group-hover:border-green-500/20
                    bg-black p-6 transition-all duration-700
                    ${revealedSections.has(index + 10) ? 'shadow-[0_0_30px_rgba(34,197,94,0.1)]' : ''}
                  `}
                >
                  <div className="space-y-2 font-mono text-xs">
                    <div className="text-white/0 group-hover:text-green-500/40 transition-colors duration-500">
                      {'>'} ACCESSING ENCRYPTED DATA...
                    </div>
                    <div className="text-white/0 group-hover:text-green-500/60 transition-colors duration-700 delay-100">
                      {'>'} DECRYPTION IN PROGRESS...
                    </div>
                    <div className="text-white/0 group-hover:text-white transition-colors duration-700 delay-200">
                      {'>'} ACCESS GRANTED
                    </div>
                    {revealedSections.has(index + 10) && (
                      <div className="pt-4 border-t border-green-500/20 text-green-500/80 animate-pulse">
                        [{Array(20).fill('█').join('')}] 100%
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hidden message section */}
          <div className="stealth-element relative group mb-16">
            <div className="border border-white/0 group-hover:border-green-500/30 bg-black p-12 text-center transition-all duration-1000">
              <p className="text-white/0 group-hover:text-white text-2xl md:text-4xl font-mono transition-all duration-1000 tracking-wider">
                HOVER TO REVEAL
              </p>
              <p className="text-white/0 group-hover:text-green-500/60 text-sm mt-4 transition-all duration-1000 delay-200 tracking-widest">
                STEALTH TECHNOLOGY ACTIVATED
              </p>
            </div>
          </div>

          {/* Minimal terminal interface */}
          <div className="stealth-element">
            <div className="border border-white/5 bg-black p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 opacity-30 hover:opacity-100 transition-opacity duration-500">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="text-white/30 ml-4 text-xs">TERMINAL.STEALTH</span>
              </div>
              <div className="space-y-2 text-white/0 hover:text-green-500/80 transition-all duration-700">
                <div>$ initialize stealth_mode</div>
                <div className="ml-4">Stealth protocols: ACTIVE</div>
                <div className="ml-4">Visibility index: 0.01%</div>
                <div className="ml-4">Security level: MAXIMUM</div>
                <div>$ _</div>
              </div>
            </div>
          </div>

          {/* Hidden footer */}
          <div className="mt-20 text-center">
            <p className="text-white/0 hover:text-green-500/30 text-xs font-mono tracking-widest transition-colors duration-1000">
              EVERYTHING IS HIDDEN UNTIL YOU LOOK FOR IT
            </p>
          </div>
        </div>
      </div>

      {/* Corner indicators - barely visible */}
      <div className="fixed top-4 left-4 text-white/5 hover:text-green-500/30 text-xs font-mono transition-colors duration-500">
        [STEALTH.MODE]
      </div>
      <div className="fixed top-4 right-4 text-white/5 hover:text-green-500/30 text-xs font-mono transition-colors duration-500">
        [ENCRYPTED]
      </div>
      <div className="fixed bottom-4 left-4 text-white/5 hover:text-green-500/30 text-xs font-mono transition-colors duration-500">
        [HIDDEN]
      </div>
      <div className="fixed bottom-4 right-4 text-white/5 hover:text-green-500/30 text-xs font-mono transition-colors duration-500 text-right">
        [PAGE.36]
      </div>

      {/* Radial gradient that follows mouse - very subtle */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.03) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
