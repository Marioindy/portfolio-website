'use client';

import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import {
  fadeIn,
  fadeInStagger,
  scaleIn,
  scrollFadeIn,
  cleanupScrollTriggers,
} from '@/utils/animations';

/**
 * Hook to apply fade-in animation on mount
 */
export function useFadeIn<T extends HTMLElement>(
  options?: gsap.TweenVars
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      fadeIn(ref.current, options);
    }
  }, [options]);

  return ref;
}

/**
 * Hook to apply stagger fade-in animation on mount
 */
export function useFadeInStagger<T extends HTMLElement>(
  options?: gsap.TweenVars
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      const children = ref.current.children;
      if (children.length > 0) {
        fadeInStagger(Array.from(children), options);
      }
    }
  }, [options]);

  return ref;
}

/**
 * Hook to apply scale-in animation on mount
 */
export function useScaleIn<T extends HTMLElement>(
  options?: gsap.TweenVars
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      scaleIn(ref.current, options);
    }
  }, [options]);

  return ref;
}

/**
 * Hook to apply scroll-triggered animation
 */
export function useScrollAnimation<T extends HTMLElement>(
  options?: gsap.TweenVars & { trigger?: ScrollTrigger.Vars['trigger'] }
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      scrollFadeIn(ref.current, options);
    }

    return () => {
      cleanupScrollTriggers();
    };
  }, [options]);

  return ref;
}

/**
 * Hook to create a GSAP timeline
 */
export function useTimeline(dependencies: unknown[] = []): gsap.core.Timeline {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline();

    return () => {
      timelineRef.current?.kill();
    };
  }, dependencies);

  return timelineRef.current!;
}

/**
 * Hook to handle hover animations
 */
export function useHoverAnimation<T extends HTMLElement>(
  hoverVars: gsap.TweenVars,
  restVars: gsap.TweenVars = {}
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = (): void => {
      gsap.to(element, { ...hoverVars, duration: 0.3 });
    };

    const handleMouseLeave = (): void => {
      gsap.to(element, { ...restVars, duration: 0.3 });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverVars, restVars]);

  return ref;
}

/**
 * Hook to handle intersection observer for animations
 */
export function useInView<T extends HTMLElement>(
  onInView: () => void,
  options?: IntersectionObserverInit
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onInView();
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [onInView, options]);

  return ref;
}
