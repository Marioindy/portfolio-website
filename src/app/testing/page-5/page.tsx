import type { Metadata } from 'next';
import { PixelHero } from './components/PixelHero';
import { PixelGrid } from './components/PixelGrid';
import { RetroGallery } from './components/RetroGallery';
import { ChiptuneSection } from './components/ChiptuneSection';
import { CRTOverlay } from './components/CRTOverlay';
import { ViewTransitionsProvider } from './components/ViewTransitionsProvider';
import { ResponsivePixelScaler } from './components/ResponsivePixelScaler';

export const metadata: Metadata = {
  title: 'Pixel Perfect | Testing Page 5',
  description:
    'A nostalgic journey through retro pixel art aesthetics - where limitation becomes liberation',
  openGraph: {
    title: 'Pixel Perfect | Testing Page 5',
    description:
      'A nostalgic journey through retro pixel art aesthetics - where limitation becomes liberation',
  },
};

// Force dynamic rendering for Convex integration
export const dynamic = 'force-dynamic';

export default function PixelArtTestingPage() {
  return (
    <ViewTransitionsProvider>
      <ResponsivePixelScaler>
        <div className="relative min-h-screen bg-pixel-black overflow-hidden">
          {/* CRT Screen Effect Overlay */}
          <CRTOverlay />

          {/* Main Content */}
          <main className="relative z-10">
            {/* Pixel Art Hero Section */}
            <PixelHero />

            {/* Retro Grid Gallery */}
            <PixelGrid />

            {/* Retro Gallery with 8-bit Elements */}
            <RetroGallery />

            {/* Chiptune Audio Reference Section */}
            <ChiptuneSection />
          </main>

          {/* Scanline effect */}
          <div className="pointer-events-none fixed inset-0 z-50 opacity-10">
            <div className="h-1 w-full bg-gradient-to-b from-pixel-white to-transparent animate-scanline" />
          </div>
        </div>
      </ResponsivePixelScaler>
    </ViewTransitionsProvider>
  );
}
