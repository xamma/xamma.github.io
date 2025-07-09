import React from 'react';
import opensource from '../data/opensource';

export default function OpenSource() {
  return (
    <section className="bg-white py-20 px-6" id="opensource">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Open Source</h2>
        <ul className="space-y-4">
          {opensource.map((repo) => (
            <li key={repo.name}>
              <a href={repo.link} className="text-blue-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              <p className="text-gray-700 text-sm">{repo.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}