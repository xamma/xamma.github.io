import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuArrowDown, LuMail } from 'react-icons/lu';
import Backdrop from './ui/Backdrop';
import ManifestCard from './ui/ManifestCard';
import { scrollToSection } from '../data/navigation';
import site from '../data/site';

const socialLinks = [
  { href: site.social.github, label: 'GitHub', Icon: FaGithub },
  { href: site.social.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
  { href: `mailto:${site.email}`, label: 'Email', Icon: LuMail },
];

/** Cycles the role line so the header states more than one job title. */
function RotatingRole() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % site.roles.length),
      2800
    );
    return () => window.clearInterval(id);
  }, []);

  if (reduceMotion) {
    return <span className="text-accent">{site.roles[0]}</span>;
  }

  return (
    <span className="relative inline-flex h-[1.4em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="whitespace-nowrap text-accent"
        >
          {site.roles[index]}
        </motion.span>
      </AnimatePresence>
      <span
        className="ml-1 inline-block h-[1.05em] w-[2px] bg-accent animate-caret-blink"
        aria-hidden="true"
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pb-10 pt-28 outline-none sm:pt-32"
    >
      <Backdrop />

      <div className="relative mx-auto grid w-full max-w-content items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-2.5 pr-4 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse-ring" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-2xs text-muted">{site.availability}</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            <span className="block text-muted text-2xl font-medium sm:text-3xl">
              Hey, I&rsquo;m
            </span>
            <span className="mt-1 block bg-gradient-to-br from-ink via-ink to-ink/60 bg-clip-text text-transparent">
              {site.name}
            </span>
          </h1>

          <p className="mt-5 text-xl font-medium sm:text-2xl">
            <RotatingRole />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              View my work
              <LuArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="btn-ghost"
            >
              Get in touch
            </button>

            <div className="ml-1 flex items-center gap-1">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-muted
                             transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
                >
                  <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Manifest */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -0.6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:pl-4"
        >
          <ManifestCard />
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative mx-auto mt-16 w-full max-w-content sm:mt-20"
      >
        <div className="seam mb-6" aria-hidden="true" />
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-bold tracking-tight sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs leading-snug text-muted">
                  {stat.label}
                </span>
                <span className="mt-0.5 block font-mono text-2xs text-faint">
                  {stat.hint}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll to About"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5
                   font-mono text-2xs text-faint transition-colors hover:text-accent lg:flex"
      >
        <span className="tracking-kicker">SCROLL</span>
        <span className="h-8 w-px bg-gradient-to-b from-line-strong to-transparent" />
      </motion.button>
    </section>
  );
}
