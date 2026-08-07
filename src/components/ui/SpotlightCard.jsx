import React, { useCallback } from 'react';

/**
 * Card that tracks the cursor with a soft accent glow. The position is written
 * to CSS custom properties, so the paint happens entirely in CSS (see the
 * `.spotlight` utility) and React never re-renders on mousemove.
 */
export default function SpotlightCard({
  as: Component = 'div',
  className = '',
  children,
  ...rest
}) {
  const handleMouseMove = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }, []);

  return (
    <Component
      onMouseMove={handleMouseMove}
      className={`spotlight group relative overflow-hidden rounded-2xl border border-line
                  bg-surface transition-all duration-500 ease-smooth
                  hover:-translate-y-1 hover:border-line-strong hover:shadow-lift
                  ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
