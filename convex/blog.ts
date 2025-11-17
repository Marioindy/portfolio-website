import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

/**
 * Get all published blog posts
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
