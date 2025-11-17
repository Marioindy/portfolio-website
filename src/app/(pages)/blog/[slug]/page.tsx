'use client';

import React, { useEffect, useRef } from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import { useParams, useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/utils/convex-helpers';
import { fadeIn, fadeInStagger } from '@/utils/animations';
import { usePageTransition } from '@/hooks/usePageTransition';
import { MarkdownRenderer } from '@/components/shared/MarkdownRenderer';

const BlogPostPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const { navigate } = usePageTransition();
  const slug = params?.slug as string;

  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);

  // Fetch the blog post
  const post = useQuery(api.blog.getPostBySlug, { slug });

  // Fetch related posts if we have a post
  const relatedPosts = useQuery(
    api.blog.getRelatedPosts,
    post?._id ? { postId: post._id, limit: 3 } : 'skip'
  );

  // GSAP animations
  useEffect(() => {
    if (post && headerRef.current) {
      fadeIn(headerRef.current, { delay: 0.2 });
    }
    if (post && contentRef.current) {
      fadeIn(contentRef.current, { delay: 0.4 });
    }
    if (relatedPosts && relatedPosts.length > 0 && relatedRef.current) {
      const cards = relatedRef.current.querySelectorAll('.related-card');
      fadeInStagger(cards, { delay: 0.6 });
    }
  }, [post, relatedPosts]);

  if (post === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="text-muted-foreground">Loading post...</p>
        </div>
      </div>
    );
  }

  if (post === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Post Not Found</h1>
          <p className="mb-8 text-muted-foreground">
            The blog post you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div
        ref={headerRef}
        className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-background px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/blog')}
            className="mb-6"
          >
            ← Back to Blog
          </Button>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center space-x-2">
              {post.author.avatarUrl ? (
                <img
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold">
                  {post.author.name.charAt(0)}
                </div>
              )}
              <span className="font-medium text-foreground">
                {post.author.name}
              </span>
            </div>
            <span>•</span>
            <span>{formatDate(post.publishedAt || post._creationTime)}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {post.coverImageUrl && (
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-12 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={post.coverImageUrl}
              alt={post.title}
              className="h-auto w-full object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div
        ref={contentRef}
        className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <MarkdownRenderer content={post.content} className="mx-auto" />
      </div>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div
          ref={relatedRef}
          className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-3xl font-bold text-foreground">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost._id}
                  className="related-card group cursor-pointer overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:scale-105 hover:shadow-lg"
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                >
                  <div className="mb-3 flex flex-wrap gap-2">
                    {relatedPost.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {relatedPost.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>
                      {formatDate(
                        relatedPost.publishedAt || relatedPost._creationTime
                      )}
                    </span>
                    <span>•</span>
                    <span>{relatedPost.readTime} min read</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogPostPage;
