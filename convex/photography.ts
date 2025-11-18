import { query } from './_generated/server';

export const getAllPhotography = query({
  args: {},
  handler: async (ctx) => {
    const photos = await ctx.db.query('photography').collect();

    // Sort by order field manually
    return photos.sort((a, b) => a.order - b.order);
  },
});

export const getFeaturedPhotography = query({
  args: {},
  handler: async (ctx) => {
    const photos = await ctx.db
      .query('photography')
      .withIndex('by_featured', (q) => q.eq('featured', true))
      .collect();

    // Sort by order field manually
    return photos.sort((a, b) => a.order - b.order);
  },
});

export const getPhotographyByCategory = query({
  args: {},
  handler: async (ctx) => {
    const photos = await ctx.db.query('photography').collect();

    // Sort by order field
    const sortedPhotos = photos.sort((a, b) => a.order - b.order);

    // Group by category for masonry layout
    const grouped = sortedPhotos.reduce(
      (acc, photo) => {
        if (!acc[photo.category]) {
          acc[photo.category] = [];
        }
        acc[photo.category].push(photo);
        return acc;
      },
      {} as Record<string, typeof sortedPhotos>
    );

    return grouped;
  },
});
