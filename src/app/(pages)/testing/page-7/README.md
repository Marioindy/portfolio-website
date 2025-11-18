# Warm Photography - Testing Page 7

A photography gallery page inspired by Aino Agency's warm aesthetic, featuring earth tones, full-bleed layouts, and elegant typography.

## Design Philosophy

### [PHOTOGRAPHIC_THEORY]
Photography as the hero element. Each image tells a story through composition, light, and color. The layout prioritizes visual impact, letting the photography breathe while providing context through minimal, purposeful typography.

### [COLOR_WARMTH]
The palette embraces earth tones that evoke warmth and authenticity:
- **Ochre** (#D4A574): Golden, sunlit moments
- **Rust** (#B7472A): Deep, grounded richness
- **Burnt Orange** (#CC5500): Vibrant, energetic accents
- **Terracotta** (#E2725B): Earthy, organic tones
- **Sand** (#F4E8D0): Soft, neutral backgrounds
- **Clay** (#C19A6B): Natural, textured undertones
- **Sienna** (#A0522D): Warm, anchoring darks
- **Amber** (#FFBF00): Luminous highlights
- **Cream** (#FFFDD0): Clean, breathing space

### [COMPOSITION]
Visual storytelling through layout:
- **Masonry Grid**: Organic flow, varied aspect ratios
- **Full-Bleed Images**: Edge-to-edge impact
- **Negative Space**: Allows images to breathe and amplifies their presence
- **Hierarchy**: Large hero photography, varied grid items
- **Responsive**: Adapts gracefully from mobile to desktop

### [DELIVERY]
Technical excellence meets artistic vision:
- **Performance**: Lazy loading, optimized images, efficient rendering
- **Animations**: GSAP for smooth, professional motion
- **Interactions**: Hover zoom effects reveal photographic details
- **Typography**: Editorial-style overlays on hover
- **Accessibility**: Semantic HTML, proper alt text, keyboard navigation

## Technical Implementation

### Stack
- **Next.js 15**: React framework with App Router
- **TypeScript**: Strict type safety
- **Tailwind CSS**: Utility-first styling with custom warm palette
- **GSAP**: Professional-grade animations
- **Framer Motion**: React animation library
- **Convex**: Real-time backend for photography data
- **View Transitions API**: Smooth page transitions

### Key Features

#### 1. Masonry Layout
Responsive grid that adapts to different aspect ratios (portrait, landscape, square) with automatic flow.

#### 2. Hover Zoom Effects
GSAP-powered smooth zoom on hover, revealing photographic details while maintaining performance.

#### 3. Warm Color Grading
CSS blend modes and gradient overlays apply warm color grading to images, creating cohesive visual language.

#### 4. Typography Overlays
Editorial-style text overlays appear on hover, providing context without cluttering the visual experience.

#### 5. View Transitions API
Modern browser API for smooth, native-like page transitions.

#### 6. Image Optimization
- Lazy loading with Intersection Observer
- Responsive srcset for different viewport sizes
- WebP format with quality optimization
- Preloading for critical images

### File Structure

```
page-7/
├── page.tsx                 # Main page component
├── layout.tsx              # Custom layout with View Transitions
├── types.ts                # TypeScript type definitions
├── README.md               # This file
├── components/
│   ├── HeroSection.tsx     # Full-bleed hero with parallax
│   ├── GallerySection.tsx  # Gallery container with header
│   ├── MasonryGrid.tsx     # Masonry layout grid
│   └── PhotoCard.tsx       # Individual photo card with hover effects
└── utils/
    └── imageOptimization.ts # Image optimization utilities
```

## Design Principles

### Visual Storytelling
Every element serves the photography. Text is minimal but meaningful, appearing when needed without overwhelming the visual narrative.

### Authenticity Through Imagery
Real photography, carefully curated for warm tones and organic beauty. No stock photos that feel artificial or staged.

### Organic Beauty
Natural textures, earth tones, and compositions that feel grounded and authentic. The digital space honors physical materials.

### Texture in Digital Space
Layered overlays, subtle gradients, and thoughtful use of color grading create depth and texture in what could be a flat digital canvas.

### How Negative Space Amplifies Images
Strategic use of breathing room around images makes them more impactful. White space (or in this case, cream and sand tones) isn't empty—it's active design.

## Usage

### Seeding Photography Data

```bash
# In Convex dashboard, run the seed mutation
npx convex dev
# Then call: seedPhotographyData()
```

### Development

```bash
npm run dev
# Visit http://localhost:3000/testing/page-7
```

### Production

```bash
npm run build
npm start
```

## Accessibility

- Semantic HTML5 elements
- Alt text for all images
- Keyboard navigation support
- ARIA labels where appropriate
- Sufficient color contrast for text
- Focus indicators for interactive elements

## Browser Support

- Modern browsers with ES2020+ support
- View Transitions API (gracefully degrades)
- Intersection Observer (with fallback)
- CSS Grid and Flexbox
- CSS blend modes

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## Future Enhancements

- [ ] Lightbox/modal view for full-size images
- [ ] Category filtering
- [ ] Infinite scroll
- [ ] Image download capabilities
- [ ] Social sharing
- [ ] Advanced image effects (grain, vignette)
- [ ] Parallax on scroll for masonry items
- [ ] EXIF data display

---

**Log**: PHOTOGRAPHIC_THEORY · COLOR_WARMTH · COMPOSITION · DELIVERY
