# Modern Portfolio Website

A modular, modern portfolio website built with Next.js 15, TypeScript, Convex, GSAP, and Tailwind CSS. Features smooth View Transitions API animations, real-time data management, and a fully responsive design.

## Features

- ✨ **Modern Stack**: Built with Next.js 15, React 18, and TypeScript
- 🎨 **Beautiful Animations**: GSAP-powered animations and View Transitions API
- 🔄 **Real-time Data**: Convex for backend data management
- 📱 **Fully Responsive**: Mobile-first design with Tailwind CSS
- 🌗 **Dark Mode**: Built-in dark/light theme support
- 🤖 **AI Chatbot**: Interactive assistant for visitors
- 📝 **Blog System**: Full-featured blog with tags and search
- 💼 **Project Showcase**: Filterable project portfolio
- 📧 **Contact Form**: Form submissions stored in Convex
- ♿ **Accessible**: ARIA labels and semantic HTML

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **GSAP** - Animation library
- **View Transitions API** - Native page transitions

### Backend
- **Convex** - Real-time backend platform
- Database for projects, blog posts, skills, and contact submissions
- Real-time data synchronization

## Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   ├── contact/
│   │   │   └── blog/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── providers.tsx
│   ├── components/
│   │   ├── shared/
│   │   └── ui/
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   └── styles/
├── convex/
│   ├── schema.ts
│   ├── projects.ts
│   ├── blog.ts
│   ├── contact.ts
│   └── skills.ts
└── ...config files
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Convex account (free at [convex.dev](https://convex.dev))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up Convex:
```bash
npx convex dev
```

4. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

5. Add your Convex URL to `.env.local`:
```env
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
```

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Navigation**: Edit `src/components/shared/Navigation.tsx`
2. **Footer**: Edit `src/components/shared/Footer.tsx`
3. **About Page**: Update `src/app/(pages)/about/components/BioSection.tsx`
4. **Contact Info**: Update `src/app/(pages)/contact/components/ContactInfo.tsx`

### Styling

- **Theme colors**: Update CSS variables in `src/styles/globals.css`
- **Animations**: Customize in `src/utils/animations.ts`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

## License

MIT License - feel free to use for your own portfolio!
