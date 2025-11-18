'use client';

import { useEffect } from 'react';

/**
 * View Transitions API Integration
 * Enables smooth page transitions in supported browsers
 */
export function ViewTransitionsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if View Transitions API is supported
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      console.log('✨ View Transitions API is supported and enabled');

      // Add meta tag for view-transition support
      const meta = document.createElement('meta');
      meta.name = 'view-transition';
      meta.content = 'same-origin';
      document.head.appendChild(meta);

      return () => {
        document.head.removeChild(meta);
      };
    } else {
      console.log('View Transitions API not supported in this browser');
    }
  }, []);

  return <>{children}</>;
}

/**
 * CSS for View Transitions
 * Add this to your global CSS or use the style tag below
 */
export function ViewTransitionsStyles() {
  return (
    <style jsx global>{`
      /* Customize view transition animations */
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation-duration: 0.5s;
      }

      /* Smooth fade transition */
      ::view-transition-old(root) {
        animation: fade-out 0.5s ease-in-out;
      }

      ::view-transition-new(root) {
        animation: fade-in 0.5s ease-in-out;
      }

      @keyframes fade-out {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      /* Soft slide transition for cards */
      .view-transition-card {
        view-transition-name: card;
      }

      ::view-transition-old(card),
      ::view-transition-new(card) {
        animation-duration: 0.6s;
      }
    `}</style>
  );
}
