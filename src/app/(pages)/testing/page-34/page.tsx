import type { Metadata } from 'next';
import { BiomorphicHero } from './components/BiomorphicHero';
import { OrganicShapes } from './components/OrganicShapes';
import { FluidContent } from './components/FluidContent';

export const metadata: Metadata = {
  title: 'Page 34 - Biomorphic Design | Testing',
  description:
    'Biomorphic design exploration with organic blob shapes, smooth curves, fluid animations, and nature-inspired aesthetics.',
  openGraph: {
    title: 'Page 34 - Biomorphic Design | Testing',
    description:
      'Biomorphic design exploration with organic blob shapes, smooth curves, fluid animations, and nature-inspired aesthetics.',
  },
};

// Force dynamic rendering for Convex integration
export const dynamic = 'force-dynamic';

export default function Page34() {
  console.log('[BIOMORPHIC_FORMS]', '[ORGANIC_LIFE]', '[EXECUTION]');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      <BiomorphicHero />
      <OrganicShapes />
      <FluidContent />
    </div>
  );
}
