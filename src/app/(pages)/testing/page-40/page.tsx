import type { Metadata } from 'next';
import { JazzHero } from './components/JazzHero';
import { ArtDecoSection } from './components/ArtDecoSection';
import { JazzClubShowcase } from './components/JazzClubShowcase';
import { RetroFooter } from './components/RetroFooter';

export const metadata: Metadata = {
  title: 'Page 40 - Jazz Age Elegance | Testing',
  description:
    'Experience the elegance of the Jazz Age with art deco design, warm retro colors, and smooth jazz-inspired animations.',
  openGraph: {
    title: 'Page 40 - Jazz Age Elegance | Testing',
    description:
      'Experience the elegance of the Jazz Age with art deco design, warm retro colors, and smooth jazz-inspired animations.',
  },
};

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Page40() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      <JazzHero />
      <ArtDecoSection />
      <JazzClubShowcase />
      <RetroFooter />
    </div>
  );
}
