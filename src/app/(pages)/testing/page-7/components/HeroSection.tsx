'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current || !titleRef.current || !subtitleRef.current) return;

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate hero entrance
    timeline
      .fromTo(
        imageRef.current,
        {
          scale: 1.2,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.6,
        }
      )
      .fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        '-=1.2'
      )
      .fromTo(
        subtitleRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        '-=0.8'
      );

    // Parallax scroll effect
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrolled = window.scrollY;
      gsap.to(imageRef.current, {
        y: scrolled * 0.4,
        duration: 0.3,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      timeline.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-warm-sand"
    >
      {/* Full-bleed hero image */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=2000&q=80"
          alt="Hero Photography"
          className="w-full h-full object-cover"
        />
        {/* Warm color overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-rust/40 via-warm-ochre/20 to-warm-burnt-orange/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-sienna/60 via-transparent to-transparent" />
      </div>

      {/* Typography overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.h1
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-warm-cream mb-6 leading-[0.9] tracking-tight"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          Warm
          <br />
          Photography
        </motion.h1>
        <motion.p
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-warm-sand font-light tracking-widest uppercase max-w-2xl mx-auto"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}
        >
          Earth Tones · Visual Stories · Organic Beauty
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-warm-cream/60 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-warm-cream/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
