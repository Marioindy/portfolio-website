'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useFadeInStagger } from '@/hooks/useAnimation';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'GSAP', level: 85 },
      { name: 'Redux', level: 80 },
    ],
    icon: '🎨',
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 87 },
      { name: 'Express', level: 85 },
      { name: 'Convex', level: 82 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 83 },
      { name: 'GraphQL', level: 78 },
    ],
    icon: '⚙️',
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 72 },
      { name: 'Vercel', level: 88 },
      { name: 'Jest', level: 80 },
    ],
    icon: '🛠️',
  },
  {
    category: 'Design',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'UI/UX Design', level: 82 },
      { name: 'Responsive Design', level: 93 },
      { name: 'Accessibility', level: 88 },
      { name: 'Animation', level: 85 },
      { name: 'Wireframing', level: 80 },
    ],
    icon: '✨',
  },
];

export const SkillsGrid: React.FC = () => {
  const gridRef = useFadeInStagger({ stagger: 0.15 });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <Card key={category.category} variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <span>{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <Badge variant="secondary" size="sm">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <Card variant="bordered" padding="lg">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Additional Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Agile/Scrum',
                'REST APIs',
                'WebSockets',
                'PWAs',
                'SEO',
                'Performance Optimization',
                'Testing',
                'Code Review',
                'Technical Writing',
                'Team Leadership',
              ].map((skill) => (
                <Badge key={skill} variant="primary">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
