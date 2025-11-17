'use client';

import { useEffect, useRef } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Placeholder component when Convex is not configured
export function FeaturedProjects() {
  // For now, show placeholder until Convex is configured
  const projects: any[] = [];
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!projects || projects.length === 0) return;

    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate project cards
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          Array.from(cards),
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [projects]);

  // Show loading state
  if (projects === undefined) {
    return (
      <section ref={sectionRef} className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-96 bg-card border border-border rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Show empty state
  if (projects.length === 0) {
    return (
      <section ref={sectionRef} className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured Projects
          </h2>
          <div className="text-center">
            <p className="text-muted-foreground mb-8">
              No featured projects yet. Check back soon!
            </p>
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A selection of my recent work showcasing various technologies and
          design approaches.
        </p>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              id={project._id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              featured={project.featured}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold group"
          >
            View All Projects
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
