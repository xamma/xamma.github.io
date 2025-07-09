import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <OpenSource />
      <Footer />
    </div>
  );
}

export default App;
