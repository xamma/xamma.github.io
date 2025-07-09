import React from 'react';
import skills from '../data/skills';

export default function Skills() {
  return (
    <section className="bg-gray-100 py-20 px-6" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-white p-4 rounded-xl shadow text-center font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}