'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

interface ContentSection {
  id: string;
  heading: string;
  content: string;
  timestamp: string;
}

const defaultSections: ContentSection[] = [
  {
    id: 'html-semantics',
    heading: 'HTML Semantics',
    content:
      'Semantic HTML provides meaning to web content. Using proper elements like article, section, nav, and header improves accessibility and SEO. Screen readers rely on semantic structure to navigate content effectively.',
    timestamp: '2025-11-18',
  },
  {
    id: 'accessibility',
    heading: 'Accessibility Standards',
    content:
      'WCAG guidelines ensure web content is perceivable, operable, understandable, and robust. Proper heading hierarchy, ARIA labels, and keyboard navigation are fundamental requirements for inclusive design.',
    timestamp: '2025-11-18',
  },
  {
    id: 'performance',
    heading: 'Performance Optimization',
    content:
      'Minimalist design reduces payload size and improves load times. Eliminating unnecessary styling and JavaScript creates faster, more efficient web experiences. Core Web Vitals benefit from brutalist approaches.',
    timestamp: '2025-11-18',
  },
];

export function AccessibleContent() {
  // Attempt to fetch from Convex (graceful fallback)
  const convexData = useQuery(api.skills.list);

  return (
    <article id="content" className="border-b-4 border-black p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Content Structure</h2>
          <p className="text-lg">
            {convexData ? 'Dynamic content from Convex' : 'Static semantic content'} •
            Accessible • Functional
          </p>
        </header>

        <div className="space-y-8">
          {defaultSections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`heading-${section.id}`}
              className="border-l-4 border-black pl-6"
            >
              <h3 id={`heading-${section.id}`} className="text-2xl font-bold mb-3">
                {index + 1}. {section.heading}
              </h3>

              <p className="text-lg leading-relaxed mb-3">{section.content}</p>

              <time
                dateTime={section.timestamp}
                className="text-sm font-mono border border-black px-2 py-1 inline-block"
              >
                {section.timestamp}
              </time>
            </section>
          ))}
        </div>

        {/* Blockquote example */}
        <blockquote className="mt-8 border-4 border-black p-6 bg-gray-100">
          <p className="text-xl font-bold mb-2">
            "Form follows function. Decoration is crime."
          </p>
          <footer className="text-lg">
            <cite>— Brutalist Web Design Manifesto</cite>
          </footer>
        </blockquote>

        {/* Code example */}
        <section className="mt-8" aria-labelledby="code-heading">
          <h3 id="code-heading" className="text-2xl font-bold mb-4">
            Code Example
          </h3>
          <pre className="border-2 border-black p-4 overflow-x-auto bg-gray-50">
            <code className="font-mono text-sm">
              {`<article>
  <header>
    <h1>Semantic HTML</h1>
  </header>
  <section>
    <p>Content with meaning.</p>
  </section>
</article>`}
            </code>
          </pre>
        </section>
      </div>
    </article>
  );
}
