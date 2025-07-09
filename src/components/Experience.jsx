import React from 'react';
import experience from '../data/experience';

export default function Experience() {
  return (
    <section className="bg-indigo-50 py-20 px-6" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.title} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">{job.title} @ {job.company}</h3>
              <p className="text-sm text-gray-500">{job.duration}</p>
              <p className="mt-2 text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}