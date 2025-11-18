'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CINEMATIC LIGHTING SYSTEM
 *
 * Cinema teaches us: light is sculptural. It carves form from darkness.
 * This component simulates a three-point lighting setup using CSS radial gradients.
 *
 * - Key Light: Primary illumination (30% opacity)
 * - Fill Light: Ambient softness (10% opacity)
 * - Rim Light: Edge separation (15% opacity)
 *
 * The lights follow the cursor with cinematic inertia—not instant tracking,
 * but the slow, deliberate movement of a camera dolly.
 */

interface LightSource {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  blur: number;
}

export function LightingSystem() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      // Smooth easing for cinematic movement
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Define our three-point lighting setup
  const lights: LightSource[] = [
    {
      // KEY LIGHT: Main source, follows cursor with subtle offset
      x: mousePosition.x,
      y: mousePosition.y,
      size: 800,
      opacity: 0.3,
      color: 'rgba(255, 255, 255, 0.3)',
      blur: 100,
    },
    {
      // FILL LIGHT: Opposite side, ambient softness
      x: 100 - mousePosition.x * 0.3,
      y: 100 - mousePosition.y * 0.3,
      size: 1200,
      opacity: 0.1,
      color: 'rgba(180, 180, 200, 0.1)',
      blur: 150,
    },
    {
      // RIM LIGHT: Edge highlight, creates depth
      x: mousePosition.x * 0.5 + 50,
      y: 20,
      size: 600,
      opacity: 0.15,
      color: 'rgba(200, 200, 220, 0.15)',
      blur: 80,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base darkness - the void from which we carve */}
      <div className="absolute inset-0 bg-black" />

      {/* Cinematic light sources */}
      {lights.map((light, index) => (
        <motion.div
          key={`light-${index}`}
          className="absolute rounded-full"
          style={{
            width: `${light.size}px`,
            height: `${light.size}px`,
            background: `radial-gradient(circle, ${light.color} 0%, transparent 70%)`,
            filter: `blur(${light.blur}px)`,
            opacity: light.opacity,
            willChange: 'transform',
          }}
          animate={{
            left: `${light.x}%`,
            top: `${light.y}%`,
            x: '-50%',
            y: '-50%',
          }}
          transition={{
            type: 'spring',
            damping: 50,
            stiffness: 100,
            mass: 1,
          }}
        />
      ))}

      {/* Subtle film grain texture for authenticity */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  );
}
