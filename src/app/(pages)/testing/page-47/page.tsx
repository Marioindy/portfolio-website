import type { Metadata } from 'next';
import { BaroqueHero } from './components/BaroqueHero';
import { OrnateContent } from './components/OrnateContent';
import { GoldenDecorations } from './components/GoldenDecorations';

export const metadata: Metadata = {
  title: 'Testing Page 47 | Baroque Maximalism',
  description:
    'Baroque maximalism aesthetic with ornate decorative elements, rich gold patterns, complex layouts, and over-the-top elegance.',
  openGraph: {
    title: 'Testing Page 47 | Baroque Maximalism',
    description:
      'Baroque maximalism aesthetic with ornate decorative elements, rich gold patterns, complex layouts, and over-the-top elegance.',
  },
};

// Force dynamic rendering for Convex hooks
export const dynamic = 'force-dynamic';

export default function TestingPage47() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-red-950 to-purple-950 overflow-hidden relative">
      {/* Damask pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c-5.523 0-10 4.477-10 10 0 3.5 1.8 6.6 4.5 8.4-2.7 1.8-4.5 4.9-4.5 8.4 0 5.523 4.477 10 10 10s10-4.477 10-10c0-3.5-1.8-6.6-4.5-8.4 2.7-1.8 4.5-4.9 4.5-8.4 0-5.523-4.477-10-10-10zm0 28.2c-2.7 0-4.9-2.2-4.9-4.9 0-2.7 2.2-4.9 4.9-4.9s4.9 2.2 4.9 4.9c0 2.7-2.2 4.9-4.9 4.9z' fill='%23FFD700' fill-opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Golden decorations layer */}
      <GoldenDecorations />

      {/* Content */}
      <div className="relative z-10">
        <BaroqueHero />
        <OrnateContent />
      </div>
    </div>
  );
}
