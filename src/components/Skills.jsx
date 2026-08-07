import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import skillGroups from '../data/skills';

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      kicker="Skills"
      title="The stack I reach for"
      lead="Grouped by what they actually do, not by how well I know them — everything listed here has run in production."
      className="bg-bg-subtle"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <Reveal
            key={group.id}
            delay={groupIndex * 0.08}
            className="rounded-2xl border border-line bg-surface/60 p-6"
          >
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold">{group.title}</h3>
                <p className="mt-0.5 text-xs text-faint">{group.caption}</p>
              </div>
              <span className="font-mono text-2xs text-faint">
                {String(group.items.length).padStart(2, '0')}
              </span>
            </div>

            <ul className="flex flex-wrap gap-2">
              {group.items.map(({ name, icon: Icon, color }) => (
                <li key={name}>
                  <span
                    style={{ '--brand': color }}
                    className="skill-chip flex items-center gap-2 rounded-lg border border-line
                               bg-surface-2 px-3 py-2 text-sm text-muted transition-all
                               duration-300 ease-smooth hover:-translate-y-0.5
                               hover:border-line-strong hover:text-ink"
                  >
                    <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
