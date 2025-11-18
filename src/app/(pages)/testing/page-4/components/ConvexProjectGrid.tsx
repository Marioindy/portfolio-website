'use client';

import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * CONVEX-INTEGRATED CINEMATIC PROJECT GRID
 *
 * This version fetches real project data from Convex database.
 * Maintains the same cinematic aesthetic while connecting to live data.
 *
 * Features:
 * - Real-time project data from Convex
 * - Grayscale to color transitions on hover
 * - Responsive masonry grid layout
 * - GSAP scroll-triggered animations
 * - Film-noir inspired overlays
 */

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  category?: string;
  tags: string[];
  featured: boolean;
}

export function ConvexProjectGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Fetch projects from Convex
  const projects = useQuery(api.projects.getProjects);

  // Smooth mouse tracking for subtle parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!projects || projects.length === 0) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              end: 'top 30%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, gridRef);

    return () => ctx.revert();
  }, [projects]);

  // Loading state
  if (!projects) {
    return (
      <section className="relative py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-lg opacity-60 animate-pulse">
            Loading cinematic projects...
          </div>
        </div>
      </section>
    );
  }

  // Empty state
  if (projects.length === 0) {
    return (
      <section className="relative py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-lg opacity-60">
            No projects found. The canvas awaits.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2
            className="text-4xl md:text-6xl font-light mb-4"
            style={{ fontFamily: 'Georgia, Garamond, serif' }}
          >
            Selected Works
          </h2>
          <p className="text-base md:text-lg opacity-60 max-w-2xl mx-auto">
            A curated collection from the archive. Hover to reveal the story.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ConvexProjectCard
              key={project._id}
              project={project}
              isHovered={hoveredId === project._id}
              onHoverStart={() => setHoveredId(project._id)}
              onHoverEnd={() => setHoveredId(null)}
              mouseX={smoothMouseX}
              mouseY={smoothMouseY}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ConvexProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  mouseX: any;
  mouseY: any;
  index: number;
}

function ConvexProjectCard({
  project,
  isHovered,
  onHoverStart,
  onHoverEnd,
  mouseX,
  mouseY,
}: ConvexProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Use featured status or index to determine card height variation
  const heightClass = project.featured ? 'h-[500px]' : 'h-[350px]';

  // Fallback image if none provided
  const imageUrl =
    project.imageUrl ||
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80';

  return (
    <motion.div
      ref={cardRef}
      className={`project-card relative overflow-hidden cursor-pointer group ${heightClass}`}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      initial={{ opacity: 0 }}
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.19, 1.0, 0.22, 1.0] }}
    >
      {/* Image Layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      >
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-[600ms] ease-out"
          style={{
            backgroundImage: `url(${imageUrl})`,
            filter: isHovered
              ? 'grayscale(0%) saturate(120%) brightness(1.1)'
              : 'grayscale(80%) saturate(20%) brightness(0.7)',
          }}
        />
      </motion.div>

      {/* Overlay Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-[600ms] ${
          isHovered
            ? 'from-black/90 via-black/40 to-transparent opacity-100'
            : 'from-black/60 via-black/20 to-transparent opacity-80'
        }`}
      />

      {/* Content Layer */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Category */}
          {project.category && (
            <div className="text-xs tracking-[0.2em] uppercase mb-3 opacity-70">
              {project.category}
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-white/10 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3
            className="text-3xl md:text-4xl font-light mb-3 leading-tight"
            style={{ fontFamily: 'Georgia, Garamond, serif' }}
          >
            {project.title}
          </h3>

          {/* Divider */}
          <motion.div
            className="h-[1px] bg-white mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Description */}
          <p className="text-sm md:text-base opacity-80 leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Permanent label */}
        <motion.div
          className="absolute bottom-8 left-8"
          animate={{
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <h4
            className="text-xl md:text-2xl font-light"
            style={{ fontFamily: 'Georgia, Garamond, serif' }}
          >
            {project.title}
          </h4>
        </motion.div>
      </div>

      {/* Film frame edge effect */}
      <div className="absolute inset-0 border border-white/10 pointer-events-none" />

      {/* Featured indicator */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20">
          <div className="text-xs tracking-[0.3em] uppercase px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20">
            Featured
          </div>
        </div>
      )}
    </motion.div>
  );
}
