# Portfolio Website Setup Guide

## Overview

This is a modern portfolio website built with Next.js 15, featuring:
- WebGL shader background animations
- GSAP scroll animations
- Convex backend integration (ready to configure)
- TypeScript strict mode
- Tailwind CSS styling
- View Transitions API support

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:

```
# Convex (optional - leave empty for now)
NEXT_PUBLIC_CONVEX_URL=

# Other optional settings
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_ENABLE_ANIMATIONS=true
NEXT_PUBLIC_ENABLE_DARK_MODE=true
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Convex Setup (Optional)

To enable the featured projects section with real data:

### 1. Install Convex CLI

```bash
npm install -g convex
```

### 2. Initialize Convex

```bash
npx convex dev
```

Follow the prompts to create a Convex account and project.

### 3. Update Environment

The Convex CLI will automatically update your `.env.local` with the `NEXT_PUBLIC_CONVEX_URL`.

### 4. Add Sample Data

Once Convex is set up, you can add projects through the Convex dashboard or by creating mutations.

Example project structure:
```typescript
{
  title: "Project Name",
  description: "Project description",
  imageUrl: "https://example.com/image.jpg",
  tags: ["React", "Next.js", "TypeScript"],
  githubUrl: "https://github.com/username/project",
  liveUrl: "https://project.com",
  featured: true,
  order: 1,
  createdAt: Date.now()
}
```

## Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   └── home/
│   │   │       ├── components/
│   │   │       │   ├── HeroSection.tsx
│   │   │       │   └── FeaturedProjects.tsx
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   └── ShaderBackground.tsx
│   │   ├── ConvexClientProvider.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── ProjectCard.tsx
│   ├── lib/
│   │   └── view-transitions.ts
│   └── types/
│       └── convex.d.ts
├── convex/
│   ├── _generated/
│   ├── projects.ts
│   ├── schema.ts
│   └── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Key Features

### 1. Hero Section
- WebGL shader background with flowing gradients
- GSAP entrance animations
- Responsive design
- Scroll parallax effects

### 2. Featured Projects
- Dynamic loading from Convex (when configured)
- Animated project cards with GSAP
- Hover effects
- Responsive grid layout

### 3. Navigation
- Fixed navbar with scroll effects
- Mobile-responsive menu
- Active route highlighting

### 4. Animations
- GSAP scroll-triggered animations
- View Transitions API for page transitions
- Smooth hover effects on interactive elements

## Customization

### Update Colors

Edit `tailwind.config.ts` and `src/app/globals.css` to customize the color scheme.

### Modify Shader

Edit `src/components/ui/ShaderBackground.tsx` to change the WebGL shader animation.

### Add Pages

Create new pages in `src/app/(pages)/[page-name]/page.tsx`.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## Deploy

This project can be deployed to:
- Vercel (recommended)
- Netlify
- Any platform supporting Next.js 15

### Vercel Deployment

```bash
npm install -g vercel
vercel
```

## Troubleshooting

### Convex Not Working
- Ensure `NEXT_PUBLIC_CONVEX_URL` is set in `.env.local`
- Run `npx convex dev` to start the Convex development server
- The app will work without Convex, just showing placeholder content

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version (requires Node 18+)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

MIT
