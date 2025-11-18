'use client';

import { motion } from 'framer-motion';

export function OrganicShapes() {
  const shapes = [
    {
      x: '10%',
      y: '20%',
      scale: 1,
      duration: 8,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      x: '80%',
      y: '15%',
      scale: 1.2,
      duration: 10,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      x: '70%',
      y: '70%',
      scale: 0.9,
      duration: 12,
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      x: '20%',
      y: '75%',
      scale: 1.1,
      duration: 9,
      color: 'from-violet-500/20 to-purple-500/20'
    }
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute w-64 h-64 rounded-full bg-gradient-to-br ${shape.color} blur-3xl`}
          style={{
            left: shape.x,
            top: shape.y
          }}
          animate={{
            scale: [shape.scale, shape.scale * 1.3, shape.scale],
            x: [0, 50, 0, -50, 0],
            y: [0, -30, 0, 30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}
