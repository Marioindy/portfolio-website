'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { useFadeInStagger } from '@/hooks/useAnimation';

interface TechItem {
  name: string;
  icon: string;
  description: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design';
}

const techStack: TechItem[] = [
  // Frontend
  {
    name: 'React & Next.js',
    icon: '⚛️',
    description: 'Building dynamic, server-rendered applications with the latest React features',
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    icon: '📘',
    description: 'Type-safe development for robust and maintainable code',
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: '🎨',
    description: 'Utility-first CSS framework for rapid UI development',
    category: 'frontend',
  },
  {
    name: 'GSAP',
    icon: '✨',
    description: 'Professional-grade animations and interactive experiences',
    category: 'frontend',
  },
  // Backend
  {
    name: 'Node.js',
    icon: '🟢',
    description: 'Scalable backend services and API development',
    category: 'backend',
  },
  {
    name: 'Convex',
    icon: '🔷',
    description: 'Real-time backend with type-safe database and queries',
    category: 'backend',
  },
  {
    name: 'Express',
    icon: '🚂',
    description: 'Fast, minimalist web framework for Node.js',
    category: 'backend',
  },
  // Database
  {
    name: 'PostgreSQL',
    icon: '🐘',
    description: 'Powerful, open-source relational database',
    category: 'database',
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    description: 'Flexible NoSQL database for modern applications',
    category: 'database',
  },
  // Tools
  {
    name: 'Git & GitHub',
    icon: '📦',
    description: 'Version control and collaborative development',
    category: 'tools',
  },
  {
    name: 'Docker',
    icon: '🐳',
    description: 'Containerization for consistent deployment environments',
    category: 'tools',
  },
  {
    name: 'Vercel',
    icon: '▲',
    description: 'Modern deployment platform for web applications',
    category: 'tools',
  },
  // Design
  {
    name: 'Figma',
    icon: '🎭',
    description: 'Collaborative interface design and prototyping',
    category: 'design',
  },
];

const categoryColors = {
  frontend: 'from-blue-500/20 to-cyan-500/20',
  backend: 'from-green-500/20 to-emerald-500/20',
  database: 'from-purple-500/20 to-pink-500/20',
  tools: 'from-orange-500/20 to-yellow-500/20',
  design: 'from-rose-500/20 to-red-500/20',
};

export const TechStack: React.FC = () => {
  const gridRef = useFadeInStagger<HTMLDivElement>({ stagger: 0.08 });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern technologies and tools I use to build scalable, performant, and
            beautiful applications
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {techStack.map((tech) => (
            <Card
              key={tech.name}
              variant="elevated"
              className="group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[tech.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech philosophy */}
        <div className="mt-16">
          <Card variant="bordered" padding="lg" className="bg-gradient-to-br from-primary/5 to-transparent">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                My Development Philosophy
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I believe in choosing the right tool for the job, writing clean and maintainable
                code, and staying up-to-date with industry best practices. My focus is on creating
                solutions that are not only functional but also scalable, accessible, and
                delightful to use.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-foreground">
                  Clean Code
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-foreground">
                  Performance First
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-foreground">
                  User-Centric Design
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-foreground">
                  Continuous Learning
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
