'use client';

import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { useFadeIn, useScaleIn } from '@/hooks/useAnimation';

export const dynamic = 'force-dynamic';

interface Organism {
  id: string;
  x: number;
  y: number;
  size: number;
  color: 'lime' | 'cyan' | 'magenta';
  pulseSpeed: number;
  glowIntensity: number;
}

const COLORS = {
  lime: { base: '#84ff00', glow: 'rgba(132, 255, 0, 0.6)' },
  cyan: { base: '#00ffff', glow: 'rgba(0, 255, 255, 0.6)' },
  magenta: { base: '#ff00ff', glow: 'rgba(255, 0, 255, 0.6)' },
};

export default function Page45() {
  const containerRef = useFadeIn<HTMLDivElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const organismsContainerRef = useRef<HTMLDivElement>(null);

  const [organisms, setOrganisms] = useState<Organism[]>([]);
  const [hoveredOrganism, setHoveredOrganism] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate random organisms
  useEffect(() => {
    const generateOrganisms = () => {
      const newOrganisms: Organism[] = [];
      const colors: ('lime' | 'cyan' | 'magenta')[] = ['lime', 'cyan', 'magenta'];

      for (let i = 0; i < 15; i++) {
        newOrganisms.push({
          id: `organism-${i}`,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 40 + Math.random() * 80,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulseSpeed: 1 + Math.random() * 2,
          glowIntensity: 0.5 + Math.random() * 0.5,
        });
      }

      setOrganisms(newOrganisms);
    };

    generateOrganisms();
  }, []);

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate organisms on mount
  useEffect(() => {
    if (organismsContainerRef.current) {
      const organismElements = organismsContainerRef.current.querySelectorAll('.organism');

      gsap.fromTo(
        organismElements,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: 'elastic.out(1, 0.5)',
        }
      );
    }
  }, [organisms]);

  // Canvas background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: ['#84ff00', '#00ffff', '#ff00ff'][Math.floor(Math.random() * 3)],
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#030712] text-neutral-100 relative overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.4 }}
      />

      {/* Header */}
      <div className="relative z-10 border-b border-lime-500/20 bg-[#030712]/80 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-magenta-400 bg-clip-text text-transparent animate-pulse">
                BIOLUMINESCENT REALM
              </span>
            </h1>
            <p className="text-sm text-neutral-400">
              [LIVING_LIGHT] // [ALIEN_ORGANISMS] // [GLOWING_EVOLUTION]
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Floating Organisms */}
        <div
          ref={organismsContainerRef}
          className="relative min-h-[600px] mb-12 border-2 border-cyan-500/30 rounded-lg bg-[#0a0f1e]/50 backdrop-blur-sm p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 via-transparent to-magenta-500/5" />

          {organisms.map((organism) => (
            <motion.div
              key={organism.id}
              className="organism absolute cursor-pointer"
              style={{
                left: `${organism.x}%`,
                top: `${organism.y}%`,
                width: `${organism.size}px`,
                height: `${organism.size}px`,
              }}
              animate={{
                scale: hoveredOrganism === organism.id ? 1.3 : 1,
                rotate: [0, 360],
              }}
              transition={{
                scale: { duration: 0.3 },
                rotate: {
                  duration: organism.pulseSpeed * 10,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
              onHoverStart={() => setHoveredOrganism(organism.id)}
              onHoverEnd={() => setHoveredOrganism(null)}
            >
              {/* Outer Glow */}
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{
                  backgroundColor: COLORS[organism.color].glow,
                }}
                animate={{
                  opacity: [organism.glowIntensity * 0.5, organism.glowIntensity, organism.glowIntensity * 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: organism.pulseSpeed,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Core */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${COLORS[organism.color].base}, transparent)`,
                  boxShadow: `0 0 ${organism.size}px ${COLORS[organism.color].glow}`,
                }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: organism.pulseSpeed,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Inner Pattern */}
              <div
                className="absolute inset-0 rounded-full opacity-60"
                style={{
                  background: `repeating-radial-gradient(circle at center, transparent, transparent ${organism.size / 8}px, ${COLORS[organism.color].base}40 ${organism.size / 8}px, ${COLORS[organism.color].base}40 ${organism.size / 6}px)`,
                }}
              />
            </motion.div>
          ))}

          {/* Central Title */}
          <div className="relative z-20 flex items-center justify-center h-full">
            <motion.div
              className="text-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <h2 className="text-6xl font-bold mb-4">
                <span
                  className="bg-gradient-to-r from-lime-400 via-cyan-400 to-magenta-400 bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 0 30px rgba(132, 255, 0, 0.5)',
                  }}
                >
                  LIVING LIGHT
                </span>
              </h2>
              <p className="text-lg text-neutral-300">
                Hover over the organisms to interact
              </p>
            </motion.div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Lime Card */}
          <motion.div
            className="border-2 border-lime-500/30 rounded-lg bg-[#0a0f1e]/50 backdrop-blur-sm p-6 hover:border-lime-500/60 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full animate-pulse"
                style={{
                  backgroundColor: COLORS.lime.base,
                  boxShadow: `0 0 20px ${COLORS.lime.glow}`,
                }}
              />
              <h3 className="text-xl font-bold text-lime-400">LIME ORGANISM</h3>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Primary bioluminescent species. Emits vibrant lime photons through specialized light-producing cells.
              Pulse frequency: 1-3Hz. Natural habitat: Deep oceanic trenches.
            </p>
            <div className="mt-4 pt-4 border-t border-lime-500/20">
              <div className="flex justify-between text-xs text-neutral-500">
                <span>Brightness</span>
                <span className="text-lime-400">██████████ 100%</span>
              </div>
            </div>
          </motion.div>

          {/* Cyan Card */}
          <motion.div
            className="border-2 border-cyan-500/30 rounded-lg bg-[#0a0f1e]/50 backdrop-blur-sm p-6 hover:border-cyan-500/60 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full animate-pulse"
                style={{
                  backgroundColor: COLORS.cyan.base,
                  boxShadow: `0 0 20px ${COLORS.cyan.glow}`,
                }}
              />
              <h3 className="text-xl font-bold text-cyan-400">CYAN ORGANISM</h3>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Secondary bioluminescent species. Cyan wavelength emission indicates high energy metabolism.
              Pulse frequency: 0.5-2Hz. Natural habitat: Abyssal plains.
            </p>
            <div className="mt-4 pt-4 border-t border-cyan-500/20">
              <div className="flex justify-between text-xs text-neutral-500">
                <span>Brightness</span>
                <span className="text-cyan-400">████████░░ 80%</span>
              </div>
            </div>
          </motion.div>

          {/* Magenta Card */}
          <motion.div
            className="border-2 border-magenta-500/30 rounded-lg bg-[#0a0f1e]/50 backdrop-blur-sm p-6 hover:border-magenta-500/60 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full animate-pulse"
                style={{
                  backgroundColor: COLORS.magenta.base,
                  boxShadow: `0 0 20px ${COLORS.magenta.glow}`,
                }}
              />
              <h3 className="text-xl font-bold text-magenta-400">MAGENTA ORGANISM</h3>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Rare bioluminescent species. Magenta emission suggests exotic biochemistry.
              Pulse frequency: 2-4Hz. Natural habitat: Hydrothermal vents.
            </p>
            <div className="mt-4 pt-4 border-t border-magenta-500/20">
              <div className="flex justify-between text-xs text-neutral-500">
                <span>Brightness</span>
                <span className="text-magenta-400">█████████░ 90%</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bioluminescence Stats */}
        <motion.div
          className="mt-12 border-2 border-lime-500/30 rounded-lg bg-[#0a0f1e]/50 backdrop-blur-sm p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
            BIOLUMINESCENCE METRICS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Total Organisms</span>
                <span className="text-lime-400 font-mono">{organisms.length}</span>
              </div>
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-lime-500 to-cyan-500"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Light Intensity</span>
                <span className="text-cyan-400 font-mono">87.3%</span>
              </div>
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-magenta-500"
                  initial={{ width: 0 }}
                  animate={{ width: '87.3%' }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Pulse Frequency</span>
                <span className="text-magenta-400 font-mono">2.4 Hz</span>
              </div>
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-magenta-500 to-lime-500"
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Info */}
        <motion.div
          className="mt-12 border-2 border-cyan-500/30 rounded-lg bg-[#0a0f1e]/50 backdrop-blur-sm p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-bold mb-6 text-cyan-400">TECHNICAL SPECIFICATIONS</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'View Transitions', 'Convex'].map(
              (tech, idx) => (
                <motion.div
                  key={tech}
                  className="border border-lime-500/30 rounded-lg p-3 text-center hover:border-lime-500/60 transition-all cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + idx * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(132, 255, 0, 0.3)',
                  }}
                >
                  <p className="text-sm font-mono text-neutral-300">{tech}</p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Mouse Follower Glow */}
      <motion.div
        className="fixed pointer-events-none z-50 w-64 h-64 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(132, 255, 0, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
        }}
      />
    </div>
  );
}
