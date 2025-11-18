'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

    const glitch = () => {
      const glitched = text
        .split('')
        .map((char) => {
          if (Math.random() > 0.9) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        })
        .join('');

      setGlitchText(glitched);

      // Reset to original text after short delay
      setTimeout(() => setGlitchText(text), 50);
    };

    const interval = setInterval(glitch, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span
      className={`relative inline-block font-mono ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="relative z-10">{glitchText}</span>
      <span
        className="absolute top-0 left-0 -z-10 text-red-500"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
          transform: 'translateX(-2px)',
        }}
      >
        {glitchText}
      </span>
      <span
        className="absolute top-0 left-0 -z-10 text-blue-500"
        style={{
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
          transform: 'translateX(2px)',
        }}
      >
        {glitchText}
      </span>
    </motion.span>
  );
};
