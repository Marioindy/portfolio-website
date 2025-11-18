import type { Metadata } from 'next';
import { FashionHero } from './components/FashionHero';
import { EditorialLayout } from './components/EditorialLayout';
import { MinimalistStatement } from './components/MinimalistStatement';

export const metadata: Metadata = {
  title: 'Page 33 - Brutalist Fashion | Testing',
  description:
    'Brutalist fashion design exploration with extreme minimalism, bold typography, asymmetrical layouts, and high-end editorial aesthetics.',
  openGraph: {
    title: 'Page 33 - Brutalist Fashion | Testing',
    description:
      'Brutalist fashion design exploration with extreme minimalism, bold typography, asymmetrical layouts, and high-end editorial aesthetics.',
  },
};

// Force dynamic rendering for Convex integration
export const dynamic = 'force-dynamic';

export default function Page33() {
  console.log('[FASHION_EDITORIAL]', '[BRUTALIST_LUXURY]', '[EXECUTION]');

  return (
    <div className="min-h-screen bg-black text-white">
      <FashionHero />
      <EditorialLayout />
      <MinimalistStatement />
    </div>
  );
}
