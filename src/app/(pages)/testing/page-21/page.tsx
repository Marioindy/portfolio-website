import type { Metadata } from 'next';
import { BlobMorph } from './components/BlobMorph';
import { FluidGradient } from './components/FluidGradient';
import { OrganicShapes } from './components/OrganicShapes';
import { FluidTypography } from './components/FluidTypography';
import { WaveSection } from './components/WaveSection';

export const metadata: Metadata = {
  title: 'Testing Page 21 - Organic Fluidity | Portfolio',
  description:
    'Experience organic fluid design with flowing shapes, SVG morphing, smooth transitions, and nature-inspired aesthetics.',
  openGraph: {
    title: 'Testing Page 21 - Organic Fluidity',
    description:
      'Experience organic fluid design with flowing shapes, SVG morphing, smooth transitions, and nature-inspired aesthetics.',
  },
};

// Enable View Transitions API
export const dynamic = 'force-dynamic';

export default function TestingPage21() {
  const sections = [
    {
      title: 'Flowing Nature',
      description:
        'Embrace the organic flow of nature with smooth, continuous transitions that mirror the rhythms of the natural world. Every element breathes and moves with purpose.'
    },
    {
      title: 'Morphing Shapes',
      description:
        'Watch as shapes seamlessly transform and evolve, creating a living canvas that responds to your presence. The boundaries between elements blur and reform in endless variation.'
    },
    {
      title: 'Fluid Dynamics',
      description:
        'Experience design that flows like water, adapting and reshaping to create harmony between form and function. Each interaction creates ripples of change across the interface.'
    },
    {
      title: 'Natural Curves',
      description:
        'Soft, nature-inspired curves replace harsh angles, creating a soothing visual experience that feels intuitive and welcoming. Geometry meets organic beauty in perfect balance.'
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Background Effects */}
      <BlobMorph />
      <FluidGradient />
      <OrganicShapes />

      {/* Hero Section */}
      <section className="relative">
        <FluidTypography />
      </section>

      {/* Wave Sections */}
      <section className="relative">
        {sections.map((section, index) => (
          <WaveSection
            key={index}
            title={section.title}
            description={section.description}
            index={index}
          />
        ))}
      </section>

      {/* Footer */}
      <footer className="relative py-12 text-center text-gray-500">
        <p className="text-sm">
          Log: [ORGANIC_FLUIDITY], [NATURE_INSPIRATION], [EXECUTION]
        </p>
      </footer>
    </main>
  );
}
