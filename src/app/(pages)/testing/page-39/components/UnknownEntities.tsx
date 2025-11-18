'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function UnknownEntities() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredEntity, setHoveredEntity] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Particle system for cosmic void
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#a855f7', '#c026d3'];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 - distance / 300})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  const entities = [
    {
      name: 'THE VOID WATCHER',
      description: 'It observes from beyond the veil',
      symbol: '◯',
    },
    {
      name: 'DIMENSIONAL SHIFTER',
      description: 'Reality bends in its presence',
      symbol: '△',
    },
    {
      name: 'TEMPORAL DEVOURER',
      description: 'Time itself is its sustenance',
      symbol: '◇',
    },
    {
      name: 'COSMIC WEAVER',
      description: 'Weaving threads of existence',
      symbol: '⬡',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-4 md:px-8 min-h-screen flex items-center"
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.3 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-5xl md:text-7xl font-black text-center mb-16 text-purple-200"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          style={{
            fontFamily: 'Georgia, serif',
            textShadow: '3px 3px 0 #7c3aed, -2px -2px 0 #ec4899, 0 0 20px rgba(139, 92, 246, 0.5)',
          }}
        >
          UNKNOWN ENTITIES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {entities.map((entity, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: false }}
              onMouseEnter={() => setHoveredEntity(index)}
              onMouseLeave={() => setHoveredEntity(null)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative bg-gradient-to-br from-purple-950/50 to-slate-900/50 backdrop-blur-md p-8 rounded-xl border-2 border-purple-500/30 overflow-hidden">
                {/* Glowing effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredEntity === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Entity symbol */}
                <motion.div
                  className="text-8xl text-center mb-6 font-bold"
                  style={{
                    color: '#c084fc',
                    textShadow: '0 0 20px #8b5cf6',
                  }}
                  animate={{
                    rotate: hoveredEntity === index ? [0, 360] : 0,
                    scale: hoveredEntity === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 2 }}
                >
                  {entity.symbol}
                </motion.div>

                {/* Entity name */}
                <h3
                  className="text-2xl font-bold mb-3 text-purple-200 text-center tracking-widest"
                  style={{
                    fontFamily: 'Courier New, monospace',
                    textShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
                  }}
                >
                  {entity.name}
                </h3>

                {/* Entity description */}
                <p
                  className="text-pink-200/80 text-center italic"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {entity.description}
                </p>

                {/* Pulsating corner orbs */}
                <motion.div
                  className="absolute top-4 left-4 w-3 h-3 bg-purple-400 rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />

                <motion.div
                  className="absolute bottom-4 right-4 w-3 h-3 bg-pink-400 rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2 + 1,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final cosmic message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          viewport={{ once: false }}
        >
          <p
            className="text-xl md:text-2xl text-purple-300/60 font-mono tracking-wider"
            style={{ textShadow: '0 0 10px rgba(139, 92, 246, 0.3)' }}
          >
            [COSMIC_HORROR] :: [ELDRITCH_GEOMETRY] :: [EXECUTION]
          </p>
        </motion.div>
      </div>
    </section>
  );
}
