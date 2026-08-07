import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LuArrowUpRight, LuLock } from 'react-icons/lu';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import SpotlightCard from './ui/SpotlightCard';
import projects, { projectCategories } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () =>
      filter === 'All' ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

  const counts = useMemo(() => {
    const map = { All: projects.length };
    for (const project of projects) {
      map[project.category] = (map[project.category] ?? 0) + 1;
    }
    return map;
  }, []);

  return (
    <Section
      id="projects"
      index="04"
      kicker="Projects"
      title="What I’ve built"
      lead="Platform work, Kubernetes controllers and fullstack services — most of it running in production for customers."
      className="bg-bg-subtle"
      aside={
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {projectCategories.map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={isActive}
                className={`relative rounded-full border px-3.5 py-1.5 text-xs transition-all
                            duration-300 ease-smooth ${
                              isActive
                                ? 'border-accent text-accent'
                                : 'border-line text-muted hover:border-line-strong hover:text-ink'
                            }`}
              >
                {category}
                <span className="ml-1.5 font-mono text-2xs text-faint">
                  {counts[category] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      }
    >
      <motion.ul layout className="grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.name}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={project.featured ? 'md:col-span-2' : undefined}
            >
              <SpotlightCard className="flex h-full flex-col p-6">
                {/* Featured cards get a hairline accent along the top edge. */}
                {project.featured && (
                  <span
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
                               from-transparent via-accent to-transparent"
                    aria-hidden="true"
                  />
                )}

                <div className="mb-3 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="mb-1.5 font-mono text-2xs uppercase tracking-kicker text-faint">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold leading-snug">{project.name}</h3>
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} on GitHub`}
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center
                                 rounded-full border border-line text-muted transition-all
                                 duration-300 hover:border-accent hover:text-accent"
                    >
                      <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <span
                      title="Internal project — source not public"
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center
                                 rounded-full border border-dashed border-line text-faint"
                    >
                      <LuLock className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="sr-only">Source not public</span>
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-muted">{project.description}</p>

                {project.tags?.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <li key={tag} className="chip">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </SpotlightCard>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
