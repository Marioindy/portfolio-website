import type { Metadata } from 'next';
import { HolographicHero } from './components/HolographicHero';
import { IridescentCards } from './components/IridescentCards';
import { ShimmerGrid } from './components/ShimmerGrid';

export const metadata: Metadata = {
  title: 'Testing Page 20 - Holographic Aesthetic | Portfolio',
  description:
    'Holographic design exploration with iridescent gradients, shimmering effects, and light-based modern tech aesthetics.',
  openGraph: {
    title: 'Testing Page 20 - Holographic Aesthetic',
    description:
      'Holographic design exploration with iridescent gradients, shimmering effects, and light-based modern tech aesthetics.',
  },
};

// Force dynamic rendering since child components use Convex hooks
export const dynamic = 'force-dynamic';

export default function TestingPage20() {
  console.log('[HOLOGRAPHIC_TECH] Rendering holographic testing page');
  console.log('[IRIDESCENT_THEORY] Applying iridescent gradient systems');
  console.log('[EXECUTION] Page 20 initialized');

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <HolographicHero />
      <IridescentCards />
      <ShimmerGrid />
    </div>
  );
}
