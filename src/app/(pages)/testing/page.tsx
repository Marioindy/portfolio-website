import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Testing Pages | Portfolio',
  description: 'Explore various design aesthetics and experimental pages.',
};

export default function TestingIndexPage() {
  const testingPages = [
    {
      id: 12,
      title: 'Page 12 - Maximalism',
      description:
        'Overwhelming colors, rich textures, dense typography, layered elements, collage style, baroque-inspired sensory overload.',
      href: '/testing/page-12',
      color: 'from-rose-600 via-purple-800 to-emerald-900',
    },
    {
      id: 13,
      title: 'Page 13 - Glassmorphism',
      description:
        'Frosted glass effect, translucent layers, soft blurs, modern minimalism, light backgrounds, soft shadows.',
      href: '/testing/page-13',
      color: 'from-blue-50 via-purple-50 to-pink-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-8 text-center">
          Testing Pages
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Explore experimental design aesthetics and cutting-edge web
          experiences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testingPages.map((page) => (
            <Link
              key={page.id}
              href={page.href}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${page.color} opacity-20 group-hover:opacity-30 transition-opacity`}
              />
              <div className="relative p-8 backdrop-blur-sm bg-gray-900/80">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {page.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {page.description}
                </p>
                <div className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                  View Page →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-purple-500 hover:text-white transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
