'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlitchText } from './GlitchText';

export const TerminalContent: React.FC = () => {
  const [commandOutput, setCommandOutput] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const commands = [
    { cmd: '> system.init()', output: 'Initializing cyberpunk system...' },
    { cmd: '> load_modules()', output: 'Loading neural interfaces... [OK]' },
    { cmd: '> connect_network()', output: 'Establishing secure connection... [OK]' },
    { cmd: '> status', output: 'All systems operational. Ready for deployment.' },
  ];

  useEffect(() => {
    let commandIndex = 0;
    let charIndex = 0;
    let outputTimeout: NodeJS.Timeout;

    const typeCommand = () => {
      if (commandIndex >= commands.length) {
        return;
      }

      const currentCmd = commands[commandIndex];

      if (charIndex < currentCmd.cmd.length) {
        setCurrentCommand((prev) => prev + currentCmd.cmd[charIndex]);
        charIndex++;
        setTimeout(typeCommand, 50);
      } else {
        outputTimeout = setTimeout(() => {
          setCommandOutput((prev) => [...prev, currentCmd.cmd, currentCmd.output]);
          setCurrentCommand('');
          charIndex = 0;
          commandIndex++;
          setTimeout(typeCommand, 500);
        }, 300);
      }
    };

    const initialDelay = setTimeout(typeCommand, 1000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(outputTimeout);
    };
  }, []);

  const features = [
    { icon: '⚡', title: 'NEURAL INTERFACE', desc: 'Direct brain-computer connection' },
    { icon: '🔒', title: 'ENCRYPTED COMMS', desc: 'Military-grade encryption' },
    { icon: '🌐', title: 'MESH NETWORK', desc: 'Decentralized architecture' },
    { icon: '🎯', title: 'TARGET LOCK', desc: 'Precision tracking system' },
    { icon: '💾', title: 'DATA VAULT', desc: 'Secure storage solution' },
    { icon: '⚙️', title: 'AUTO-HACK', desc: 'Automated penetration tools' },
  ];

  return (
    <div className="space-y-8">
      {/* Command Terminal Section */}
      <motion.div
        className="bg-black/80 border-2 border-[#00FF00] rounded-lg p-6 font-mono text-sm backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2 mb-4 text-[#00FF00]">
          <div className="w-3 h-3 rounded-full bg-[#00FF00] animate-pulse" />
          <span className="text-xs">TERMINAL_SESSION_001</span>
        </div>

        <div className="space-y-2">
          {commandOutput.map((line, index) => (
            <motion.div
              key={index}
              className={`${
                line.startsWith('>') ? 'text-[#00FF00]' : 'text-[#00FF00]/70'
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {line}
            </motion.div>
          ))}
          {currentCommand && (
            <div className="text-[#00FF00]">
              {currentCommand}
              <span className="animate-pulse">█</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-black/80 border border-[#00FF00] rounded-lg p-4 backdrop-blur-sm hover:border-[#00FF00]/100 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl mb-2 group-hover:animate-pulse">{feature.icon}</div>
            <h3 className="text-[#00FF00] font-mono text-sm font-bold mb-1">
              {feature.title}
            </h3>
            <p className="text-[#00FF00]/60 font-mono text-xs">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* System Stats */}
      <motion.div
        className="bg-black/80 border-2 border-[#00FF00] rounded-lg p-6 font-mono backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <h2 className="text-[#00FF00] text-lg mb-4 flex items-center gap-2">
          <span>▶</span>
          <GlitchText text="SYSTEM STATISTICS" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-[#00FF00]/70">CPU Usage:</span>
              <span className="text-[#00FF00]">42%</span>
            </div>
            <div className="w-full bg-[#00FF00]/10 rounded-full h-2">
              <motion.div
                className="bg-[#00FF00] h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '42%' }}
                transition={{ delay: 1.5, duration: 1 }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-[#00FF00]/70">Memory:</span>
              <span className="text-[#00FF00]">67%</span>
            </div>
            <div className="w-full bg-[#00FF00]/10 rounded-full h-2">
              <motion.div
                className="bg-[#00FF00] h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '67%' }}
                transition={{ delay: 1.7, duration: 1 }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-[#00FF00]/70">Network:</span>
              <span className="text-[#00FF00]">89%</span>
            </div>
            <div className="w-full bg-[#00FF00]/10 rounded-full h-2">
              <motion.div
                className="bg-[#00FF00] h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '89%' }}
                transition={{ delay: 1.9, duration: 1 }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-[#00FF00]/70">Firewall:</span>
              <span className="text-[#00FF00]">100%</span>
            </div>
            <div className="w-full bg-[#00FF00]/10 rounded-full h-2">
              <motion.div
                className="bg-[#00FF00] h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 2.1, duration: 1 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hacker Quote */}
      <motion.div
        className="bg-black/80 border-l-4 border-[#00FF00] p-6 font-mono backdrop-blur-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.3 }}
      >
        <p className="text-[#00FF00] text-lg italic mb-2">
          "The future is already here — it's just not evenly distributed."
        </p>
        <p className="text-[#00FF00]/60 text-sm">— William Gibson</p>
      </motion.div>
    </div>
  );
};
