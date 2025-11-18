'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface MorphingBlobProps {
  color: string;
  className?: string;
  delay?: number;
}

export function MorphingBlob({ color, className = '', delay = 0 }: MorphingBlobProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Organic blob paths - multiple states for morphing
  const blobPaths = [
    'M60,-63.2C75.1,-49.1,83.3,-24.5,82.8,-0.7C82.2,23.2,72.9,46.4,57.8,60.9C42.7,75.4,21.4,81.2,-1.4,82.6C-24.1,84,-48.3,81,-63.8,66.5C-79.4,52,-86.4,26,-84.1,1.7C-81.8,-22.6,-70.3,-45.2,-54.6,-59.3C-39,-73.4,-19.5,-79,1.6,-80.6C22.7,-82.2,45.4,-79.8,60,-63.2Z',
    'M55.4,-58.1C69.9,-47.3,78.4,-23.6,78.8,0.4C79.2,24.4,71.5,48.8,57,64.3C42.5,79.8,21.3,86.4,-2.1,88.5C-25.4,90.6,-50.9,88.2,-65.6,72.7C-80.4,57.2,-84.5,28.6,-81.4,2.9C-78.3,-22.8,-67.9,-45.6,-53.1,-56.4C-38.2,-67.2,-19.1,-66.1,2.1,-68.2C23.3,-70.3,46.6,-75.6,55.4,-58.1Z',
    'M51.7,-56.9C64.8,-44.3,71.5,-22.2,72.1,0.5C72.7,23.3,67.2,46.5,54.1,62.1C41,77.7,20.5,85.6,-1.9,87.5C-24.3,89.4,-48.6,85.3,-63.6,69.7C-78.6,54.1,-84.3,27.1,-81.9,2.2C-79.5,-22.6,-69,-45.2,-54,-57.8C-39,-70.4,-19.5,-73,0.6,-73.6C20.7,-74.2,41.4,-72.8,51.7,-56.9Z',
    'M58.3,-61.9C73.2,-49.2,81.7,-24.6,81.3,-0.4C80.9,23.8,71.6,47.6,56.7,62.8C41.8,78,21.4,84.6,-1.3,85.9C-24,87.2,-48,83.2,-63.2,68C-78.4,52.8,-84.8,26.4,-82.7,1.6C-80.6,-23.2,-70,-46.4,-54.8,-59.1C-39.6,-71.8,-19.8,-73.9,2.1,-76C24,-78.1,48,-80.2,58.3,-61.9Z',
  ];

  return (
    <motion.div
      className={`absolute ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: isHovered ? 1.1 : 1,
        rotate: isHovered ? 5 : 0,
      }}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter blur-3xl opacity-60"
      >
        <motion.path
          fill={color}
          initial={{ d: blobPaths[0] }}
          animate={{
            d: isHovered ? blobPaths[1] : blobPaths[0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          transform="translate(100 100)"
        />
      </svg>
    </motion.div>
  );
}

export function AnimatedBlobBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <MorphingBlob
        color="#FFE5D9"
        className="top-0 -left-20 w-96 h-96 opacity-50"
        delay={0}
      />
      <MorphingBlob
        color="#E8D5F2"
        className="top-1/4 right-0 w-80 h-80 opacity-40"
        delay={0.2}
      />
      <MorphingBlob
        color="#D5F2E3"
        className="bottom-0 left-1/4 w-96 h-96 opacity-30"
        delay={0.4}
      />
      <MorphingBlob
        color="#D5E8F2"
        className="bottom-1/4 right-1/4 w-72 h-72 opacity-50"
        delay={0.6}
      />
    </div>
  );
}
