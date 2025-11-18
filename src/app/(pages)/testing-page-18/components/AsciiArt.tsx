'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AsciiArt: React.FC = () => {
  const asciiLogo = `
    ████████╗███████╗███████╗████████╗██╗███╗   ██╗ ██████╗
    ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██║████╗  ██║██╔════╝
       ██║   █████╗  ███████╗   ██║   ██║██╔██╗ ██║██║  ███╗
       ██║   ██╔══╝  ╚════██║   ██║   ██║██║╚██╗██║██║   ██║
       ██║   ███████╗███████║   ██║   ██║██║ ╚████║╚██████╔╝
       ╚═╝   ╚══════╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝

    ██████╗  ██████╗  ██████╗ ███╗   ███╗    ██╗ ██╗ ██╗  █████╗
    ██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║    ██║ ██║ ██║ ██╔══██╗
    ██████╔╝██║   ██║██║   ██║██╔████╔██║    ╚═╝ ╚═╝ ╚═╝ ╚█████╔╝
    ██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║    ██╗ ██╗ ██╗ ██╔══██╗
    ██║  ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║    ╚═╝ ╚═╝ ╚═╝ ╚█████╔╝
    ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝                  ╚════╝
  `;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.pre
      className="text-[#00FF00] text-xs sm:text-sm md:text-base font-mono leading-tight overflow-x-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {asciiLogo.split('\n').map((line, index) => (
        <motion.div key={index} variants={lineVariants}>
          {line}
        </motion.div>
      ))}
    </motion.pre>
  );
};
