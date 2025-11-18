import React from 'react';
import { MatrixRain } from './components/MatrixRain';
import { TerminalHeader } from './components/TerminalHeader';
import { AsciiArt } from './components/AsciiArt';
import { TerminalContent } from './components/TerminalContent';
import { GlitchText } from './components/GlitchText';

export const metadata = {
  title: 'Testing Page 18 - Cyberpunk Terminal | Portfolio',
  description: 'Cyberpunk terminal-style testing page with matrix effects and hacker aesthetic',
};

// Force dynamic rendering for interactive features
export const dynamic = 'force-dynamic';

export default function TestingPage18() {
  return (
    <div className="min-h-screen bg-black text-[#00FF00] relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Terminal Header */}
        <TerminalHeader />

        {/* ASCII Art Logo */}
        <div className="mb-8 flex justify-center">
          <AsciiArt />
        </div>

        {/* Welcome Message */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono mb-4">
            <GlitchText text="WELCOME TO THE MATRIX" />
          </h1>
          <p className="text-[#00FF00]/70 font-mono text-sm sm:text-base max-w-2xl mx-auto">
            [CYBERPUNK_TERMINAL] - [HACKER_AESTHETIC] - [EXECUTION]
          </p>
        </div>

        {/* Terminal Content */}
        <TerminalContent />

        {/* Footer */}
        <div className="mt-12 text-center text-[#00FF00]/50 font-mono text-xs">
          <p>SYSTEM v2.0.77 | UPLINK SECURE | ALL RIGHTS RESERVED</p>
          <p className="mt-2">
            &gt; Press <span className="text-[#00FF00]">CTRL+C</span> to exit |{' '}
            <span className="text-[#00FF00]">CTRL+Z</span> to suspend
          </p>
        </div>
      </div>

      {/* Scanline Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-20"
        style={{
          background:
            'repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.03) 0px, transparent 1px, transparent 2px, rgba(0, 255, 0, 0.03) 3px)',
        }}
      />

      {/* Vignette Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-20"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
        }}
      />
    </div>
  );
}
