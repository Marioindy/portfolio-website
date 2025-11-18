'use client';

import { useState, useEffect } from 'react';
// import { useQuery } from 'convex/react';
// import { api } from '@/../convex/_generated/api';
import { MasonryGrid } from './MasonryGrid';
import { motion } from 'framer-motion';
import { getMockPhotography } from '../data/mockPhotography';
import type { Photo } from '../types';

export function GallerySection() {
  // TODO: Switch to Convex when deployed
  // const photos = useQuery(api.photography.getAllPhotography);

  // Using mock data for development
  const [photos, setPhotos] = useState<Photo[] | null>(null);

  useEffect(() => {
    // Simulate async data loading
    const timer = setTimeout(() => {
      setPhotos(getMockPhotography());
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!photos) {
    return (
      <section className="min-h-screen bg-warm-cream flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-warm-rust border-t-transparent rounded-full animate-spin" />
          <p className="text-warm-sienna font-light tracking-wide">
            Loading gallery...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-warm-cream py-20 md:py-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-24 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-warm-sienna mb-6 leading-tight">
            A Collection of
            <br />
            <span className="text-warm-rust italic">Warm Moments</span>
          </h2>
          <p className="text-lg md:text-xl text-warm-clay font-light leading-relaxed max-w-2xl">
            Photography that embraces earth tones, celebrates natural light, and
            finds beauty in the organic textures of our world. Each image tells a
            story through color, composition, and careful attention to warmth.
          </p>
        </motion.div>

        {/* Masonry gallery */}
        <MasonryGrid photos={photos} />
      </div>

      {/* Bottom spacer with texture */}
      <div className="mt-32 h-40 bg-gradient-to-b from-transparent to-warm-sand" />
    </section>
  );
}
