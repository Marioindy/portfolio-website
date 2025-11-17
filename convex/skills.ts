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

/**
 * Get all skills grouped by category
 */
export const getAllSkillsGrouped = query({
  handler: async (ctx) => {
    const skills = await ctx.db.query('skills').collect();

    // Group skills by category
    const groupedSkills = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, typeof skills>);

    return groupedSkills;
  },
});

/**
 * Get all skill categories
 */
export const getCategories = query({
  handler: async (ctx) => {
    const skills = await ctx.db.query('skills').collect();
    const categories = [...new Set(skills.map((skill) => skill.category))];
    return categories;
  },
});

/**
 * Seed initial skills data
 */
export const seedSkills = mutation({
  handler: async (ctx) => {
    // Check if skills already exist
    const existing = await ctx.db.query('skills').first();
    if (existing) {
      return { message: 'Skills already seeded', count: 0 };
    }

    const skills = [
      // Frontend
      { name: 'React', category: 'Frontend', level: 95, icon: '⚛️' },
      { name: 'Next.js', category: 'Frontend', level: 90, icon: '▲' },
      { name: 'TypeScript', category: 'Frontend', level: 88, icon: '📘' },
      { name: 'Tailwind CSS', category: 'Frontend', level: 92, icon: '🎨' },
      { name: 'GSAP', category: 'Frontend', level: 85, icon: '✨' },
      { name: 'Redux', category: 'Frontend', level: 80, icon: '🔄' },

      // Backend
      { name: 'Node.js', category: 'Backend', level: 87, icon: '🟢' },
      { name: 'Express', category: 'Backend', level: 85, icon: '🚂' },
      { name: 'Convex', category: 'Backend', level: 82, icon: '🔷' },
      { name: 'PostgreSQL', category: 'Backend', level: 80, icon: '🐘' },
      { name: 'MongoDB', category: 'Backend', level: 83, icon: '🍃' },
      { name: 'GraphQL', category: 'Backend', level: 78, icon: '🔺' },

      // Tools & DevOps
      { name: 'Git', category: 'Tools & DevOps', level: 90, icon: '📦' },
      { name: 'Docker', category: 'Tools & DevOps', level: 75, icon: '🐳' },
      { name: 'AWS', category: 'Tools & DevOps', level: 70, icon: '☁️' },
      { name: 'CI/CD', category: 'Tools & DevOps', level: 72, icon: '🔄' },
      { name: 'Vercel', category: 'Tools & DevOps', level: 88, icon: '▲' },
      { name: 'Jest', category: 'Tools & DevOps', level: 80, icon: '🃏' },

      // Design
      { name: 'Figma', category: 'Design', level: 85, icon: '🎭' },
      { name: 'UI/UX Design', category: 'Design', level: 82, icon: '🎨' },
      { name: 'Responsive Design', category: 'Design', level: 93, icon: '📱' },
      { name: 'Accessibility', category: 'Design', level: 88, icon: '♿' },
      { name: 'Animation', category: 'Design', level: 85, icon: '✨' },
      { name: 'Wireframing', category: 'Design', level: 80, icon: '📐' },
    ];

    for (const skill of skills) {
      await ctx.db.insert('skills', skill);
    }

    return { message: 'Skills seeded successfully', count: skills.length };
  },
});
