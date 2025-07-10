import React from 'react';
import { motion } from 'framer-motion';
import bgHero from '../assets/bg-hero.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white text-center px-6"
    >
      {/* Animated Background */}
      {/* <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})` }}
        animate={{
          scale: [1, 1.05, 1],
          x: ['0%', '1%', '0%'],
          y: ['0%', '1%', '0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      /> */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})` }}
        animate={{
            scale: [1, 1.12, 1],
            x: ['0%', '2%', '0%'],
            y: ['0%', '2%', '0%'],
        }}
        transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Hey, I’m <span className="text-amber-400">Max Bickel</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 drop-shadow-sm mb-6">
          Cloud solution architect and DevOps advocate.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-2xl mb-8">
          <a href="https://github.com/xamma" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/maxbickel" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:max@xammaops.win" className="hover:text-blue-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-8 z-10 text-white text-2xl animate-bounce cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        ↓
      </motion.div>
    </section>
  );
}
