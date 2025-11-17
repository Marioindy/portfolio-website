import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

/**
 * Get all skills
 */
export const getSkills = query({
  handler: async (ctx) => {
    return await ctx.db.query('skills').collect();
  },
});

/**
 * Get skills by category
 */
export const getSkillsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('skills')
      .withIndex('by_category', (q) => q.eq('category', args.category))
      .collect();
  },
});

/**
 * Create a new skill
 */
export const createSkill = mutation({
  args: {
    name: v.string(),
    category: v.string(),
    level: v.number(),
    icon: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('skills', args);
  },
});

/**
 * Update a skill
 */
export const updateSkill = mutation({
  args: {
    id: v.id('skills'),
    name: v.optional(v.string()),
    category: v.optional(v.string()),
    level: v.optional(v.number()),
    icon: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    return await ctx.db.patch(id, updates);
  },
});

/**
 * Delete a skill
 */
export const deleteSkill = mutation({
  args: { id: v.id('skills') },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
