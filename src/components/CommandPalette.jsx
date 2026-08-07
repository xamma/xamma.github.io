import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  LuArrowUpRight,
  LuCheck,
  LuCopy,
  LuCornerDownLeft,
  LuMail,
  LuMoon,
  LuSearch,
  LuSun,
} from 'react-icons/lu';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { sections, scrollToSection } from '../data/navigation';
import site from '../data/site';

/**
 * ⌘K / Ctrl+K launcher. Everything reachable by clicking is reachable here
 * too, which is the whole point — the keyboard path is the fast path.
 */
export default function CommandPalette({ open, onOpenChange, theme, onToggleTheme }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const commands = useMemo(() => {
    const navigate = sections.map((section) => ({
      id: `go-${section.id}`,
      group: 'Navigation',
      label: section.label,
      hint: `Jump to section ${section.index}`,
      icon: () => (
        <span className="font-mono text-2xs text-faint">{section.index}</span>
      ),
      run: () => scrollToSection(section.id),
    }));

    const links = [
      {
        id: 'github',
        group: 'Links',
        label: 'GitHub',
        hint: site.social.github.replace('https://', ''),
        icon: FaGithub,
        external: true,
        run: () => window.open(site.social.github, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'linkedin',
        group: 'Links',
        label: 'LinkedIn',
        hint: site.social.linkedin.replace('https://', ''),
        icon: FaLinkedin,
        external: true,
        run: () => window.open(site.social.linkedin, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'email',
        group: 'Links',
        label: 'Send an email',
        hint: site.email,
        icon: LuMail,
        run: () => {
          window.location.href = `mailto:${site.email}`;
        },
      },
    ];

    const actions = [
      {
        id: 'copy-email',
        group: 'Actions',
        label: 'Copy email address',
        hint: site.email,
        icon: copied ? LuCheck : LuCopy,
        keepOpen: true,
        run: async () => {
          try {
            await navigator.clipboard.writeText(site.email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
          } catch {
            /* clipboard denied — the address is visible in the hint anyway */
          }
        },
      },
      {
        id: 'theme',
        group: 'Actions',
        label: theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
        hint: `Currently ${theme}`,
        icon: theme === 'dark' ? LuSun : LuMoon,
        keepOpen: true,
        run: onToggleTheme,
      },
    ];

    return [...navigate, ...links, ...actions];
  }, [copied, theme, onToggleTheme]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return commands;
    return commands.filter((command) =>
      `${command.label} ${command.group} ${command.hint ?? ''}`
        .toLowerCase()
        .includes(needle)
    );
  }, [commands, query]);

  // Reset per opening so the palette always starts in a known state.
  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActiveIndex(0);
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Keep the highlighted row in view while arrowing through a long list.
  useEffect(() => {
    listRef.current
      ?.querySelector('[data-active="true"]')
      ?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex, results]);

  const runCommand = (command) => {
    if (!command) return;
    if (!command.keepOpen) onOpenChange(false);
    command.run();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % Math.max(results.length, 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex(
        (index) => (index - 1 + Math.max(results.length, 1)) % Math.max(results.length, 1)
      );
    } else if (event.key === 'Enter') {
      event.preventDefault();
      runCommand(results[activeIndex]);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      onOpenChange(false);
    }
  };

  let lastGroup = null;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh] sm:pt-[18vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onKeyDown={handleKeyDown}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-line-strong
                       bg-surface/95 shadow-lift backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <LuSearch className="h-4 w-4 shrink-0 text-faint" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sections, links and actions…"
                aria-label="Search commands"
                className="w-full bg-transparent py-4 text-sm text-ink outline-none
                           placeholder:text-faint"
              />
              <kbd className="hidden shrink-0 rounded border border-line bg-surface-2 px-1.5
                              py-0.5 font-mono text-2xs text-faint sm:block">
                ESC
              </kbd>
            </div>

            <div ref={listRef} className="max-h-[52vh] overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-faint">
                  No matches for “{query}”.
                </p>
              )}

              {results.map((command, index) => {
                const Icon = command.icon;
                const showGroup = command.group !== lastGroup;
                lastGroup = command.group;
                const isActive = index === activeIndex;

                return (
                  <React.Fragment key={command.id}>
                    {showGroup && (
                      <p className="px-3 pb-1.5 pt-3 font-mono text-2xs uppercase tracking-kicker text-faint">
                        {command.group}
                      </p>
                    )}
                    <button
                      type="button"
                      data-active={isActive}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => runCommand(command)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left
                                  transition-colors ${
                                    isActive ? 'bg-surface-2 text-ink' : 'text-muted'
                                  }`}
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm text-ink">
                          {command.label}
                        </span>
                        {command.hint && (
                          <span className="block truncate font-mono text-2xs text-faint">
                            {command.hint}
                          </span>
                        )}
                      </span>
                      {command.external && (
                        <LuArrowUpRight
                          className="h-3.5 w-3.5 shrink-0 text-faint"
                          aria-hidden="true"
                        />
                      )}
                      {isActive && (
                        <LuCornerDownLeft
                          className="h-3.5 w-3.5 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>

            <div className="flex items-center justify-between border-t border-line px-4 py-2.5
                            font-mono text-2xs text-faint">
              <span className="flex items-center gap-3">
                <span>↑↓ navigate</span>
                <span>⏎ select</span>
              </span>
              <span>{results.length} commands</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
