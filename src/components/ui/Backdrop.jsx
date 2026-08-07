import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Hero backdrop, drawn entirely in CSS/SVG — no image request, no watermark,
 * and it re-tints itself for light and dark instead of fighting the theme.
 *
 * Layers, back to front: base fill, three drifting aurora blobs, blueprint
 * grid, film grain, and a fade into the page background.
 */
export default function Backdrop() {
  const reduceMotion = useReducedMotion();

  const drift = (x, y, scale) =>
    reduceMotion
      ? undefined
      : {
          x: ['0%', x, '0%'],
          y: ['0%', y, '0%'],
          scale: [1, scale, 1],
        };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-bg" />

      {/* Aurora */}
      <motion.div
        className="absolute -left-[10%] -top-[20%] h-[70vh] w-[70vw] rounded-full
                   bg-accent/25 blur-[120px] dark:bg-accent/20"
        animate={drift('8%', '6%', 1.15)}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-[15%] top-[5%] h-[60vh] w-[55vw] rounded-full
                   bg-cyan/20 blur-[130px] dark:bg-cyan/15"
        animate={drift('-6%', '10%', 1.2)}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-25%] left-[25%] h-[60vh] w-[60vw] rounded-full
                   bg-violet-500/15 blur-[140px] dark:bg-violet-500/20"
        animate={drift('5%', '-8%', 1.12)}
        transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Blueprint grid, strongest in the centre */}
      <div
        className="absolute inset-0 bg-grid"
        style={{
          maskImage:
            'radial-gradient(120% 90% at 50% 30%, black 20%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(120% 90% at 50% 30%, black 20%, transparent 75%)',
        }}
      />

      {/* Film grain — keeps the large flat areas from looking like plastic */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.14] dark:opacity-[0.2]">
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Hand off to the page background */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
