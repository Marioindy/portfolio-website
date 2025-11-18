'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface WaveformBar {
  id: number;
  height: number;
  color: string;
}

export function ChiptuneSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveformBars, setWaveformBars] = useState<WaveformBar[]>([]);
  const visualizerRef = useRef<HTMLDivElement>(null);
  const waveformInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initialize waveform bars
    const initialBars = Array.from({ length: 32 }, (_, i) => ({
      id: i,
      height: 20,
      color: ['#FF0040', '#00E0FF', '#FFED00', '#00FF41'][i % 4],
    }));
    setWaveformBars(initialBars);
  }, []);

  useEffect(() => {
    // Animate waveform when playing
    if (isPlaying) {
      waveformInterval.current = setInterval(() => {
        setWaveformBars((prev) =>
          prev.map((bar) => ({
            ...bar,
            height: Math.random() * 80 + 20,
          }))
        );
      }, 100);
    } else {
      if (waveformInterval.current) {
        clearInterval(waveformInterval.current);
      }
      // Reset to idle state
      setWaveformBars((prev) =>
        prev.map((bar) => ({
          ...bar,
          height: 20,
        }))
      );
    }

    return () => {
      if (waveformInterval.current) {
        clearInterval(waveformInterval.current);
      }
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative py-20 px-4 bg-pixel-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-bitmap mb-4"
            style={{
              color: '#00FF41',
              textShadow: '4px 4px 0 #B200FF',
            }}
          >
            CHIPTUNE.WAV
          </h2>
          <p className="text-pixel-purple font-bitmap text-sm">
            &gt; SONIC ARCHAEOLOGY
          </p>
        </motion.div>

        {/* Audio Player Interface */}
        <div className="relative">
          {/* Main Player */}
          <div className="border-8 border-pixel-white bg-pixel-black shadow-pixel-lg p-8">
            {/* Display Screen */}
            <div className="bg-pixel-green/10 border-4 border-pixel-green p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="font-bitmap text-pixel-green text-sm">
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ► NOW PLAYING
                  </motion.span>
                </div>
                <div className="font-bitmap text-pixel-green text-xs">
                  {isPlaying ? '∞:∞∞' : '0:00'}
                </div>
              </div>

              {/* Track Info */}
              <div className="font-bitmap text-pixel-green text-xs mb-4">
                <div>TRACK: PIXEL_DREAMS.SID</div>
                <div>ARTIST: LIMITATION_OS</div>
                <div>FORMAT: 8-BIT MONO</div>
              </div>

              {/* Waveform Visualizer */}
              <div
                ref={visualizerRef}
                className="h-24 flex items-end justify-between gap-1"
              >
                {waveformBars.map((bar) => (
                  <motion.div
                    key={bar.id}
                    className="flex-1 rounded-t-sm"
                    style={{
                      backgroundColor: bar.color,
                      height: `${bar.height}%`,
                    }}
                    animate={{
                      height: isPlaying ? `${bar.height}%` : '20%',
                    }}
                    transition={{
                      duration: 0.1,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Playback Controls */}
              <div className="flex items-center justify-center gap-3">
                <button className="w-12 h-12 border-4 border-pixel-white bg-pixel-blue shadow-pixel hover:shadow-pixel-lg transition-all hover:translate-y-1 active:translate-y-2 flex items-center justify-center">
                  <span className="text-pixel-white font-bitmap text-lg">◄◄</span>
                </button>

                <button
                  onClick={handlePlayPause}
                  className="w-16 h-16 border-4 border-pixel-white bg-pixel-red shadow-pixel hover:shadow-pixel-lg transition-all hover:translate-y-1 active:translate-y-2 flex items-center justify-center relative"
                >
                  <span className="text-pixel-white font-bitmap text-2xl">
                    {isPlaying ? '■' : '►'}
                  </span>
                  {isPlaying && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-pixel-yellow animate-blink" />
                  )}
                </button>

                <button className="w-12 h-12 border-4 border-pixel-white bg-pixel-blue shadow-pixel hover:shadow-pixel-lg transition-all hover:translate-y-1 active:translate-y-2 flex items-center justify-center">
                  <span className="text-pixel-white font-bitmap text-lg">►►</span>
                </button>
              </div>

              {/* Volume Meter */}
              <div className="flex flex-col justify-center">
                <div className="font-bitmap text-pixel-white text-xs mb-2">
                  VOLUME
                </div>
                <div className="flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-4 border-2 border-pixel-white ${
                        isPlaying && i < 7
                          ? 'bg-pixel-yellow'
                          : 'bg-pixel-black'
                      } transition-colors`}
                    />
                  ))}
                </div>
              </div>

              {/* Channel Indicators */}
              <div className="grid grid-cols-4 gap-2">
                {['SQ1', 'SQ2', 'TRI', 'NOI'].map((channel, i) => (
                  <div
                    key={channel}
                    className="border-2 border-pixel-white bg-pixel-black p-2 text-center"
                  >
                    <div className="font-bitmap text-pixel-white text-xs mb-1">
                      {channel}
                    </div>
                    <motion.div
                      className="w-2 h-2 mx-auto"
                      style={{
                        backgroundColor: [
                          '#FF0040',
                          '#00E0FF',
                          '#FFED00',
                          '#00FF41',
                        ][i],
                      }}
                      animate={{
                        opacity: isPlaying ? [0.3, 1, 0.3] : 1,
                      }}
                      transition={{
                        duration: 1,
                        repeat: isPlaying ? Infinity : 0,
                        delay: i * 0.2,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'SAMPLE RATE', value: '8 KHZ' },
              { label: 'CHANNELS', value: '4' },
              { label: 'BIT DEPTH', value: '8-BIT' },
              { label: 'CPU', value: 'MOS 6502' },
            ].map((spec) => (
              <div
                key={spec.label}
                className="border-4 border-pixel-white bg-pixel-black p-4 text-center"
              >
                <div className="text-pixel-blue font-bitmap text-xs mb-2">
                  {spec.label}
                </div>
                <div className="text-pixel-white font-bitmap text-sm">
                  {spec.value}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Sound Design Notes */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 border-4 border-pixel-yellow bg-pixel-black p-6"
          >
            <h3 className="text-pixel-yellow font-bitmap text-lg mb-4">
              // CHIPTUNE DESIGN NOTES
            </h3>
            <div className="space-y-2 font-bitmap text-pixel-white text-xs leading-relaxed">
              <p>
                &gt; Square waves (SQ1, SQ2) for melody and harmony
              </p>
              <p>
                &gt; Triangle wave (TRI) for bass frequencies
              </p>
              <p>
                &gt; Noise channel (NOI) for percussion and effects
              </p>
              <p className="text-pixel-yellow mt-4">
                &gt; Constraint breeds creativity in sonic space
              </p>
            </div>
          </motion.div>
        </div>

        {/* Floating Musical Notes */}
        {isPlaying &&
          [...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl font-bitmap"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                color: ['#FF0040', '#00E0FF', '#FFED00', '#00FF41'][i % 4],
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: -50,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              ♪
            </motion.div>
          ))}
      </div>
    </section>
  );
}
