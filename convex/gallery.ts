import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

// Get all active pixel gallery items ordered by order field
export const getPixelGalleryItems = query({
  args: {},
  handler: async (ctx) => {
    const items = await ctx.db
      .query('pixelGallery')
      .withIndex('by_active', (q) => q.eq('active', true))
      .collect();

    // Sort by order field
    return items.sort((a, b) => a.order - b.order);
  },
});

// Get a single pixel gallery item by ID
export const getPixelGalleryItem = query({
  args: { id: v.id('pixelGallery') },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Create a new pixel gallery item
export const createPixelGalleryItem = mutation({
  args: {
    title: v.string(),
    subtitle: v.string(),
    color: v.string(),
    pattern: v.union(
      v.literal('checkerboard'),
      v.literal('stripes'),
      v.literal('dots'),
      v.literal('grid')
    ),
    order: v.number(),
    active: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const itemId = await ctx.db.insert('pixelGallery', {
      title: args.title,
      subtitle: args.subtitle,
      color: args.color,
      pattern: args.pattern,
      order: args.order,
      active: args.active ?? true,
    });
    return itemId;
  },
});

// Update a pixel gallery item
export const updatePixelGalleryItem = mutation({
  args: {
    id: v.id('pixelGallery'),
    title: v.optional(v.string()),
    subtitle: v.optional(v.string()),
    color: v.optional(v.string()),
    pattern: v.optional(
      v.union(
        v.literal('checkerboard'),
        v.literal('stripes'),
        v.literal('dots'),
        v.literal('grid')
      )
    ),
    order: v.optional(v.number()),
    active: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);
  },
});

// Delete a pixel gallery item
export const deletePixelGalleryItem = mutation({
  args: { id: v.id('pixelGallery') },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
