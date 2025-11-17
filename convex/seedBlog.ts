import { mutation } from './_generated/server';

/**
 * Seed the database with sample blog posts
 * This is for development/testing purposes only
 */
export const seedBlogPosts = mutation({
  handler: async (ctx) => {
    // Check if we already have posts
    const existingPosts = await ctx.db
      .query('blogPosts')
      .collect();

    if (existingPosts.length > 0) {
      return {
        success: false,
        message: 'Blog posts already exist. Skipping seed.',
        count: existingPosts.length,
      };
    }

    const samplePosts = [
      {
        title: 'Building Scalable Web Applications with Next.js 15',
        slug: 'building-scalable-web-apps-nextjs-15',
        excerpt:
          'Learn how to leverage Next.js 15 features to build high-performance, scalable web applications with the latest App Router and Server Components.',
        content: `# Building Scalable Web Applications with Next.js 15

Next.js 15 brings powerful new features that make building scalable web applications easier than ever. In this comprehensive guide, we'll explore the key features and best practices.

## Server Components

Server Components are a game-changer for React applications. They allow you to render components on the server, reducing the JavaScript bundle size sent to the client.

### Benefits of Server Components

- **Improved Performance**: Less JavaScript sent to the browser
- **Better SEO**: Content is rendered on the server
- **Direct Database Access**: Query data directly in your components

## App Router

The new App Router introduces a file-system based routing approach with improved layouts and nested routing capabilities.

\`\`\`typescript
// app/blog/[slug]/page.tsx
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return <Article post={post} />;
}
\`\`\`

## Conclusion

Next.js 15 provides all the tools you need to build modern, scalable web applications. Start experimenting with these features today!`,
        tags: ['Next.js', 'React', 'Web Development'],
        published: true,
        publishedAt: Date.now() - 86400000 * 5,
        readTime: 8,
        author: {
          name: 'Mario Indy',
          avatarUrl: undefined,
        },
      },
      {
        title: 'Mastering TypeScript: Advanced Patterns and Best Practices',
        slug: 'mastering-typescript-patterns',
        excerpt:
          'Dive deep into advanced TypeScript patterns that will level up your development skills and help you write more maintainable code.',
        content: `# Mastering TypeScript: Advanced Patterns and Best Practices

TypeScript has become the standard for building large-scale JavaScript applications. Let's explore advanced patterns that will make you a TypeScript expert.

## Generic Constraints

Generics are powerful, but sometimes you need to constrain what types can be used.

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
\`\`\`

## Conditional Types

Conditional types allow you to create types that depend on other types.

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
\`\`\`

## Utility Types

TypeScript provides many built-in utility types:

- **Partial<T>**: Makes all properties optional
- **Required<T>**: Makes all properties required
- **Pick<T, K>**: Picks specific properties from a type
- **Omit<T, K>**: Omits specific properties from a type

## Best Practices

1. Use strict mode
2. Avoid \`any\` type
3. Leverage type inference
4. Use union types for flexibility

Start applying these patterns in your projects today!`,
        tags: ['TypeScript', 'JavaScript', 'Programming'],
        published: true,
        publishedAt: Date.now() - 86400000 * 10,
        readTime: 12,
        author: {
          name: 'Mario Indy',
        },
      },
      {
        title: 'GSAP Animation Cookbook: Creating Stunning Web Animations',
        slug: 'gsap-animation-cookbook',
        excerpt:
          'A comprehensive guide to creating beautiful, performant animations with GSAP. Learn the essentials and advanced techniques.',
        content: `# GSAP Animation Cookbook

GSAP (GreenSock Animation Platform) is the industry-standard JavaScript animation library. Let's explore how to create stunning animations.

## Getting Started

First, install GSAP in your project:

\`\`\`bash
npm install gsap
\`\`\`

## Basic Animations

The simplest GSAP animation uses the \`gsap.to()\` method:

\`\`\`javascript
gsap.to(".box", {
  x: 300,
  duration: 2,
  ease: "power2.out"
});
\`\`\`

## Timelines

Timelines allow you to sequence multiple animations:

\`\`\`javascript
const tl = gsap.timeline();
tl.to(".box1", { x: 300 })
  .to(".box2", { y: 200 })
  .to(".box3", { rotation: 360 });
\`\`\`

## ScrollTrigger

ScrollTrigger adds scroll-based animations:

\`\`\`javascript
gsap.registerPlugin(ScrollTrigger);

gsap.to(".element", {
  scrollTrigger: {
    trigger: ".element",
    start: "top center",
    end: "bottom center",
    scrub: true
  },
  x: 400
});
\`\`\`

## Performance Tips

- Use \`will-change\` CSS property
- Animate transform and opacity
- Avoid animating layout properties

Happy animating!`,
        tags: ['GSAP', 'Animation', 'Frontend'],
        published: true,
        publishedAt: Date.now() - 86400000 * 15,
        readTime: 10,
        author: {
          name: 'Mario Indy',
        },
      },
      {
        title: 'Real-time Applications with Convex: A Complete Guide',
        slug: 'realtime-apps-convex-guide',
        excerpt:
          'Explore how Convex simplifies building real-time applications with its reactive architecture and built-in database.',
        content: `# Real-time Applications with Convex

Convex is a backend platform that makes building real-time applications incredibly simple. Let's explore its key features.

## What is Convex?

Convex is a backend-as-a-service that provides:

- **Real-time Database**: Reactive queries that update automatically
- **Functions**: Write backend logic in TypeScript
- **File Storage**: Built-in file storage
- **Authentication**: Easy user authentication

## Setting Up Convex

\`\`\`bash
npm install convex
npx convex dev
\`\`\`

## Defining Your Schema

\`\`\`typescript
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  messages: defineTable({
    author: v.string(),
    body: v.string(),
    timestamp: v.number(),
  })
});
\`\`\`

## Writing Queries

Queries are reactive and automatically update:

\`\`\`typescript
export const getMessages = query({
  handler: async (ctx) => {
    return await ctx.db.query('messages').collect();
  },
});
\`\`\`

## Mutations

Mutations modify your database:

\`\`\`typescript
export const sendMessage = mutation({
  args: { author: v.string(), body: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert('messages', {
      author: args.author,
      body: args.body,
      timestamp: Date.now(),
    });
  },
});
\`\`\`

## Why Convex?

- **Type Safety**: End-to-end TypeScript
- **Real-time by Default**: No websockets to manage
- **Great DX**: Excellent developer experience

Try Convex for your next project!`,
        tags: ['Convex', 'Real-time', 'Backend'],
        published: true,
        publishedAt: Date.now() - 86400000 * 20,
        readTime: 15,
        author: {
          name: 'Mario Indy',
        },
      },
      {
        title: 'CSS Grid and Flexbox: Modern Layout Techniques',
        slug: 'css-grid-flexbox-layouts',
        excerpt:
          'Master modern CSS layout techniques to create responsive, flexible designs that work beautifully on all devices.',
        content: `# CSS Grid and Flexbox: Modern Layout Techniques

Modern CSS provides powerful layout tools. Let's master Grid and Flexbox to create beautiful, responsive designs.

## Flexbox Basics

Flexbox is perfect for one-dimensional layouts:

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

### Flex Properties

- **justify-content**: Align items horizontally
- **align-items**: Align items vertically
- **flex-direction**: Set layout direction
- **gap**: Space between items

## CSS Grid

Grid excels at two-dimensional layouts:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

### Grid Areas

Create complex layouts with named areas:

\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
\`\`\`

## When to Use Each

- **Flexbox**: Navigation bars, button groups, card layouts
- **Grid**: Page layouts, image galleries, dashboards

## Responsive Design

Both work great with media queries:

\`\`\`css
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
\`\`\`

Master these tools and create amazing layouts!`,
        tags: ['CSS', 'Layout', 'Frontend'],
        published: true,
        publishedAt: Date.now() - 86400000 * 25,
        readTime: 6,
        author: {
          name: 'Mario Indy',
        },
      },
      {
        title: 'Optimizing React Performance: Tips and Tricks',
        slug: 'optimizing-react-performance',
        excerpt:
          'Practical tips for optimizing React applications and improving user experience through better performance.',
        content: `# Optimizing React Performance

Performance is crucial for user experience. Let's explore practical techniques to optimize your React applications.

## React.memo

Prevent unnecessary re-renders with React.memo:

\`\`\`typescript
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Complex rendering */}</div>;
});
\`\`\`

## useMemo and useCallback

Memoize expensive calculations and callbacks:

\`\`\`typescript
const memoizedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## Code Splitting

Split your code to reduce initial bundle size:

\`\`\`typescript
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
\`\`\`

## Virtual Scrolling

For long lists, use virtual scrolling:

\`\`\`typescript
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={1000}
  itemSize={50}
>
  {Row}
</FixedSizeList>
\`\`\`

## Performance Monitoring

Use React DevTools Profiler to identify bottlenecks:

1. Open React DevTools
2. Go to Profiler tab
3. Record a session
4. Analyze component render times

## Best Practices

1. Avoid inline object/array creation in render
2. Use key prop correctly in lists
3. Lift state up only when necessary
4. Consider using state management libraries

Apply these techniques and watch your app fly!`,
        tags: ['React', 'Performance', 'Optimization'],
        published: true,
        publishedAt: Date.now() - 86400000 * 30,
        readTime: 9,
        author: {
          name: 'Mario Indy',
        },
      },
    ];

    // Insert all sample posts
    const insertedIds = [];
    for (const post of samplePosts) {
      const id = await ctx.db.insert('blogPosts', post);
      insertedIds.push(id);
    }

    return {
      success: true,
      message: 'Successfully seeded blog posts',
      count: insertedIds.length,
      ids: insertedIds,
    };
  },
});
