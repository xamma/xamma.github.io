import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
    </footer>
  );
}