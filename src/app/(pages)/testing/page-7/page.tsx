import type { Metadata } from 'next';
import { HeroSection } from './components/HeroSection';
import { GallerySection } from './components/GallerySection';

export const metadata: Metadata = {
  title: 'Warm Photography | Testing Page 7',
  description:
    'A photography gallery inspired by Aino Agency aesthetic with warm earth tones, full-bleed layouts, and elegant typography. Featuring ochre, rust, and burnt orange color palettes.',
  openGraph: {
    title: 'Warm Photography | Testing Page 7',
    description:
      'A photography gallery inspired by Aino Agency aesthetic with warm earth tones, full-bleed layouts, and elegant typography.',
  },
};

// Force dynamic rendering for Convex
export const dynamic = 'force-dynamic';

export default function WarmPhotographyPage() {
  return (
    <main className="min-h-screen bg-warm-cream">
      {/* Hero Section - Full-bleed photography */}
      <HeroSection />

      {/* Gallery Section - Masonry layout */}
      <GallerySection />

      {/* Footer with warm aesthetic */}
      <footer className="bg-warm-sienna text-warm-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif mb-4">Philosophy</h3>
              <p className="text-warm-sand font-light leading-relaxed">
                Photography is the art of capturing light, texture, and emotion.
                Through warm tones and careful composition, we reveal the organic
                beauty that surrounds us.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">Approach</h3>
              <p className="text-warm-sand font-light leading-relaxed">
                Every image is crafted with intention. We embrace earth tones,
                celebrate natural materials, and honor the authenticity of each
                moment captured in time.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">Vision</h3>
              <p className="text-warm-sand font-light leading-relaxed">
                Visual storytelling through the lens of warmth. Where negative
                space amplifies subject matter and texture creates depth in
                digital space.
              </p>
            </div>
          </div>
          <div className="border-t border-warm-rust/30 pt-8">
            <p className="text-center text-warm-sand/80 font-light tracking-wide text-sm">
              PHOTOGRAPHIC_THEORY · COLOR_WARMTH · COMPOSITION · DELIVERY
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
