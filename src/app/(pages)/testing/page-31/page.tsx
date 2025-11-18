import React from 'react';
import { JapaneseZenContent } from './components/JapaneseZenContent';

export const metadata = {
  title: 'Testing Page 31 - Japanese Zen | Portfolio',
  description: 'Japanese minimalism with zen principles and negative space mastery',
};

// Force dynamic rendering since child components use Convex hooks
export const dynamic = 'force-dynamic';

export default function JapaneseZenPage() {
  return <JapaneseZenContent />;
}
