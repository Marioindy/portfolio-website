import { query } from './_generated/server';
import { v } from 'convex/values';

// Get all projects
export const getProjects = query({
  handler: async (ctx) => {
    return await ctx.db
      .query('projects')
      .order('desc')
      .collect();
  },
});

// Get featured projects (top 3)
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

// Get project by ID
export const getProjectById = query({
  args: { id: v.id('projects') },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});
