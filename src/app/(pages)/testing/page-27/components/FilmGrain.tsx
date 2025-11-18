'use client';

import { useEffect, useRef } from 'react';

/**
 * Film grain effect component for authentic noir aesthetic
 */
export function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    let animationId: number;
    const animate = () => {
      if (!ctx || !canvas) return;

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const grain = Math.random() * 50;
        data[i] = grain; // R
        data[i + 1] = grain; // G
        data[i + 2] = grain; // B
        data[i + 3] = 15; // A (low opacity for subtle effect)
      }

      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay"
      aria-hidden="true"
    />
  );
}
