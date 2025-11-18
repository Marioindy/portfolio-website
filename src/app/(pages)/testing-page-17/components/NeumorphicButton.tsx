'use client';

import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface NeumorphicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    default: 'text-gray-700',
    primary: 'text-blue-600 font-semibold',
    secondary: 'text-purple-600 font-semibold',
  };

  const shadowClasses = isPressed
    ? 'shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]'
    : 'shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] hover:shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]';

  return (
    <motion.button
      className={`rounded-2xl bg-[#e0e5ec] transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${shadowClasses} ${className}`}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.button>
  );
};
