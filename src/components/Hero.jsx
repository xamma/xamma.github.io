import React from 'react';
import { motion } from 'framer-motion';
import bgHero from '../assets/bg-hero.jpg';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-6 max-w-4xl">
        <h1 className="text-6xl font-extrabold mb-4">Hey, I’m [Your Name]</h1>
        <p className="text-xl">I build polished web experiences with React and Tailwind CSS.</p>
        {/* Add your icons and links here as needed */}
      </div>
    </motion.section>
  );
}
