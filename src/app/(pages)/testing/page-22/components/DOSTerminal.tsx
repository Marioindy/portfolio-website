'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'system';
  delay: number;
}

export function DOSTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [blinkCursor, setBlinkCursor] = useState(true);

  const terminalContent: TerminalLine[] = [
    { text: 'C:\\> SYSTEM BOOT SEQUENCE INITIATED...', type: 'system', delay: 0 },
    { text: 'Loading RETROCOMP.SYS...', type: 'output', delay: 500 },
    { text: '[OK]', type: 'system', delay: 800 },
    { text: 'Loading NOSTALGIA.DRV...', type: 'output', delay: 1200 },
    { text: '[OK]', type: 'system', delay: 1500 },
    { text: 'Initializing 80s/90s Computing Vibes...', type: 'output', delay: 1900 },
    { text: '[OK]', type: 'system', delay: 2200 },
    { text: '', type: 'output', delay: 2500 },
    { text: 'C:\\> DIR /W', type: 'command', delay: 3000 },
    { text: 'Volume in drive C is RETRO_SYS', type: 'output', delay: 3300 },
    { text: 'Directory of C:\\PORTFOLIO\\TESTING', type: 'output', delay: 3600 },
    { text: '', type: 'output', delay: 3900 },
    { text: '[GRAPHICS]    [EFFECTS]     [ANIMATIONS]  [STYLES]', type: 'output', delay: 4200 },
    { text: '[PIXELS]      [SCANLINES]   [MONOCHROME]  [RETRO]', type: 'output', delay: 4500 },
    { text: '', type: 'output', delay: 4800 },
    { text: '8 Dir(s)     1337 KB free', type: 'output', delay: 5100 },
    { text: '', type: 'output', delay: 5400 },
    { text: 'C:\\> RUN EXPERIENCE.EXE', type: 'command', delay: 5800 },
    { text: 'Executing retro computing experience...', type: 'system', delay: 6200 },
    { text: '[READY]', type: 'system', delay: 6600 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkCursor(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentLine < terminalContent.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, terminalContent[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, terminalContent[currentLine].delay);

      return () => clearTimeout(timer);
    }
  }, [currentLine, terminalContent]);

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-black/80 border-4 border-green-500/30 rounded-lg shadow-[0_0_30px_rgba(0,255,0,0.3)] font-mono">
      <div className="mb-4 flex items-center gap-2 border-b-2 border-green-500/30 pb-2">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
        <span className="text-green-500 text-sm">SYSTEM TERMINAL v3.14</span>
      </div>

      <div className="space-y-1 text-sm md:text-base">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className={`${
              line.type === 'command'
                ? 'text-green-400 font-bold'
                : line.type === 'system'
                ? 'text-green-300'
                : 'text-green-500/80'
            }`}
          >
            {line.text}
          </motion.div>
        ))}
        {currentLine < terminalContent.length && (
          <div className="text-green-500">
            <span className={blinkCursor ? 'opacity-100' : 'opacity-0'}>_</span>
          </div>
        )}
      </div>
    </div>
  );
}
