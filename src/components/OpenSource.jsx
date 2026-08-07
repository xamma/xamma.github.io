import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  LuArrowUpRight,
  LuBot,
  LuBoxes,
  LuFileCode,
  LuGlobe,
  LuServer,
  LuTerminal,
  LuWrench,
} from 'react-icons/lu';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import SpotlightCard from './ui/SpotlightCard';
import opensource from '../data/opensource';
import site from '../data/site';

/** Marker icon per project kind — a visual index into a long list. */
const kindIcons = {
  controller: LuBoxes,
  cli: LuTerminal,
  action: LuWrench,
  webapp: LuGlobe,
  api: LuServer,
  bot: LuBot,
  demo: LuFileCode,
};

export default function OpenSource() {
  return (
    <Section
      id="opensource"
      index="05"
      kicker="Open Source"
      title="Things I gave away"
      lead="Controllers, CLIs and small apps I built for myself and published because someone else probably needs them too."
      aside={
        <a
          href={site.social.github}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost group text-xs"
        >
          <FaGithub className="h-4 w-4" aria-hidden="true" />
          All repositories
          <LuArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300
                       group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      }
    >
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {opensource.map((repo, index) => {
          const Icon = kindIcons[repo.kind] ?? LuFileCode;

          return (
            <Reveal as="li" key={repo.name} delay={Math.min(index * 0.04, 0.32)}>
              <SpotlightCard
                as="a"
                href={repo.link}
                target="_blank"
                rel="noreferrer"
                className="flex h-full flex-col p-5"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
                               border border-line bg-surface-2 text-faint transition-colors
                               duration-300 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  <h3 className="min-w-0 flex-1 truncate font-mono text-sm font-medium">
                    {repo.name}
                  </h3>

                  <LuArrowUpRight
                    className="h-4 w-4 shrink-0 text-faint transition-all duration-300
                               group-hover:-translate-y-0.5 group-hover:translate-x-0.5
                               group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {repo.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {repo.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
