import { mutation } from './_generated/server';

export const seedPhotographyData = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear existing photography data
    const existing = await ctx.db.query('photography').collect();
    for (const photo of existing) {
      await ctx.db.delete(photo._id);
    }

    // Curated photography with warm aesthetic
    const photos = [
      {
        title: 'Golden Hour',
        subtitle: 'Desert landscapes at dusk',
        imageUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
        aspectRatio: 'landscape',
        colorTheme: 'warm',
        category: 'landscapes',
        order: 1,
        featured: true,
        metadata: {
          photographer: 'Studio Collection',
          location: 'Morocco',
          date: '2024',
        },
      },
      {
        title: 'Terracotta Dreams',
        subtitle: 'Architecture in warm light',
        imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        aspectRatio: 'portrait',
        colorTheme: 'warm',
        category: 'architecture',
        order: 2,
        featured: true,
        metadata: {
          photographer: 'Studio Collection',
          location: 'Mexico',
        },
      },
      {
        title: 'Warm Embrace',
        subtitle: 'Natural textures and earth tones',
        imageUrl: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1000&q=80',
        aspectRatio: 'square',
        colorTheme: 'warm',
        category: 'abstract',
        order: 3,
        featured: false,
        metadata: {
          location: 'Studio',
        },
      },
      {
        title: 'Ochre Walls',
        subtitle: 'Mediterranean architecture',
        imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80',
        aspectRatio: 'portrait',
        colorTheme: 'warm',
        category: 'architecture',
        order: 4,
        featured: true,
        metadata: {
          location: 'Italy',
        },
      },
      {
        title: 'Rust & Clay',
        subtitle: 'Minimalist composition',
        imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1100&q=80',
        aspectRatio: 'landscape',
        colorTheme: 'warm',
        category: 'abstract',
        order: 5,
        featured: false,
        metadata: {},
      },
      {
        title: 'Desert Bloom',
        subtitle: 'Nature in warm tones',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
        aspectRatio: 'portrait',
        colorTheme: 'warm',
        category: 'nature',
        order: 6,
        featured: true,
        metadata: {
          location: 'Arizona',
        },
      },
      {
        title: 'Burnt Orange',
        subtitle: 'Sunset over the canyon',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
        aspectRatio: 'landscape',
        colorTheme: 'warm',
        category: 'landscapes',
        order: 7,
        featured: false,
        metadata: {
          location: 'Grand Canyon',
        },
      },
      {
        title: 'Sienna Shadows',
        subtitle: 'Play of light and texture',
        imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80',
        aspectRatio: 'square',
        colorTheme: 'warm',
        category: 'abstract',
        order: 8,
        featured: false,
        metadata: {},
      },
      {
        title: 'Amber Waves',
        subtitle: 'Golden fields at harvest',
        imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
        aspectRatio: 'landscape',
        colorTheme: 'warm',
        category: 'nature',
        order: 9,
        featured: true,
        metadata: {
          location: 'Tuscany',
        },
      },
      {
        title: 'Cream & Copper',
        subtitle: 'Minimal still life',
        imageUrl: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=800&q=80',
        aspectRatio: 'portrait',
        colorTheme: 'warm',
        category: 'abstract',
        order: 10,
        featured: false,
        metadata: {},
      },
    ];

    // Insert all photos
    for (const photo of photos) {
      await ctx.db.insert('photography', photo);
    }

    return { success: true, count: photos.length };
  },
});
