import React from 'react';
import { NeumorphicHero } from './components/NeumorphicHero';
import { NeumorphicFeatureCards } from './components/NeumorphicFeatureCards';
import { NeumorphicInteractive } from './components/NeumorphicInteractive';

export const metadata = {
  title: 'Testing Page 17 - Neumorphism | Portfolio',
  description: 'Neumorphism design testing page with soft UI, shadows, and depth effects',
};

// Force dynamic rendering for interactive features
export const dynamic = 'force-dynamic';

export default function TestingPage17() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <NeumorphicHero />

        {/* Feature Cards */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Design Features
          </h2>
          <NeumorphicFeatureCards />
        </div>

        {/* Interactive Components */}
        <NeumorphicInteractive />

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 rounded-3xl bg-[#e0e5ec] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]">
            <p className="text-gray-600 text-sm">
              Built with TypeScript, Tailwind CSS, GSAP, Framer Motion & Convex
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Neumorphism Design System v1.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
