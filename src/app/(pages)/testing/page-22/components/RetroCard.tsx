'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RetroCardProps {
  title: string;
  children: ReactNode;
  index: number;
}

export function RetroCard({ title, children, index }: RetroCardProps) {
  return (
    <motion.div
      className="bg-black/80 border-4 border-green-500/50 p-6 rounded-lg font-mono"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      whileHover={{
        borderColor: 'rgb(0, 255, 0)',
        boxShadow: '0 0 30px rgba(0, 255, 0, 0.4)',
        scale: 1.02
      }}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-green-500/30">
        <h3 className="text-green-400 font-bold text-lg">
          [ {title.toUpperCase()} ]
        </h3>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-green-500 border border-green-300" />
          <div className="w-3 h-3 bg-green-500 border border-green-300" />
          <div className="w-3 h-3 bg-green-500 border border-green-300" />
        </div>
      </div>

      {/* Content */}
      <div className="text-green-500/90 text-sm leading-relaxed">
        {children}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-2 border-t-2 border-green-500/30 text-xs text-green-500/60">
        SYSTEM_ID: {Math.floor(Math.random() * 9999).toString().padStart(4, '0')}
      </div>
    </motion.div>
  );
}
