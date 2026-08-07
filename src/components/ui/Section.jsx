import React from 'react';
import Reveal from './Reveal';

/**
 * Every section shares the same rhythm: numbered kicker, heading, optional
 * lead paragraph, then content. Consistency here is what makes the page feel
 * designed rather than assembled.
 */
export default function Section({
  id,
  index,
  kicker,
  title,
  lead,
  aside,
  className = '',
  containerClassName = 'max-w-content',
  children,
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-6 py-24 outline-none sm:py-32 ${className}`}
    >
      <div className={`mx-auto ${containerClassName}`}>
        <Reveal className="mb-12 sm:mb-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                {index && (
                  <span className="font-mono text-2xs text-faint">{index}</span>
                )}
                <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                <span className="kicker">{kicker}</span>
              </div>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>

              {lead && (
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  {lead}
                </p>
              )}
            </div>

            {aside && <div className="shrink-0">{aside}</div>}
          </div>
        </Reveal>

        {children}
      </div>
    </section>
  );
}
