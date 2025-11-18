'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
// import { useQuery } from 'convex/react';
// import { api } from '../../../../../convex/_generated/api';

interface Project {
  _id: string;
  title: string;
  category: string;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  description: string;
}

// Fallback static projects in case Convex is not configured
const fallbackProjects: Project[] = [
  {
    _id: '1',
    title: 'Neon Dreams',
    category: 'Cyberpunk Interface',
    colorScheme: {
      primary: '#FF006E',
      secondary: '#00F0FF',
      accent: '#CCFF00',
    },
    description: 'Exploring retrofuturism through saturated color palettes',
  },
  {
    _id: '2',
    title: 'Electric Pulse',
    category: 'Motion Design',
    colorScheme: {
      primary: '#FF00FF',
      secondary: '#CCFF00',
      accent: '#FF006E',
    },
    description: 'Where chromatic vibration meets kinetic energy',
  },
  {
    _id: '3',
    title: 'Magenta Manifesto',
    category: 'Brand Identity',
    colorScheme: {
      primary: '#FF0080',
      secondary: '#9D00FF',
      accent: '#00F0FF',
    },
    description: 'Design rebellion against minimalist conformity',
  },
  {
    _id: '4',
    title: 'Cyan Chaos',
    category: 'Experimental UI',
    colorScheme: {
      primary: '#00F0FF',
      secondary: '#FF00FF',
      accent: '#FFFF00',
    },
    description: 'Controlled chaos through structural constraints',
  },
  {
    _id: '5',
    title: 'Lime Light',
    category: 'Interactive Art',
    colorScheme: {
      primary: '#CCFF00',
      secondary: '#FF006E',
      accent: '#0066FF',
    },
    description: 'Urgency created through pure wavelength saturation',
  },
  {
    _id: '6',
    title: 'Purple Haze',
    category: 'Digital Experience',
    colorScheme: {
      primary: '#9D00FF',
      secondary: '#FF1493',
      accent: '#00F0FF',
    },
    description: 'Hedonistic energy in visual form',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (cardRef.current && isHovered) {
      gsap.to(cardRef.current, {
        scale: 1.05,
        rotateY: 5,
        rotateX: -5,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [isHovered]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${project.colorScheme.primary}, ${project.colorScheme.secondary})`,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, ${project.colorScheme.accent}, ${project.colorScheme.primary})`,
        }}
        animate={
          isHovered
            ? {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }
            : {}
        }
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      {/* Chromatic aberration effect on hover */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${project.colorScheme.secondary}, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Category badge */}
        <div className="flex justify-between items-start">
          <motion.span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm"
            style={{
              backgroundColor: `${project.colorScheme.accent}33`,
              color: project.colorScheme.accent,
              border: `1px solid ${project.colorScheme.accent}`,
            }}
            animate={
              isHovered
                ? {
                    scale: [1, 1.1, 1],
                  }
                : {}
            }
            transition={{ duration: 1, repeat: Infinity }}
          >
            {project.category}
          </motion.span>

          {/* Pulsing indicator */}
          <motion.div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: project.colorScheme.accent }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Title and description */}
        <div className="space-y-4">
          <h3
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{
              color: '#FFFFFF',
              textShadow: `3px 3px 0 ${project.colorScheme.secondary}, -2px -2px 0 ${project.colorScheme.accent}`,
              transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
              transition: 'transform 0.3s ease-out',
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-lg font-medium leading-relaxed"
            style={{
              color: '#FFFFFF',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Hover indicator */}
        <motion.div
          className="flex items-center gap-2 text-white font-semibold"
          animate={
            isHovered
              ? {
                  x: [0, 10, 0],
                }
              : {}
          }
          transition={{ duration: 1, repeat: Infinity }}
        >
          <span>Explore</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </motion.div>
      </div>

      {/* Border glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `0 0 30px ${project.colorScheme.primary}, 0 0 60px ${project.colorScheme.secondary}, inset 0 0 30px ${project.colorScheme.accent}33`,
        }}
      />
    </motion.div>
  );
}

export function NeonProjectGridWithConvex() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: '-100px' });

  // Fetch projects from Convex
  // TODO: Uncomment when Convex is fully configured and types are regenerated
  // const convexProjects = useQuery(api.neonProjects.list);

  // Use Convex data if available, otherwise fallback to static data
  // const projects = convexProjects && convexProjects.length > 0
  //   ? convexProjects
  //   : fallbackProjects;
  const projects = fallbackProjects;

  useEffect(() => {
    if (isInView && gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.project-card');
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 100,
          rotateX: -30,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }
  }, [isInView]);

  return (
    <section className="relative py-32 px-4 md:px-8 lg:px-16">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-6"
          style={{
            background: 'linear-gradient(90deg, #FF006E, #00F0FF, #CCFF00, #FF00FF)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% auto',
          }}
        >
          SATURATED EXPERIMENTS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-neon-cyan font-semibold"
          style={{
            textShadow: '0 0 20px #00F0FF',
          }}
        >
          Projects where color psychology meets technical execution
        </motion.p>
      </div>

      {/* Grid of project cards */}
      <div
        ref={gridRef}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <div key={project._id} className="project-card">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none">
        <motion.div
          className="w-full h-full"
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #FF006E, #00F0FF, #CCFF00, #FF00FF, #FF006E)',
              filter: 'blur(100px)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
