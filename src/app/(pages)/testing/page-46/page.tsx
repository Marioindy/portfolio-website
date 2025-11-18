'use client';

import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { useFadeIn, useFadeInStagger } from '@/hooks/useAnimation';

export const dynamic = 'force-dynamic';

interface DataPoint {
  timestamp: number;
  value: number;
  label: string;
}

interface SystemMetric {
  name: string;
  value: string;
  raw: string;
  status: 'active' | 'idle' | 'error';
}

export default function Page46() {
  const containerRef = useFadeIn<HTMLDivElement>();
  const gridRef = useFadeInStagger<HTMLDivElement>();
  const codeBlockRef = useRef<HTMLDivElement>(null);
  const dataStreamRef = useRef<HTMLDivElement>(null);

  const [liveData, setLiveData] = useState<DataPoint[]>([]);
  const [systemMetrics, setSystemMetrics] = useState<SystemMetric[]>([
    { name: 'CPU_LOAD', value: '0.47', raw: '0x2F', status: 'active' },
    { name: 'MEM_USAGE', value: '2.3GB', raw: '0x8FC00000', status: 'active' },
    { name: 'DISK_IO', value: '120MB/s', raw: '0x7800000', status: 'active' },
    { name: 'NET_THROUGHPUT', value: '45Mbps', raw: '0x2D00000', status: 'idle' },
    { name: 'PROCESS_COUNT', value: '127', raw: '0x7F', status: 'active' },
    { name: 'THREAD_COUNT', value: '1024', raw: '0x400', status: 'active' },
  ]);

  // Simulate live data stream
  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint: DataPoint = {
        timestamp: Date.now(),
        value: Math.random() * 100,
        label: `DATA_${Math.floor(Math.random() * 9999).toString().padStart(4, '0')}`,
      };

      setLiveData(prev => [...prev.slice(-19), newPoint]);

      // Update random metric
      setSystemMetrics(prev => {
        const index = Math.floor(Math.random() * prev.length);
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          value: (Math.random() * 100).toFixed(2),
          raw: `0x${Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase()}`,
        };
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Animate code block typing effect
  useEffect(() => {
    if (codeBlockRef.current) {
      const lines = codeBlockRef.current.querySelectorAll('.code-line');
      gsap.fromTo(
        lines,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  // Animate data stream
  useEffect(() => {
    if (dataStreamRef.current && liveData.length > 0) {
      const lastItem = dataStreamRef.current.lastElementChild;
      if (lastItem) {
        gsap.fromTo(
          lastItem,
          { opacity: 0, height: 0 },
          { opacity: 1, height: 'auto', duration: 0.3 }
        );
      }
    }
  }, [liveData]);

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-950 text-neutral-100 font-mono">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              [BRUTALIST_DATA]
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              RAW_INFORMATION // EXECUTION // v1.0.0
            </p>
          </div>
          <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>LIVE</span>
            </div>
            <div className="text-neutral-500">
              {new Date().toISOString()}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* System Metrics */}
          <motion.div
            className="border-2 border-neutral-800 bg-neutral-900/30 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800">
              <h2 className="text-sm font-bold">[SYSTEM_METRICS]</h2>
              <span className="text-xs text-neutral-500">real-time</span>
            </div>
            <div className="space-y-3">
              {systemMetrics.map((metric, idx) => (
                <motion.div
                  key={metric.name}
                  className="grid grid-cols-2 gap-4 text-xs"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        metric.status === 'active'
                          ? 'bg-green-500'
                          : metric.status === 'idle'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                    ></span>
                    <span className="text-neutral-400">{metric.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-100">{metric.value}</span>
                    <span className="text-neutral-600">{metric.raw}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code Snippet as Design */}
          <motion.div
            ref={codeBlockRef}
            className="border-2 border-neutral-800 bg-neutral-900/30 p-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800">
              <h2 className="text-sm font-bold">[SOURCE_CODE]</h2>
              <span className="text-xs text-neutral-500">execution.ts</span>
            </div>
            <div className="text-xs space-y-1">
              <div className="code-line text-purple-400">
                <span className="text-neutral-600">01</span> <span className="text-blue-400">interface</span> <span className="text-yellow-400">DataStream</span> {'{'}
              </div>
              <div className="code-line text-neutral-400 pl-4">
                <span className="text-neutral-600">02</span>   timestamp: <span className="text-green-400">number</span>;
              </div>
              <div className="code-line text-neutral-400 pl-4">
                <span className="text-neutral-600">03</span>   value: <span className="text-green-400">number</span>;
              </div>
              <div className="code-line text-neutral-400 pl-4">
                <span className="text-neutral-600">04</span>   label: <span className="text-green-400">string</span>;
              </div>
              <div className="code-line text-purple-400">
                <span className="text-neutral-600">05</span> {'}'}
              </div>
              <div className="code-line mt-2">
                <span className="text-neutral-600">06</span>
              </div>
              <div className="code-line text-blue-400">
                <span className="text-neutral-600">07</span> <span className="text-blue-400">const</span> <span className="text-yellow-400">execute</span> = <span className="text-purple-400">async</span> () {'=>'} {'{'}
              </div>
              <div className="code-line text-neutral-400 pl-4">
                <span className="text-neutral-600">08</span>   <span className="text-blue-400">const</span> data = <span className="text-blue-400">await</span> <span className="text-yellow-400">fetchRawData</span>();
              </div>
              <div className="code-line text-neutral-400 pl-4">
                <span className="text-neutral-600">09</span>   <span className="text-blue-400">return</span> data.<span className="text-yellow-400">process</span>();
              </div>
              <div className="code-line text-blue-400">
                <span className="text-neutral-600">10</span> {'}'};
              </div>
              <div className="code-line mt-2">
                <span className="text-neutral-600">11</span>
              </div>
              <div className="code-line text-green-400">
                <span className="text-neutral-600">12</span> <span className="text-neutral-600">// [EXECUTION]</span>
              </div>
              <div className="code-line">
                <span className="text-neutral-600">13</span> <span className="text-yellow-400">execute</span>().<span className="text-yellow-400">then</span>(<span className="text-orange-400">console.log</span>);
              </div>
            </div>
          </motion.div>

          {/* Data Visualization - ASCII Chart */}
          <motion.div
            className="border-2 border-neutral-800 bg-neutral-900/30 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800">
              <h2 className="text-sm font-bold">[DATA_VISUALIZATION]</h2>
              <span className="text-xs text-neutral-500">chart.raw</span>
            </div>
            <div className="text-xs">
              <div className="grid grid-cols-20 gap-0.5 h-32">
                {liveData.slice(-20).map((point, idx) => {
                  const height = (point.value / 100) * 100;
                  return (
                    <motion.div
                      key={`${point.timestamp}-${idx}`}
                      className="flex flex-col justify-end"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="bg-green-500/80 hover:bg-green-400 transition-colors cursor-pointer"
                        style={{ height: `${height}%` }}
                        title={`${point.label}: ${point.value.toFixed(2)}`}
                      />
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-4 flex justify-between text-neutral-600">
                <span>MIN: 0.00</span>
                <span>MAX: 100.00</span>
              </div>
            </div>
          </motion.div>

          {/* Live Data Stream */}
          <motion.div
            className="border-2 border-neutral-800 bg-neutral-900/30 p-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800">
              <h2 className="text-sm font-bold">[LIVE_DATA_STREAM]</h2>
              <span className="text-xs text-neutral-500">streaming...</span>
            </div>
            <div
              ref={dataStreamRef}
              className="text-xs space-y-1 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent"
            >
              {liveData.map((point, idx) => (
                <div
                  key={`${point.timestamp}-${idx}`}
                  className="flex justify-between gap-4 hover:bg-neutral-800/50 px-2 py-1 transition-colors"
                >
                  <span className="text-neutral-600">
                    {new Date(point.timestamp).toLocaleTimeString()}
                  </span>
                  <span className="text-green-400">{point.label}</span>
                  <span className="text-neutral-100">{point.value.toFixed(4)}</span>
                  <span className="text-neutral-600">
                    0x{Math.floor(point.value * 1000).toString(16).toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Raw JSON Data */}
          <motion.div
            className="border-2 border-neutral-800 bg-neutral-900/30 p-6 lg:col-span-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800">
              <h2 className="text-sm font-bold">[RAW_DATA_EXPORT]</h2>
              <span className="text-xs text-neutral-500">application/json</span>
            </div>
            <pre className="text-xs text-neutral-400 overflow-x-auto">
              <code>
{`{
  "meta": {
    "version": "1.0.0",
    "timestamp": ${Date.now()},
    "format": "raw_brutalist_data",
    "status": "EXECUTING"
  },
  "metrics": ${JSON.stringify(systemMetrics, null, 2).split('\n').map(line => '  ' + line).join('\n').trim()},
  "stream": {
    "total_points": ${liveData.length},
    "latest": ${liveData.length > 0 ? JSON.stringify(liveData[liveData.length - 1], null, 2).split('\n').map(line => '    ' + line).join('\n').trim() : 'null'}
  }
}`}
              </code>
            </pre>
          </motion.div>

          {/* Documentation Block */}
          <motion.div
            className="border-2 border-neutral-800 bg-neutral-900/30 p-6 lg:col-span-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800">
              <h2 className="text-sm font-bold">[TECHNICAL_DOCUMENTATION]</h2>
              <span className="text-xs text-neutral-500">README.md</span>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <div className="space-y-4 text-xs">
                <div>
                  <h3 className="text-neutral-100 font-bold mb-2"># BRUTALIST DATA AESTHETIC</h3>
                  <p className="text-neutral-400">
                    Raw, unfiltered data presentation. No embellishments. Pure information architecture.
                  </p>
                </div>
                <div>
                  <h4 className="text-neutral-100 font-bold mb-2">## SPECIFICATIONS</h4>
                  <ul className="list-none space-y-1 text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Monospace typography for technical precision</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Real-time data streams and metrics</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Code snippets as functional design elements</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Minimal visualization with maximum clarity</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>GSAP & Framer Motion animations</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>TypeScript strict mode compliance</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Responsive brutalist grid layout</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-neutral-100 font-bold mb-2">## STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'View Transitions API', 'Convex'].map(
                      tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
