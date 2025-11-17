import React from 'react';
import { BlogGrid } from './components/BlogGrid';

export const metadata = {
  title: 'Blog | Portfolio',
  description: 'Read my latest articles on web development, design, and technology',
};

export default function BlogPage() {
  return (
    <div>
      <BlogGrid />
    </div>
  );
}
