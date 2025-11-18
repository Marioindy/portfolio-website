'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function MinimalistStatement() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const marqueeContent = marquee.querySelector('.marquee-content');

    if (!marqueeContent) return;

    gsap.to(marqueeContent, {
      x: '-50%',
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Statement Grid */}
        <div className="grid grid-cols-12 gap-8 mb-32">
          {/* Empty column for asymmetry */}
          <div className="col-span-1 md:col-span-2 hidden md:block" />

          {/* Main statement */}
          <div className="col-span-12 md:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-16">
                LESS
                <br />
                IS
                <br />
                POWER
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                <div>
                  <div className="h-px bg-white/20 mb-8" />
                  <p className="text-2xl font-light text-white/70 leading-relaxed">
                    In the absence of decoration, form finds its purest
                    expression. Every line matters. Every space speaks.
                  </p>
                </div>

                <div className="md:ml-auto md:max-w-md">
                  <p className="text-lg font-light text-white/50 leading-relaxed mb-8">
                    Brutalist fashion embraces raw authenticity. No
                    embellishment, no compromise. Just bold, unapologetic
                    design.
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-px bg-white/40" />
                    <span className="text-xs tracking-[0.3em] uppercase text-white/30">
                      Philosophy
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Empty column */}
          <div className="col-span-1 md:col-span-2 hidden md:block" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mb-32">
          {[
            { label: 'Monochrome', value: '100%' },
            { label: 'Asymmetry', value: 'Bold' },
            { label: 'Typography', value: 'Hero' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-black p-12 hover:bg-white/5 transition-colors duration-500"
            >
              <span className="block text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
                {item.label}
              </span>
              <span className="block text-5xl md:text-6xl font-black tracking-tighter">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Marquee */}
        <div
          ref={marqueeRef}
          className="overflow-hidden border-y border-white/10 py-8 mb-32"
        >
          <div className="marquee-content whitespace-nowrap flex gap-12">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-6xl md:text-8xl font-black tracking-tighter text-white/10"
              >
                BRUTALIST FASHION • MINIMALIST LUXURY •
              </span>
            ))}
          </div>
        </div>

        {/* Final Statement */}
        <div className="grid grid-cols-12 gap-8">
          {/* Number */}
          <div className="col-span-12 md:col-span-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-[25vw] font-black text-white/5 leading-none block"
            >
              33
            </motion.span>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                WHERE FASHION
                <br />
                MEETS FUNCTION
              </h3>

              <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed mb-12 max-w-2xl">
                A celebration of negative space, stark contrasts, and the raw
                beauty of minimalism. This is fashion stripped to its essence.
              </p>

              {/* CTA */}
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-6 border border-white/20 hover:border-white px-12 py-6 cursor-pointer group transition-colors duration-500"
              >
                <span className="text-lg tracking-[0.2em] uppercase font-light">
                  View Collection
                </span>
                <motion.div
                  className="w-12 h-px bg-white origin-left"
                  whileHover={{ scaleX: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-32" />

        {/* Footer element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="flex justify-between items-center border-t border-white/10 pt-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">
            Brutalist Fashion Editorial
          </span>
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">
            2025 Collection
          </span>
        </motion.div>
      </div>
    </section>
  );
}
