'use client';

import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ContentGrid from './components/ContentGrid';
import FloatingElements from './components/FloatingElements';

/**
 * Testing Page 1 - KODE Immersive Aesthetic
 *
 * Exploring:
 * - Typography as dimensional space
 * - Orange-to-purple gradient psychology
 * - Frosted glass layering
 * - GSAP kinetic storytelling
 * - Asymmetrical balance with purpose
 */
export default function TestingPage1() {
  useEffect(() => {
    // Initialize View Transitions API
    if ('startViewTransition' in document) {
      console.log('[VISION] View Transitions API available');
    }

    // Cleanup on unmount
    return () => {
      console.log('[REFINEMENT] Cleaning up animations');
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Gradient Background Layer */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #8B2FC9 50%, #1a0033 100%)',
        }}
      />

      {/* Content Layers */}
      <div className="relative z-10">
        <HeroSection />
        <ContentGrid />
        <FloatingElements />
      </div>
    </main>
  );
}
