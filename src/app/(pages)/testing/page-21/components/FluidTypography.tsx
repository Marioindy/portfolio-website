'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function FluidTypography() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const title = 'Organic Fluidity';

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="text-center"
        style={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {title.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              transition={{
                type: 'spring' as const,
                damping: 12,
                stiffness: 100
              }}
              className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.2,
                rotate: [-5, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Experience the beauty of nature-inspired design with flowing shapes and smooth transitions
        </motion.p>

        <motion.div
          className="mt-12 flex gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
          <motion.button
            className="px-8 py-3 rounded-full border-2 border-purple-500 text-purple-400 font-semibold"
            whileHover={{ scale: 1.05, borderColor: '#ec4899' }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
