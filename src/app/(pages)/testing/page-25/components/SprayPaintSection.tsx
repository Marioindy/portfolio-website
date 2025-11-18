'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function SprayPaintSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Spray paint effect
    const createSprayPaint = (x: number, y: number, color: string, size: number) => {
      const particles = 100;
      for (let i = 0; i < particles; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * size;
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;

        ctx.fillStyle = color;
        ctx.globalAlpha = Math.random() * 0.3;
        ctx.beginPath();
        ctx.arc(px, py, Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Draw spray paint splatters
    const colors = ['#ff006e', '#8338ec', '#3a86ff', '#ffbe0b', '#fb5607'];
    const splatters = 15;

    for (let i = 0; i < splatters; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 80 + 40;

      createSprayPaint(x, y, color, size);
    }

    // Animate opacity
    gsap.to(canvas, {
      opacity: 0.6,
      duration: 2,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div ref={containerRef} className="relative container mx-auto px-4 py-16 md:py-24">
      {/* Canvas for spray paint effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-0"
        style={{ mixBlendMode: 'screen' }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-7xl font-black mb-6"
            style={{
              fontFamily: 'Impact, sans-serif',
              WebkitTextStroke: '2px #000',
              textShadow: `
                3px 3px 0 #ff006e,
                6px 6px 0 #8338ec,
                9px 9px 0 #3a86ff,
                12px 12px 20px rgba(0,0,0,0.5)
              `,
              transform: 'skew(-3deg)',
              color: '#fff',
            }}
          >
            SPRAY ZONE
          </h2>

          <p
            className="text-xl md:text-2xl font-bold text-yellow-400 tracking-wide"
            style={{
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            CREATIVE CHAOS WITH STRUCTURE
          </p>
        </motion.div>

        {/* Interactive Spray Paint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'COLOR',
              subtitle: 'VIBRANT',
              colors: ['#ff006e', '#ffbe0b', '#fb5607'],
              rotation: -3,
            },
            {
              title: 'STYLE',
              subtitle: 'BOLD',
              colors: ['#8338ec', '#3a86ff', '#06ffa5'],
              rotation: 2,
            },
            {
              title: 'ENERGY',
              subtitle: 'RAW',
              colors: ['#fb5607', '#ff006e', '#8338ec'],
              rotation: -2,
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
              className="relative"
              style={{ transform: `rotate(${card.rotation}deg)` }}
            >
              <div
                className="bg-zinc-800 border-4 border-black rounded-lg p-8 overflow-hidden"
                style={{
                  boxShadow: '8px 8px 0 rgba(0,0,0,0.9)',
                }}
              >
                {/* Background spray effect */}
                <div className="absolute inset-0">
                  {card.colors.map((color, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.3 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 + i * 0.1 }}
                      className="absolute rounded-full blur-2xl"
                      style={{
                        backgroundColor: color,
                        width: '120px',
                        height: '120px',
                        top: `${Math.random() * 60}%`,
                        left: `${Math.random() * 60}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3
                    className="text-4xl md:text-5xl font-black mb-2 text-white"
                    style={{
                      fontFamily: 'Impact, sans-serif',
                      WebkitTextStroke: '2px #000',
                      textShadow: '4px 4px 0 rgba(0,0,0,0.5)',
                      letterSpacing: '3px',
                    }}
                  >
                    {card.title}
                  </h3>

                  <div
                    className="inline-block px-4 py-1 bg-white text-black font-black text-lg border-2 border-black"
                    style={{
                      transform: 'rotate(-2deg)',
                      fontFamily: 'Impact, sans-serif',
                    }}
                  >
                    {card.subtitle}
                  </div>

                  {/* Color swatches */}
                  <div className="flex justify-center gap-2 mt-6">
                    {card.colors.map((color, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        style={{
                          backgroundColor: color,
                          boxShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Drips */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-around">
                  {card.colors.map((color, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + i * 0.2 }}
                      className="w-2 origin-top"
                      style={{
                        height: `${Math.random() * 40 + 30}px`,
                        backgroundColor: color,
                        opacity: 0.6,
                        filter: 'blur(1px)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
