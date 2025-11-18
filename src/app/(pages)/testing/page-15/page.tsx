import React from 'react';
import { MemphisShowcase } from './components/MemphisShowcase';

export const metadata = {
  title: 'Testing Page 15 - Memphis Design | Portfolio Testing',
  description: 'Playful Memphis design with geometric shapes, bright colors, and fun typography',
};

// Force dynamic rendering for Convex hooks
export const dynamic = 'force-dynamic';

export default function TestingPage15() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-cyan-300">
      <MemphisShowcase />
    </div>
  );
}
