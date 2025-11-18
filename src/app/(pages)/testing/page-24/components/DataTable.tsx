'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DataRow {
  id: string;
  user: string;
  status: 'active' | 'pending' | 'inactive';
  value: number;
  timestamp: string;
}

export function DataTable() {
  const [data, setData] = useState<DataRow[]>([]);
  const [sortKey, setSortKey] = useState<keyof DataRow>('timestamp');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Generate initial data
  useEffect(() => {
    const generateData = (): DataRow[] => {
      return Array.from({ length: 8 }, (_, i) => ({
        id: `#${(1000 + i).toString()}`,
        user: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry'][i],
        status: (['active', 'pending', 'inactive'] as const)[Math.floor(Math.random() * 3)],
        value: Math.floor(Math.random() * 10000),
        timestamp: new Date(Date.now() - Math.random() * 86400000).toLocaleTimeString(),
      }));
    };

    setData(generateData());

    // Update data periodically
    const interval = setInterval(() => {
      setData(generateData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortOrder === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    }

    return 0;
  });

  const handleSort = (key: keyof DataRow) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'inactive':
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-xl overflow-hidden"
    >
      <div className="p-6 border-b border-slate-700/50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-200 font-mono">
            Recent Transactions
          </h3>
          <div className="flex items-center gap-2">
            <button className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-md hover:bg-slate-700 transition-colors">
              Filter
            </button>
            <button className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-md hover:bg-slate-700 transition-colors">
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700/50">
              <th
                onClick={() => handleSort('id')}
                className="text-left px-6 py-4 text-xs font-mono text-slate-400 cursor-pointer hover:text-cyan-400 transition-colors"
              >
                ID {sortKey === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                onClick={() => handleSort('user')}
                className="text-left px-6 py-4 text-xs font-mono text-slate-400 cursor-pointer hover:text-cyan-400 transition-colors"
              >
                USER {sortKey === 'user' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                onClick={() => handleSort('status')}
                className="text-left px-6 py-4 text-xs font-mono text-slate-400 cursor-pointer hover:text-cyan-400 transition-colors"
              >
                STATUS {sortKey === 'status' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                onClick={() => handleSort('value')}
                className="text-left px-6 py-4 text-xs font-mono text-slate-400 cursor-pointer hover:text-cyan-400 transition-colors"
              >
                VALUE {sortKey === 'value' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                onClick={() => handleSort('timestamp')}
                className="text-left px-6 py-4 text-xs font-mono text-slate-400 cursor-pointer hover:text-cyan-400 transition-colors"
              >
                TIME {sortKey === 'timestamp' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, i) => (
              <motion.tr
                key={`${row.id}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="text-sm font-mono text-cyan-400">{row.id}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-xs font-bold">
                      {row.user[0]}
                    </div>
                    <span className="text-sm text-slate-200">{row.user}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded border ${getStatusColor(
                      row.status
                    )}`}
                  >
                    {row.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-green-400">
                    ${row.value.toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-mono text-slate-400">
                    {row.timestamp}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-slate-700/50 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-mono">
          Showing 1-8 of 1,234 entries
        </span>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded">
            1
          </button>
          <button className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-colors">
            2
          </button>
          <button className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-colors">
            3
          </button>
          <button className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-colors">
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
}
