'use client';

import { motion } from 'framer-motion';

export function PixelArt() {
  const pixelGrid = [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0]
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-8">
      {/* Pixelated Computer Icon */}
      <motion.div
        className="p-4 bg-black/60 border-2 border-green-500/50 rounded-lg"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
      >
        <div className="grid grid-cols-8 gap-1">
          {pixelGrid.map((row, i) =>
            row.map((pixel, j) => (
              <motion.div
                key={`${i}-${j}`}
                className={`w-3 h-3 ${pixel ? 'bg-green-500' : 'bg-transparent'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: pixel ? 1 : 0 }}
                transition={{ delay: (i * 8 + j) * 0.02 + 1 }}
                whileHover={{ scale: 1.5 }}
              />
            ))
          )}
        </div>
      </motion.div>

      {/* Animated Pixel Bars */}
      <div className="flex flex-col gap-2">
        {[60, 80, 40, 90, 70].map((width, index) => (
          <motion.div
            key={index}
            className="h-4 bg-green-500 border border-green-300"
            initial={{ width: 0 }}
            animate={{ width: `${width}px` }}
            transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
            style={{ imageRendering: 'pixelated' }}
          />
        ))}
      </div>

      {/* Pixelated Text Effect */}
      <div className="text-green-500 font-bold text-2xl tracking-wider pixelated">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          RETRO
        </motion.span>
      </div>

      <style jsx>{`
        .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
      `}</style>
    </div>
  );
}
