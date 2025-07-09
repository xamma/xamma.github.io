import React, { useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'opensource', label: 'Open Source' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="text-2xl font-bold cursor-pointer" onClick={() => handleClick('hero')}>
          YourName
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {sections.map(({ id, label }) => (
            <li
              key={id}
              className="cursor-pointer hover:text-blue-600 transition"
              onClick={() => handleClick(id)}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-white bg-opacity-95 backdrop-blur-md shadow-inner px-6 py-4 space-y-4">
          {sections.map(({ id, label }) => (
            <li
              key={id}
              className="cursor-pointer text-gray-700 font-medium"
              onClick={() => handleClick(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
