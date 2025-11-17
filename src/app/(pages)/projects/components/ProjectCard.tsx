'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      variant="elevated"
      className="group h-full overflow-hidden transition-all hover:scale-105"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20">
            💻
          </div>
        )}
        {project.featured && (
          <div className="absolute right-4 top-4">
            <Badge variant="default">Featured</Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="transition-colors group-hover:text-primary">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex w-full gap-2">
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
