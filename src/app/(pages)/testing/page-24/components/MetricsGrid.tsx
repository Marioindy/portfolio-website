'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Metric {
  label: string;
  value: string;
  change: string;
  color: string;
  icon: string;
}

export function MetricsGrid() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      label: 'Total Users',
      value: '0',
      change: '+0%',
      color: 'cyan',
      icon: '👥',
    },
    {
      label: 'Revenue',
      value: '$0',
      change: '+0%',
      color: 'green',
      icon: '💰',
    },
    {
      label: 'Active Sessions',
      value: '0',
      change: '+0%',
      color: 'purple',
      icon: '⚡',
    },
    {
      label: 'Performance',
      value: '0%',
      change: '+0%',
      color: 'blue',
      icon: '📊',
    },
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value:
            metric.label === 'Total Users'
              ? Math.floor(Math.random() * 10000).toLocaleString()
              : metric.label === 'Revenue'
              ? `$${(Math.random() * 100000).toFixed(2)}`
              : metric.label === 'Active Sessions'
              ? Math.floor(Math.random() * 500).toString()
              : `${Math.floor(Math.random() * 100)}%`,
          change: `${Math.random() > 0.5 ? '+' : '-'}${(Math.random() * 20).toFixed(1)}%`,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; glow: string }> = {
      cyan: {
        border: 'border-cyan-500/30',
        text: 'text-cyan-400',
        glow: 'shadow-[0_0_15px_rgba(34,211,238,0.3)]',
      },
      green: {
        border: 'border-green-500/30',
        text: 'text-green-400',
        glow: 'shadow-[0_0_15px_rgba(34,197,94,0.3)]',
      },
      purple: {
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        glow: 'shadow-[0_0_15px_rgba(168,85,247,0.3)]',
      },
      blue: {
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        glow: 'shadow-[0_0_15px_rgba(59,130,246,0.3)]',
      },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
      {metrics.map((metric, index) => {
        const colorClasses = getColorClasses(metric.color);
        return (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-slate-900/50 backdrop-blur border ${colorClasses.border} rounded-xl p-6 hover:${colorClasses.glow} transition-shadow duration-300`}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-2xl">{metric.icon}</span>
              <span
                className={`text-xs font-mono px-2 py-1 rounded ${
                  metric.change.startsWith('+')
                    ? 'bg-green-500/10 text-green-400'
                    : 'bg-red-500/10 text-red-400'
                }`}
              >
                {metric.change}
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-slate-400 font-mono">{metric.label}</p>
              <p className={`text-3xl font-bold ${colorClasses.text}`}>
                {metric.value}
              </p>
            </div>

            {/* Mini Sparkline */}
            <div className="mt-4 h-8 flex items-end gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.random() * 100}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 + i * 0.05 }}
                  className={`flex-1 ${colorClasses.text.replace('text', 'bg')} opacity-30 rounded-t`}
                />
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
