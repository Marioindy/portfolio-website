import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

// Query to get all neon projects, ordered by order field
export const list = query({
  handler: async (ctx) => {
    const projects = await ctx.db
      .query('neonProjects')
      .withIndex('by_order')
      .collect();
    return projects;
  },
});

// Query to get a single neon project by ID
export const getById = query({
  args: { id: v.id('neonProjects') },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Mutation to create a new neon project
export const create = mutation({
  args: {
    title: v.string(),
    category: v.string(),
    description: v.string(),
    colorScheme: v.object({
      primary: v.string(),
      secondary: v.string(),
      accent: v.string(),
    }),
    insights: v.optional(v.array(v.string())),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    const projectId = await ctx.db.insert('neonProjects', {
      ...args,
      createdAt: Date.now(),
    });
    return projectId;
  },
});

// Mutation to update an existing neon project
export const update = mutation({
  args: {
    id: v.id('neonProjects'),
    title: v.optional(v.string()),
    category: v.optional(v.string()),
    description: v.optional(v.string()),
    colorScheme: v.optional(
      v.object({
        primary: v.string(),
        secondary: v.string(),
        accent: v.string(),
      })
    ),
    insights: v.optional(v.array(v.string())),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);
  },
});

// Mutation to delete a neon project
export const remove = mutation({
  args: { id: v.id('neonProjects') },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
