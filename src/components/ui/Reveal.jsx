import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Fades content up the first time it enters the viewport. With reduced motion
 * enabled it renders the content plainly — no transform, no delay.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  as = 'div',
  className = '',
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
