'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * EXECUTION:
 *
 * Grid-based layouts enforce discipline. Each element aligns to an invisible
 * structure—the skeleton that holds chaos at bay. Geometry is order made visible.
 *
 * Responsive scaling in minimalist design means maintaining proportions, not
 * just resizing. The relationship between elements matters more than their
 * absolute size. A 2:1 ratio on mobile is still 2:1 on desktop.
 *
 * CSS patterns over images. Code is lighter, sharper, infinitely scalable.
 * A border is 1px whether on a phone or a billboard. Vector thinking.
 */

interface GridItemProps {
  delay: number;
  pattern: 'solid' | 'outline' | 'line' | 'dot';
}

function GridItem({ delay, pattern }: GridItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const renderPattern = () => {
    switch (pattern) {
      case 'solid':
        return <div className="w-full h-full bg-black" />;
      case 'outline':
        return <div className="w-full h-full border-2 border-black" />;
      case 'line':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-px bg-black" />
          </div>
        );
      case 'dot':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full" />
          </div>
        );
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="aspect-square"
    >
      {renderPattern()}
    </motion.div>
  );
}

export function GeometricGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  const patterns: Array<'solid' | 'outline' | 'line' | 'dot'> = [
    'outline', 'line', 'solid', 'dot',
    'dot', 'solid', 'line', 'outline',
    'line', 'outline', 'dot', 'solid',
    'solid', 'dot', 'outline', 'line',
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-32 px-8" id="explore">
      <div className="container mx-auto max-w-6xl">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32"
        >
          <h2 className="text-7xl md:text-8xl font-black text-black mb-8 tracking-tighter">
            FORM
          </h2>
          <div className="w-24 h-px bg-black" />
        </motion.div>

        {/* Grid layout - 4 columns on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-32">
          {patterns.map((pattern, index) => (
            <GridItem key={index} delay={index * 0.05} pattern={pattern} />
          ))}
        </div>

        {/* Typography section with extreme negative space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-6xl font-black text-black leading-none mb-8">
              01
            </p>
            <h3 className="text-3xl font-light text-black mb-6">
              Constraint
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Limitation forces innovation. When color is removed, form must speak.
              When decoration is stripped away, structure reveals truth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-6xl font-black text-black leading-none mb-8">
              02
            </p>
            <h3 className="text-3xl font-light text-black mb-6">
              Clarity
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              High contrast eliminates ambiguity. Pure black and pure white create
              absolute distinction. The eye knows exactly where to focus.
            </p>
          </motion.div>
        </div>

        {/* Large geometric element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 aspect-video border-2 border-black relative overflow-hidden"
        >
          {/* Animated diagonal line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 w-full h-px bg-black origin-left"
            style={{ transform: 'rotate(30deg) translateY(50vh)' }}
          />

          {/* Corner elements */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-black" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-black" />
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 text-center"
        >
          <p className="text-2xl font-light text-black max-w-3xl mx-auto leading-relaxed">
            The beauty of nothing is that it makes room for everything that matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
