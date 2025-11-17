'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { usePageTransition } from '@/hooks/usePageTransition';
import { fadeIn, textReveal } from '@/utils/animations';
import gsap from 'gsap';

export const HeroSection: React.FC = () => {
  const { navigate } = usePageTransition();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current && ctaRef.current) {
      const tl = gsap.timeline();

      tl.add(textReveal(titleRef.current, { delay: 0.2 }))
        .add(fadeIn(subtitleRef.current, { delay: 0.4 }), '-=0.5')
        .add(fadeIn(ctaRef.current, { delay: 0.6 }), '-=0.3');
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-secondary/20 blur-3xl [animation-delay:2s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          ref={titleRef}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Your Name
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl"
        >
          Full-Stack Developer & Designer crafting exceptional digital experiences
          with modern web technologies
        </p>

        <div ref={ctaRef} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            onClick={() => navigate('/projects')}
            className="group relative overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity group-hover:opacity-100" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
};
