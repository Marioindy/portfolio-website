'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function ChartSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 md:mb-12">
      {/* Line Chart */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-cyan-400 font-mono">
            Revenue Trends
          </h3>
          <div className="flex gap-2">
            <button className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-md hover:bg-cyan-500/20 transition-colors">
              7D
            </button>
            <button className="text-xs px-3 py-1 text-slate-500 hover:text-slate-300 transition-colors">
              30D
            </button>
            <button className="text-xs px-3 py-1 text-slate-500 hover:text-slate-300 transition-colors">
              1Y
            </button>
          </div>
        </div>

        <LineChart />
      </motion.div>

      {/* Bar Chart */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900/50 backdrop-blur border border-purple-500/20 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-purple-400 font-mono">
            User Activity
          </h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-xs text-purple-400 font-mono">LIVE</span>
          </div>
        </div>

        <BarChart />
      </motion.div>

      {/* Donut Chart and Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-slate-900/50 backdrop-blur border border-blue-500/20 rounded-xl p-6 lg:col-span-2"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-blue-400 font-mono mb-4">
              Traffic Sources
            </h3>
            <DonutChart />
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              { label: 'Direct', value: '42.3%', color: 'cyan' },
              { label: 'Organic', value: '31.7%', color: 'purple' },
              { label: 'Referral', value: '18.4%', color: 'blue' },
              { label: 'Social', value: '7.6%', color: 'green' },
            ].map((source, i) => (
              <motion.div
                key={source.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-slate-800/50 rounded-lg p-4"
              >
                <p className="text-xs text-slate-400 mb-1">{source.label}</p>
                <p className={`text-2xl font-bold text-${source.color}-400`}>
                  {source.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Line Chart Component
function LineChart() {
  const pathRef = useRef<SVGPathElement>(null);
  const [data] = useState(() =>
    Array.from({ length: 20 }, () => Math.random() * 100)
  );

  useEffect(() => {
    if (pathRef.current) {
      gsap.fromTo(
        pathRef.current,
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 2, ease: 'power2.out' }
      );
    }
  }, []);

  const points = data
    .map((value, i) => `${(i / (data.length - 1)) * 100},${100 - value}`)
    .join(' ');
  const pathD = `M ${points}`;

  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-48"
      preserveAspectRatio="none"
    >
      {/* Grid Lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={i}
          x1="0"
          y1={i * 25}
          x2="100"
          y2={i * 25}
          stroke="rgb(51, 65, 85)"
          strokeWidth="0.2"
          opacity="0.3"
        />
      ))}

      {/* Gradient Fill */}
      <defs>
        <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area */}
      <path
        d={`${pathD} L 100,100 L 0,100 Z`}
        fill="url(#lineGradient)"
      />

      {/* Line */}
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke="rgb(34, 211, 238)"
        strokeWidth="0.5"
        strokeDasharray="1000"
        strokeDashoffset="1000"
      />

      {/* Data Points */}
      {data.map((value, i) => (
        <circle
          key={i}
          cx={(i / (data.length - 1)) * 100}
          cy={100 - value}
          r="0.8"
          fill="rgb(34, 211, 238)"
          className="animate-pulse"
        />
      ))}
    </svg>
  );
}

// Bar Chart Component
function BarChart() {
  const [data] = useState(() =>
    Array.from({ length: 12 }, () => Math.random() * 100)
  );

  return (
    <svg viewBox="0 0 100 100" className="w-full h-48">
      {/* Grid Lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={i}
          x1="0"
          y1={i * 25}
          x2="100"
          y2={i * 25}
          stroke="rgb(51, 65, 85)"
          strokeWidth="0.2"
          opacity="0.3"
        />
      ))}

      {/* Bars */}
      {data.map((value, i) => (
        <motion.rect
          key={i}
          x={i * (100 / data.length) + 1}
          y={100 - value}
          width={100 / data.length - 2}
          height={value}
          fill="rgb(168, 85, 247)"
          opacity="0.6"
          initial={{ height: 0, y: 100 }}
          animate={{ height: value, y: 100 - value }}
          transition={{ duration: 0.8, delay: i * 0.05 }}
          className="hover:opacity-100 transition-opacity cursor-pointer"
        />
      ))}
    </svg>
  );
}

// Donut Chart Component
function DonutChart() {
  const segments = [
    { value: 42.3, color: 'rgb(34, 211, 238)', label: 'Direct' },
    { value: 31.7, color: 'rgb(168, 85, 247)', label: 'Organic' },
    { value: 18.4, color: 'rgb(59, 130, 246)', label: 'Referral' },
    { value: 7.6, color: 'rgb(34, 197, 94)', label: 'Social' },
  ];

  let currentAngle = 0;

  const createArc = (startAngle: number, endAngle: number, innerRadius: number, outerRadius: number) => {
    const start = polarToCartesian(50, 50, outerRadius, endAngle);
    const end = polarToCartesian(50, 50, outerRadius, startAngle);
    const innerStart = polarToCartesian(50, 50, innerRadius, endAngle);
    const innerEnd = polarToCartesian(50, 50, innerRadius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return [
      'M', start.x, start.y,
      'A', outerRadius, outerRadius, 0, largeArcFlag, 0, end.x, end.y,
      'L', innerEnd.x, innerEnd.y,
      'A', innerRadius, innerRadius, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
      'Z'
    ].join(' ');
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  return (
    <svg viewBox="0 0 100 100" className="w-full max-w-xs mx-auto">
      {segments.map((segment, i) => {
        const startAngle = currentAngle;
        const angle = (segment.value / 100) * 360;
        currentAngle += angle;

        return (
          <motion.path
            key={i}
            d={createArc(startAngle, currentAngle, 25, 45)}
            fill={segment.color}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="cursor-pointer"
          />
        );
      })}

      {/* Center Circle */}
      <circle cx="50" cy="50" r="25" fill="rgb(15, 23, 42)" />

      {/* Center Text */}
      <text
        x="50"
        y="48"
        textAnchor="middle"
        className="text-[8px] fill-slate-400 font-mono"
      >
        Total
      </text>
      <text
        x="50"
        y="56"
        textAnchor="middle"
        className="text-[10px] fill-cyan-400 font-bold"
      >
        100%
      </text>
    </svg>
  );
}
