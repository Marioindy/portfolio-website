/**
 * Global TypeScript type definitions
 */

export interface Project {
  _id: string;
  _creationTime: number;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  tags: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
}

export interface BlogPost {
  _id: string;
  _creationTime: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl?: string;
  tags: string[];
  published: boolean;
  publishedAt?: number;
  readTime: number;
  author: {
    name: string;
    avatarUrl?: string;
  };
}

export interface Skill {
  _id: string;
  name: string;
  category: string;
  level: number;
  icon?: string;
}

export interface ContactSubmission {
  _id: string;
  _creationTime: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
}

export interface PageContent {
  _id: string;
  page: string;
  section: string;
  content: Record<string, unknown>;
  updatedAt: number;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export type Theme = 'light' | 'dark' | 'system';

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}
