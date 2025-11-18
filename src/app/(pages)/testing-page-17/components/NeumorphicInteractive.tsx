'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NeumorphicCard } from './NeumorphicCard';
import { NeumorphicButton } from './NeumorphicButton';
import { NeumorphicInput } from './NeumorphicInput';
import { NeumorphicToggle } from './NeumorphicToggle';
import { NeumorphicSlider } from './NeumorphicSlider';

export const NeumorphicInteractive: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [clickCount, setClickCount] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <NeumorphicCard className="p-8 bg-[#e0e5ec]">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Interactive Components
        </h2>

        <div className="space-y-8">
          {/* Input Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Neumorphic Input
            </h3>
            <NeumorphicInput
              placeholder="Type something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue && (
              <motion.p
                className="mt-2 text-sm text-gray-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                You typed: <span className="font-semibold">{inputValue}</span>
              </motion.p>
            )}
          </div>

          {/* Buttons Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Neumorphic Buttons
            </h3>
            <div className="flex flex-wrap gap-4">
              <NeumorphicButton
                variant="default"
                onClick={() => setClickCount(clickCount + 1)}
              >
                Default Button
              </NeumorphicButton>
              <NeumorphicButton
                variant="primary"
                onClick={() => setClickCount(clickCount + 1)}
              >
                Primary Button
              </NeumorphicButton>
              <NeumorphicButton
                variant="secondary"
                size="lg"
                onClick={() => setClickCount(clickCount + 1)}
              >
                Large Button
              </NeumorphicButton>
            </div>
            {clickCount > 0 && (
              <motion.p
                className="mt-4 text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Button clicked: <span className="font-semibold">{clickCount}</span>{' '}
                {clickCount === 1 ? 'time' : 'times'}
              </motion.p>
            )}
          </div>

          {/* Slider Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Neumorphic Slider
            </h3>
            <NeumorphicSlider
              label="Adjust Value"
              min={0}
              max={100}
              defaultValue={50}
              onChange={setSliderValue}
            />
          </div>

          {/* Toggle Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Neumorphic Toggle
            </h3>
            <div className="space-y-3">
              <NeumorphicToggle label="Enable feature" />
              <NeumorphicToggle label="Dark mode" defaultChecked />
              <NeumorphicToggle label="Notifications" />
            </div>
          </div>

          {/* Stats Display */}
          <motion.div
            className="mt-8 p-6 rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Current State
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Input Length</p>
                <p className="text-2xl font-bold text-gray-800">
                  {inputValue.length}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Slider Value</p>
                <p className="text-2xl font-bold text-gray-800">{sliderValue}%</p>
              </div>
              <div>
                <p className="text-gray-500">Click Count</p>
                <p className="text-2xl font-bold text-gray-800">{clickCount}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </NeumorphicCard>
    </motion.div>
  );
};
