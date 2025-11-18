'use client';

import { useEffect, useRef, useState } from 'react';
import type { Metadata } from 'next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// [OCEANIC_FLOWS] [LIQUID_BEAUTY] [EXECUTION]
export default function TestingPage37() {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRefs = useRef<(SVGPathElement | null)[]>([]);
  const liquidShapeRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Flowing water background gradient animation
      gsap.to('.water-gradient', {
        backgroundPosition: '200% 50%',
        duration: 20,
        ease: 'none',
        repeat: -1,
      });

      // Liquid morphing shape animations
      if (liquidShapeRef.current) {
        gsap.to(liquidShapeRef.current, {
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          duration: 4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });

        gsap.to(liquidShapeRef.current, {
          scale: 1.1,
          duration: 3,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }

      // Wave animations with different frequencies
      waveRefs.current.forEach((wave, index) => {
        if (wave) {
          const delay = index * 0.5;
          const duration = 3 + index * 0.5;

          gsap.to(wave, {
            attr: {
              d: `M0,${50 + index * 10} Q${25 + index * 5},${30 + index * 5} 50,${50 + index * 10} T100,${50 + index * 10}`,
            },
            duration: duration,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: delay,
          });
        }
      });

      // Scroll-based water flow effects
      gsap.to('.water-bubble', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: -100,
        opacity: 0.8,
        stagger: 0.2,
      });

      // Floating animation for aquatic elements
      gsap.to('.floating-element', {
        y: -20,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.3,
          repeat: -1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse tracking for water ripple effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create wave path reference setter
  const setWaveRef = (index: number) => (el: SVGPathElement | null) => {
    waveRefs.current[index] = el;
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-700 to-cyan-500"
    >
      {/* Animated water gradient background */}
      <div
        className="water-gradient absolute inset-0 opacity-60"
        style={{
          background: 'linear-gradient(45deg, #0a2342, #1e5f8c, #2d9cdb, #56ccf2, #0a2342)',
          backgroundSize: '400% 400%',
        }}
      />

      {/* Liquid morphing blob */}
      <div
        ref={liquidShapeRef}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 backdrop-blur-xl"
        style={{
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          filter: 'blur(40px)',
        }}
      />

      {/* Multiple wave layers - SVG wave morphing */}
      <svg
        className="absolute bottom-0 left-0 w-full h-64 opacity-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={setWaveRef(0)}
          d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
          fill="url(#wave-gradient-1)"
          opacity="0.5"
        />
        <path
          ref={setWaveRef(1)}
          d="M0,60 Q25,40 50,60 T100,60 L100,100 L0,100 Z"
          fill="url(#wave-gradient-2)"
          opacity="0.4"
        />
        <path
          ref={setWaveRef(2)}
          d="M0,70 Q25,50 50,70 T100,70 L100,100 L0,100 Z"
          fill="url(#wave-gradient-3)"
          opacity="0.6"
        />
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2d9cdb" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0a2342" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#56ccf2" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1e5f8c" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0c4a6e" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Water bubbles - floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="water-bubble floating-element absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Main content with aquatic vibes */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Title with aquatic gradient */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-300 to-cyan-400 animate-pulse">
              Ocean Deep
            </span>
            <span className="block text-white/90 mt-4">Testing Page 37</span>
          </h1>

          {/* Description with flowing text effect */}
          <div className="floating-element bg-white/5 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-cyan-400/20">
            <p className="text-cyan-100 text-lg md:text-xl leading-relaxed text-center">
              Dive into the depths of liquid beauty. Experience the flowing rhythms of the ocean
              with wave animations, morphing shapes, and aquatic color transitions.
            </p>
          </div>

          {/* Interactive water cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {['Flowing', 'Liquid', 'Aquatic'].map((title, index) => (
              <div
                key={title}
                className="floating-element group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md p-6 border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-600/0 group-hover:from-cyan-400/20 group-hover:to-blue-600/20 transition-all duration-700" />
                <h3 className="text-2xl font-bold text-cyan-200 mb-3 relative z-10">
                  {title}
                </h3>
                <p className="text-cyan-100/80 relative z-10">
                  Experience the beauty of water in motion
                </p>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            ))}
          </div>

          {/* Liquid animation showcase */}
          <div className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/30 to-cyan-500/30 backdrop-blur-lg border border-cyan-400/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Liquid Morphing</h2>
                <p className="text-cyan-200">Watch the shapes transform like water</p>
              </div>
            </div>

            {/* Animated liquid shapes */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/30 rounded-full floating-element" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/30 rounded-full floating-element" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-300/20 rounded-full floating-element" style={{ animationDelay: '1s' }} />
          </div>

          {/* Mouse ripple effect indicator */}
          <div className="mt-12 text-center">
            <p className="text-cyan-200/60 text-sm">
              Move your mouse to create ripples • Scroll to see water flow
            </p>
          </div>
        </div>
      </div>

      {/* Mouse-following water ripple effect */}
      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full bg-cyan-400/5 backdrop-blur-3xl transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          filter: 'blur(60px)',
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
}
