import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

/**
 * Get all projects
 */
export const getProjects = query({
  handler: async (ctx) => {
    return await ctx.db.query('projects').order('desc').collect();
  },
});

/**
 * Get featured projects (top 3 for home page)
 */
export const getFeaturedProjects = query({
  handler: async (ctx) => {
    const projects = await ctx.db
      .query('projects')
      .withIndex('by_featured', (q) => q.eq('featured', true))
      .order('desc')
      .take(3);

    return projects;
  },
});

/**
 * Get projects by category
 */
export const getProjectsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('projects')
      .withIndex('by_category', (q) => q.eq('category', args.category))
      .order('desc')
      .collect();
  },
});

/**
 * Get a single project by ID
 */
export const getProjectById = query({
  args: { id: v.id('projects') },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

/**
 * Create a new project
 */
export const createProject = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    longDescription: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    tags: v.array(v.string()),
    category: v.string(),
    githubUrl: v.optional(v.string()),
    liveUrl: v.optional(v.string()),
    featured: v.boolean(),
    order: v.number(),
    createdAt: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('projects', args);
  },
});

/**
 * Update a project
 */
export const updateProject = mutation({
  args: {
    id: v.id('projects'),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    longDescription: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    category: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
    liveUrl: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    return await ctx.db.patch(id, updates);
  },
});

/**
 * Delete a project
 */
export const deleteProject = mutation({
  args: { id: v.id('projects') },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
