'use client';

import { useEffect } from 'react';

export function SemanticHero() {
  useEffect(() => {
    // Announce page load for screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = 'Brutalist HTML page loaded successfully';
    document.body.appendChild(announcement);

    return () => {
      document.body.removeChild(announcement);
    };
  }, []);

  return (
    <header className="border-b-4 border-black p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          BRUTALIST HTML
        </h1>

        <p className="text-xl md:text-2xl mb-6 font-normal leading-relaxed">
          Semantic markup. Accessibility first. No decoration.
        </p>

        <nav aria-label="Primary navigation" className="border-t-2 border-black pt-4 mt-4">
          <ul className="flex flex-wrap gap-4 text-lg">
            <li>
              <a
                href="#content"
                className="underline hover:no-underline focus:outline-4 focus:outline-black"
              >
                Content
              </a>
            </li>
            <li>
              <a
                href="#data"
                className="underline hover:no-underline focus:outline-4 focus:outline-black"
              >
                Data
              </a>
            </li>
            <li>
              <a
                href="#structure"
                className="underline hover:no-underline focus:outline-4 focus:outline-black"
              >
                Structure
              </a>
            </li>
          </ul>
        </nav>

        <section className="mt-8 border-2 border-black p-4" aria-labelledby="principles-heading">
          <h2 id="principles-heading" className="text-2xl font-bold mb-3">
            Design Principles
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Pure semantic HTML elements</li>
            <li>Accessibility-first approach</li>
            <li>Performance-optimized delivery</li>
            <li>Responsive HTML-first design</li>
            <li>TypeScript strict mode</li>
          </ul>
        </section>
      </div>
    </header>
  );
}
