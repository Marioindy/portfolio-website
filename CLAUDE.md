# CLAUDE.md - AI Assistant Guide for Portfolio Website

This document provides comprehensive guidance for AI assistants working with this modern portfolio website codebase.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Codebase Structure](#codebase-structure)
4. [Development Workflows](#development-workflows)
5. [Key Conventions](#key-conventions)
6. [Component Patterns](#component-patterns)
7. [Data Management](#data-management)
8. [Styling Guidelines](#styling-guidelines)
9. [Animation Patterns](#animation-patterns)
10. [Common Tasks](#common-tasks)
11. [Troubleshooting](#troubleshooting)

---

## Project Overview

This is a modern, production-ready portfolio website built with enterprise-level patterns and best practices. The project emphasizes:

- **Type Safety**: Strict TypeScript configuration throughout
- **Performance**: Server-side rendering, optimized images, efficient animations
- **Real-time Data**: Convex backend for live data synchronization
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Developer Experience**: Path aliases, utility functions, component composition

**Key Characteristics:**
- Next.js 15 App Router with file-based routing
- React 18 with Server and Client Components
- Real-time backend with Convex
- GSAP-powered animations
- Tailwind CSS utility-first styling
- Dark mode by default

---

## Technology Stack

### Frontend
- **Next.js 15.0.0** - React framework with App Router
- **React 18.3.1** - UI library with hooks and Server Components
- **TypeScript 5.4.0** - Strict type checking enabled
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **GSAP 3.12.2** - Professional-grade animation library
- **clsx 2.1.0** - Conditional className utility

### Backend
- **Convex 1.15.0** - Real-time backend-as-a-service
  - Type-safe queries and mutations
  - Real-time subscriptions
  - Built-in authentication (ready to enable)
  - File storage capabilities

### Developer Tools
- **ESLint 9.0.0** - Code linting
- **Prettier 3.3.0** - Code formatting
- **PostCSS + Autoprefixer** - CSS processing
- **@tailwindcss/forms** - Form styling utilities
- **@tailwindcss/typography** - Rich text styling

---

## Codebase Structure

```
portfolio-website/
├── src/                                 # All source code
│   ├── app/                            # Next.js App Router
│   │   ├── (pages)/                    # Route group (doesn't appear in URL)
│   │   │   ├── home/                   # Home page route
│   │   │   │   ├── components/         # Page-specific components
│   │   │   │   │   ├── HeroSection.tsx
│   │   │   │   │   └── FeaturedProjects.tsx
│   │   │   │   └── page.tsx            # Route entry point
│   │   │   ├── about/                  # About page
│   │   │   ├── projects/               # Projects portfolio
│   │   │   ├── blog/                   # Blog index
│   │   │   │   └── [slug]/             # Dynamic blog post route
│   │   │   └── contact/                # Contact form
│   │   ├── layout.tsx                  # Root layout (wraps all pages)
│   │   ├── page.tsx                    # Root redirect (/ → /home)
│   │   ├── globals.css                 # Global styles & CSS variables
│   │   └── providers.tsx               # Legacy provider file
│   ├── components/
│   │   ├── shared/                     # Shared across pages
│   │   │   ├── Navigation.tsx          # Main navigation
│   │   │   ├── Footer.tsx              # Site footer
│   │   │   ├── MobileMenu.tsx          # Mobile navigation
│   │   │   ├── MarkdownRenderer.tsx    # Markdown → HTML
│   │   │   └── Chatbot.tsx             # AI assistant
│   │   ├── ui/                         # Reusable UI primitives
│   │   │   ├── Button.tsx              # Button with variants
│   │   │   ├── Card.tsx                # Compound card component
│   │   │   ├── Input.tsx               # Form input
│   │   │   ├── Badge.tsx               # Tag/badge component
│   │   │   ├── Modal.tsx               # Dialog/modal
│   │   │   ├── ShaderBackground.tsx    # WebGL shader
│   │   │   └── NeuralNetworkBackground.tsx
│   │   ├── Navigation.tsx              # Main navigation (duplicate?)
│   │   ├── Footer.tsx                  # Footer (duplicate?)
│   │   ├── ProjectCard.tsx             # Project display card
│   │   └── ConvexClientProvider.tsx    # Convex setup
│   ├── hooks/                          # Custom React hooks
│   ├── utils/
│   │   ├── cn.ts                       # className utility (clsx wrapper)
│   │   ├── animations.ts               # GSAP animation library
│   │   └── convex-helpers.ts           # Convex utilities
│   ├── types/
│   │   ├── index.ts                    # Global TypeScript types
│   │   └── convex.d.ts                 # Convex type definitions
│   └── styles/                         # Additional styles (if any)
├── convex/                             # Backend functions
│   ├── schema.ts                       # Database schema
│   ├── projects.ts                     # Project queries/mutations
│   ├── blog.ts                         # Blog queries/mutations
│   ├── contact.ts                      # Contact form handler
│   ├── skills.ts                       # Skills management
│   ├── seedBlog.ts                     # Data seeding utility
│   ├── tsconfig.json                   # Convex TypeScript config
│   └── _generated/                     # Auto-generated types
├── .github/                            # GitHub workflows/config
├── public/                             # Static assets
├── Configuration files
│   ├── package.json                    # Dependencies & scripts
│   ├── tsconfig.json                   # TypeScript configuration
│   ├── next.config.js                  # Next.js configuration
│   ├── tailwind.config.ts              # Tailwind customization
│   ├── postcss.config.js               # PostCSS plugins
│   ├── .env.example                    # Environment template
│   ├── .eslintrc.json                  # ESLint rules
│   └── .prettierrc                     # Prettier config
└── Documentation
    ├── README.md                       # User-facing documentation
    ├── SETUP.md                        # Setup instructions
    └── CLAUDE.md                       # This file
```

### Important Notes

1. **Path Aliases**: All imports use `@/` prefix for src directory
   ```typescript
   import { Button } from '@/components/ui/Button'
   import { cn } from '@/utils/cn'
   ```

2. **Route Groups**: `(pages)` directory groups routes without affecting URLs
   - URL: `/home` → File: `src/app/(pages)/home/page.tsx`

3. **Component Duplication**: There are duplicate Navigation/Footer components in:
   - `src/components/` (main)
   - `src/components/shared/` (secondary)
   - Check which is actively used before modifying

---

## Development Workflows

### Setting Up Development Environment

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.example .env.local

# 3. Configure Convex (optional)
npx convex dev

# 4. Start development server
npm run dev
```

### Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run format` | Format code with Prettier |

### Development Best Practices

1. **Always read before writing**: Use Read tool before Edit/Write
2. **Type safety first**: Ensure TypeScript types are correct
3. **Test across breakpoints**: Check responsive design (sm/md/lg)
4. **Check animations**: Verify GSAP animations don't cause layout shift
5. **Verify Convex integration**: Test with and without Convex URL
6. **Clean up effects**: Always return cleanup functions from useEffect
7. **Accessibility**: Add ARIA labels and semantic HTML

### Git Workflow

```bash
# Current branch (specified in task context)
git status

# Make changes, then commit
git add .
git commit -m "feat: descriptive message following conventional commits"

# Push to remote
git push -u origin <branch-name>
```

**Commit Message Convention:**
- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code refactoring
- `style:` - Formatting, styling
- `docs:` - Documentation
- `test:` - Tests
- `chore:` - Maintenance

---

## Key Conventions

### TypeScript Patterns

**1. Component Props with TypeScript**
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  className,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
```

**2. Server vs Client Components**
```typescript
// Server Component (default) - NO 'use client'
// Can fetch data, no useState/useEffect
export default async function ProjectsPage() {
  return <div>Projects</div>
}

// Client Component - WITH 'use client'
'use client'
export function InteractiveCard() {
  const [isHovered, setIsHovered] = useState(false)
  return <div>...</div>
}
```

**3. Convex Data Fetching**
```typescript
'use client'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

export const dynamic = 'force-dynamic' // Required for Convex

export default function Page() {
  const projects = useQuery(api.projects.getProjects)

  if (!projects) return <div>Loading...</div>

  return <div>{/* render projects */}</div>
}
```

### File Naming Conventions

- **Components**: PascalCase (`HeroSection.tsx`, `ProjectCard.tsx`)
- **Utilities**: camelCase (`animations.ts`, `cn.ts`)
- **Pages**: lowercase (`page.tsx`, `layout.tsx`)
- **Types**: PascalCase or lowercase (`index.ts`, `convex.d.ts`)

### Import Order

```typescript
// 1. React/Next.js
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// 2. Third-party libraries
import { useQuery } from 'convex/react'
import gsap from 'gsap'

// 3. Internal utilities
import { cn } from '@/utils/cn'
import { fadeIn } from '@/utils/animations'

// 4. Components
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

// 5. Types
import type { Project } from '@/types'

// 6. Convex API
import { api } from '@/convex/_generated/api'
```

---

## Component Patterns

### 1. Compound Component Pattern (Card)

Used for flexible component composition:

```typescript
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Implementation Pattern:**
```typescript
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("...", className)} {...props} />
  )
)
Card.displayName = "Card"

const CardHeader = ({ className, ...props }) => (
  <div className={cn("...", className)} {...props} />
)

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
```

### 2. Variant Pattern (Button)

Used for components with multiple styles:

```typescript
const buttonVariants = cva(
  "base classes...", // Base styles
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground...",
        outline: "border border-input...",
        ghost: "hover:bg-accent...",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

### 3. GSAP Animation Pattern

**Always use cleanup to prevent memory leaks:**

```typescript
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function AnimatedComponent() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animated-element', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
      })

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top center',
        onEnter: () => { /* animation */ },
      })
    }, containerRef)

    // Cleanup on unmount
    return () => ctx.revert()
  }, [])

  return <div ref={containerRef}>...</div>
}
```

### 4. Responsive Pattern

```typescript
// Mobile-first approach
<div className="
  flex flex-col         /* Mobile: stack vertically */
  md:flex-row           /* Tablet: horizontal */
  gap-4                 /* Mobile: 1rem gap */
  md:gap-6              /* Tablet: 1.5rem gap */
  lg:gap-8              /* Desktop: 2rem gap */
">
  <div className="w-full md:w-1/2 lg:w-1/3">
    {/* Content */}
  </div>
</div>
```

**Tailwind Breakpoints:**
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

---

## Data Management

### Convex Schema Overview

**Database Tables:**

```typescript
// projects table
{
  _id: Id<"projects">,
  title: string,
  description: string,
  imageUrl?: string,
  tags: string[],
  category: string,
  featured: boolean,
  order: number,
  githubUrl?: string,
  liveUrl?: string,
  createdAt: number,
}

// blogPosts table
{
  _id: Id<"blogPosts">,
  title: string,
  slug: string,
  excerpt: string,
  content: string,
  coverImage?: string,
  tags: string[],
  published: boolean,
  author: string,
  readTime: number,
  createdAt: number,
  publishedAt?: number,
}

// skills table
{
  _id: Id<"skills">,
  name: string,
  category: string,
  level: number, // 1-5
  icon?: string,
  order: number,
}

// contactSubmissions table
{
  _id: Id<"contactSubmissions">,
  name: string,
  email: string,
  subject: string,
  message: string,
  status: "new" | "read" | "responded",
  createdAt: number,
}
```

### Query Patterns

**Simple Query:**
```typescript
export const getProjects = query({
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect()
  },
})
```

**Filtered Query:**
```typescript
export const getFeaturedProjects = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("projects")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .order("desc")
      .take(3)
  },
})
```

**Parameterized Query:**
```typescript
export const getProjectsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("projects")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect()
  },
})
```

**Search Query:**
```typescript
export const searchPosts = query({
  args: { query: v.string() },
  handler: async (ctx, args) => {
    const posts = await ctx.db
      .query("blogPosts")
      .filter((q) => q.eq(q.field("published"), true))
      .collect()

    return posts.filter(post =>
      post.title.toLowerCase().includes(args.query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(args.query.toLowerCase())
    )
  },
})
```

### Mutation Patterns

**Create:**
```typescript
export const createProject = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    tags: v.array(v.string()),
    category: v.string(),
    featured: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("projects", {
      ...args,
      order: 0,
      createdAt: Date.now(),
    })
  },
})
```

**Update:**
```typescript
export const updateProject = mutation({
  args: {
    id: v.id("projects"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args
    await ctx.db.patch(id, updates)
  },
})
```

**Delete:**
```typescript
export const deleteProject = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id)
  },
})
```

### Frontend Data Fetching

```typescript
'use client'
import { useQuery, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'

function Component() {
  // Query (read)
  const projects = useQuery(api.projects.getProjects)

  // Mutation (write)
  const createProject = useMutation(api.projects.createProject)

  const handleCreate = async () => {
    await createProject({
      title: "New Project",
      description: "Description",
      tags: ["React"],
      category: "Web",
      featured: false,
    })
  }

  // Handle loading state
  if (!projects) return <div>Loading...</div>

  return <div>{/* render */}</div>
}
```

---

## Styling Guidelines

### Tailwind CSS Approach

**1. Use Utility Classes First**
```typescript
<div className="flex items-center justify-between p-4 bg-background border-b">
  <h1 className="text-2xl font-bold text-foreground">Title</h1>
</div>
```

**2. Use `cn()` for Conditional Classes**
```typescript
import { cn } from '@/utils/cn'

<button
  className={cn(
    "px-4 py-2 rounded",
    isActive && "bg-primary text-white",
    isDisabled && "opacity-50 cursor-not-allowed"
  )}
/>
```

**3. CSS Variables for Theming**

Colors are defined as CSS variables in `globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode overrides */
}
```

**Use in Tailwind:**
```typescript
<div className="bg-primary text-primary-foreground">
  Primary colored box
</div>
```

### Custom Animations

**Define in tailwind.config.ts:**
```typescript
theme: {
  extend: {
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-out',
    },
  },
}
```

**Use in components:**
```typescript
<div className="animate-fadeIn">
  Fades in on mount
</div>
```

---

## Animation Patterns

### GSAP Animation Utilities

Located in `src/utils/animations.ts`:

**Available Functions:**

1. **fadeIn(element, options)**
   - Fades element in with optional slide up
   - Default: opacity 0→1, y: 20→0

2. **fadeInStagger(elements, options)**
   - Staggers animation across multiple elements
   - Use for lists, grids

3. **scaleIn(element)**
   - Scale from 0.8 to 1 with opacity

4. **slideFromLeft(element)** / **slideFromRight(element)**
   - Directional slide animations

5. **scrollFadeIn(element)**
   - Fade in when scrolled into view
   - Uses ScrollTrigger

6. **parallax(element, speed)**
   - Scroll-based parallax effect
   - Speed: 0.5 = slower, 2 = faster

7. **magneticHover(element, strength)**
   - Mouse-following hover effect
   - Strength: 0.1-0.5 recommended

8. **textReveal(element)**
   - Reveals text character by character

9. **cleanupScrollTriggers()** / **refreshScrollTrigger()**
   - Memory management utilities

**Usage Example:**
```typescript
import { fadeIn, scrollFadeIn } from '@/utils/animations'

useEffect(() => {
  const ctx = gsap.context(() => {
    fadeIn('.hero-title', { delay: 0.2 })
    scrollFadeIn('.project-card')
  }, containerRef)

  return () => ctx.revert()
}, [])
```

### View Transitions API

Enabled globally in `globals.css`:

```css
@view-transition {
  navigation: auto;
}
```

**Automatic smooth transitions between pages** (modern browsers only).

---

## Common Tasks

### Task 1: Add a New Page

```bash
# 1. Create page directory
mkdir -p src/app/\(pages\)/new-page

# 2. Create page component
# File: src/app/(pages)/new-page/page.tsx
```

```typescript
export const dynamic = 'force-dynamic' // If using Convex

export default function NewPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold">New Page</h1>
    </div>
  )
}
```

```bash
# 3. Add navigation link
# Edit: src/components/Navigation.tsx or src/components/shared/Navigation.tsx
```

```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/new-page', label: 'New Page' }, // Add this
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]
```

### Task 2: Add a New UI Component

```bash
# File: src/components/ui/NewComponent.tsx
```

```typescript
import * as React from 'react'
import { cn } from '@/utils/cn'

export interface NewComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'special'
}

const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "rounded-md border p-4",
          // Variant styles
          variant === 'default' && "bg-background",
          variant === 'special' && "bg-primary text-primary-foreground",
          className
        )}
        {...props}
      />
    )
  }
)
NewComponent.displayName = "NewComponent"

export { NewComponent }
```

### Task 3: Add a Convex Query

```bash
# 1. Define schema (if new table)
# Edit: convex/schema.ts
```

```typescript
newTable: defineTable({
  name: v.string(),
  value: v.number(),
}).index("by_name", ["name"]),
```

```bash
# 2. Create query function
# File: convex/newTable.ts
```

```typescript
import { query } from "./_generated/server"
import { v } from "convex/values"

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("newTable").collect()
  },
})

export const getByName = query({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("newTable")
      .withIndex("by_name", (q) => q.eq("name", args.name))
      .first()
  },
})
```

```bash
# 3. Use in component
```

```typescript
'use client'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

export const dynamic = 'force-dynamic'

export default function Component() {
  const data = useQuery(api.newTable.getAll)

  if (!data) return <div>Loading...</div>

  return <div>{/* render data */}</div>
}
```

### Task 4: Add GSAP Animation

```typescript
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function AnimatedSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for sequenced animations
      const tl = gsap.timeline()

      tl.from('.title', {
        opacity: 0,
        y: 50,
        duration: 0.8,
      })
      .from('.subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.6,
      }, '-=0.4') // Start 0.4s before previous animation ends

      // Scroll-triggered animation
      gsap.from('.card', {
        scrollTrigger: {
          trigger: '.card',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 0.6,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef}>
      <h1 className="title">Title</h1>
      <p className="subtitle">Subtitle</p>
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
    </div>
  )
}
```

### Task 5: Update Theme Colors

```bash
# Edit: src/app/globals.css
```

```css
:root {
  /* Change primary color */
  --primary: 220 90% 56%; /* New HSL values */
  --primary-foreground: 0 0% 100%;
}

.dark {
  --primary: 220 90% 56%;
  --primary-foreground: 0 0% 100%;
}
```

Colors use HSL format: `hue saturation% lightness%`

### Task 6: Add TypeScript Type

```bash
# Edit: src/types/index.ts
```

```typescript
export interface NewType {
  id: string
  name: string
  createdAt: number
  optional?: string
}

// For Convex types
export type NewTypeFromConvex = {
  _id: Id<"tableName">
  _creationTime: number
} & NewType
```

---

## Troubleshooting

### Issue: TypeScript Errors After Schema Changes

**Solution:**
```bash
# Regenerate Convex types
npx convex dev

# Restart TypeScript server in VS Code
# Cmd+Shift+P → "TypeScript: Restart TS Server"
```

### Issue: GSAP Animations Not Working

**Check:**
1. Component has `'use client'` directive
2. Plugin is registered: `gsap.registerPlugin(ScrollTrigger)`
3. Cleanup function is present: `return () => ctx.revert()`
4. Elements exist before animating (use refs, check in useEffect)

### Issue: Convex Data Not Loading

**Check:**
1. `NEXT_PUBLIC_CONVEX_URL` is set in `.env.local`
2. Page has `export const dynamic = 'force-dynamic'`
3. Component has `'use client'` directive
4. Convex dev server is running: `npx convex dev`
5. Query returns data in Convex dashboard

### Issue: Tailwind Classes Not Applied

**Check:**
1. Class names are spelled correctly (check autocomplete)
2. No syntax errors in `className` prop
3. Using `cn()` for conditional classes
4. Custom classes are defined in `tailwind.config.ts`
5. Development server restarted after config changes

### Issue: Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version (requires 18+)
node --version
```

### Issue: Images Not Loading

**Check:**
1. Using Next.js `Image` component
2. Image has width/height or `fill` prop
3. `next.config.js` has `unoptimized: true` (this project)
4. Image path is correct (relative to `public/` directory)

### Issue: Git Push Fails

**Solution:**
```bash
# Ensure branch name starts with 'claude/' and matches session ID
git branch --show-current

# Push with upstream
git push -u origin <branch-name>

# If network error, retry with backoff (handled automatically)
```

---

## Additional Resources

### Key Files for Reference

| File | Purpose | When to Edit |
|------|---------|--------------|
| `package.json` | Dependencies | Adding new libraries |
| `tsconfig.json` | TypeScript config | Compiler options, paths |
| `tailwind.config.ts` | Tailwind customization | Colors, animations, plugins |
| `next.config.js` | Next.js settings | Image optimization, headers |
| `convex/schema.ts` | Database schema | New tables, indexes |
| `src/types/index.ts` | Global types | New interfaces, types |
| `src/utils/cn.ts` | className utility | Rarely (wraps clsx) |
| `src/utils/animations.ts` | GSAP utilities | Adding animation helpers |
| `src/app/globals.css` | Global styles | CSS variables, base styles |
| `src/app/layout.tsx` | Root layout | Metadata, global wrappers |

### Environment Variables

```bash
# .env.local (not committed)
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ENABLE_ANIMATIONS=true
NEXT_PUBLIC_ENABLE_DARK_MODE=true
```

**Important:** Only `NEXT_PUBLIC_*` variables are exposed to the browser.

### Deployment Checklist

- [ ] Environment variables configured
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors: `npm run lint`
- [ ] Convex deployed: `npx convex deploy`
- [ ] Images optimized (or `unoptimized: true` in config)
- [ ] Security headers configured (already in `next.config.js`)
- [ ] Analytics configured (Google Analytics ID)

### Performance Best Practices

1. **Use Server Components by default** - Only add `'use client'` when needed
2. **Lazy load heavy components** - Use `dynamic()` for large components
3. **Optimize images** - Use Next.js Image component
4. **Minimize JavaScript** - Tree-shaking, code splitting
5. **Clean up animations** - Always revert GSAP contexts
6. **Use indexes** - Add Convex indexes for frequently queried fields

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Production build
npm run start           # Start production server

# Code Quality
npm run lint            # ESLint checks
npm run format          # Prettier formatting

# Convex
npx convex dev          # Start Convex dev server
npx convex deploy       # Deploy to production
npx convex dashboard    # Open Convex dashboard

# Git
git status              # Check status
git add .               # Stage changes
git commit -m "msg"     # Commit changes
git push -u origin <branch>  # Push to remote

# Cleanup
rm -rf .next            # Clear Next.js cache
rm -rf node_modules     # Clear dependencies
npm install             # Reinstall
```

---

## Conclusion

This codebase follows modern React and Next.js best practices with:

- **Type-safe development** with TypeScript
- **Real-time data** with Convex
- **Professional animations** with GSAP
- **Utility-first styling** with Tailwind
- **Component composition** patterns
- **Accessibility** built-in

When making changes:
1. Follow existing patterns
2. Maintain type safety
3. Test responsively
4. Clean up effects
5. Keep accessibility in mind

For questions or issues, refer to:
- README.md - User documentation
- SETUP.md - Setup instructions
- This file (CLAUDE.md) - Development guide
