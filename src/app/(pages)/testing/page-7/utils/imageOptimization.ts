/**
 * Image optimization utilities for the warm photography page
 * Handles lazy loading, responsive images, and performance
 */

export interface ImageOptimizationOptions {
  quality?: number;
  width?: number;
  format?: 'webp' | 'jpg' | 'png';
}

/**
 * Generate optimized image URL from Unsplash
 * @param baseUrl - The base Unsplash URL
 * @param options - Optimization options
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(
  baseUrl: string,
  options: ImageOptimizationOptions = {}
): string {
  const { quality = 80, width, format = 'webp' } = options;

  const url = new URL(baseUrl);
  url.searchParams.set('q', quality.toString());
  url.searchParams.set('fm', format);

  if (width) {
    url.searchParams.set('w', width.toString());
  }

  // Enable auto format and compression
  url.searchParams.set('auto', 'format,compress');

  return url.toString();
}

/**
 * Generate srcset for responsive images
 * @param baseUrl - The base image URL
 * @returns srcset string for responsive images
 */
export function generateSrcSet(baseUrl: string): string {
  const widths = [400, 800, 1200, 1600, 2000];

  return widths
    .map((width) => {
      const url = getOptimizedImageUrl(baseUrl, { width });
      return `${url} ${width}w`;
    })
    .join(', ');
}

/**
 * Preload critical images for better performance
 * @param imageUrls - Array of image URLs to preload
 */
export function preloadImages(imageUrls: string[]): void {
  if (typeof window === 'undefined') return;

  imageUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Lazy load images with Intersection Observer
 * @param imageElement - The image element to lazy load
 * @param callback - Optional callback when image loads
 */
export function lazyLoadImage(
  imageElement: HTMLImageElement,
  callback?: () => void
): void {
  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers without Intersection Observer
    imageElement.src = imageElement.dataset.src || '';
    callback?.();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;

          if (src) {
            img.src = src;
            img.onload = () => {
              img.classList.add('loaded');
              callback?.();
            };
          }

          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  );

  observer.observe(imageElement);
}

/**
 * Calculate optimal image dimensions based on viewport
 * @param aspectRatio - The aspect ratio of the image
 * @returns Optimal width and height
 */
export function getOptimalDimensions(aspectRatio: 'portrait' | 'landscape' | 'square'): {
  width: number;
  height: number;
} {
  const viewportWidth =
    typeof window !== 'undefined' ? window.innerWidth : 1920;

  switch (aspectRatio) {
    case 'portrait':
      return {
        width: Math.min(viewportWidth * 0.4, 800),
        height: Math.min(viewportWidth * 0.4 * 1.33, 1067),
      };
    case 'landscape':
      return {
        width: Math.min(viewportWidth * 0.8, 1600),
        height: Math.min(viewportWidth * 0.8 * 0.5625, 900),
      };
    case 'square':
      return {
        width: Math.min(viewportWidth * 0.5, 1000),
        height: Math.min(viewportWidth * 0.5, 1000),
      };
    default:
      return { width: 800, height: 600 };
  }
}
