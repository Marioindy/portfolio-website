'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface NeumorphicCardProps {
  children: ReactNode;
  className?: string;
  pressed?: boolean;
  hover?: boolean;
}

export const NeumorphicCard: React.FC<NeumorphicCardProps> = ({
  children,
  className = '',
  pressed = false,
  hover = true,
}) => {
  const baseClasses = 'rounded-3xl transition-all duration-300';

  const shadowClasses = pressed
    ? 'shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]'
    : 'shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]';

  const hoverClasses = hover
    ? 'hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff]'
    : '';

  return (
    <motion.div
      className={`${baseClasses} ${shadowClasses} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4 } : {}}
    >
      {children}
    </motion.div>
  );
};
