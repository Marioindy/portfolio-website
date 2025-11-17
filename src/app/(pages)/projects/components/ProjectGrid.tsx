'use client';

import React, { useState, useMemo } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';
import { useFadeInStagger } from '@/hooks/useAnimation';
import { Project } from '@/types';

// Mock data - will be replaced with Convex data
const mockProjects: Project[] = [
  {
    _id: '1',
    _creationTime: Date.now(),
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and admin dashboard.',
    longDescription: 'Comprehensive e-commerce solution built with modern technologies...',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    category: 'Web App',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    order: 1,
  },
  {
    _id: '2',
    _creationTime: Date.now(),
    title: 'Social Media Dashboard',
    description: 'Real-time analytics dashboard for social media management.',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    category: 'Dashboard',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    order: 2,
  },
  {
    _id: '3',
    _creationTime: Date.now(),
    title: 'AI Chat Application',
    description: 'Intelligent chatbot with natural language processing.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    category: 'AI/ML',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
    order: 3,
  },
  {
    _id: '4',
    _creationTime: Date.now(),
    title: 'Task Management Tool',
    description: 'Collaborative task management with real-time updates.',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
    category: 'Productivity',
    githubUrl: 'https://github.com',
    featured: false,
    order: 4,
  },
  {
    _id: '5',
    _creationTime: Date.now(),
    title: 'Portfolio Generator',
    description: 'Dynamic portfolio website generator with customizable themes.',
    tags: ['Next.js', 'Convex', 'GSAP'],
    category: 'Tool',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
    order: 5,
  },
  {
    _id: '6',
    _creationTime: Date.now(),
    title: 'Weather Forecast App',
    description: 'Beautiful weather app with detailed forecasts and maps.',
    tags: ['React Native', 'OpenWeather API', 'Redux'],
    category: 'Mobile',
    liveUrl: 'https://example.com',
    featured: false,
    order: 6,
  },
];

export const ProjectGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const gridRef = useFadeInStagger({ stagger: 0.1 });

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(mockProjects.map((p) => p.category));
    return Array.from(cats);
  }, []);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return mockProjects;
    }
    return mockProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">My Projects</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Explore my portfolio of web applications, tools, and experiments
          </p>

          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
