'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function JazzClubShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Jazz-inspired particle animation (like floating musical notes)
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      char: string;
    }> = [];

    const musicSymbols = ['♪', '♫', '♬', '♩'];

    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 15,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.1,
        char: musicSymbols[Math.floor(Math.random() * musicSymbols.length)],
      });
    }

    let animationId: number;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.y -= particle.speed;

        if (particle.y < -50) {
          particle.y = canvas.height + 50;
          particle.x = Math.random() * canvas.width;
        }

        ctx.font = `${particle.size}px Georgia`;
        ctx.fillStyle = `rgba(217, 119, 6, ${particle.opacity})`;
        ctx.fillText(particle.char, particle.x, particle.y);
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  const jazzElements = [
    {
      title: 'Smooth Rhythms',
      description: 'Animations that flow like a saxophone melody',
      color: 'bg-gradient-to-br from-amber-100 to-orange-200',
      borderColor: 'border-amber-400',
    },
    {
      title: 'Warm Ambiance',
      description: 'Golden hues reminiscent of candlelit jazz clubs',
      color: 'bg-gradient-to-br from-orange-100 to-amber-200',
      borderColor: 'border-orange-400',
    },
    {
      title: 'Elegant Motion',
      description: 'Grace and sophistication in every transition',
      color: 'bg-gradient-to-br from-amber-200 to-orange-100',
      borderColor: 'border-amber-500',
    },
    {
      title: 'Timeless Style',
      description: 'Classic design that never goes out of fashion',
      color: 'bg-gradient-to-br from-orange-200 to-amber-100',
      borderColor: 'border-orange-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-orange-100 via-amber-50 to-orange-100 overflow-hidden"
    >
      {/* Animated canvas with musical notes */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <h2
            className="text-5xl md:text-7xl font-bold text-amber-900 mb-6"
            style={{
              fontFamily: 'Didot, Georgia, serif',
              letterSpacing: '0.15em',
              textShadow: '3px 3px 0 #fbbf24, 5px 5px 0 #d97706',
            }}
          >
            THE JAZZ CLUB
          </h2>

          <p
            className="text-xl md:text-2xl text-orange-800 italic max-w-2xl mx-auto"
            style={{ fontFamily: 'Palatino, serif' }}
          >
            Where elegance meets innovation in perfect harmony
          </p>

          {/* Decorative lines */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-amber-700" />
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-amber-700 rounded-full" />
              <div className="w-2 h-2 bg-orange-700 rounded-full" />
              <div className="w-2 h-2 bg-amber-700 rounded-full" />
            </div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-amber-700" />
          </div>
        </motion.div>

        {/* Jazz elements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {jazzElements.map((element, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: false }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              whileHover={{ scale: 1.05, rotate: activeCard === index ? 1 : 0 }}
            >
              <div
                className={`${element.color} ${element.borderColor} border-4 p-8 rounded-2xl shadow-xl relative overflow-hidden`}
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-amber-700 opacity-30" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-amber-700 opacity-30" />

                {/* Content */}
                <h3
                  className="text-3xl font-bold text-amber-900 mb-4 tracking-wider text-center"
                  style={{ fontFamily: 'Didot, Georgia, serif' }}
                >
                  {element.title}
                </h3>

                <div className="flex justify-center mb-4">
                  <div className="w-16 h-px bg-amber-700" />
                </div>

                <p
                  className="text-orange-900 text-center leading-relaxed"
                  style={{ fontFamily: 'Palatino, serif' }}
                >
                  {element.description}
                </p>

                {/* Musical note decoration */}
                <motion.div
                  className="absolute top-4 right-4 text-4xl text-amber-700 opacity-20"
                  animate={{
                    rotate: activeCard === index ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  ♪
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Art deco showcase banner */}
        <motion.div
          className="relative bg-gradient-to-r from-amber-800 via-orange-700 to-amber-800 p-12 rounded-xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          {/* Art deco pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="decoLines"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="0"
                    y1="20"
                    x2="40"
                    y2="20"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <line
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="40"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#decoLines)" />
            </svg>
          </div>

          <div className="relative z-10 text-center">
            <h3
              className="text-4xl md:text-5xl font-bold text-amber-50 mb-4"
              style={{
                fontFamily: 'Didot, Georgia, serif',
                letterSpacing: '0.2em',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              EXPERIENCE THE ELEGANCE
            </h3>

            <p
              className="text-xl text-amber-100 italic max-w-3xl mx-auto"
              style={{ fontFamily: 'Palatino, serif' }}
            >
              A harmonious blend of classic design and modern technology,
              creating an atmosphere of timeless sophistication
            </p>

            {/* Decorative elements */}
            <div className="flex justify-center gap-6 mt-8">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-amber-200 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
