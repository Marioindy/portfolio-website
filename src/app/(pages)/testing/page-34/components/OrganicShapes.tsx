'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export function OrganicShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const shapes = containerRef.current.querySelectorAll('.morphing-shape');

    shapes.forEach((shape, index) => {
      gsap.to(shape, {
        y: Math.random() * 50 - 25,
        x: Math.random() * 50 - 25,
        rotation: Math.random() * 360,
        duration: 5 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      });
    });
  }, []);

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="relative py-32 px-6" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Living Forms
        </motion.h2>

        {/* Organic shape grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Cell',
              color: 'from-emerald-400 to-teal-500',
              path: 'M60,-65.5C75.3,-55.8,84.1,-35.9,86.7,-15.2C89.3,5.5,85.7,27,74.8,43.2C63.9,59.4,45.7,70.3,26.8,76.1C7.9,81.9,-11.7,82.6,-29.6,76.3C-47.5,70,-63.7,56.7,-72.8,39.8C-81.9,22.9,-83.9,2.4,-79.6,-15.7C-75.3,-33.8,-64.7,-49.5,-49.8,-59.4C-34.9,-69.3,-16.5,-73.4,2.5,-76.5C21.5,-79.6,44.7,-75.2,60,-65.5Z',
            },
            {
              title: 'Organism',
              color: 'from-teal-400 to-cyan-500',
              path: 'M55.8,-62.3C70.9,-52.3,81.1,-33.8,84.6,-14.2C88.1,5.4,84.9,26.1,74.2,42.5C63.5,58.9,45.3,71,26.3,76.8C7.3,82.6,-12.5,82.1,-30.8,75.5C-49.1,68.9,-65.9,56.2,-75.2,39.4C-84.5,22.6,-86.3,1.7,-82.4,-17.5C-78.5,-36.7,-68.9,-54.2,-54.2,-64.4C-39.5,-74.6,-19.8,-77.5,0.2,-77.7C20.2,-77.9,40.7,-72.3,55.8,-62.3Z',
            },
            {
              title: 'Growth',
              color: 'from-cyan-400 to-blue-500',
              path: 'M57.3,-59.8C72.9,-49.3,83.5,-31.3,86.4,-12.2C89.3,6.9,84.5,27.1,73.2,43.5C61.9,59.9,44.1,72.5,24.8,78.6C5.5,84.7,-15.3,84.3,-33.8,77.5C-52.3,70.7,-68.5,57.5,-76.8,40.5C-85.1,23.5,-85.5,2.7,-81.3,-17.1C-77.1,-36.9,-68.3,-55.7,-53.8,-66.5C-39.3,-77.3,-19.7,-80.1,-0.4,-79.6C18.9,-79.1,41.7,-70.3,57.3,-59.8Z',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={shapeVariants}
              className="relative group"
            >
              <div className="relative bg-white/60 backdrop-blur-lg rounded-[3rem] p-8 hover:bg-white/80 transition-all duration-500 border border-teal-200/50 hover:border-teal-300 overflow-hidden">
                {/* Morphing SVG shape */}
                <div className="flex justify-center mb-6 morphing-shape">
                  <svg
                    className="w-48 h-48 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id={`gradient-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          className={`${item.color.split(' ')[0].replace('from-', '')}`}
                          stopColor="currentColor"
                        />
                        <stop
                          offset="100%"
                          className={`${item.color.split(' ')[1].replace('to-', '')}`}
                          stopColor="currentColor"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      fill={`url(#gradient-${index})`}
                      d={item.path}
                      transform="translate(100 100)"
                      className={`text-transparent bg-gradient-to-br ${item.color}`}
                    />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-center mb-4 text-teal-800">
                  {item.title}
                </h3>
                <p className="text-center text-teal-600/80 leading-relaxed">
                  Flowing shapes that breathe and evolve, mimicking the organic
                  patterns found in nature's most elegant designs.
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-500 rounded-[3rem] pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating organic elements */}
        <div className="relative mt-32 h-64">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute morphing-shape"
              style={{
                left: `${(i * 12.5)}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            >
              <svg
                className="w-16 h-16 opacity-20"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={i % 2 === 0 ? '#10b981' : '#14b8a6'}
                  d="M60.3,-66.8C75.5,-56.3,83.6,-35.5,85.8,-14.5C88,6.5,84.3,27.7,74.1,45.2C63.9,62.7,47.2,76.5,28.1,82.5C9,88.5,-12.5,86.7,-31.7,79.5C-50.9,72.3,-67.8,59.7,-76.9,43C-86,26.3,-87.3,5.5,-83.1,-13.5C-78.9,-32.5,-69.2,-49.7,-54.8,-60.4C-40.4,-71.1,-20.2,-75.3,0.8,-76.3C21.8,-77.3,45.1,-77.3,60.3,-66.8Z"
                  transform="translate(100 100)"
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
