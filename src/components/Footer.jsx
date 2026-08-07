import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuArrowUp, LuMail } from 'react-icons/lu';
import { sections, scrollToSection } from '../data/navigation';
import site from '../data/site';

const socials = [
  { href: site.social.github, label: 'GitHub', Icon: FaGithub },
  { href: site.social.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
  { href: `mailto:${site.email}`, label: 'Email', Icon: LuMail },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg-subtle px-6 pb-8 pt-16">
      <div className="mx-auto max-w-content">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Identity */}
          <div className="lg:col-span-2">
            <p className="font-mono text-sm font-semibold">
              {site.handle}
              <span className="text-faint">@{site.domain}</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {site.role} at {site.company}. Building cloud-native platforms and the
              tooling that keeps them boring.
            </p>

            <div className="mt-5 flex items-center gap-1">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border
                             border-line text-muted transition-all duration-300
                             hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <nav aria-label="Footer">
            <p className="kicker mb-4">Sections</p>
            <ul className="space-y-2.5">
              {sections
                .filter((section) => section.id !== 'hero')
                .map((section) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
            </ul>
          </nav>

          {/* Meta */}
          <div>
            <p className="kicker mb-4">This site</p>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href="https://github.com/xamma/xamma.github.io"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  Source on GitHub
                </a>
              </li>
              <li className="font-mono text-2xs leading-relaxed text-faint">
                React · Vite · Tailwind
                <br />
                Framer Motion · GitHub Pages
              </li>
            </ul>
          </div>
        </div>

        <div className="seam my-8" aria-hidden="true" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-2xs text-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2 font-mono text-2xs text-faint
                       transition-colors hover:text-accent"
          >
            Back to top
            <LuArrowUp
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
