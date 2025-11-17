import React from 'react';
import { HeroSection } from './components/HeroSection';
import { FeaturedProjects } from './components/FeaturedProjects';

export const metadata = {
  title: 'Home | Portfolio',
  description: 'Welcome to my portfolio website showcasing my work and expertise',
};

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
    </div>
  );
}
