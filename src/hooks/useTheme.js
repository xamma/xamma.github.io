import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

/** The inline script in index.html already resolved the theme — read it back. */
function currentTheme() {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

/**
 * Theme state backed by the `dark` class on <html>. Writing to localStorage
 * only happens on an explicit choice, so visitors who never touch the toggle
 * keep following their OS setting.
 */
export default function useTheme() {
  const [theme, setThemeState] = useState(currentTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#08090c' : '#fafaf9');
  }, [theme]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event) => {
      try {
        // An explicit choice always wins over the OS.
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch {
        /* storage blocked — fall through and follow the OS */
      }
      setThemeState(event.matches ? 'dark' : 'light');
    };

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  const setTheme = useCallback((next) => {
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage blocked — the class still applies for this session */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  }, [setTheme]);

  return { theme, setTheme, toggleTheme };
}
