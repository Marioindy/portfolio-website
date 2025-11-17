'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

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
        typeof (document as Document & { startViewTransition: (callback: () => void) => void }).startViewTransition === 'function'
      ) {
        const transition = (document as Document & { startViewTransition: (callback: () => void) => void }).startViewTransition(() => {
          router.push(href);
        });

        // Handle transition errors
        transition.catch?.((error: Error) => {
          console.error('View transition failed:', error);
          router.push(href);
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
