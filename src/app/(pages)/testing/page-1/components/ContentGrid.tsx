'use client';

import { useEffect, useRef } from 'react';
import FrostedGlassCard from './FrostedGlassCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// [REFINEMENT] Optional Convex integration
// Uncomment below when Convex is running:
// import { useQuery } from 'convex/react';
// import { api } from '../../../../../convex/_generated/api';

/**
 * [CONCEPT] ContentGrid: Asymmetrical Balance with Purpose
 *
 * 3 columns desktop → 1 column mobile
 * Each card a window into layered digital space
 * Dynamic data from Convex adds living quality to static design
 */
export default function ContentGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // [REFINEMENT] Fetch dynamic content from Convex (when enabled)
  // const projects = useQuery(api.projects.getProjects);
  const projects = null; // Set to null when Convex is not running

  useEffect(() => {
    if (!titleRef.current) return;

    const ctx = gsap.context(() => {
      // Section title reveal
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // [CONCEPT] Content showcasing design philosophy
  // When Convex is enabled, replace with: projects?.slice(0, 3).map(...)
  const contentItems = [
    {
      title: 'Scale as Emotion',
      description:
        'Typography at 16rem isn\'t decoration—it\'s architectural intention. When letterforms consume the viewport, they cease being text and become landscape.',
      category: 'Design Philosophy',
    },
    {
      title: 'Kinetic Storytelling',
      description:
        'GSAP transforms static layouts into temporal narratives. Stagger creates rhythm. ScrollTrigger authors chapters. Exit animations honor departure.',
      category: 'Motion Design',
    },
    {
      title: 'Layered Reality',
      description:
        'Frosted glass suggests depth without traditional z-axis. Information floats. Blur implies mystery; clarity reveals purpose. Digital stratification.',
      category: 'Spatial Design',
    },
  ];

  // Suppress unused variable warning for projects
  void projects;

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-32 md:px-12 lg:py-40"
    >
      {/* [VISION] Section Title - Bold but not dominating */}
      <h2
        ref={titleRef}
        className="mb-16 font-serif text-5xl font-black text-white md:text-7xl lg:text-8xl"
        style={{
          letterSpacing: '-0.03em',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        Explorations
      </h2>

      {/* [ITERATION] Responsive Grid: 3-col → 1-col */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {contentItems.map((item: { title: string; description: string; category: string }, index: number) => (
          <FrostedGlassCard key={index} delay={index * 0.15}>
            {/* Category Badge */}
            <div className="mb-4 inline-block rounded-full bg-[#FF6B35]/20 px-4 py-1.5 text-sm font-medium text-[#FF6B35]">
              {item.category}
            </div>

            {/* Card Title */}
            <h3 className="mb-4 font-serif text-3xl font-bold text-white">
              {item.title}
            </h3>

            {/* Card Description */}
            <p className="font-sans text-base leading-relaxed text-white/80">
              {item.description}
            </p>

            {/* [CRITIQUE] Subtle divider for visual hierarchy */}
            <div className="mt-6 h-px bg-gradient-to-r from-white/20 to-transparent" />

            {/* Interactive element - demonstrates micro-interactions */}
            <button
              className="group/btn mt-6 inline-flex items-center gap-2 font-medium text-white/90 transition-colors hover:text-[#FF6B35]"
              onClick={() => {
                console.log(`[INTERACTION] Clicked: ${item.title}`);
              }}
            >
              <span>Explore deeper</span>
              <svg
                className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </FrostedGlassCard>
        ))}
      </div>

      {/* [REFINEMENT] Additional row for asymmetrical balance */}
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <FrostedGlassCard delay={0.45} className="md:col-span-2 lg:col-span-1">
          <h3 className="mb-4 font-serif text-3xl font-bold text-white">
            Orange as Dominance
          </h3>
          <p className="font-sans text-base leading-relaxed text-white/80">
            #FF6B35 exists between warmth and energy. Against deep purple, it
            creates tension—hot vs. cold, immediate vs. infinite. This isn't
            decoration; it's emotional choreography.
          </p>
        </FrostedGlassCard>

        <FrostedGlassCard delay={0.6} className="md:col-span-2 lg:col-span-1">
          <h3 className="mb-4 font-serif text-3xl font-bold text-white">
            Purpose-Driven Design
          </h3>
          <p className="font-sans text-base leading-relaxed text-white/80">
            Every element earns its space. Negative space becomes active.
            Asymmetry leads the eye with intention. Minimalism feels maximal
            because nothing is arbitrary.
          </p>
        </FrostedGlassCard>
      </div>
    </section>
  );
}
