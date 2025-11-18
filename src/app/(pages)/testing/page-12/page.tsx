import type { Metadata } from 'next';
import { MaximalistShowcase } from './components/MaximalistShowcase';

export const metadata: Metadata = {
  title: 'Testing Page 12 - Maximalism | Portfolio',
  description:
    'Maximalist aesthetic: overwhelming colors, rich textures, dense typography, layered elements, baroque-inspired sensory overload.',
};

// Force dynamic rendering for Convex integration
export const dynamic = 'force-dynamic';

export default function TestingPage12() {
  return (
    <div className="min-h-screen">
      <MaximalistShowcase />
    </div>
  );
}
