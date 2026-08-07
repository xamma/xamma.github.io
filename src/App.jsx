import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import useTheme from './hooks/useTheme';

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  // Owned here so the header toggle and the palette action never disagree.
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
      // Slash opens the palette too, unless the visitor is typing somewhere.
      if (event.key === '/' && !/^(INPUT|TEXTAREA)$/.test(event.target.tagName)) {
        event.preventDefault();
        setPaletteOpen(true);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200]
                   focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>

      <Nav
        onOpenPalette={() => setPaletteOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Contact />
      </main>

      <Footer />

      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </>
  );
}

export default App;
