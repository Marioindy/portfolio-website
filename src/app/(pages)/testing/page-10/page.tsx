'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Force dynamic rendering for Convex integration
export const dynamic = 'force-dynamic';

/**
 * BRUTALIST_THEORY:
 * Form follows function absolutely. No decoration.
 * Raw materials exposed. System fonts honored.
 * Grid as structure. Typography as hierarchy.
 * Honest markup. Semantic beauty.
 */

export default function BrutalistPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // View Transitions API setup
    if ('startViewTransition' in document) {
      console.log('[BRUTALIST_THEORY] View Transitions enabled');
    }

    // Minimal GSAP animation - entrance only
    const ctx = gsap.context(() => {
      gsap.from('[data-brutalist-block]', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, containerRef);

    console.log('[STRUCTURAL_DESIGN] Grid initialized');

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white text-black"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* HEADER - Functional navigation */}
      <header
        data-brutalist-block
        className="border-b-4 border-black p-6"
        style={{ viewTransitionName: 'brutalist-header' }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-2">
            PAGE-10
          </h1>
          <p className="text-sm font-mono uppercase tracking-wide">
            BRUTALIST WEB DESIGN / TESTING ENVIRONMENT
          </p>
        </div>
      </header>

      {/* MAIN CONTENT - Grid structure */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Hero section - stark typography */}
        <section data-brutalist-block className="mb-16 border-b-2 border-black pb-16">
          <h2 className="text-8xl font-black leading-none mb-6 uppercase">
            BEAUTY
            <br />
            THROUGH
            <br />
            REJECTION
          </h2>
          <p className="text-2xl font-mono max-w-2xl">
            The honesty of brutalism. Form follows function absolutely. No lies, no decoration,
            no compromise.
          </p>
        </section>

        {/* Grid layout - functional blocks */}
        <section ref={gridRef} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Block 1 - Article */}
            <article
              data-brutalist-block
              className="border-4 border-black p-6 bg-white hover:bg-black hover:text-white transition-colors duration-200"
            >
              <header className="mb-4">
                <h3 className="text-3xl font-black uppercase mb-2">ARTICLE.01</h3>
                <time className="text-xs font-mono uppercase">2025-11-18</time>
              </header>
              <p className="font-mono text-sm leading-relaxed">
                Semantic HTML as visual design. Structure exposed. Hierarchy through markup, not
                decoration.
              </p>
            </article>

            {/* Block 2 - Aside */}
            <aside
              data-brutalist-block
              className="border-4 border-black p-6 bg-black text-white"
            >
              <h3 className="text-3xl font-black uppercase mb-4">ASIDE.01</h3>
              <blockquote className="font-mono text-sm border-l-4 border-white pl-4">
                "Form follows function - that has been misunderstood. Form and function should be
                one, joined in a spiritual union."
              </blockquote>
              <cite className="text-xs uppercase mt-2 block">— FRANK LLOYD WRIGHT</cite>
            </aside>

            {/* Block 3 - Section */}
            <section
              data-brutalist-block
              className="border-4 border-black p-6 bg-neutral-200"
            >
              <h3 className="text-3xl font-black uppercase mb-4">SECTION.01</h3>
              <dl className="font-mono text-sm space-y-2">
                <div>
                  <dt className="font-black uppercase">STACK:</dt>
                  <dd>TypeScript, React, Next.js</dd>
                </div>
                <div>
                  <dt className="font-black uppercase">DESIGN:</dt>
                  <dd>Brutalist, Functional</dd>
                </div>
                <div>
                  <dt className="font-black uppercase">STATE:</dt>
                  <dd>Production-Ready</dd>
                </div>
              </dl>
            </section>
          </div>
        </section>

        {/* Typography showcase */}
        <section data-brutalist-block className="mb-16 border-t-2 border-black pt-16">
          <h2 className="text-5xl font-black uppercase mb-8">TYPOGRAPHIC SYSTEM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-4xl font-black mb-4">H1→H6</h3>
              <h1 className="text-5xl font-black">Heading One</h1>
              <h2 className="text-4xl font-black">Heading Two</h2>
              <h3 className="text-3xl font-black">Heading Three</h3>
              <h4 className="text-2xl font-black">Heading Four</h4>
              <h5 className="text-xl font-black">Heading Five</h5>
              <h6 className="text-lg font-black">Heading Six</h6>
            </div>
            <div className="border-4 border-black p-6 bg-black text-white">
              <h3 className="text-4xl font-black mb-4">SYSTEM FONTS</h3>
              <p className="font-mono text-sm mb-4">
                -apple-system
                <br />
                BlinkMacSystemFont
                <br />
                Segoe UI
                <br />
                Roboto
                <br />
                Helvetica Neue
              </p>
              <p className="text-xs">RAW. HONEST. FUNCTIONAL.</p>
            </div>
          </div>
        </section>

        {/* Data table - semantic structure */}
        <section data-brutalist-block className="mb-16">
          <h2 className="text-5xl font-black uppercase mb-8">DATA.TABLE</h2>
          <table className="w-full border-4 border-black">
            <thead className="bg-black text-white">
              <tr>
                <th className="text-left p-4 font-black uppercase">Element</th>
                <th className="text-left p-4 font-black uppercase">Purpose</th>
                <th className="text-left p-4 font-black uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="font-mono text-sm">
              <tr className="border-b-2 border-black hover:bg-neutral-200">
                <td className="p-4 font-black">HEADER</td>
                <td className="p-4">Site navigation and identity</td>
                <td className="p-4">ACTIVE</td>
              </tr>
              <tr className="border-b-2 border-black hover:bg-neutral-200">
                <td className="p-4 font-black">MAIN</td>
                <td className="p-4">Primary content container</td>
                <td className="p-4">ACTIVE</td>
              </tr>
              <tr className="border-b-2 border-black hover:bg-neutral-200">
                <td className="p-4 font-black">ARTICLE</td>
                <td className="p-4">Self-contained content</td>
                <td className="p-4">ACTIVE</td>
              </tr>
              <tr className="border-b-2 border-black hover:bg-neutral-200">
                <td className="p-4 font-black">ASIDE</td>
                <td className="p-4">Tangentially related content</td>
                <td className="p-4">ACTIVE</td>
              </tr>
              <tr className="hover:bg-neutral-200">
                <td className="p-4 font-black">FOOTER</td>
                <td className="p-4">Site metadata and links</td>
                <td className="p-4">ACTIVE</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Form - functional interaction */}
        <section data-brutalist-block className="mb-16 border-4 border-black p-8 bg-neutral-100">
          <h2 className="text-5xl font-black uppercase mb-8">FORM.FUNCTION</h2>
          <form className="space-y-6">
            <fieldset className="border-2 border-black p-6">
              <legend className="text-2xl font-black uppercase px-2">USER INPUT</legend>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-black uppercase mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:ring-4 focus:ring-black"
                    placeholder="ENTER NAME"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-black uppercase mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:ring-4 focus:ring-black"
                    placeholder="ENTER EMAIL"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-black uppercase mb-2">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:ring-4 focus:ring-black"
                    placeholder="ENTER MESSAGE"
                  />
                </div>
              </div>
            </fieldset>
            <button
              type="submit"
              className="w-full bg-black text-white font-black uppercase text-xl p-4 hover:bg-white hover:text-black border-4 border-black transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                console.log('[EXECUTION] Form interaction logged');
              }}
            >
              SUBMIT
            </button>
          </form>
        </section>

        {/* Footer metadata */}
        <footer data-brutalist-block className="border-t-4 border-black pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs uppercase">
            <div>
              <h3 className="font-black mb-2">LOG:</h3>
              <ul className="space-y-1">
                <li>[BRUTALIST_THEORY] ✓</li>
                <li>[STRUCTURAL_DESIGN] ✓</li>
                <li>[EXECUTION] ✓</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black mb-2">STACK:</h3>
              <ul className="space-y-1">
                <li>TypeScript (Strict)</li>
                <li>Tailwind CSS</li>
                <li>GSAP</li>
                <li>View Transitions API</li>
                <li>Convex</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black mb-2">STATUS:</h3>
              <ul className="space-y-1">
                <li>Production-Ready</li>
                <li>Semantically Correct</li>
                <li>Brutally Honest</li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
