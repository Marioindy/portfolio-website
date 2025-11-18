import React from 'react';
import { PsychedelicContent } from './components/PsychedelicContent';

export const metadata = {
  title: 'Testing Page 30 - Psychedelic | Portfolio',
  description: 'Psychedelic aesthetic with vibrant colors and trippy patterns',
};

// Force dynamic rendering since child components use Convex hooks
export const dynamic = 'force-dynamic';

export default function PsychedelicPage() {
  return <PsychedelicContent />;
}
