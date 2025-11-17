import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  projects: defineTable({
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
  })
    .index('by_featured', ['featured'])
    .index('by_category', ['category'])
    .index('by_order', ['order']),

  blogPosts: defineTable({
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
  })
    .index('by_slug', ['slug'])
    .index('by_published', ['published'])
    .index('by_published_at', ['publishedAt']),

  skills: defineTable({
    name: v.string(),
    category: v.string(),
    level: v.number(),
    icon: v.optional(v.string()),
  }).index('by_category', ['category']),

  contactSubmissions: defineTable({
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
    status: v.union(v.literal('new'), v.literal('read'), v.literal('replied')),
  }).index('by_status', ['status']),

  pageContent: defineTable({
    page: v.string(),
    section: v.string(),
    content: v.any(),
    updatedAt: v.number(),
  })
    .index('by_page', ['page'])
    .index('by_page_section', ['page', 'section']),
});
