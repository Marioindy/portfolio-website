import { query } from './_generated/server';

/**
 * Convex queries for the testing page
 * Optional data layer for cyberpunk testing interface
 */

export const getItems = query({
  args: {},
  handler: async () => {
    // This is a fallback that returns structured data
    // In a real implementation, this would query a Convex table
    return [
      {
        title: 'QUANTUM_CORE',
        description:
          'Advanced processing architecture with neon-infused quantum algorithms optimized for parallel reality computation.',
        icon: 'cube' as const,
        color: 'purple' as const,
      },
      {
        title: 'NEURAL_MESH',
        description:
          'Interconnected neural pathways forming a luminescent network of consciousness and data flow patterns.',
        icon: 'pyramid' as const,
        color: 'cyan' as const,
      },
      {
        title: 'CYBER_MATRIX',
        description:
          'Multi-dimensional data structures rendered through glassmorphic interfaces with real-time depth perception.',
        icon: 'prism' as const,
        color: 'mixed' as const,
      },
      {
        title: 'VOID_ENGINE',
        description:
          'Dark matter processing unit harnessing the space between pixels for computational transcendence.',
        icon: 'cube' as const,
        color: 'cyan' as const,
      },
      {
        title: 'NEON_FLUX',
        description:
          'Energy distribution system channeling electric purple wavelengths through crystalline data conduits.',
        icon: 'pyramid' as const,
        color: 'purple' as const,
      },
      {
        title: 'HOLO_SYNC',
        description:
          'Holographic synchronization protocol maintaining coherence across multiple reality layers simultaneously.',
        icon: 'prism' as const,
        color: 'mixed' as const,
      },
    ];
  },
});
