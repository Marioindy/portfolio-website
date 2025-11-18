'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export function BiomorphicHero() {
  const blobRef = useRef<SVGPathElement>(null);
  const blob2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!blobRef.current || !blob2Ref.current) return;

    // Animate blob morphing with GSAP
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(blobRef.current, {
      attr: {
        d: 'M60,-65.5C75.3,-55.8,84.1,-35.9,86.7,-15.2C89.3,5.5,85.7,27,74.8,43.2C63.9,59.4,45.7,70.3,26.8,76.1C7.9,81.9,-11.7,82.6,-29.6,76.3C-47.5,70,-63.7,56.7,-72.8,39.8C-81.9,22.9,-83.9,2.4,-79.6,-15.7C-75.3,-33.8,-64.7,-49.5,-49.8,-59.4C-34.9,-69.3,-16.5,-73.4,2.5,-76.5C21.5,-79.6,44.7,-75.2,60,-65.5Z',
      },
      duration: 4,
      ease: 'sine.inOut',
    });

    tl.to(
      blob2Ref.current,
      {
        attr: {
          d: 'M55.8,-62.3C70.9,-52.3,81.1,-33.8,84.6,-14.2C88.1,5.4,84.9,26.1,74.2,42.5C63.5,58.9,45.3,71,26.3,76.8C7.3,82.6,-12.5,82.1,-30.8,75.5C-49.1,68.9,-65.9,56.2,-75.2,39.4C-84.5,22.6,-86.3,1.7,-82.4,-17.5C-78.5,-36.7,-68.9,-54.2,-54.2,-64.4C-39.5,-74.6,-19.8,-77.5,0.2,-77.7C20.2,-77.9,40.7,-72.3,55.8,-62.3Z',
        },
        duration: 4,
        ease: 'sine.inOut',
      },
      '<'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute top-1/4 -left-20 w-96 h-96 opacity-30"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={blobRef}
            fill="url(#gradient1)"
            d="M57.3,-59.8C72.9,-49.3,83.5,-31.3,86.4,-12.2C89.3,6.9,84.5,27.1,73.2,43.5C61.9,59.9,44.1,72.5,24.8,78.6C5.5,84.7,-15.3,84.3,-33.8,77.5C-52.3,70.7,-68.5,57.5,-76.8,40.5C-85.1,23.5,-85.5,2.7,-81.3,-17.1C-77.1,-36.9,-68.3,-55.7,-53.8,-66.5C-39.3,-77.3,-19.7,-80.1,-0.4,-79.6C18.9,-79.1,41.7,-70.3,57.3,-59.8Z"
            transform="translate(100 100)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 100 100"
              to="360 100 100"
              dur="40s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute bottom-1/4 -right-20 w-96 h-96 opacity-30"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={blob2Ref}
            fill="url(#gradient2)"
            d="M60.3,-66.8C75.5,-56.3,83.6,-35.5,85.8,-14.5C88,6.5,84.3,27.7,74.1,45.2C63.9,62.7,47.2,76.5,28.1,82.5C9,88.5,-12.5,86.7,-31.7,79.5C-50.9,72.3,-67.8,59.7,-76.9,43C-86,26.3,-87.3,5.5,-83.1,-13.5C-78.9,-32.5,-69.2,-49.7,-54.8,-60.4C-40.4,-71.1,-20.2,-75.3,0.8,-76.3C21.8,-77.3,45.1,-77.3,60.3,-66.8Z"
            transform="translate(100 100)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 100 100"
              to="0 100 100"
              dur="35s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Biomorphic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl text-teal-800/80 mb-12 font-light"
        >
          Organic forms inspired by living organisms
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative bg-white/80 backdrop-blur-sm px-12 py-6 rounded-full border-2 border-teal-200 hover:border-teal-400 transition-all duration-500 group-hover:scale-105">
              <span className="text-xl font-medium bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Explore Organic Design
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-teal-400/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * (window.innerWidth || 1200),
              y: Math.random() * (window.innerHeight || 800),
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  );
}
