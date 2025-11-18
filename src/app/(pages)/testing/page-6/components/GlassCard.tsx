'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
  hoverRotate?: number;
}

export function GlassCard({
  children,
  className = '',
  delay = 0,
  hoverScale = 1.02,
  hoverRotate = 1,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
        transition: { duration: 0.3 },
      }}
      className={`
        relative
        backdrop-blur-md
        bg-white/30
        border border-white/20
        rounded-3xl
        p-8
        shadow-[0_8px_32px_0_rgba(255,255,255,0.2)]
        hover:shadow-[0_12px_48px_0_rgba(255,255,255,0.3)]
        transition-shadow
        duration-300
        ${className}
      `}
    >
      {/* Soft inner glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function AsymmetricGlassCard({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay,
        type: 'spring',
        damping: 15,
      }}
      whileHover={{
        x: 10,
        rotate: -2,
        transition: { duration: 0.4 },
      }}
      className={`
        relative
        backdrop-blur-lg
        bg-gradient-to-br from-white/40 to-white/10
        border border-white/30
        rounded-[2.5rem]
        p-10
        shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]
        hover:shadow-[0_16px_64px_0_rgba(0,0,0,0.08)]
        transition-all
        duration-500
        ${className}
      `}
    >
      {/* Decorative blob corner */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-pastel-lavender/30 rounded-full blur-2xl" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pastel-mint/30 rounded-full blur-2xl" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
