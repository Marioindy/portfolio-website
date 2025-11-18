# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
```bash
npm run dev              # Start Next.js development server (http://localhost:3000)
npm run build            # Build production bundle
npm start                # Start production server
npm run lint             # Run ESLint on codebase
npm run format           # Format code with Prettier
```

### Convex Backend
```bash
npx convex dev           # Start Convex development backend (run in separate terminal)
npx convex deploy        # Deploy Convex functions to production
npx convex dashboard     # Open Convex dashboard
npx convex data          # Interact with Convex data
```

**Important**: Convex must be running (`npx convex dev`) for the application to function properly. The dev server and Convex backend should run concurrently.

## Architecture Overview

### Tech Stack Core
- **Next.js 15** with App Router and TypeScript
- **Convex** for real-time backend (database, queries, mutations)
- **GSAP** for animations with ScrollTrigger
- **Tailwind CSS** for styling
- **View Transitions API** for native page transitions

### Project Structure Pattern

The app uses Next.js App Router with a route group pattern:

```
src/app/
├── layout.tsx                    # Root layout (Navigation, Footer, Convex provider)
├── page.tsx                      # Root redirect to /home
└── (pages)/                      # Route group (no URL segment)
    ├── home/
    │   ├── page.tsx             # Page component with metadata
    │   ├── layout.tsx           # Page-specific layout (mostly passthrough)
    │   └── components/          # Page-specific components
    ├── about/
    ├── projects/
    ├── blog/
    │   ├── page.tsx             # Blog listing
    │   └── [slug]/page.tsx      # Dynamic blog post route
    └── contact/
```

**Key Pattern**: Each page section has its own directory with:
- `page.tsx` - Main page component with metadata export
- `layout.tsx` - Optional page layout wrapper
- `components/` - Co-located components specific to that page

### Convex Backend Architecture

Convex provides the entire backend with real-time capabilities:

**Schema**: `convex/schema.ts` defines all tables:
- `projects` - Portfolio projects with featured/category indices
- `blogPosts` - Blog content with slug-based routing
- `skills` - Skill categories and levels
- `contactSubmissions` - Contact form data
- `pageContent` - Dynamic page content storage

**Function Files**: Each table has corresponding CRUD operations:
- `convex/projects.ts` - Project queries and mutations
- `convex/blog.ts` - Blog queries with slug lookup
- `convex/contact.ts` - Contact form submission handling
- `convex/skills.ts` - Skills queries by category

**Usage Pattern**:
```tsx
// In client components
import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

const projects = useQuery(api.projects.getFeaturedProjects);
const submit = useMutation(api.contact.submitContactForm);
```

### Path Aliases

TypeScript path aliases are configured in `tsconfig.json`:
```typescript
@/*            -> ./src/*
@/components/* -> ./src/components/*
@/utils/*      -> ./src/utils/*
@/hooks/*      -> ./src/hooks/*
@/types/*      -> ./src/types/*
```

### Styling System

**Tailwind CSS** with custom configuration in `tailwind.config.ts`:
- Dark mode is the default (`className="dark"` in root layout)
- Global styles and CSS variables in `src/styles/globals.css`
- Utility function `cn()` in `src/utils/cn.ts` for conditional class merging

### Animation Architecture

All animations centralized in `src/utils/animations.ts`:

**GSAP utilities**:
- `fadeIn()`, `fadeInStagger()` - Opacity/translate animations
- `scaleIn()` - Scale with bounce effect
- `slideFromLeft()`, `slideFromRight()` - Directional slides
- `scrollFadeIn()` - Scroll-triggered animations
- `parallax()` - Parallax scroll effects
- `magneticHover()` - Interactive hover effects (returns cleanup function)
- `textReveal()` - Timeline-based text animations

**Important**:
- Always call `cleanupScrollTriggers()` in component cleanup
- Use `refreshScrollTrigger()` after layout changes
- GSAP plugins registered conditionally: `if (typeof window !== 'undefined')`

### Component Organization

**Shared Components** (`src/components/shared/`):
- `Navigation.tsx` - Main site navigation
- `Footer.tsx` - Site footer
- `MobileMenu.tsx` - Mobile navigation
- `Chatbot.tsx` - AI assistant widget
- `MarkdownRenderer.tsx` - Blog content rendering

**Page Components**: Co-located in `src/app/(pages)/{page}/components/`

**Provider Pattern**:
- `ConvexClientProvider.tsx` wraps app with Convex client
- Gracefully handles missing `NEXT_PUBLIC_CONVEX_URL` (returns children without provider)

### Type System

Global types in `src/types/index.ts`:
- `Project`, `BlogPost`, `Skill`, `ContactSubmission`, `PageContent`
- Types match Convex schema with added Convex metadata fields (`_id`, `_creationTime`)
- Convex type declarations in `src/types/convex.d.ts`

### Environment Configuration

Required variables in `.env.local`:
```env
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
```

Optional feature flags:
```env
NEXT_PUBLIC_ENABLE_ANIMATIONS=true
NEXT_PUBLIC_ENABLE_DARK_MODE=true
```

## Important Patterns

### Force Dynamic Rendering
Pages using Convex hooks must export:
```typescript
export const dynamic = 'force-dynamic';
```

### Next.js Image Configuration
Images are unoptimized (`unoptimized: true` in `next.config.js`) - consider optimization when adding image features.

### Security Headers
Custom security headers configured in `next.config.js`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block

### Console Removal
`removeConsole: true` in production builds - use alternative logging for production debugging.

## Common Operations

### Adding a New Page
1. Create directory: `src/app/(pages)/newpage/`
2. Add `page.tsx` with metadata export and `dynamic = 'force-dynamic'` if using Convex
3. Add `layout.tsx` if needed (often just passthrough)
4. Create `components/` subdirectory for page-specific components
5. Update `Navigation.tsx` to add nav link

### Adding Convex Data
1. Update `convex/schema.ts` with new table definition
2. Create corresponding file (e.g., `convex/newdata.ts`) with queries/mutations
3. Add TypeScript interface in `src/types/index.ts`
4. Use `useQuery`/`useMutation` hooks in client components

### Animation Cleanup Pattern
```typescript
useEffect(() => {
  const cleanup = magneticHover(elementRef.current, 0.5);

  return () => {
    cleanup();
    cleanupScrollTriggers();
  };
}, []);
```

### Blog Post Routing
- List view: `/blog`
- Single post: `/blog/[slug]` (slug from Convex blogPosts table)
- Use `getPostBySlug` query with slug parameter

## TypeScript Configuration

Strict mode enabled with:
- `noUnusedLocals`, `noUnusedParameters`
- `strictNullChecks`, `strictPropertyInitialization`
- Remove unused code completely rather than commenting or renaming
