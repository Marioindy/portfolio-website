'use client';

import { useEffect } from 'react';

/**
 * View Transitions API Provider
 * Enables smooth page transitions using the experimental View Transitions API
 * Provides a retro pixel-art themed transition effect
 */
export function ViewTransitionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Check if View Transitions API is supported
    if (typeof window !== 'undefined' && 'startViewTransition' in document) {
      // Add custom pixel transition styles
      const style = document.createElement('style');
      style.textContent = `
        /* Pixel-perfect view transitions */
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation-duration: 0.5s;
          animation-timing-function: steps(8, end);
        }

        /* Pixelated fade effect */
        ::view-transition-old(root) {
          animation-name: pixelFadeOut;
        }

        ::view-transition-new(root) {
          animation-name: pixelFadeIn;
        }

        @keyframes pixelFadeOut {
          from {
            opacity: 1;
            transform: scale(1);
            filter: contrast(1);
          }
          to {
            opacity: 0;
            transform: scale(0.95);
            filter: contrast(1.2);
          }
        }

        @keyframes pixelFadeIn {
          from {
            opacity: 0;
            transform: scale(1.05);
            filter: contrast(1.2) hue-rotate(10deg);
          }
          to {
            opacity: 1;
            transform: scale(1);
            filter: contrast(1) hue-rotate(0deg);
          }
        }

        /* Glitch transition effect */
        ::view-transition-group(root) {
          animation-duration: 0.5s;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Add scanline effect during transition */
        ::view-transition-new(root)::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 224, 255, 0.1),
            rgba(0, 224, 255, 0.1) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          animation: scanlineMove 0.5s linear;
        }

        @keyframes scanlineMove {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(100%);
          }
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  return <>{children}</>;
}

/**
 * Hook to use view transitions for navigation
 * Wraps navigation actions in a view transition
 */
export function useViewTransition() {
  const startTransition = (callback: () => void) => {
    if (
      typeof window !== 'undefined' &&
      'startViewTransition' in document &&
      typeof (document as any).startViewTransition === 'function'
    ) {
      (document as any).startViewTransition(() => {
        callback();
      });
    } else {
      // Fallback for browsers that don't support View Transitions API
      callback();
    }
  };

  return { startTransition };
}
