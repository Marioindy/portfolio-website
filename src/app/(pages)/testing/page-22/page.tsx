import type { Metadata } from 'next';
import { CRTEffect } from './components/CRTEffect';
import { GreenScreenMonitor } from './components/GreenScreenMonitor';
import { RetroHero } from './components/RetroHero';
import { DOSTerminal } from './components/DOSTerminal';
import { PixelArt } from './components/PixelArt';
import { RetroCard } from './components/RetroCard';

export const metadata: Metadata = {
  title: 'Testing Page 22 - Retro Computing | Portfolio',
  description:
    'Experience retro computing with pixelated graphics, CRT effects, MS-DOS interface, and authentic 80s/90s computing nostalgia.',
  openGraph: {
    title: 'Testing Page 22 - Retro Computing',
    description:
      'Experience retro computing with pixelated graphics, CRT effects, MS-DOS interface, and authentic 80s/90s computing nostalgia.',
  },
};

// Enable View Transitions API
export const dynamic = 'force-dynamic';

export default function TestingPage22() {
  const features = [
    {
      title: 'CRT Monitor',
      description:
        'Authentic CRT monitor effects with scan lines, screen curvature, and that classic green phosphor glow. Experience computing as it was in the golden age.'
    },
    {
      title: 'MS-DOS Interface',
      description:
        'Command-line interface inspired by MS-DOS, complete with system boot sequences and directory listings. Type commands like its 1995.'
    },
    {
      title: 'Pixelated Graphics',
      description:
        'Sharp, blocky pixels rendered with image-rendering: pixelated. No anti-aliasing here - just pure, unfiltered retro aesthetics.'
    },
    {
      title: 'Monochrome Display',
      description:
        'Classic green-on-black monochrome display simulating early computer terminals. Simple, readable, and nostalgically beautiful.'
    }
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <GreenScreenMonitor />
      <CRTEffect />

      {/* Hero Section */}
      <section className="relative">
        <RetroHero />
      </section>

      {/* Terminal Section */}
      <section className="relative py-20 px-4">
        <DOSTerminal />
      </section>

      {/* Pixel Art Demo */}
      <section className="relative py-12">
        <PixelArt />
      </section>

      {/* Feature Cards */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-green-500 text-center mb-12 font-mono">
            [ SYSTEM FEATURES ]
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <RetroCard key={index} title={feature.title} index={index}>
                <p>{feature.description}</p>
              </RetroCard>
            ))}
          </div>
        </div>
      </section>

      {/* ASCII Art Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto bg-black/80 border-4 border-green-500/50 p-8 rounded-lg font-mono">
          <pre className="text-green-500 text-xs md:text-sm overflow-x-auto">
{`
    ╔═══════════════════════════════════════════╗
    ║  RETRO COMPUTING EXPERIENCE v1.0         ║
    ║                                           ║
    ║  (c) 1995 Nostalgic Software Inc.        ║
    ║  All rights reserved.                    ║
    ║                                           ║
    ║  System Configuration:                   ║
    ║  ┌─────────────────────────────────────┐ ║
    ║  │ Processor : Intel 486 DX2 66MHz     │ ║
    ║  │ Memory    : 640KB Base + 7360KB Ext │ ║
    ║  │ Display   : VGA Compatible          │ ║
    ║  │ Sound     : AdLib / Sound Blaster   │ ║
    ║  └─────────────────────────────────────┘ ║
    ║                                           ║
    ║  Press any key to continue...            ║
    ╚═══════════════════════════════════════════╝
`}
          </pre>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 text-center text-green-500/60 font-mono border-t-2 border-green-500/30">
        <p className="text-sm mb-2">
          Log: [RETRO_COMPUTING], [NOSTALGIA_TECH], [EXECUTION]
        </p>
        <p className="text-xs">
          SYSTEM UPTIME: {new Date().toLocaleTimeString()} | FREE MEMORY: 640K
        </p>
      </footer>
    </main>
  );
}
