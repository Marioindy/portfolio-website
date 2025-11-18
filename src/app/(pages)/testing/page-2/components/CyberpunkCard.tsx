'use client';

import { useRef, useState } from 'react';
import { IsometricShape } from './IsometricShape';
import { motion } from 'framer-motion';

interface CyberpunkCardProps {
  title: string;
  description: string;
  icon?: 'cube' | 'pyramid' | 'prism';
  color?: 'purple' | 'cyan' | 'mixed';
  delay?: number;
}

/**
 * CyberpunkCard - Glassmorphic card with neon borders and 3D hover effects
 * Features frosted glass appearance, depth on hover, and isometric illustrations
 */
export function CyberpunkCard({
  title,
  description,
  icon = 'cube',
  color = 'purple',
  delay = 0,
}: CyberpunkCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const borderGradient =
    color === 'purple'
      ? 'from-purple-500 via-purple-400 to-purple-600'
      : color === 'cyan'
        ? 'from-cyan-500 via-cyan-400 to-cyan-600'
        : 'from-purple-500 via-cyan-400 to-purple-600';

  const glowColor =
    color === 'purple'
      ? 'rgba(147, 51, 234, 0.4)'
      : color === 'cyan'
        ? 'rgba(6, 182, 212, 0.4)'
        : 'rgba(147, 51, 234, 0.3)';

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Outer glow effect */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          background: `linear-gradient(135deg, ${glowColor}, transparent, ${glowColor})`,
        }}
      />

      {/* Neon border gradient */}
      <div
        className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${borderGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Main card with glassmorphism */}
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        style={{
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}
        animate={{
          rotateX: isHovered ? -5 : 0,
          rotateY: isHovered ? 5 : 0,
          scale: isHovered ? 1.05 : 1,
          z: isHovered ? 50 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
      >
        {/* Frosted glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        {/* Card content */}
        <div className="relative p-8 space-y-6">
          {/* Isometric icon */}
          <div className="flex justify-center">
            <motion.div
              animate={{
                rotateY: isHovered ? 360 : 0,
                rotateX: isHovered ? 15 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
              }}
            >
              <IsometricShape type={icon} color={color} size={80} />
            </motion.div>
          </div>

          {/* Title */}
          <h3
            className={`text-2xl font-bold text-center tracking-wide ${
              color === 'cyan'
                ? 'text-cyan-300'
                : color === 'purple'
                  ? 'text-purple-300'
                  : 'bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent'
            }`}
            style={{
              textShadow: `0 0 20px ${glowColor}`,
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300/80 text-center leading-relaxed text-sm">
            {description}
          </p>

          {/* Hover reveal: depth indicator */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-white/10 flex justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-75" />
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-150" />
            </div>
          </motion.div>
        </div>

        {/* Scan line effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ y: '-100%' }}
          animate={{ y: isHovered ? '100%' : '-100%' }}
          transition={{
            duration: 1,
            ease: 'linear',
            repeat: isHovered ? Infinity : 0,
          }}
        >
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
