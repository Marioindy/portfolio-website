import type { Metadata } from 'next';
import { GlassmorphismShowcase } from './components/GlassmorphismShowcase';

export const metadata: Metadata = {
  title: 'Testing Page 13 - Glassmorphism | Portfolio',
  description: 'Glassmorphism aesthetic: frosted glass effect, translucent layers, soft blurs, modern minimalism.',
};

// Force dynamic rendering for Convex integration
export const dynamic = 'force-dynamic';

export default function TestingPage13() {
  return (
    <div className="min-h-screen">
      <GlassmorphismShowcase />
    </div>
  );
}
