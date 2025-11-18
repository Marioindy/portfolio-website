import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Testing Pages | Portfolio',
  description: 'Explore experimental design concepts and interactive experiences',
};

export const dynamic = 'force-dynamic';

export default function TestingIndexPage() {
  const testingPages = [
    {
      number: 42,
      title: 'Kinetic Typography',
      description: 'Dynamic text animations, moving letters, flowing words, and text as motion art',
      theme: 'Text Motion',
      gradient: 'from-purple-600 via-pink-500 to-cyan-500',
      href: '/testing/page-42'
    },
    {
      number: 43,
      title: 'Luxury Gold Foil',
      description: 'Premium gold accents, elegant marble textures, and sophisticated minimalism',
      theme: 'Premium Elegance',
      gradient: 'from-amber-600 via-yellow-500 to-amber-400',
      href: '/testing/page-43'
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Testing Lab
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Experimental design concepts and interactive experiences
          </p>
        </div>

        {/* Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testingPages.map((page) => (
            <Link
              key={page.number}
              href={page.href}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${page.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />

              <div className="relative p-8 h-full flex flex-col">
                {/* Page number badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900 border border-neutral-700 mb-6">
                  <span className={`text-2xl font-bold bg-gradient-to-br ${page.gradient} bg-clip-text text-transparent`}>
                    {page.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-sm text-neutral-500 mb-2 uppercase tracking-wider">
                    {page.theme}
                  </div>

                  <h2 className={`text-3xl font-bold mb-4 bg-gradient-to-br ${page.gradient} bg-clip-text text-transparent`}>
                    {page.title}
                  </h2>

                  <p className="text-neutral-400 leading-relaxed">
                    {page.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center text-neutral-500 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium mr-2">View Experience</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tech stack info */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50">
            <span className="text-sm text-neutral-400">Built with</span>
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="text-blue-400">TypeScript</span>
              <span className="text-neutral-600">•</span>
              <span className="text-cyan-400">Tailwind</span>
              <span className="text-neutral-600">•</span>
              <span className="text-green-400">GSAP</span>
              <span className="text-neutral-600">•</span>
              <span className="text-orange-400">Convex</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
