import type { Metadata } from 'next';
import { CyberGrid } from './components/CyberGrid';
import { ThreeBackground } from './components/ThreeBackground';
import { HeroGlow } from './components/HeroGlow';

export const metadata: Metadata = {
  title: 'Cyberpunk Testing Lab | Page 2',
  description:
    'Experimental testing environment featuring neon aesthetics, 3D geometric shapes, glassmorphism, and cyberpunk minimalism.',
  openGraph: {
    title: 'Cyberpunk Testing Lab | Page 2',
    description:
      'Immersive cyberpunk interface with neon purple accents, 3D depth, and futuristic design patterns.',
  },
};

// Force dynamic rendering for Convex integration
export const dynamic = 'force-dynamic';

export default function TestingPage2() {
  return (
    <div className="relative min-h-screen bg-[#0a0e27] overflow-hidden">
      {/* Three.js 3D Background Layer */}
      <ThreeBackground />

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section with Glow Effect */}
        <HeroGlow />

        {/* Cyberpunk Card Grid with GSAP Animations */}
        <CyberGrid />
      </div>

      {/* Atmospheric Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-cyan-900/10" />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
