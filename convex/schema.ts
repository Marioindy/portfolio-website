import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    imageUrl: v.optional(v.string()),
    tags: v.array(v.string()),
    githubUrl: v.optional(v.string()),
    liveUrl: v.optional(v.string()),
    featured: v.boolean(),
    order: v.number(),
    createdAt: v.number(),
  })
    .index('by_featured', ['featured'])
    .index('by_order', ['order'])
    .index('by_created', ['createdAt']),
});
