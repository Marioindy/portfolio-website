'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function EditorialLayout() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(entry.target.querySelectorAll('.animate-in'), {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power3.out',
          });
        }
      });
    }, observerOptions);

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Editorial Section 1 - Asymmetric Typography */}
        <div ref={section1Ref} className="grid grid-cols-12 gap-8 mb-48">
          {/* Large number */}
          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="animate-in"
            >
              <span className="text-[20vw] md:text-[25vw] font-black leading-none text-white/5 select-none">
                01
              </span>
            </motion.div>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-center gap-12">
            <div className="animate-in">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                CONFIDENCE
                <br />
                THROUGH
                <br />
                EMPTINESS
              </h2>
            </div>

            <div className="animate-in">
              <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed max-w-lg">
                The art of saying more with less. Each element carefully placed,
                each space deliberately empty.
              </p>
            </div>

            <div className="animate-in flex items-center gap-6 mt-8">
              <div className="w-24 h-px bg-white" />
              <span className="text-sm tracking-[0.3em] uppercase text-white/40">
                Editorial
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Section 2 - Fashion Grid */}
        <div ref={section2Ref} className="grid grid-cols-12 gap-8 mb-48">
          {/* Title column */}
          <div className="col-span-12 md:col-span-3">
            <div className="animate-in md:sticky md:top-32">
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
                STARK
              </h3>
              <div className="w-12 h-1 bg-white mb-6" />
              <p className="text-sm tracking-[0.2em] uppercase text-white/40">
                Asymmetry
              </p>
            </div>
          </div>

          {/* Empty space */}
          <div className="col-span-12 md:col-span-2 hidden md:block" />

          {/* Content blocks */}
          <div className="col-span-12 md:col-span-7 space-y-24">
            {[
              {
                title: 'BOLD TYPOGRAPHY',
                desc: 'Letters as architecture, words as monuments. Typography becomes the primary design element.',
              },
              {
                title: 'HIGH SPACING',
                desc: 'Generous whitespace creates breathing room, elevating content to luxury status.',
              },
              {
                title: 'ASYMMETRIC BALANCE',
                desc: 'Breaking the grid with intention, creating tension and visual interest.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="animate-in border-l border-white/20 pl-8 hover:border-white transition-colors duration-500"
              >
                <h4 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
                  {item.title}
                </h4>
                <p className="text-lg md:text-xl font-light text-white/60 leading-relaxed max-w-md">
                  {item.desc}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="text-6xl font-black text-white/10">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Section 3 - Statement Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Large text */}
          <div className="col-span-12 md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[8vw] md:text-[12vw] font-black leading-[0.85] tracking-tighter"
            >
              MINIMALIST
              <br />
              MAXIMAL
              <br />
              IMPACT
            </motion.h2>
          </div>

          {/* Vertical text */}
          <div className="col-span-12 md:col-span-4 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xs tracking-[0.5em] uppercase text-white/30"
              style={{ writingMode: 'vertical-rl' }}
            >
              High Fashion Editorial Design
            </motion.div>
          </div>
        </div>

        {/* Bottom border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
          className="mt-32 h-px bg-white/20 origin-left"
        />
      </div>
    </section>
  );
}
