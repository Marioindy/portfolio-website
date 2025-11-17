'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { usePageTransition } from '@/hooks/usePageTransition';
import { useFadeInStagger } from '@/hooks/useAnimation';

// Mock data - will be replaced with Convex data
const featuredProjects = [
  {
    _id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and admin dashboard.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    imageUrl: 'https://via.placeholder.com/400x300',
    liveUrl: 'https://example.com',
  },
  {
    _id: '2',
    title: 'Social Media Dashboard',
    description: 'Real-time analytics dashboard for social media management with data visualization.',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    imageUrl: 'https://via.placeholder.com/400x300',
    liveUrl: 'https://example.com',
  },
  {
    _id: '3',
    title: 'AI Chat Application',
    description: 'Intelligent chatbot application with natural language processing capabilities.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    imageUrl: 'https://via.placeholder.com/400x300',
    liveUrl: 'https://example.com',
  },
];

export const FeaturedProjects: React.FC = () => {
  const { navigate } = usePageTransition();
  const projectsRef = useFadeInStagger({ stagger: 0.2 });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Check out some of my recent work
          </p>
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <Card
              key={project._id}
              variant="elevated"
              className="group overflow-hidden transition-all hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                  💻
                </div>
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => navigate(`/projects`)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" onClick={() => navigate('/projects')}>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
