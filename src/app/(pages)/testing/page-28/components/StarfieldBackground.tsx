'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
}

/**
 * Animated starfield background with parallax effect
 */
export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const numStars = 800;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize stars
    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width,
          size: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
    };

    initStars();

    // Mouse move handler for parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      starsRef.current.forEach((star) => {
        // Move star
        star.z -= star.speed;

        // Reset star if it goes behind camera
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
        }

        // Calculate 3D position
        const k = 128.0 / star.z;
        const px = star.x * k + centerX + mouseRef.current.x * (star.z / canvas.width) * 50;
        const py = star.y * k + centerY + mouseRef.current.y * (star.z / canvas.width) * 50;

        // Calculate star size based on depth
        const size = (1 - star.z / canvas.width) * star.size * 3;

        // Calculate opacity based on depth
        const opacity = 1 - star.z / canvas.width;

        // Draw star with glow
        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          // Glow
          const gradient = ctx.createRadialGradient(px, py, 0, px, py, size * 2);
          gradient.addColorStop(0, `rgba(138, 123, 255, ${opacity * 0.8})`);
          gradient.addColorStop(0.5, `rgba(138, 123, 255, ${opacity * 0.4})`);
          gradient.addColorStop(1, 'rgba(138, 123, 255, 0)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(px, py, size * 2, 0, Math.PI * 2);
          ctx.fill();

          // Core star
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();

          // Draw motion trail
          const oldX = star.x * (128.0 / (star.z + star.speed)) + centerX;
          const oldY = star.y * (128.0 / (star.z + star.speed)) + centerY;

          ctx.strokeStyle = `rgba(138, 123, 255, ${opacity * 0.3})`;
          ctx.lineWidth = size * 0.5;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(oldX, oldY);
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      aria-hidden="true"
      style={{ background: 'linear-gradient(to bottom, #000000, #0a0015, #1a0033)' }}
    />
  );
}
