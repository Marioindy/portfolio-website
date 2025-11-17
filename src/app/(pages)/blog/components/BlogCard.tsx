'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BlogPost } from '@/types';
import { formatDate } from '@/utils/convex-helpers';
import { usePageTransition } from '@/hooks/usePageTransition';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { navigate } = usePageTransition();

  const handleClick = () => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <Card
      variant="elevated"
      className="group h-full cursor-pointer overflow-hidden transition-all hover:scale-105"
      onClick={handleClick}
    >
      {/* Cover Image */}
      {post.coverImageUrl ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.coverImageUrl}
            alt={post.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
      ) : (
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20">
            📝
          </div>
        </div>
      )}

      <CardHeader>
        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
          <span>{formatDate(post.publishedAt || post._creationTime)}</span>
          <span>•</span>
          <span>{post.readTime} min read</span>
        </div>
        <CardTitle className="line-clamp-2 transition-colors group-hover:text-primary">
          {post.title}
        </CardTitle>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag: string) => (
            <Badge key={tag} variant="secondary" size="sm">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge variant="secondary" size="sm">
              +{post.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-2">
            {post.author.avatarUrl ? (
              <img
                src={post.author.avatarUrl}
                alt={post.author.name}
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm">
                {post.author.name.charAt(0)}
              </div>
            )}
            <span className="text-sm text-muted-foreground">
              {post.author.name}
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleClick}>
            Read More →
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
