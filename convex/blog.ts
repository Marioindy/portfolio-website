import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

/**
 * Get all published blog posts with pagination and filtering
 */
export const getPaginatedPosts = query({
  args: {
    paginationOpts: v.object({
      numItems: v.number(),
      cursor: v.union(v.string(), v.null()),
    }),
    searchQuery: v.optional(v.string()),
    tag: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let query = ctx.db
      .query('blogPosts')
      .withIndex('by_published', (q) => q.eq('published', true))
      .order('desc');

    // Get all results for filtering
    let posts = await query.collect();

    // Apply search filter
    if (args.searchQuery && args.searchQuery.trim() !== '') {
      const searchLower = args.searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.tags.some((tag: string) => tag.toLowerCase().includes(searchLower))
      );
    }

    // Apply tag filter
    if (args.tag && args.tag.trim() !== '') {
      posts = posts.filter((post) => post.tags.includes(args.tag));
    }

    // Manual pagination
    const { numItems, cursor } = args.paginationOpts;
    let startIndex = 0;

    if (cursor) {
      startIndex = posts.findIndex((post) => post._id === cursor) + 1;
    }

    const paginatedPosts = posts.slice(startIndex, startIndex + numItems);
    const hasMore = startIndex + numItems < posts.length;
    const nextCursor = hasMore ? paginatedPosts[paginatedPosts.length - 1]._id : null;

    return {
      posts: paginatedPosts,
      continueCursor: nextCursor,
      isDone: !hasMore,
      totalCount: posts.length,
    };
  },
});

/**
 * Get all published blog posts (simplified)
 */
export const getPublishedPosts = query({
  handler: async (ctx) => {
    return await ctx.db
      .query('blogPosts')
      .withIndex('by_published', (q) => q.eq('published', true))
      .order('desc')
      .collect();
  },
});

/**
 * Get a blog post by slug
 */
export const getPostBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('blogPosts')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .first();
  },
});

/**
 * Get posts by tag
 */
export const getPostsByTag = query({
  args: { tag: v.string() },
  handler: async (ctx, args) => {
    const posts = await ctx.db
      .query('blogPosts')
      .withIndex('by_published', (q) => q.eq('published', true))
      .collect();

    return posts.filter((post) => post.tags.includes(args.tag));
  },
});

/**
 * Create a new blog post
 */
export const createPost = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    coverImageUrl: v.optional(v.string()),
    tags: v.array(v.string()),
    published: v.boolean(),
    publishedAt: v.optional(v.number()),
    readTime: v.number(),
    author: v.object({
      name: v.string(),
      avatarUrl: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('blogPosts', args);
  },
});

/**
 * Update a blog post
 */
export const updatePost = mutation({
  args: {
    id: v.id('blogPosts'),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    content: v.optional(v.string()),
    coverImageUrl: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    published: v.optional(v.boolean()),
    publishedAt: v.optional(v.number()),
    readTime: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    return await ctx.db.patch(id, updates);
  },
});

/**
 * Delete a blog post
 */
export const deletePost = mutation({
  args: { id: v.id('blogPosts') },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});

/**
 * Get related posts based on tags
 */
export const getRelatedPosts = query({
  args: {
    postId: v.id('blogPosts'),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit || 3;

    // Get the current post to find its tags
    const currentPost = await ctx.db.get(args.postId);
    if (!currentPost) return [];

    // Get all published posts
    const allPosts = await ctx.db
      .query('blogPosts')
      .withIndex('by_published', (q) => q.eq('published', true))
      .collect();

    // Filter out the current post and calculate relevance score
    const postsWithScore = allPosts
      .filter((post) => post._id !== args.postId)
      .map((post) => {
        // Calculate how many tags match
        const matchingTags = post.tags.filter((tag: string) =>
          currentPost.tags.includes(tag)
        );
        return {
          post,
          score: matchingTags.length,
        };
      })
      .filter((item) => item.score > 0) // Only include posts with at least one matching tag
      .sort((a, b) => b.score - a.score); // Sort by score descending

    // Return top posts
    return postsWithScore.slice(0, limit).map((item) => item.post);
  },
});

/**
 * Get all unique tags from published posts
 */
export const getAllTags = query({
  handler: async (ctx) => {
    const posts = await ctx.db
      .query('blogPosts')
      .withIndex('by_published', (q) => q.eq('published', true))
      .collect();

    const tagsSet = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag: string) => tagsSet.add(tag));
    });

    return Array.from(tagsSet).sort();
  },
});
