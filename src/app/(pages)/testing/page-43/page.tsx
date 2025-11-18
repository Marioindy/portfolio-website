import type { Metadata } from 'next';
import LuxuryGoldSection from './components/LuxuryGoldSection';

export const metadata: Metadata = {
  title: 'Testing Page 43 - Luxury Gold Foil | Portfolio',
  description: 'Premium gold foil aesthetic with elegant marble textures and sophisticated minimalism',
};

export const dynamic = 'force-dynamic';

export default function TestingPage43() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <LuxuryGoldSection />
    </main>
  );
}
