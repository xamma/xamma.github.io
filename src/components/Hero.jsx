import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-blue-400 text-white" id="hero">
      <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Hi, I’m John Doe
      </motion.h1>
      <p className="mt-4 text-xl">Full Stack Developer</p>
      <div className="flex space-x-6 mt-6 text-2xl">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:your@email.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}