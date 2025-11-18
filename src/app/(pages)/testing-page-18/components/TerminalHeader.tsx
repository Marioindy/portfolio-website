'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TerminalHeader: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    const uptimeInterval = setInterval(() => setUptime((prev) => prev + 1), 1000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(uptimeInterval);
    };
  }, []);

  const formatUptime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      className="border-b-2 border-[#00FF00] pb-4 mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[#00FF00] font-mono text-sm">
        <div className="flex items-center gap-4">
          <span className="text-lg">●</span>
          <span>SYSTEM:ONLINE</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm">
          <span>TIME: {currentTime}</span>
          <span>UPTIME: {formatUptime(uptime)}</span>
          <span>USER: guest@cyberpunk</span>
        </div>
      </div>
      <div className="mt-2 text-[#00FF00] font-mono text-xs opacity-75">
        <span className="animate-pulse">█</span> READY FOR INPUT...
      </div>
    </motion.div>
  );
};
