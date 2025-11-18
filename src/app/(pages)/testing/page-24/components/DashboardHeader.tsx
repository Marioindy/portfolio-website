'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function DashboardHeader() {
  const timeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateTime = () => {
      if (timeRef.current) {
        const now = new Date();
        timeRef.current.textContent = now.toLocaleTimeString('en-US', {
          hour12: false,
        });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Pulse animation on time display
    if (timeRef.current) {
      gsap.to(timeRef.current, {
        opacity: 0.6,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 md:mb-12"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Analytics Dashboard
            </span>
          </h1>
          <p className="text-slate-400 font-mono text-sm">
            Real-time Data Visualization • Testing Page 24
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Live Indicator */}
          <div className="flex items-center gap-2 bg-slate-900/50 border border-cyan-500/20 rounded-lg px-4 py-2">
            <div className="relative">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            </div>
            <span className="text-xs font-mono text-cyan-400">LIVE</span>
          </div>

          {/* Time Display */}
          <div className="bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2">
            <span ref={timeRef} className="text-sm font-mono text-purple-400">
              00:00:00
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
      />
    </motion.header>
  );
}
