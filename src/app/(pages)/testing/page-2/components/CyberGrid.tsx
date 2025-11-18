'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CyberpunkCard } from './CyberpunkCard';
// import { useQuery } from 'convex/react';
// import { api } from '@/../convex/_generated/api';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GridItem {
  title: string;
  description: string;
  icon: 'cube' | 'pyramid' | 'prism';
  color: 'purple' | 'cyan' | 'mixed';
}

// Fallback static data if Convex is not available
const FALLBACK_DATA: GridItem[] = [
  {
    title: 'QUANTUM_CORE',
    description:
      'Advanced processing architecture with neon-infused quantum algorithms optimized for parallel reality computation.',
    icon: 'cube',
    color: 'purple',
  },
  {
    title: 'NEURAL_MESH',
    description:
      'Interconnected neural pathways forming a luminescent network of consciousness and data flow patterns.',
    icon: 'pyramid',
    color: 'cyan',
  },
  {
    title: 'CYBER_MATRIX',
    description:
      'Multi-dimensional data structures rendered through glassmorphic interfaces with real-time depth perception.',
    icon: 'prism',
    color: 'mixed',
  },
  {
    title: 'VOID_ENGINE',
    description:
      'Dark matter processing unit harnessing the space between pixels for computational transcendence.',
    icon: 'cube',
    color: 'cyan',
  },
  {
    title: 'NEON_FLUX',
    description:
      'Energy distribution system channeling electric purple wavelengths through crystalline data conduits.',
    icon: 'pyramid',
    color: 'purple',
  },
  {
    title: 'HOLO_SYNC',
    description:
      'Holographic synchronization protocol maintaining coherence across multiple reality layers simultaneously.',
    icon: 'prism',
    color: 'mixed',
  },
  {
    title: 'PLASMA_GRID',
    description:
      'Ionized interface framework generating electromagnetic fields that respond to user thought patterns.',
    icon: 'cube',
    color: 'purple',
  },
  {
    title: 'CRYSTAL_NODE',
    description:
      'Geometric data crystallization points forming fractal networks of information with cyan resonance.',
    icon: 'pyramid',
    color: 'cyan',
  },
  {
    title: 'PHASE_SHIFT',
    description:
      'Reality transition mechanics enabling smooth navigation between dimensional states and UI layers.',
    icon: 'prism',
    color: 'mixed',
  },
];

/**
 * CyberGrid - Main grid component with GSAP scroll animations
 * Displays CyberpunkCards in a staggered grid with Convex data integration
 */
export function CyberGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Attempt to fetch data from Convex (with fallback)
  // For now, we'll use fallback data directly
  // To enable Convex: uncomment the line below and ensure api.testing.getItems exists
  // const convexData = useQuery(api.testing?.getItems);
  const gridData: GridItem[] = FALLBACK_DATA;

  useEffect(() => {
    if (!gridRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger animation for grid items on scroll
      gsap.from('.cyber-card', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 100,
        rotateX: -30,
        stagger: {
          amount: 1.2,
          grid: 'auto',
          from: 'start',
        },
        duration: 0.8,
        ease: 'power3.out',
      });

      // Parallax effect for the grid section
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -50,
        ease: 'none',
      });
    });

    return () => ctx.revert();
  }, [gridData]);

  return (
    <section ref={sectionRef} className="relative py-24 px-6">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          style={{
            textShadow: '0 0 30px rgba(147, 51, 234, 0.5)',
          }}
        >
          SYSTEM_MODULES
        </h2>
        <p className="text-cyan-300/60 text-lg">
          Hover to reveal dimensional depth
        </p>
      </div>

      {/* Grid container */}
      <div
        ref={gridRef}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
      >
        {gridData.map((item, index) => (
          <div key={`${item.title}-${index}`} className="cyber-card">
            <CyberpunkCard
              title={item.title}
              description={item.description}
              icon={item.icon}
              color={item.color}
              delay={index * 0.1}
            />
          </div>
        ))}
      </div>

      {/* Bottom decorative elements */}
      <div className="mt-24 flex items-center justify-center gap-6">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="flex gap-2">
          <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
          <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse delay-75" />
          <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse delay-150" />
        </div>
        <div className="w-32 h-px bg-gradient-to-l from-transparent via-cyan-500 to-transparent" />
      </div>
    </section>
  );
}
