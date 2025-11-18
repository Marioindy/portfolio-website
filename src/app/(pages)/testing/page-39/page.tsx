import type { Metadata } from 'next';
import { CosmicHorrorHero } from './components/CosmicHorrorHero';
import { AlienGeometry } from './components/AlienGeometry';
import { EldritchContent } from './components/EldritchContent';
import { UnknownEntities } from './components/UnknownEntities';

export const metadata: Metadata = {
  title: 'Page 39 - Cosmic Horror | Testing',
  description:
    'An unsettling exploration into cosmic horror aesthetics with alien geometry and eldritch design language.',
  openGraph: {
    title: 'Page 39 - Cosmic Horror | Testing',
    description:
      'An unsettling exploration into cosmic horror aesthetics with alien geometry and eldritch design language.',
  },
};

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Page39() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
      {/* Alien geometry background patterns */}
      <AlienGeometry />

      {/* Main content */}
      <CosmicHorrorHero />
      <EldritchContent />
      <UnknownEntities />
    </div>
  );
}
