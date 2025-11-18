import type { Metadata } from 'next';
import { NeonWaveHero } from './components/NeonWaveHero';
import { SynthwaveContent } from './components/SynthwaveContent';
import { FlowingLights } from './components/FlowingLights';

export const metadata: Metadata = {
  title: 'Testing Page 48 | Neon Wave Synthwave',
  description:
    'Neon glow wave aesthetic with animated wave patterns, neon colors, flowing light effects, and retro synthwave vibes.',
  openGraph: {
    title: 'Testing Page 48 | Neon Wave Synthwave',
    description:
      'Neon glow wave aesthetic with animated wave patterns, neon colors, flowing light effects, and retro synthwave vibes.',
  },
};

// Force dynamic rendering for Convex hooks
export const dynamic = 'force-dynamic';

export default function TestingPage48() {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Neon grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Flowing lights layer */}
      <FlowingLights />

      {/* Content */}
      <div className="relative z-10">
        <NeonWaveHero />
        <SynthwaveContent />
      </div>
    </div>
  );
}
