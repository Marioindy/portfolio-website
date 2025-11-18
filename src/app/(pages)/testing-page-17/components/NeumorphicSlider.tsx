'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NeumorphicSliderProps {
  label?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export const NeumorphicSlider: React.FC<NeumorphicSliderProps> = ({
  label,
  min = 0,
  max = 100,
  defaultValue = 50,
  onChange,
  className = '',
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
    onChange?.(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <div className="flex justify-between mb-3">
          <span className="text-gray-700 font-medium">{label}</span>
          <span className="text-gray-500 font-semibold">{value}</span>
        </div>
      )}
      <div className="relative h-3 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]">
        <div
          className="absolute h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-200"
          style={{ width: `${percentage}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] transition-all duration-200"
          style={{ left: `calc(${percentage}% - 12px)` }}
        />
      </div>
    </motion.div>
  );
};
