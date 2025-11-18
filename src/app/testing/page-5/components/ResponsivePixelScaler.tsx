'use client';

import { useEffect, useState } from 'react';

/**
 * Responsive Pixel Scaling System
 * Ensures pixel-perfect rendering across different screen sizes
 * Maintains the aesthetic integrity of pixel art at various resolutions
 */
export function ResponsivePixelScaler({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const calculateScale = () => {
      const width = window.innerWidth;

      // Calculate optimal pixel size based on viewport
      // Smaller screens = smaller pixels, larger screens = larger pixels
      let newPixelSize = 1;
      let newScale = 1;

      if (width < 640) {
        // Mobile
        newPixelSize = 1;
        newScale = 1;
      } else if (width < 768) {
        // Small tablet
        newPixelSize = 1.5;
        newScale = 1.2;
      } else if (width < 1024) {
        // Tablet
        newPixelSize = 2;
        newScale = 1.3;
      } else if (width < 1280) {
        // Desktop
        newPixelSize = 2;
        newScale = 1.4;
      } else {
        // Large desktop
        newPixelSize = 2.5;
        newScale = 1.5;
      }

      // Update CSS custom properties for pixel scaling
      document.documentElement.style.setProperty(
        '--pixel-scale',
        newScale.toString()
      );
      document.documentElement.style.setProperty(
        '--pixel-size',
        `${newPixelSize}px`
      );
    };

    calculateScale();

    // Recalculate on resize with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculateScale, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div
      className="pixel-scaler-container"
      style={{
        imageRendering: 'pixelated',
        WebkitFontSmoothing: 'none',
        MozOsxFontSmoothing: 'grayscale',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/**
 * Hook to get current pixel scale values
 */
export function usePixelScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const scaleValue = getComputedStyle(document.documentElement)
        .getPropertyValue('--pixel-scale');
      setScale(parseFloat(scaleValue) || 1);
    };

    updateScale();

    const observer = new MutationObserver(updateScale);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style'],
    });

    return () => observer.disconnect();
  }, []);

  return { scale };
}
