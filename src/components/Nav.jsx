import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { LuCommand, LuMenu, LuMoon, LuSun, LuX } from 'react-icons/lu';
import { sectionIds, sections, scrollToSection } from '../data/navigation';
import useScrollSpy from '../hooks/useScrollSpy';
import site from '../data/site';

export default function Nav({ onOpenPalette, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keep the page behind the mobile sheet from scrolling.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => event.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const handleNavigate = (id) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
        isScrolled
          ? 'border-b border-line bg-bg/70 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-4"
      >
        {/* Brand */}
        <button
          type="button"
          onClick={() => handleNavigate('hero')}
          className="group flex items-center gap-2.5 rounded-lg text-left"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
            <span className="relative h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight">
            {site.handle}
            <span className="text-faint transition-colors group-hover:text-accent">
              @{site.domain}
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNavigate(id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-surface-2 ring-1 ring-line"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPalette}
            className="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5
                       text-xs text-muted transition-colors duration-300
                       hover:border-line-strong hover:text-ink lg:flex"
            aria-label="Open command palette"
          >
            <LuCommand className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="font-mono">K</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line
                       text-muted transition-colors duration-300
                       hover:border-line-strong hover:text-accent"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <LuSun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <LuMoon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line
                       text-ink transition-colors duration-300 hover:border-line-strong md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <LuX className="h-4 w-4" aria-hidden="true" />
            ) : (
              <LuMenu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Reading progress, sitting on the header's bottom edge */}
      <motion.div
        className="h-px origin-left bg-gradient-to-r from-accent via-accent to-cyan"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      {/* Mobile sheet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-line bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto max-w-content px-6 py-4">
              {sections.map(({ id, label, index }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(id)}
                    className={`flex w-full items-center gap-4 border-b border-line/60 py-3.5
                                text-left text-base transition-colors last:border-0 ${
                                  activeId === id ? 'text-accent' : 'text-ink'
                                }`}
                  >
                    <span className="font-mono text-2xs text-faint">{index}</span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
