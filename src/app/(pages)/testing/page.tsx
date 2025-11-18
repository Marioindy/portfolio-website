import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Design Experiments | Portfolio',
  description: 'Explore 39+ experimental design aesthetics and cutting-edge web experiences across multiple categories.',
};

interface TestingPage {
  id: number | string;
  title: string;
  description: string;
  href: string;
  color: string;
  tags?: string[];
}

interface Category {
  name: string;
  description: string;
  gradient: string;
  pages: TestingPage[];
}

export default function TestingIndexPage() {
  const categories: Category[] = [
    {
      name: 'Futuristic & Cyberpunk',
      description: 'Neon-lit digital dystopias and high-tech interfaces',
      gradient: 'from-cyan-500 via-purple-600 to-pink-500',
      pages: [
        { id: 2, title: 'Cyberpunk Lab', description: 'Neon aesthetics, 3D geometric shapes, glassmorphism, futuristic design patterns', href: '/testing/page-2', color: 'from-blue-900 via-purple-900 to-cyan-900', tags: ['3D', 'Neon', 'Glass'] },
        { id: 18, title: 'Terminal Hacker', description: 'Matrix rain effects, green terminal interface, ASCII art, glitch effects', href: '/testing-page-18', color: 'from-black via-green-950 to-black', tags: ['Terminal', 'Matrix', 'ASCII'] },
        { id: 28, title: 'Cosmic Space', description: 'Animated starfield, parallax effects, cosmic colors, futuristic typography', href: '/testing/page-28', color: 'from-indigo-950 via-purple-900 to-blue-950', tags: ['Space', 'Parallax', 'Cosmic'] },
        { id: 36, title: 'Stealth Mode', description: 'Hidden until hover, custom stealth cursor, scanning effects, encrypted aesthetic', href: '/testing/page-36', color: 'from-black via-gray-950 to-green-950', tags: ['Interactive', 'Stealth', 'Hidden'] },
        { id: 48, title: 'Synthwave', description: 'Neon grid background, flowing light effects, retro synthwave vibes', href: '/testing/page-48', color: 'from-purple-900 via-pink-800 to-cyan-900', tags: ['Synthwave', 'Neon', 'Retro'] },
      ],
    },
    {
      name: 'Artistic & Expressive',
      description: 'Bold creative expressions and experimental visual art',
      gradient: 'from-orange-500 via-pink-500 to-purple-600',
      pages: [
        { id: 1, title: 'KODE Immersive', description: 'Dimensional typography, orange-to-purple gradients, frosted glass, kinetic storytelling', href: '/testing/page-1', color: 'from-orange-600 via-purple-700 to-indigo-900', tags: ['Typography', 'Gradient', 'Glass'] },
        { id: 3, title: 'Chromatic Rebellion', description: 'Explosive neon gradients, vibrant interactions, color theory exploration', href: '/testing/page-3', color: 'from-pink-600 via-purple-600 to-cyan-600', tags: ['Neon', 'Color Theory', 'Vibrant'] },
        { id: 21, title: 'Organic Fluidity', description: 'SVG morphing shapes, flowing animations, nature-inspired, blob transitions', href: '/testing/page-21', color: 'from-purple-500 via-pink-500 to-indigo-500', tags: ['Organic', 'Morph', 'Fluid'] },
        { id: 37, title: 'Ocean Deep', description: 'Wave animations, liquid morphing, water ripples, flowing transitions', href: '/testing/page-37', color: 'from-blue-900 via-cyan-800 to-teal-900', tags: ['Water', 'Waves', 'Aquatic'] },
        { id: 39, title: 'Cosmic Horror', description: 'Alien geometry, cosmic horror aesthetics, unsettling eldritch design', href: '/testing/page-39', color: 'from-slate-900 via-purple-950 to-indigo-950', tags: ['Horror', 'Alien', 'Eldritch'] },
        { id: 45, title: 'Bioluminescent', description: 'Glowing organisms, pulsing animations, neon colors, particle effects', href: '/testing/page-45', color: 'from-black via-lime-950 to-cyan-950', tags: ['Glow', 'Organic', 'Particles'] },
      ],
    },
    {
      name: 'Retro & Nostalgic',
      description: 'Vintage computing and classic design throwbacks',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      pages: [
        { id: 5, title: 'Pixel Perfect', description: 'Pixel art, 8-bit aesthetics, CRT effects, scanline overlay, retro gaming', href: '/testing/page-5', color: 'from-gray-900 via-gray-800 to-black', tags: ['8-bit', 'CRT', 'Pixel Art'] },
        { id: 22, title: 'Retro Computing', description: 'CRT monitor, MS-DOS interface, pixelated graphics, monochrome green display', href: '/testing/page-22', color: 'from-black via-green-950 to-gray-950', tags: ['DOS', 'CRT', 'Monochrome'] },
        { id: 27, title: 'Film Noir', description: 'High contrast black and white, dramatic shadows, 1940s cinema aesthetic', href: '/testing/page-27', color: 'from-black via-gray-800 to-black', tags: ['Noir', 'B&W', 'Vintage'] },
        { id: 40, title: 'Jazz Age', description: 'Art deco patterns, warm retro colors, smooth jazz animations, 1920s elegance', href: '/testing/page-40', color: 'from-amber-900 via-orange-800 to-yellow-900', tags: ['Art Deco', 'Jazz', '1920s'] },
      ],
    },
    {
      name: 'Luxury & Premium',
      description: 'Elegant, high-end, and sophisticated aesthetics',
      gradient: 'from-yellow-600 via-amber-500 to-orange-600',
      pages: [
        { id: 11, title: 'Art Deco Luxe', description: 'Gold and black palette, geometric luxury, streamlined modernity', href: '/testing/page-11', color: 'from-yellow-700 via-amber-600 to-black', tags: ['Gold', 'Geometric', 'Luxury'] },
        { id: 43, title: 'Gold Foil', description: 'Gold foil aesthetic, marble textures, sophisticated minimalism, editorial', href: '/testing/page-43', color: 'from-gray-900 via-amber-900 to-yellow-900', tags: ['Foil', 'Marble', 'Editorial'] },
        { id: 47, title: 'Baroque', description: 'Ornate decorations, rich gold patterns, over-the-top elegance, damask', href: '/testing/page-47', color: 'from-amber-700 via-red-800 to-purple-900', tags: ['Ornate', 'Baroque', 'Damask'] },
      ],
    },
    {
      name: 'Minimalist & Clean',
      description: 'Less is more - brutal honesty in design',
      gradient: 'from-gray-100 via-gray-300 to-gray-500',
      pages: [
        { id: 9, title: 'Monochrome', description: 'Pure black and white, bold typography, extreme negative space', href: '/testing/page-9', color: 'from-white via-gray-200 to-black', tags: ['B&W', 'Typography', 'Minimal'] },
        { id: 10, title: 'Brutalist Web', description: 'Semantic HTML, system fonts, structural grid, honest markup, no decoration', href: '/testing/page-10', color: 'from-gray-100 via-gray-300 to-gray-500', tags: ['Brutalist', 'Semantic', 'Grid'] },
        { id: 19, title: 'Brutalist HTML', description: 'Semantic HTML, accessibility-first, minimal styling, functional design', href: '/testing/page-19', color: 'from-white via-gray-100 to-gray-300', tags: ['A11y', 'Semantic', 'Clean'] },
        { id: 33, title: 'Fashion Editorial', description: 'Extreme minimalism, bold typography, asymmetrical layouts, high-end editorial', href: '/testing/page-33', color: 'from-black via-gray-900 to-gray-800', tags: ['Fashion', 'Editorial', 'Minimal'] },
      ],
    },
    {
      name: 'Soft & Playful',
      description: 'Gentle colors, organic shapes, and friendly vibes',
      gradient: 'from-pink-300 via-purple-300 to-blue-300',
      pages: [
        { id: 6, title: 'OFF+BRAND Soft', description: 'Pastel palettes, organic geometry, refined playfulness in digital design', href: '/testing/page-6', color: 'from-pink-200 via-purple-200 to-blue-200', tags: ['Pastel', 'Organic', 'Playful'] },
        { id: 8, title: 'Lime Energy', description: 'Vibrant lime green, bold geometric shapes, energetic compositions', href: '/testing/page-8', color: 'from-lime-500 via-green-600 to-emerald-700', tags: ['Lime', 'Geometric', 'Energy'] },
        { id: 15, title: 'Memphis Design', description: 'Playful geometric shapes, bright colors, fun typography, 1980s postmodern', href: '/testing/page-15', color: 'from-yellow-400 via-pink-400 to-cyan-400', tags: ['Memphis', '80s', 'Geometric'] },
        { id: 31, title: 'Japanese Zen', description: 'Japanese minimalism, negative space mastery, zen aesthetics, calm', href: '/testing/page-31', color: 'from-gray-100 via-stone-200 to-neutral-300', tags: ['Zen', 'Japanese', 'Calm'] },
        { id: 34, title: 'Biomorphic', description: 'Organic blob shapes, smooth curves, fluid animations, nature-inspired', href: '/testing/page-34', color: 'from-emerald-400 via-teal-400 to-cyan-400', tags: ['Organic', 'Blob', 'Nature'] },
      ],
    },
    {
      name: 'Technical & Data',
      description: 'Dashboards, metrics, and data visualization',
      gradient: 'from-slate-700 via-blue-600 to-cyan-500',
      pages: [
        { id: 24, title: 'Dashboard UI', description: 'Real-time dashboard, metrics grid, chart sections, data tables', href: '/testing/page-24', color: 'from-slate-900 via-blue-900 to-cyan-900', tags: ['Dashboard', 'Data', 'Metrics'] },
        { id: 46, title: 'Data Brutalist', description: 'Monospace typography, real-time data streams, code as design, ASCII charts', href: '/testing/page-46', color: 'from-neutral-950 via-gray-900 to-green-950', tags: ['Data', 'Monospace', 'Raw'] },
      ],
    },
    {
      name: 'Special & Hybrid',
      description: 'Unique concepts and experimental combinations',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      pages: [
        { id: 7, title: 'Warm Photography', description: 'Warm earth tones, full-bleed photography, elegant typography, Aino aesthetic', href: '/testing/page-7', color: 'from-orange-800 via-amber-700 to-yellow-800', tags: ['Photography', 'Warm', 'Editorial'] },
        { id: 12, title: 'Maximalism', description: 'Overwhelming colors, rich textures, dense typography, baroque sensory overload', href: '/testing/page-12', color: 'from-rose-600 via-purple-800 to-emerald-900', tags: ['Maximalist', 'Baroque', 'Rich'] },
        { id: 13, title: 'Glassmorphism', description: 'Frosted glass effect, translucent layers, soft blurs, modern minimalism', href: '/testing/page-13', color: 'from-blue-50 via-purple-50 to-pink-50', tags: ['Glass', 'Blur', 'Modern'] },
        { id: 16, title: 'Steampunk', description: 'Industrial steampunk, gears, copper tones, mechanical animations', href: '/testing/page-16', color: 'from-amber-900 via-stone-800 to-neutral-900', tags: ['Steampunk', 'Industrial', 'Victorian'] },
        { id: 17, title: 'Neumorphism', description: 'Soft shadows, embossed appearance, 3D depth effects, soft UI', href: '/testing-page-17', color: 'from-gray-200 via-gray-300 to-gray-400', tags: ['Neumorphic', 'Soft', '3D'] },
        { id: 20, title: 'Holographic', description: 'Iridescent gradients, shimmering effects, light-based modern tech', href: '/testing/page-20', color: 'from-cyan-400 via-purple-400 to-pink-400', tags: ['Holographic', 'Iridescent', 'Shimmer'] },
        { id: 25, title: 'Urban Graffiti', description: 'Graffiti header, urban grid, spray paint section, street art aesthetic', href: '/testing/page-25', color: 'from-gray-900 via-orange-700 to-purple-800', tags: ['Graffiti', 'Urban', 'Street'] },
        { id: 30, title: 'Psychedelic', description: 'Vibrant colors, trippy patterns, surreal visual effects', href: '/testing/page-30', color: 'from-pink-600 via-yellow-500 to-cyan-500', tags: ['Psychedelic', 'Trippy', 'Surreal'] },
        { id: 42, title: 'Kinetic Type', description: 'Dynamic text animations, moving letters, text as motion art', href: '/testing/page-42', color: 'from-black via-indigo-900 to-purple-900', tags: ['Typography', 'Animation', 'Kinetic'] },
      ],
    },
  ];

  const specialPages: TestingPage[] = [
    { id: 'shader', title: 'Shader Demo', description: 'Interactive shader lines animation demonstration', href: '/shader-demo', color: 'from-indigo-600 via-purple-600 to-pink-600', tags: ['WebGL', 'Shader', 'Interactive'] },
  ];

  const totalPages = categories.reduce((sum, cat) => sum + cat.pages.length, 0) + specialPages.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6">
            Design Experiments
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-4">
            Explore <span className="text-purple-400 font-bold">{totalPages}</span> experimental design aesthetics and cutting-edge web experiences
          </p>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            Each page showcases a unique visual language, from retro computing to cosmic horror, brutalist minimalism to baroque maximalism
          </p>
        </div>

        {/* Categories */}
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-20">
            <div className="mb-8">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.gradient} mb-3`}>
                {category.name}
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-3xl">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.pages.map((page) => (
                <Link
                  key={page.id}
                  href={page.href}
                  className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${page.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
                  <div className="relative p-6 backdrop-blur-sm bg-gray-950/60">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {page.title}
                      </h3>
                      <span className="text-xs text-gray-500 font-mono">#{page.id}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {page.description}
                    </p>
                    {page.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {page.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-800/50 text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                      Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Special Pages */}
        {specialPages.length > 0 && (
          <div className="mb-20">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 mb-3">
                Special Demos
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-3xl">
                Interactive demonstrations and technical experiments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialPages.map((page) => (
                <Link
                  key={page.id}
                  href={page.href}
                  className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${page.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
                  <div className="relative p-6 backdrop-blur-sm bg-gray-950/60">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {page.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {page.description}
                    </p>
                    {page.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {page.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-800/50 text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-lg group-hover:from-emerald-500 group-hover:to-teal-500 transition-all">
                      Launch Demo <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center border-t border-gray-800 pt-12">
          <Link
            href="/home"
            className="inline-block px-8 py-3 border-2 border-gray-700 text-gray-300 font-semibold rounded-full hover:border-purple-500 hover:text-white transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
