'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useFadeIn } from '@/hooks/useAnimation';
import { WaveAnimation } from './WaveAnimation';

export const BioSection: React.FC = () => {
  const bioRef = useFadeIn<HTMLDivElement>({ delay: 0.2 });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Wave Animation Background */}
      <WaveAnimation />

      <div className="mx-auto max-w-5xl relative z-10">
        <Card ref={bioRef} variant="elevated" padding="lg">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative h-48 w-48 overflow-hidden rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="h-full w-full rounded-full bg-background flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="mb-2 text-4xl font-bold text-foreground">About Me</h1>
                <p className="text-lg text-primary">Full-Stack Developer & Designer</p>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience
                  building modern web applications. I specialize in React, Next.js,
                  TypeScript, and Node.js, creating scalable and performant solutions.
                </p>
                <p>
                  My journey in web development started with a curiosity about how
                  things work on the internet. Since then, I've worked with startups
                  and established companies, helping them bring their ideas to life
                  through clean code and intuitive user experiences.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source
                  projects, writing technical blog posts, or exploring new technologies
                  and frameworks.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="sm" variant="outline">
                  Download Resume
                </Button>
                <Button size="sm" variant="outline">
                  View GitHub
                </Button>
                <Button size="sm" variant="outline">
                  LinkedIn Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">GitHub Contributions</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
