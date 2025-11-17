import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * GSAP Animation Utilities
 */

// Fade in animation
export const fadeIn = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
): gsap.core.Tween => {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
    ...options,
  });
};

// Fade in with stagger
export const fadeInStagger = (
  elements: gsap.TweenTarget,
  options?: gsap.TweenVars
): gsap.core.Tween => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    ...options,
  });
};

// Scale animation
export const scaleIn = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
): gsap.core.Tween => {
  return gsap.from(element, {
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)',
    ...options,
  });
};

// Slide from left
export const slideFromLeft = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
): gsap.core.Tween => {
  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    ...options,
  });
};

// Slide from right
export const slideFromRight = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
): gsap.core.Tween => {
  return gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    ...options,
  });
};

// Scroll-triggered fade in
export const scrollFadeIn = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars & { trigger?: ScrollTrigger.Vars['trigger'] }
): gsap.core.Tween => {
  const { trigger, ...tweenOptions } = options || {};

  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: trigger || element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    } as any,
    ...tweenOptions,
  } as any);
};

// Parallax effect
export const parallax = (
  element: gsap.TweenTarget,
  speed: number = 0.5
): ScrollTrigger => {
  return ScrollTrigger.create({
    trigger: element as any,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      gsap.to(element, {
        y: self.progress * 100 * speed,
        ease: 'none',
      });
    },
  });
};

// Magnetic hover effect
export const magneticHover = (element: HTMLElement, strength: number = 0.5): (() => void) => {
  const handleMouseMove = (e: MouseEvent): void => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (): void => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  // Return cleanup function
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// Text reveal animation
export const textReveal = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  tl.from(element, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    ...options,
  });

  return tl;
};

// Cleanup all ScrollTriggers
export const cleanupScrollTriggers = (): void => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

// Refresh ScrollTrigger (useful after layout changes)
export const refreshScrollTrigger = (): void => {
  ScrollTrigger.refresh();
};
