'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * CINEMATIC PROJECT GRID
 *
 * Film-noir inspired portfolio grid:
 * - Default: Desaturated, grayscale (20% saturation)
 * - Hover: Full color blooms like life returning to the frame
 * - Transition: 600ms (the exact length of a cinematic breath)
 *
 * Masonry Layout Philosophy:
 * Like frames in a contact sheet, each with different aspect ratios.
 * The asymmetry creates visual rhythm—syncopated, like jazz.
 *
 * Overlay Typography:
 * Text emerges only on hover, like credits over a freeze frame.
 */

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  span: 'small' | 'medium' | 'large'; // Grid span for masonry effect
}

// Mock cinematic projects (In production, fetch from Convex)
const CINEMATIC_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Chiaroscuro',
    category: 'Visual Study',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    description: 'An exploration of light and shadow in digital space',
    span: 'large',
  },
  {
    id: '2',
    title: 'Silence',
    category: 'Interface Design',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    description: 'The luxury of emptiness',
    span: 'medium',
  },
  {
    id: '3',
    title: 'Nocturne',
    category: 'Digital Experience',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
    description: 'Night as narrative device',
    span: 'small',
  },
  {
    id: '4',
    title: 'Mise en Scène',
    category: 'Layout System',
    imageUrl: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&q=80',
    description: 'Every element placed with intention',
    span: 'medium',
  },
  {
    id: '5',
    title: 'The Long Take',
    category: 'Interaction Design',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    description: 'Unbroken scrolling experiences',
    span: 'large',
  },
  {
    id: '6',
    title: 'Depth of Field',
    category: 'Visual Hierarchy',
    imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80',
    description: 'Focus as a storytelling tool',
    span: 'small',
  },
];

export function ProjectGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
    const ctx = gsap.context(() => {
      // Staggered reveal animation
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
  }, []);

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
            A curated collection of projects where design meets narrative.
            Hover to reveal the story.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          {CINEMATIC_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHoverStart={() => setHoveredId(project.id)}
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

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  mouseX: any;
  mouseY: any;
  index: number;
}

function ProjectCard({
  project,
  isHovered,
  onHoverStart,
  onHoverEnd,
  mouseX,
  mouseY,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Determine grid span based on project.span
  const spanClass = {
    small: 'md:col-span-1 md:row-span-1',
    medium: 'md:col-span-1 md:row-span-2',
    large: 'md:col-span-2 md:row-span-1',
  }[project.span];

  return (
    <motion.div
      ref={cardRef}
      className={`project-card relative overflow-hidden cursor-pointer group ${spanClass}`}
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
            backgroundImage: `url(${project.imageUrl})`,
            filter: isHovered
              ? 'grayscale(0%) saturate(120%) brightness(1.1)'
              : 'grayscale(80%) saturate(20%) brightness(0.7)',
          }}
        />
      </motion.div>

      {/* Overlay Gradient (always present, intensifies on hover) */}
      <div
        className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-[600ms] ${
          isHovered
            ? 'from-black/90 via-black/40 to-transparent opacity-100'
            : 'from-black/60 via-black/20 to-transparent opacity-80'
        }`}
      />

      {/* Content Layer (reveals on hover) */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Category - Small, tracked */}
          <div
            className="text-xs tracking-[0.2em] uppercase mb-3 opacity-70"
            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
          >
            {project.category}
          </div>

          {/* Title - Large serif */}
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

        {/* Permanent label (visible even when not hovered) */}
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
    </motion.div>
  );
}
