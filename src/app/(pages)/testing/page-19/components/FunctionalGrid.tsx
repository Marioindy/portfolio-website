'use client';

import { useState } from 'react';

interface DataPoint {
  id: number;
  label: string;
  value: string;
  category: string;
}

const functionalData: DataPoint[] = [
  { id: 1, label: 'Semantic Elements', value: '100%', category: 'HTML' },
  { id: 2, label: 'ARIA Compliance', value: 'AAA', category: 'Accessibility' },
  { id: 3, label: 'Load Time', value: '<1s', category: 'Performance' },
  { id: 4, label: 'JavaScript', value: 'Minimal', category: 'Performance' },
  { id: 5, label: 'CSS Complexity', value: 'Low', category: 'Design' },
  { id: 6, label: 'Screen Reader', value: 'Full', category: 'Accessibility' },
  { id: 7, label: 'Keyboard Nav', value: 'Complete', category: 'Accessibility' },
  { id: 8, label: 'Color Contrast', value: '21:1', category: 'Accessibility' },
  { id: 9, label: 'Mobile First', value: 'Yes', category: 'Design' },
  { id: 10, label: 'Bundle Size', value: 'Tiny', category: 'Performance' },
  { id: 11, label: 'Typography', value: 'System', category: 'Design' },
  { id: 12, label: 'Framework', value: 'React', category: 'Tech' },
];

export function FunctionalGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'HTML', 'Accessibility', 'Performance', 'Design', 'Tech'];

  const filteredData =
    selectedCategory === 'All'
      ? functionalData
      : functionalData.filter((item) => item.category === selectedCategory);

  return (
    <section id="data" className="p-8 md:p-16" aria-labelledby="data-heading">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h2 id="data-heading" className="text-3xl md:text-5xl font-bold mb-4">
            Functional Data Grid
          </h2>
          <p className="text-lg">
            Structured information without decoration. Pure functionality.
          </p>
        </header>

        {/* Filter controls */}
        <fieldset className="border-2 border-black p-4 mb-8">
          <legend className="text-xl font-bold px-2">Filter by Category</legend>
          <div className="flex flex-wrap gap-2 mt-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 border-2 border-black font-bold transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </fieldset>

        {/* Data grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredData.map((item) => (
            <article
              key={item.id}
              className="border-2 border-black p-6 hover:bg-gray-50 transition-colors"
            >
              <header>
                <h3 className="text-xl font-bold mb-2">{item.label}</h3>
                <span className="text-sm font-mono border border-black px-2 py-1 inline-block mb-3">
                  {item.category}
                </span>
              </header>
              <p className="text-3xl font-bold">{item.value}</p>
            </article>
          ))}
        </div>

        {/* Data table */}
        <section id="structure" aria-labelledby="table-heading">
          <h3 id="table-heading" className="text-2xl font-bold mb-4">
            Tabular Data Structure
          </h3>
          <div className="overflow-x-auto border-2 border-black">
            <table className="w-full">
              <caption className="text-left p-4 border-b-2 border-black font-bold">
                Technical Specifications
              </caption>
              <thead className="bg-black text-white">
                <tr>
                  <th scope="col" className="text-left p-4 border-r-2 border-white">
                    ID
                  </th>
                  <th scope="col" className="text-left p-4 border-r-2 border-white">
                    Label
                  </th>
                  <th scope="col" className="text-left p-4 border-r-2 border-white">
                    Value
                  </th>
                  <th scope="col" className="text-left p-4">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {functionalData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="p-4 border-r-2 border-t-2 border-black font-mono">
                      {item.id.toString().padStart(2, '0')}
                    </td>
                    <td className="p-4 border-r-2 border-t-2 border-black font-bold">
                      {item.label}
                    </td>
                    <td className="p-4 border-r-2 border-t-2 border-black">
                      {item.value}
                    </td>
                    <td className="p-4 border-t-2 border-black">
                      <span className="font-mono text-sm">{item.category}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t-4 border-black pt-8">
          <p className="text-lg font-bold mb-2">Brutalist Web Design 2.0</p>
          <p className="text-base">
            Built with TypeScript, Tailwind CSS, GSAP, Framer Motion, View Transitions
            API, and Convex.
          </p>
          <p className="text-sm mt-4 font-mono">Testing Page 19 • 2025</p>
        </footer>
      </div>
    </section>
  );
}
