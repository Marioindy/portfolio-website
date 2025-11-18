import React from 'react';
import { SteampunkShowcase } from './components/SteampunkShowcase';

export const metadata = {
  title: 'Testing Page 16 - Steampunk Aesthetic | Portfolio Testing',
  description: 'Industrial steampunk design with gears, copper tones, and mechanical animations',
};

// Force dynamic rendering for Convex hooks
export const dynamic = 'force-dynamic';

export default function TestingPage16() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-stone-900 to-neutral-950">
      <SteampunkShowcase />
    </div>
  );
}
