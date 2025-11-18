import type { Metadata } from 'next';
import { PageContent } from './components/PageContent';

export const metadata: Metadata = {
  title: 'Testing Page 6 | OFF+BRAND Aesthetic',
  description:
    'Exploring softness as strength: pastel palettes, organic geometry, and refined playfulness in digital design.',
  openGraph: {
    title: 'Testing Page 6 | OFF+BRAND Aesthetic',
    description:
      'Exploring softness as strength: pastel palettes, organic geometry, and refined playfulness in digital design.',
  },
};

export default function TestingPage6() {
  return <PageContent />;
}
