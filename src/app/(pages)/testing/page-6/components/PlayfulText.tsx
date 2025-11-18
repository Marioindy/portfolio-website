'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PlayfulTextProps {
  children: string;
  className?: string;
  serif?: boolean;
}

export function PlayfulText({ children, className = '', serif = false }: PlayfulTextProps) {
  const letters = children.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.h1
      className={`${serif ? 'font-serif' : 'font-sans'} ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={child}
          className="inline-block"
          whileHover={{
            scale: 1.2,
            rotate: Math.random() > 0.5 ? 5 : -5,
            color:
              Math.random() > 0.5
                ? '#E8D5F2'
                : Math.random() > 0.5
                  ? '#FFE5D9'
                  : '#D5F2E3',
            transition: { duration: 0.2 },
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export function FloatingElement({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

export function BouncyButton({
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        px-8 py-4
        bg-white/40
        backdrop-blur-sm
        border border-white/30
        rounded-full
        font-medium
        text-gray-800
        shadow-[0_4px_16px_0_rgba(0,0,0,0.05)]
        ${className}
      `}
      whileHover={{
        scale: 1.05,
        rotate: 2,
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.1)',
      }}
      whileTap={{
        scale: 0.95,
        rotate: -2,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10,
      }}
    >
      {children}
    </motion.button>
  );
}
