'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhotoCard } from './PhotoCard';
import type { MasonryGridProps } from '../types';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function MasonryGrid({ photos }: MasonryGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    // Scroll-triggered animations
    const gridItems = gridRef.current.querySelectorAll('.masonry-item');

    gridItems.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom-=100',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [photos]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[320px] lg:auto-rows-[380px]"
    >
      {photos.map((photo, index) => (
        <div key={photo._id} className="masonry-item">
          <PhotoCard
            title={photo.title}
            subtitle={photo.subtitle}
            imageUrl={photo.imageUrl}
            aspectRatio={photo.aspectRatio}
            colorTheme={photo.colorTheme}
            metadata={photo.metadata}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}
