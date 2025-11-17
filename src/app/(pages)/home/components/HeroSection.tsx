'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShaderBackground } from '@/components/ui/ShaderBackground';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        }
      )
        .fromTo(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          '-=0.4'
        );

      // Scroll-based parallax effect
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 200,
        opacity: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // CTA button hover effect
  const handleCTAMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleCTAMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Shader Background */}
      <ShaderBackground />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground"
          >
            Full Stack Developer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Building Digital Experiences
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Crafting modern, performant, and accessible web applications with
            cutting-edge technologies.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              onMouseEnter={handleCTAMouseEnter}
              onMouseLeave={handleCTAMouseLeave}
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold border border-border hover:bg-accent transition-colors"
              onMouseEnter={handleCTAMouseEnter}
              onMouseLeave={handleCTAMouseLeave}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
