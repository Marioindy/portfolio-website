import type { Metadata } from 'next';
import { MinimalistHero } from './components/MinimalistHero';
import { GeometricGrid } from './components/GeometricGrid';

export const metadata: Metadata = {
  title: 'Testing Page 9 - Minimalist Monochrome | Portfolio',
  description:
    'Minimalist monochrome design exploration featuring pure black and white aesthetics, bold typography, and extreme negative space.',
  openGraph: {
    title: 'Testing Page 9 - Minimalist Monochrome',
    description:
      'Minimalist monochrome design exploration featuring pure black and white aesthetics, bold typography, and extreme negative space.',
  },
};

export const dynamic = 'force-dynamic';

export default function TestingPage9() {
  return (
    <div className="min-h-screen bg-white">
      <MinimalistHero />
      <GeometricGrid />
    </div>
  );
}
