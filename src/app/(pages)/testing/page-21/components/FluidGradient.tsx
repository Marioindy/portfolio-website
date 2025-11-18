'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function FluidGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gradientRef.current) return;

      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      gradientRef.current.style.background = `
        radial-gradient(circle at ${x}% ${y}%,
          rgba(167, 139, 250, 0.15) 0%,
          rgba(59, 130, 246, 0.1) 25%,
          rgba(139, 92, 246, 0.08) 50%,
          transparent 70%
        )
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={gradientRef}
      className="fixed inset-0 -z-10 transition-all duration-500 ease-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: `
          radial-gradient(circle at 50% 50%,
            rgba(167, 139, 250, 0.15) 0%,
            rgba(59, 130, 246, 0.1) 25%,
            rgba(139, 92, 246, 0.08) 50%,
            transparent 70%
          )
        `
      }}
    />
  );
}
