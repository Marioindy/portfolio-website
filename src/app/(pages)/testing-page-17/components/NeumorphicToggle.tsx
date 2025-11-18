'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NeumorphicToggleProps {
  label?: string;
  onChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
}

export const NeumorphicToggle: React.FC<NeumorphicToggleProps> = ({
  label,
  onChange,
  defaultChecked = false,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onChange?.(newState);
  };

  return (
    <div className="flex items-center gap-4">
      {label && <span className="text-gray-700 font-medium">{label}</span>}
      <motion.button
        className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
          isChecked
            ? 'bg-gradient-to-r from-blue-400 to-blue-500 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]'
            : 'bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]'
        }`}
        onClick={handleToggle}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 ${
            isChecked
              ? 'bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.2)]'
              : 'bg-[#e0e5ec] shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]'
          }`}
          animate={{ x: isChecked ? 32 : 4 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </motion.button>
    </div>
  );
};
