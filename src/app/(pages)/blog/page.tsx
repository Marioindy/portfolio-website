import React from 'react';
import { BlogGrid } from './components/BlogGrid';

export const metadata = {
  title: 'Blog | Portfolio',
  description: 'Read my latest articles on web development, design, and technology',
};

// Force dynamic rendering for this page since it uses Convex queries
export const dynamic = 'force-dynamic';

export default function BlogPage() {
  return (
    <div>
      <BlogGrid />
    </div>
  );
}
