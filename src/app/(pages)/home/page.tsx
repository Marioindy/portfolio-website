import type { Metadata } from 'next';
import { HeroSection } from './components/HeroSection';
import { FeaturedProjects } from './components/FeaturedProjects';

export const metadata: Metadata = {
  title: 'Home | Full Stack Developer Portfolio',
  description:
    'Welcome to my portfolio showcasing modern web development projects, cutting-edge technologies, and innovative solutions.',
  openGraph: {
    title: 'Home | Full Stack Developer Portfolio',
    description:
      'Welcome to my portfolio showcasing modern web development projects, cutting-edge technologies, and innovative solutions.',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProjects />
    </div>
  );
}
