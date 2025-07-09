import React from 'react';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.name} className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              {project.link && <a href={project.link} className="text-blue-600 mt-2 inline-block">View Project</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}