import type { Metadata } from 'next';
import { SemanticHero } from './components/SemanticHero';
import { AccessibleContent } from './components/AccessibleContent';
import { FunctionalGrid } from './components/FunctionalGrid';

export const metadata: Metadata = {
  title: 'Testing Page 19 - Brutalist HTML | Portfolio',
  description:
    'Brutalist web design exploration with semantic HTML, accessibility-first approach, and minimal styling for maximum performance.',
  openGraph: {
    title: 'Testing Page 19 - Brutalist HTML',
    description:
      'Brutalist web design exploration with semantic HTML, accessibility-first approach, and minimal styling for maximum performance.',
  },
};

// Force dynamic rendering since child components use Convex hooks
export const dynamic = 'force-dynamic';

export default function TestingPage19() {
  console.log('[HTML_MINIMALISM] Rendering brutalist testing page');
  console.log('[ACCESSIBILITY_FIRST] Semantic HTML structure initialized');
  console.log('[EXECUTION] Page 19 initialized');

  return (
    <main className="min-h-screen bg-white text-black">
      <SemanticHero />
      <AccessibleContent />
      <FunctionalGrid />
    </main>
  );
}
