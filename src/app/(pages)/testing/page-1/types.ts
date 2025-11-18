/**
 * Type Definitions for Testing Page 1
 *
 * [REFINEMENT] Strict type safety as design constraint
 * Types document intention and prevent ambiguity
 */

// ============================================================================
// Component Props Types
// ============================================================================

export interface FrostedGlassCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export interface FloatingElementsProps {
  initialState?: 'minimal' | 'expanded';
}

// ============================================================================
// Content & Data Types
// ============================================================================

export interface ContentItem {
  title: string;
  description: string;
  category: string;
  metadata?: {
    author?: string;
    date?: Date;
    tags?: string[];
  };
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category?: string;
  imageUrl?: string;
  link?: string;
}

// ============================================================================
// Animation & Interaction Types
// ============================================================================

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  stagger?: {
    each: number;
    from?: 'start' | 'center' | 'end';
  };
}

export interface MagneticConfig {
  radius: number;
  strength: number;
  duration: number;
  ease: string;
}

export interface ViewTransitionState {
  from: 'minimal' | 'expanded';
  to: 'minimal' | 'expanded';
  timestamp: number;
}

// ============================================================================
// GSAP & ScrollTrigger Types
// ============================================================================

export interface ScrollTriggerConfig {
  trigger: HTMLElement | string;
  start: string;
  end: string;
  scrub?: boolean | number;
  toggleActions?: string;
  pin?: boolean;
  markers?: boolean;
}

export interface GSAPTimeline {
  add: (tween: gsap.core.Tween) => GSAPTimeline;
  to: (target: gsap.TweenTarget, vars: gsap.TweenVars) => GSAPTimeline;
  from: (target: gsap.TweenTarget, vars: gsap.TweenVars) => GSAPTimeline;
  fromTo: (
    target: gsap.TweenTarget,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars
  ) => GSAPTimeline;
}

// ============================================================================
// Design System Types
// ============================================================================

export type ColorToken =
  | 'orange-primary'
  | 'purple-deep'
  | 'black-void'
  | 'white-pure'
  | 'glass-tint';

export interface DesignTokens {
  colors: {
    'orange-primary': string; // #FF6B35
    'purple-deep': string; // #8B2FC9
    'black-void': string; // #000000
    'white-pure': string; // #FFFFFF
    'glass-tint': string; // rgba(255, 255, 255, 0.05)
  };
  spacing: {
    hero: string;
    section: string;
    card: string;
  };
  typography: {
    hero: {
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    heading: {
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    body: {
      fontSize: string;
      lineHeight: number;
    };
  };
}

// ============================================================================
// Utility Types
// ============================================================================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type MaybePromise<T> = T | Promise<T>;

// Type guard for checking if element has data-magnetic attribute
export function isMagneticElement(
  element: Element
): element is HTMLElement & { dataset: { magnetic: string } } {
  return element instanceof HTMLElement && 'magnetic' in element.dataset;
}

// Type guard for View Transitions API support
export function supportsViewTransitions(): boolean {
  return typeof document !== 'undefined' && 'startViewTransition' in document;
}

// ============================================================================
// View Transitions API Types
// ============================================================================
// Note: Modern TypeScript versions include these types natively.
// If you're using an older version, uncomment the declarations below:
//
// declare global {
//   interface Document {
//     startViewTransition?: (callback: () => void | Promise<void>) => {
//       ready: Promise<void>;
//       finished: Promise<void>;
//       updateCallbackDone: Promise<void>;
//     };
//   }
// }

// ============================================================================
// Export all types
// ============================================================================

export type {
  AnimationConfig as Animation,
  MagneticConfig as Magnetic,
  ViewTransitionState as ViewTransition,
  ScrollTriggerConfig as ScrollTrigger,
};
