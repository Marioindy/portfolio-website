'use client';

import React, { useState, useEffect } from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import { BlogCard } from './BlogCard';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useFadeInStagger } from '@/hooks/useAnimation';
import { cn } from '@/utils/cn';

const POSTS_PER_PAGE = 9;

export const BlogGrid: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentCursor, setCurrentCursor] = useState<string | null>(null);
  const gridRef = useFadeInStagger({ stagger: 0.1 });

  // Fetch all tags
  const allTags = useQuery(api.blog.getAllTags);

  // Fetch paginated posts with filters
  const result = useQuery(api.blog.getPaginatedPosts, {
    paginationOpts: {
      numItems: POSTS_PER_PAGE,
      cursor: currentCursor,
    },
    searchQuery: searchQuery || undefined,
    tag: selectedTag || undefined,
  });

  // Reset pagination when search or tag changes
  useEffect(() => {
    setCurrentCursor(null);
  }, [searchQuery, selectedTag]);

  const handleLoadMore = () => {
    if (result?.continueCursor) {
      setCurrentCursor(result.continueCursor);
    }
  };

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
    setCurrentCursor(null);
  };

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
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
        {allTags && allTags.length > 0 && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <Badge
              variant={selectedTag === null ? 'primary' : 'secondary'}
              className={cn(
                'cursor-pointer transition-all hover:scale-105',
                selectedTag === null && 'ring-2 ring-primary ring-offset-2'
              )}
              onClick={() => handleTagClick(null)}
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
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Loading State */}
        {result === undefined && (
          <div className="flex justify-center py-20">
            <div className="text-center">
              <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
              <p className="text-muted-foreground">Loading posts...</p>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {result && result.posts.length > 0 ? (
          <>
            <div
              ref={gridRef}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {result.posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>

            {/* Results Info */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              Showing {result.posts.length} of {result.totalCount} posts
            </div>

            {/* Load More Button */}
            {!result.isDone && (
              <div className="mt-8 flex justify-center">
                <Button onClick={handleLoadMore} variant="primary" size="lg">
                  Load More Posts
                </Button>
              </div>
            )}
          </>
        ) : result && result.posts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No posts found matching your criteria.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
};
