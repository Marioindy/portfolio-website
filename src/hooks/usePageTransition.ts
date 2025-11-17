'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

/**
 * View Transition API types
 */
interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition: () => void;
}

/**
 * Hook to handle page transitions with View Transitions API
 */
export function usePageTransition() {
  const router = useRouter();

  const navigate = useCallback(
    (href: string) => {
      // Check if View Transitions API is supported
      if (
        typeof document !== 'undefined' &&
        'startViewTransition' in document &&
        typeof (document as Document & { startViewTransition: (callback: () => void) => ViewTransition }).startViewTransition === 'function'
      ) {
        const transition = (document as Document & { startViewTransition: (callback: () => void) => ViewTransition }).startViewTransition(() => {
          router.push(href);
        });

        // Handle transition promises to prevent unhandled rejections
        transition.ready.catch(() => {
          // Transition was skipped or interrupted - this is fine
        });

        transition.finished.catch(() => {
          // Transition failed or was aborted - this is fine
        });
      } else {
        // Fallback for browsers that don't support View Transitions API
        router.push(href);
      }
    },
    [router]
  );

  return { navigate };
}

/**
 * Check if View Transitions API is supported
 */
export function isViewTransitionSupported(): boolean {
  if (typeof document === 'undefined') return false;
  return 'startViewTransition' in document;
}
