import type { Metadata } from 'next';
import { LimeHero } from './components/LimeHero';
import { GeometricCards } from './components/GeometricCards';
import { ColorPulse } from './components/ColorPulse';

export const metadata: Metadata = {
  title: 'Testing Page 8 - Vibrant Lime Energy | Portfolio',
  description:
    'Vibrant lime green design inspired by Instrument featuring bright neon aesthetics, bold geometric shapes, and energetic compositions.',
  openGraph: {
    title: 'Testing Page 8 - Vibrant Lime Energy',
    description:
      'Vibrant lime green design inspired by Instrument featuring bright neon aesthetics, bold geometric shapes, and energetic compositions.',
  },
};

export const dynamic = 'force-dynamic';

export default function TestingPage8() {
  return (
    <div className="min-h-screen">
      <LimeHero />
      <GeometricCards />
      <ColorPulse />
    </div>
  );
}
