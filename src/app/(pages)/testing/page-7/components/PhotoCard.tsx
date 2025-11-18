'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import type { PhotoCardProps } from '../types';

export function PhotoCard({
  title,
  subtitle,
  imageUrl,
  aspectRatio,
  metadata,
  index,
}: PhotoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current || !overlayRef.current) return;

    const card = cardRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;

    // Initial entrance animation with GSAP
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
      }
    );

    const handleMouseEnter = () => {
      setIsHovered(true);
      // Zoom effect on hover
      gsap.to(image, {
        scale: 1.15,
        duration: 0.8,
        ease: 'power2.out',
      });
      // Fade overlay
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(image, {
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      });
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [index]);

  // Get aspect ratio classes
  const getAspectClasses = () => {
    switch (aspectRatio) {
      case 'portrait':
        return 'row-span-2 aspect-[3/4]';
      case 'landscape':
        return 'row-span-1 aspect-[16/9]';
      case 'square':
        return 'row-span-1 aspect-square';
      default:
        return 'row-span-1 aspect-[4/3]';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-sm ${getAspectClasses()} group cursor-pointer`}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: imageLoaded ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image with warm color overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        {/* Warm color grading overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-ochre/20 via-transparent to-warm-rust/15 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Hover overlay with typography */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-warm-sienna/90 via-warm-rust/60 to-transparent opacity-0 pointer-events-none transition-opacity duration-500"
      >
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-warm-cream font-serif text-2xl md:text-3xl lg:text-4xl mb-2 leading-tight tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-warm-sand text-sm md:text-base font-light tracking-wide mb-4">
                {subtitle}
              </p>
            )}
            {metadata && (
              <div className="flex flex-wrap gap-3 text-warm-cream/80 text-xs md:text-sm">
                {metadata.location && (
                  <span className="font-light">{metadata.location}</span>
                )}
                {metadata.photographer && (
                  <span className="font-light italic">
                    {metadata.photographer}
                  </span>
                )}
                {metadata.date && (
                  <span className="font-light">{metadata.date}</span>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Subtle border on hover */}
      <div className="absolute inset-0 border border-warm-ochre/0 group-hover:border-warm-ochre/30 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}
