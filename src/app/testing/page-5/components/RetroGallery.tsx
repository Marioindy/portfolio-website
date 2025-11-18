'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  pattern: 'checkerboard' | 'stripes' | 'dots' | 'grid';
}

// Static fallback data
const staticGalleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'DIGITAL',
    subtitle: 'ARCHAEOLOGY',
    color: '#FF0040',
    pattern: 'checkerboard',
  },
  {
    id: 2,
    title: 'BITMAP',
    subtitle: 'DREAMS',
    color: '#00E0FF',
    pattern: 'stripes',
  },
  {
    id: 3,
    title: 'RETRO',
    subtitle: 'FUTURISM',
    color: '#FFED00',
    pattern: 'dots',
  },
  {
    id: 4,
    title: 'PIXEL',
    subtitle: 'POETRY',
    color: '#00FF41',
    pattern: 'grid',
  },
];

export function RetroGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  // Try to fetch from Convex, fallback to static data
  // Note: Convex types will be regenerated when dev server runs
  const convexGalleryItems = useQuery(
    (api as any).gallery?.getPixelGalleryItems
  );
  const galleryItems = convexGalleryItems || staticGalleryItems;

  useEffect(() => {
    // Auto-rotate gallery
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 },
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryItems.length, controls]);

  const currentItem = galleryItems[currentIndex];

  return (
    <section className="relative py-20 px-4 bg-pixel-black overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {currentItem && <BackgroundPattern pattern={currentItem.pattern} color={currentItem.color} />}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-bitmap mb-4"
            style={{
              color: '#FFED00',
              textShadow: '4px 4px 0 #FF0040',
            }}
          >
            GALLERY.EXE
          </h2>
          <p className="text-pixel-blue font-bitmap text-sm">
            &gt; LOADING AESTHETIC DATA...
          </p>
        </motion.div>

        {/* Main Gallery Display */}
        <div className="relative">
          {/* Main Canvas */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video bg-pixel-black border-8 border-pixel-white shadow-pixel-lg overflow-hidden"
          >
            {/* Content */}
            <div className="relative w-full h-full p-12 flex flex-col items-center justify-center">
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-20">
                <BackgroundPattern pattern={currentItem.pattern} color={currentItem.color} />
              </div>

              {/* Text Content */}
              <motion.div
                animate={controls}
                className="relative z-10 text-center"
              >
                <h3
                  className="text-6xl md:text-8xl font-bitmap mb-4"
                  style={{
                    color: currentItem.color,
                    textShadow: `6px 6px 0 rgba(0,0,0,0.3)`,
                  }}
                >
                  {currentItem.title}
                </h3>
                <p
                  className="text-2xl md:text-4xl font-bitmap"
                  style={{
                    color: '#FFFFFF',
                    textShadow: `3px 3px 0 ${currentItem.color}`,
                  }}
                >
                  {currentItem.subtitle}
                </p>
              </motion.div>

              {/* Decorative Pixels */}
              <div className="absolute top-4 left-4 grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2"
                    style={{ backgroundColor: currentItem.color }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>

              {/* Corner Decorations */}
              <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-r-0 border-b-0 border-pixel-white" />
              <div className="absolute top-4 right-4 w-16 h-16 border-4 border-r-0 border-t-0 border-pixel-white" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-l-0 border-b-0 border-pixel-white" />
            </div>

            {/* Glitch Effect Overlay */}
            <motion.div
              className="absolute inset-0 mix-blend-screen pointer-events-none"
              animate={{
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${currentItem.color}40 50%, transparent 100%)`,
              }}
            />
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
                )
              }
              className="px-6 py-3 bg-pixel-blue border-4 border-pixel-white shadow-pixel hover:shadow-pixel-lg transition-all hover:translate-y-1 active:translate-y-2"
            >
              <span className="text-pixel-white font-bitmap text-sm">◄ PREV</span>
            </button>

            {/* Progress Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: galleryItems.length }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 border-2 border-pixel-white transition-all ${
                    index === currentIndex ? 'bg-pixel-yellow' : 'bg-pixel-black'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % galleryItems.length)}
              className="px-6 py-3 bg-pixel-blue border-4 border-pixel-white shadow-pixel hover:shadow-pixel-lg transition-all hover:translate-y-1 active:translate-y-2"
            >
              <span className="text-pixel-white font-bitmap text-sm">NEXT ►</span>
            </button>
          </div>
        </div>

        {/* Gallery Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'RESOLUTION', value: '640x480' },
            { label: 'COLORS', value: '256' },
            { label: 'FORMAT', value: 'BMP' },
            { label: 'YEAR', value: '1989' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-4 border-pixel-white bg-pixel-black p-4 text-center"
            >
              <div className="text-pixel-yellow font-bitmap text-xs mb-2">
                {stat.label}
              </div>
              <div className="text-pixel-white font-bitmap text-lg">
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Background Pattern Component
function BackgroundPattern({
  pattern,
  color,
}: {
  pattern: string;
  color: string;
}) {
  const patterns = {
    checkerboard: `
      repeating-conic-gradient(${color} 0% 25%, transparent 0% 50%)
      50% / 16px 16px
    `,
    stripes: `
      repeating-linear-gradient(
        45deg,
        ${color},
        ${color} 8px,
        transparent 8px,
        transparent 16px
      )
    `,
    dots: `
      radial-gradient(circle, ${color} 2px, transparent 2px) 0 0 / 16px 16px
    `,
    grid: `
      linear-gradient(${color} 1px, transparent 1px),
      linear-gradient(90deg, ${color} 1px, transparent 1px)
    `,
  };

  return (
    <div
      className="w-full h-full"
      style={{
        background: patterns[pattern as keyof typeof patterns],
        backgroundSize: pattern === 'grid' ? '16px 16px' : undefined,
      }}
    />
  );
}
