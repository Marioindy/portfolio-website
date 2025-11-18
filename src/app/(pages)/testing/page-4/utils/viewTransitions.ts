/**
 * VIEW TRANSITIONS API UTILITIES
 *
 * The View Transitions API allows us to create smooth, cinematic transitions
 * between page states. Like a film dissolve or a fade to black.
 *
 * Philosophy:
 * Every transition is a narrative beat. The way one scene becomes another
 * tells the viewer something about the relationship between those states.
 *
 * We use:
 * - Crossfades for related content (like editing within a scene)
 * - Slide transitions for sequential navigation (like a camera pan)
 * - Zoom transitions for hierarchical changes (like a rack focus)
 */

/**
 * Check if View Transitions API is supported
 */
export function supportsViewTransitions(): boolean {
  return (
    typeof document !== 'undefined' &&
    'startViewTransition' in document &&
    typeof (document as any).startViewTransition === 'function'
  );
}

/**
 * Execute a function with a view transition
 * Falls back to immediate execution if API not supported
 */
export async function withViewTransition(
  updateCallback: () => void | Promise<void>
): Promise<void> {
  if (!supportsViewTransitions()) {
    await updateCallback();
    return;
  }

  const transition = (document as any).startViewTransition(async () => {
    await updateCallback();
  });

  try {
    await transition.finished;
  } catch (error) {
    // Transition was skipped or interrupted
    console.warn('View transition interrupted:', error);
  }
}

/**
 * Cinematic transition presets
 */
export const transitionPresets = {
  /**
   * FADE: Classic film dissolve
   * One image gradually replaces another
   */
  fade: {
    duration: '600ms',
    easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  },

  /**
   * SLIDE: Camera pan effect
   * Content slides in from the side
   */
  slide: {
    duration: '800ms',
    easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
  },

  /**
   * ZOOM: Rack focus / dolly zoom
   * Scale-based transition suggesting depth
   */
  zoom: {
    duration: '700ms',
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },

  /**
   * CINEMATIC: Slow, deliberate transition
   * Like Kubrick's measured pacing
   */
  cinematic: {
    duration: '1200ms',
    easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  },
};

/**
 * Apply custom CSS to view transition pseudo-elements
 */
export function applyTransitionStyles(
  preset: keyof typeof transitionPresets = 'fade'
): void {
  if (!supportsViewTransitions()) return;

  const { duration, easing } = transitionPresets[preset];

  // Create or update style element
  let styleEl = document.getElementById('view-transition-styles');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'view-transition-styles';
    document.head.appendChild(styleEl);
  }

  styleEl.textContent = `
    ::view-transition-old(root),
    ::view-transition-new(root) {
      animation-duration: ${duration};
      animation-timing-function: ${easing};
    }
  `;
}

/**
 * Navigate with cinematic transition
 * Use this for programmatic navigation with View Transitions
 */
export async function navigateWithTransition(
  url: string,
  preset: keyof typeof transitionPresets = 'fade'
): Promise<void> {
  if (!supportsViewTransitions()) {
    window.location.href = url;
    return;
  }

  applyTransitionStyles(preset);

  await withViewTransition(() => {
    window.location.href = url;
  });
}

/**
 * HOF: Wrap a click handler with view transition
 */
export function withTransitionHandler(
  handler: () => void | Promise<void>,
  preset: keyof typeof transitionPresets = 'fade'
) {
  return async (e: React.MouseEvent) => {
    e.preventDefault();
    applyTransitionStyles(preset);
    await withViewTransition(handler);
  };
}
