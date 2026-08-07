import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuCheck, LuCopy, LuMail } from 'react-icons/lu';
import Reveal from './ui/Reveal';
import site from '../data/site';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard denied — the address next to the button is still selectable */
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24 outline-none sm:py-32">
      <div className="mx-auto max-w-content">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface/60">
          {/* Decorative field, kept behind the content */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-dots" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan/15 blur-[110px]" />
          </div>

          <div className="relative px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
              <span className="kicker">Contact</span>
              <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
            </div>

            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Let&rsquo;s build something that holds up in production
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Whether it&rsquo;s a platform to design, a controller to write or just a
              second opinion on an architecture &mdash; my inbox is open.
            </p>

            {/* Email row */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${site.email}`}
                className="btn-primary group px-6 py-3 text-base"
              >
                <LuMail className="h-4 w-4" aria-hidden="true" />
                {site.email}
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="btn-ghost px-4 py-3"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <LuCheck className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    Copied
                  </>
                ) : (
                  <>
                    <LuCopy className="h-4 w-4" aria-hidden="true" />
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Alternatives */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <a
                href={site.social.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <span className="h-4 w-px bg-line" aria-hidden="true" />
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
