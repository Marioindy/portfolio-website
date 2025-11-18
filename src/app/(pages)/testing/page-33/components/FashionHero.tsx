'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function FashionHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !lineRef.current) return;

    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(titleRef.current.children, {
      y: 200,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power4.out',
    });

    tl.from(
      lineRef.current,
      {
        scaleX: 0,
        duration: 1.5,
        ease: 'power3.inOut',
      },
      '-=0.8'
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Asymmetric grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-white/5" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/5" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-white/5" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-white/5" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12">
        {/* Asymmetric layout */}
        <div className="max-w-[1600px] mx-auto">
          {/* Large typography */}
          <div className="overflow-hidden mb-12">
            <h1
              ref={titleRef}
              className="text-[12vw] md:text-[15vw] lg:text-[18vw] font-black leading-[0.85] tracking-tighter"
            >
              <div className="inline-block">BRUT</div>
              <div className="inline-block">ALIST</div>
            </h1>
          </div>

          {/* Divider line */}
          <div
            ref={lineRef}
            className="h-1 bg-white mb-16 origin-left"
            style={{ width: '60%', marginLeft: '20%' }}
          />

          {/* Asymmetric content grid */}
          <div className="grid grid-cols-12 gap-8">
            {/* Empty space - minimalism */}
            <div className="col-span-3 hidden md:block" />

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 md:col-span-6"
            >
              <p className="text-2xl md:text-4xl font-light tracking-wide uppercase leading-relaxed border-l-4 border-white pl-8">
                Fashion through
                <br />
                Extreme Minimalism
              </p>
            </motion.div>

            {/* Empty space */}
            <div className="col-span-3 hidden md:block" />

            {/* Small descriptor */}
            <div className="col-span-12 md:col-span-4 md:col-start-8 mt-12">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.2 }}
                className="text-sm tracking-[0.3em] uppercase text-white/60"
              >
                Collection 2025
              </motion.p>
            </div>
          </div>

          {/* Asymmetric CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-32 ml-auto"
            style={{ width: 'fit-content', marginRight: '15%' }}
          >
            <div className="group cursor-pointer">
              <div className="flex items-center gap-8 border border-white/20 hover:border-white transition-all duration-500 px-12 py-6">
                <span className="text-xl tracking-[0.2em] uppercase font-light">
                  Explore
                </span>
                <motion.div
                  className="w-16 h-px bg-white origin-left"
                  whileHover={{ scaleX: 1.5 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Corner elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-8 right-8 text-xs tracking-[0.3em] uppercase text-white/40"
      >
        33
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-8 text-xs tracking-[0.3em] uppercase text-white/40 rotate-180"
        style={{ writingMode: 'vertical-rl' }}
      >
        Brutalist Fashion
      </motion.div>
    </section>
  );
}
