'use client';

import React, { useState, useMemo } from 'react';
import { BlogCard } from './BlogCard';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { useFadeInStagger } from '@/hooks/useAnimation';
import { BlogPost } from '@/types';
import { cn } from '@/utils/cn';

// Mock data - will be replaced with Convex data
const mockBlogPosts: BlogPost[] = [
  {
    _id: '1',
    _creationTime: Date.now() - 86400000 * 5,
    title: 'Building Scalable Web Applications with Next.js 15',
    slug: 'building-scalable-web-apps-nextjs-15',
    excerpt:
      'Learn how to leverage Next.js 15 features to build high-performance, scalable web applications.',
    content: 'Full blog post content...',
    tags: ['Next.js', 'React', 'Web Development'],
    published: true,
    publishedAt: Date.now() - 86400000 * 5,
    readTime: 8,
    author: {
      name: 'John Doe',
    },
  },
  {
    _id: '2',
    _creationTime: Date.now() - 86400000 * 10,
    title: 'Mastering TypeScript: Advanced Patterns and Best Practices',
    slug: 'mastering-typescript-patterns',
    excerpt:
      'Dive deep into advanced TypeScript patterns that will level up your development skills.',
    content: 'Full blog post content...',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    published: true,
    publishedAt: Date.now() - 86400000 * 10,
    readTime: 12,
    author: {
      name: 'John Doe',
    },
  },
  {
    _id: '3',
    _creationTime: Date.now() - 86400000 * 15,
    title: 'GSAP Animation Cookbook: Creating Stunning Web Animations',
    slug: 'gsap-animation-cookbook',
    excerpt:
      'A comprehensive guide to creating beautiful, performant animations with GSAP.',
    content: 'Full blog post content...',
    tags: ['GSAP', 'Animation', 'Frontend'],
    published: true,
    publishedAt: Date.now() - 86400000 * 15,
    readTime: 10,
    author: {
      name: 'John Doe',
    },
  },
  {
    _id: '4',
    _creationTime: Date.now() - 86400000 * 20,
    title: 'Real-time Applications with Convex: A Complete Guide',
    slug: 'realtime-apps-convex-guide',
    excerpt:
      'Explore how Convex simplifies building real-time applications with its reactive architecture.',
    content: 'Full blog post content...',
    tags: ['Convex', 'Real-time', 'Backend'],
    published: true,
    publishedAt: Date.now() - 86400000 * 20,
    readTime: 15,
    author: {
      name: 'John Doe',
    },
  },
  {
    _id: '5',
    _creationTime: Date.now() - 86400000 * 25,
    title: 'CSS Grid and Flexbox: Modern Layout Techniques',
    slug: 'css-grid-flexbox-layouts',
    excerpt:
      'Master modern CSS layout techniques to create responsive, flexible designs.',
    content: 'Full blog post content...',
    tags: ['CSS', 'Layout', 'Frontend'],
    published: true,
    publishedAt: Date.now() - 86400000 * 25,
    readTime: 6,
    author: {
      name: 'John Doe',
    },
  },
  {
    _id: '6',
    _creationTime: Date.now() - 86400000 * 30,
    title: 'Optimizing React Performance: Tips and Tricks',
    slug: 'optimizing-react-performance',
    excerpt:
      'Practical tips for optimizing React applications and improving user experience.',
    content: 'Full blog post content...',
    tags: ['React', 'Performance', 'Optimization'],
    published: true,
    publishedAt: Date.now() - 86400000 * 30,
    readTime: 9,
    author: {
      name: 'John Doe',
    },
  },
];

export const BlogGrid: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const gridRef = useFadeInStagger({ stagger: 0.1 });

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    mockBlogPosts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter posts based on search and tag
  const filteredPosts = useMemo(() => {
    return mockBlogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTag = !selectedTag || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">Blog</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Thoughts, tutorials, and insights on web development
          </p>

          {/* Search */}
          <div className="mx-auto max-w-md">
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Tags Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <Badge
            variant={selectedTag === null ? 'primary' : 'secondary'}
            className={cn(
              'cursor-pointer transition-all hover:scale-105',
              selectedTag === null && 'ring-2 ring-primary ring-offset-2'
            )}
            onClick={() => setSelectedTag(null)}
          >
            All Posts
          </Badge>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? 'primary' : 'secondary'}
              className={cn(
                'cursor-pointer transition-all hover:scale-105',
                selectedTag === tag && 'ring-2 ring-primary ring-offset-2'
              )}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No posts found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
