import type { Metadata } from 'next';
import KineticTypographySection from './components/KineticTypographySection';

export const metadata: Metadata = {
  title: 'Testing Page 42 - Kinetic Typography | Portfolio',
  description: 'Dynamic text animations, moving letters, flowing words, and text as motion art',
};

export const dynamic = 'force-dynamic';

export default function TestingPage42() {
  return (
    <main className="min-h-screen bg-black">
      <KineticTypographySection />
    </main>
  );
}
