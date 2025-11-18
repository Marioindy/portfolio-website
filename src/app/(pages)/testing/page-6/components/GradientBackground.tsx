'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function GradientBackground() {
  const { scrollYProgress } = useScroll();

  // Transform scroll position to gradient colors
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      'linear-gradient(135deg, #FFE5D9 0%, #E8D5F2 50%, #D5F2E3 100%)',
      'linear-gradient(135deg, #D5E8F2 0%, #FFD5E5 50%, #FFF4D9 100%)',
      'linear-gradient(135deg, #E5DEFF 0%, #E3F2E1 50%, #FFE5D9 100%)',
      'linear-gradient(135deg, #D5F2E3 0%, #D5E8F2 50%, #E8D5F2 100%)',
    ]
  );

  return (
    <motion.div
      className="fixed inset-0 -z-20"
      style={{
        background: backgroundColor as any,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
}

export function StaticGradientBackground() {
  return (
    <div className="fixed inset-0 -z-20 bg-gradient-to-br from-pastel-peach via-pastel-lavender to-pastel-mint">
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
    </div>
  );
}
