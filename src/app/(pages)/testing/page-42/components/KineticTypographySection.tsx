'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger);

export default function KineticTypographySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const floatingWordsRef = useRef<HTMLDivElement>(null);
  const sculptureRef = useRef<HTMLDivElement>(null);
  const poetryRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for kinetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text kinetic entrance
      if (heroTextRef.current) {
        // Simple word-based animation without SplitText plugin
        gsap.fromTo(
          heroTextRef.current,
          {
            opacity: 0,
            y: 100,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: 'power4.out'
          }
        );

        // Continuous floating animation
        gsap.to(heroTextRef.current, {
          y: '+=10',
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      // Floating words animation
      if (floatingWordsRef.current) {
        const words = floatingWordsRef.current.querySelectorAll('.kinetic-word');

        words.forEach((word, i) => {
          // Initial position
          gsap.set(word, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * 200
          });

          // Floating motion
          gsap.to(word, {
            x: `+=${Math.random() * 400 - 200}`,
            y: `+=${Math.random() * 300 - 150}`,
            rotation: Math.random() * 360,
            duration: 10 + Math.random() * 10,
            repeat: -1,
            yoyo: true,
            ease: 'none',
            delay: i * 0.5
          });

          // Opacity pulse
          gsap.to(word, {
            opacity: 0.3 + Math.random() * 0.7,
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        });
      }

      // Text sculpture animations
      if (sculptureRef.current) {
        const sculptureLines = sculptureRef.current.querySelectorAll('.sculpture-line');

        sculptureLines.forEach((line) => {
          // Scroll-triggered reveal
          gsap.fromTo(
            line,
            {
              opacity: 0,
              x: -100,
              rotationY: -45
            },
            {
              opacity: 1,
              x: 0,
              rotationY: 0,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: line,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
              }
            }
          );

          // Wave motion
          gsap.to(line, {
            y: '+=15',
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        });
      }

      // Animated poetry section
      if (poetryRef.current) {
        const poetryLines = poetryRef.current.querySelectorAll('.poetry-line');

        poetryLines.forEach((line) => {
          // Create flowing entrance
          gsap.fromTo(
            line,
            {
              opacity: 0,
              y: 50,
              rotationX: -45,
              transformOrigin: '50% 100%'
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 1,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: line,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          );

          // Breathing effect
          gsap.to(line, {
            scale: 1.02,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        });
      }

      // Scroll-based kinetic morphing
      const morphText = containerRef.current?.querySelectorAll('.morph-text');
      if (morphText) {
        morphText.forEach((text) => {
          gsap.to(text, {
            scrollTrigger: {
              trigger: text,
              start: 'top center',
              end: 'bottom center',
              scrub: 1
            },
            scale: 1.1,
            rotation: 5,
            ease: 'none'
          });
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse-driven kinetic effect
  useEffect(() => {
    if (floatingWordsRef.current) {
      const words = floatingWordsRef.current.querySelectorAll('.kinetic-word');
      words.forEach((word) => {
        gsap.to(word, {
          x: `+=${mousePosition.x * 30}`,
          y: `+=${mousePosition.y * 30}`,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    }
  }, [mousePosition]);

  const floatingWords = [
    'FLOW', 'MOTION', 'KINETIC', 'DYNAMIC', 'PULSE',
    'DRIFT', 'FLUX', 'WAVE', 'RHYTHM', 'ENERGY'
  ];

  const poetryLines = [
    'Words dance across the void',
    'Letters breathe with life',
    'Typography in constant motion',
    'Each character tells a story',
    'Movement becomes meaning'
  ];

  const textSculptures = [
    'KINETIC TYPOGRAPHY',
    'MOVING LETTERS',
    'FLOWING WORDS',
    'TEXT AS ART',
    'MOTION DESIGN'
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      {/* Floating background words */}
      <div ref={floatingWordsRef} className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        {floatingWords.map((word, i) => (
          <div
            key={i}
            className="kinetic-word absolute text-4xl font-bold text-cyan-400"
            style={{
              mixBlendMode: 'screen',
              willChange: 'transform, opacity'
            }}
          >
            {word}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero section */}
        <div className="min-h-screen flex items-center justify-center px-6">
          <h1
            ref={heroTextRef}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-center leading-tight"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            KINETIC
            <span className="block mt-4">TYPOGRAPHY</span>
          </h1>
        </div>

        {/* Text sculpture section */}
        <div ref={sculptureRef} className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
          <div className="max-w-6xl w-full space-y-8">
            {textSculptures.map((text, i) => (
              <div
                key={i}
                className="sculpture-line text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
                style={{
                  background: `linear-gradient(90deg,
                    hsl(${i * 60}, 70%, 60%) 0%,
                    hsl(${i * 60 + 60}, 70%, 70%) 50%,
                    hsl(${i * 60 + 120}, 70%, 60%) 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  perspective: '500px',
                  transformStyle: 'preserve-3d'
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Animated poetry section */}
        <div ref={poetryRef} className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
          <div className="max-w-4xl w-full space-y-12">
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase font-light">
                Text as Motion Art
              </span>
            </div>

            {poetryLines.map((line, i) => (
              <p
                key={i}
                className="poetry-line text-3xl md:text-5xl lg:text-6xl font-light text-center leading-relaxed"
                style={{
                  color: `hsl(${180 + i * 30}, 70%, 70%)`,
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Morphing text section */}
        <div className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-5xl">
            <h2
              className="morph-text text-6xl md:text-7xl lg:text-8xl font-black text-center leading-tight"
              style={{
                color: '#FF6B6B',
                perspective: '800px',
                transformStyle: 'preserve-3d'
              }}
            >
              LETTERS IN MOTION
            </h2>
            <p
              className="morph-text text-3xl md:text-4xl text-center mt-12 font-light"
              style={{
                color: '#4ECDC4',
                perspective: '800px',
                transformStyle: 'preserve-3d'
              }}
            >
              Every character dances to its own rhythm
            </p>
          </div>
        </div>

        {/* Dynamic grid of letters */}
        <div className="min-h-screen px-6 py-24">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-7xl mx-auto">
            {Array.from({ length: 48 }, (_, i) => {
              const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
              const letter = letters[i % letters.length];

              return (
                <div
                  key={i}
                  className="aspect-square flex items-center justify-center text-4xl font-black cursor-pointer hover:scale-150 transition-transform duration-300"
                  style={{
                    color: `hsl(${i * 15}, 70%, 60%)`,
                    animation: `float ${2 + (i % 3)}s ease-in-out ${i * 0.1}s infinite alternate`,
                    perspective: '500px',
                    transformStyle: 'preserve-3d'
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 2,
                      rotation: 360,
                      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
                      duration: 0.5,
                      ease: 'back.out(2)'
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      rotation: 0,
                      duration: 0.5,
                      ease: 'power2.out'
                    });
                  }}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology showcase */}
        <div className="py-24 text-center">
          <div className="inline-block px-12 py-6 border-2 border-cyan-500/50 rounded-2xl backdrop-blur-md bg-cyan-950/20">
            <p className="text-cyan-300 text-lg">
              Powered by GSAP & View Transitions API
            </p>
          </div>
        </div>

        {/* Final statement */}
        <div className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="text-center">
            <h3
              className="text-7xl md:text-8xl lg:text-9xl font-black mb-8"
              style={{
                background: 'linear-gradient(to right, #fa709a 0%, #fee140 50%, #30cfd0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto',
                animation: 'gradient 3s linear infinite'
              }}
            >
              FLOW
            </h3>
            <p className="text-2xl md:text-3xl text-gray-400 font-light tracking-wide">
              Where typography becomes alive
            </p>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          from {
            transform: translateY(0px) rotateZ(0deg);
          }
          to {
            transform: translateY(-20px) rotateZ(5deg);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
