import React from 'react';
import { LuBriefcase, LuGraduationCap } from 'react-icons/lu';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import experience from '../data/experience';

export default function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      kicker="Experience"
      title="Career & education"
      lead="Fourteen years from electrical apprenticeship to cloud architecture — in order, most recent first."
    >
      <ol className="relative">
        {/* The rail. Fades out at the bottom so the timeline ends softly. */}
        <span
          className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b
                     from-line-strong via-line to-transparent sm:left-[19px]"
          aria-hidden="true"
        />

        {experience.map((job, index) => {
          const Icon = job.kind === 'education' ? LuGraduationCap : LuBriefcase;

          return (
            <Reveal
              as="li"
              key={`${job.title}-${job.company}`}
              delay={Math.min(index * 0.06, 0.3)}
              className="relative flex gap-5 pb-8 last:pb-0 sm:gap-7"
            >
              {/* Marker */}
              <span className="relative z-10 shrink-0">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border
                              transition-colors duration-300 sm:h-10 sm:w-10 ${
                                job.current
                                  ? 'border-accent bg-accent/10 text-accent'
                                  : 'border-line bg-surface text-faint'
                              }`}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                </span>
                {job.current && (
                  <span
                    className="absolute inset-0 rounded-full border border-accent animate-pulse-ring"
                    aria-hidden="true"
                  />
                )}
              </span>

              {/* Entry */}
              <div className="min-w-0 flex-1 pt-0.5 sm:pt-1.5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold sm:text-lg">{job.title}</h3>
                  {job.current && (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-2xs
                                     uppercase tracking-wider text-accent">
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm">
                  <span className="font-medium text-ink/80">{job.company}</span>
                  <span className="text-line-strong" aria-hidden="true">
                    /
                  </span>
                  <span className="font-mono text-2xs text-faint">{job.duration}</span>
                </p>

                <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted">
                  {job.description}
                </p>

                {job.tags?.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <li key={tag} className="chip">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
