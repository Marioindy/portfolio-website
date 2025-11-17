'use client';

import React from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useFadeInStagger } from '@/hooks/useAnimation';

interface Skill {
  _id: string;
  name: string;
  category: string;
  level: number;
  icon?: string;
}

const categoryIcons: Record<string, string> = {
  Frontend: '🎨',
  Backend: '⚙️',
  'Tools & DevOps': '🛠️',
  Design: '✨',
};

export const SkillsGridWithConvex: React.FC = () => {
  const gridRef = useFadeInStagger({ stagger: 0.15 });
  const skillsGrouped = useQuery(api.skills.getAllSkillsGrouped);

  // Show loading state
  if (skillsGrouped === undefined) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} variant="elevated">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary animate-pulse rounded" />
                    <div className="w-32 h-6 bg-secondary animate-pulse rounded" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5, 6].map((j) => (
                      <div key={j} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="w-24 h-4 bg-secondary animate-pulse rounded" />
                          <div className="w-12 h-5 bg-secondary animate-pulse rounded" />
                        </div>
                        <div className="h-2 bg-secondary animate-pulse rounded-full" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Convert grouped skills to array format for rendering
  const skillCategories = Object.entries(skillsGrouped).map(([category, skills]) => ({
    category,
    skills: skills as Skill[],
    icon: categoryIcons[category] || '📚',
  }));

  // If no skills, show empty state
  if (skillCategories.length === 0) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              No skills data available yet. Run the seed function to populate skills.
            </p>
          </div>
        </div>
      </section>
    );
  }

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
                    <div key={skill._id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground flex items-center gap-2">
                          {skill.icon && <span className="text-base">{skill.icon}</span>}
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
