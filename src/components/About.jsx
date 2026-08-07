import React from 'react';
import { LuBadgeCheck, LuCloud, LuGitBranch, LuLayers } from 'react-icons/lu';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import SpotlightCard from './ui/SpotlightCard';
import certifications from '../data/certifications';

const focusAreas = [
  {
    icon: LuLayers,
    title: 'Platform Engineering',
    body: 'Managed platforms that teams can self-serve, with the guardrails built in.',
  },
  {
    icon: LuGitBranch,
    title: 'GitOps & Automation',
    body: 'Declared in Git, reconciled by controllers. Nothing configured by hand.',
  },
  {
    icon: LuCloud,
    title: 'Cloud Architecture',
    body: 'Designs that survive production on AWS, Azure and GCP alike.',
  },
];

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      kicker="About"
      title="From the shop floor to the control plane"
      lead="An engineering background that started with hardware, and a career that now runs on Kubernetes."
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            I&rsquo;m passionate about everything that involves computers, programming
            and building modern applications. I started out as an engineer in the
            automotive sector &mdash; spot welding lines, PLCs and lean processes
            &mdash; and moved into cloud-native software engineering, which is where
            I&rsquo;ve been ever since.
          </p>
          <p>
            That path still shapes how I work: I care about systems that hold up in
            production, not just in a demo. I build on every major cloud and hold
            professional and expert level certifications across AWS, Azure and
            Kubernetes.
          </p>
          <p>
            These days that means designing managed services, writing the controllers
            that automate them, and making the platform pleasant for the engineers who
            build on top of it.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="space-y-3">
          {focusAreas.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex gap-4 rounded-xl border border-line bg-surface/50 p-4
                         transition-colors duration-300 hover:border-line-strong"
            >
              <span
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                           border border-line bg-surface-2 text-accent"
                aria-hidden="true"
              >
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Certifications */}
      <div className="mt-20">
        <Reveal className="mb-8 flex items-center gap-3">
          <LuBadgeCheck className="h-4 w-4 text-accent" aria-hidden="true" />
          <h3 className="text-sm font-semibold">Certifications</h3>
          <span className="font-mono text-2xs text-faint">
            {certifications.length} verified
          </span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {certifications.map((cert, index) => (
            <Reveal
              as="li"
              key={cert.name + cert.issuer}
              delay={Math.min(index * 0.04, 0.3)}
            >
              <SpotlightCard className="flex h-full flex-col items-center p-4 text-center">
                <img
                  src={cert.image}
                  alt={`${cert.name} — ${cert.issuer}`}
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-auto object-contain transition-transform duration-500
                             ease-smooth group-hover:scale-105 sm:h-24"
                />
                <p className="mt-3 text-xs font-semibold leading-snug">{cert.name}</p>
                <p className="mt-1 font-mono text-2xs text-faint">{cert.issuer}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
