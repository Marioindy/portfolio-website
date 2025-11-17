/**
 * View Transitions API helper utilities
 * Provides smooth page transitions using the View Transitions API
 */

export function supportsViewTransitions(): boolean {
  if (typeof document === 'undefined') return false;
  return 'startViewTransition' in document;
}

export function transitionHelper({
  skipTransition = false,
  classNames = [],
  updateDOM,
}: {
  skipTransition?: boolean;
  classNames?: string[];
  updateDOM: () => void | Promise<void>;
}) {
  if (skipTransition || !supportsViewTransitions()) {
    const updateCallbackDone = Promise.resolve(updateDOM()).then(() => {});
    return {
      ready: Promise.reject(Error('View transitions unsupported')),
      updateCallbackDone,
      finished: updateCallbackDone,
      skipTransition: () => {},
    };
  }

  const transition = (document as any).startViewTransition(updateDOM);

  // Add custom classes to the root element during transition
  if (classNames.length > 0) {
    transition.ready.then(() => {
      document.documentElement.classList.add(...classNames);
    });

    transition.finished.finally(() => {
      document.documentElement.classList.remove(...classNames);
    });
  }

  return transition;
}

/**
 * Apply view transition to a navigation action
 */
export async function navigateWithTransition(
  navigate: () => void | Promise<void>,
  classNames: string[] = []
) {
  if (!supportsViewTransitions()) {
    return navigate();
  }

  return transitionHelper({
    updateDOM: navigate,
    classNames,
  });
}
