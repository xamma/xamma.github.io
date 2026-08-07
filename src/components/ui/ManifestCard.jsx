import React from 'react';

/**
 * A YAML manifest that describes its author. It is the fastest way to tell a
 * platform engineer what this site is about — they read the resource before
 * they read the prose.
 *
 * Tokens are hand-tagged rather than run through a highlighter: it is one
 * static document, and shipping a syntax-highlighting library for it would be
 * a poor trade.
 */
const tokens = {
  key: 'text-cyan',
  str: 'text-accent',
  num: 'text-violet-500 dark:text-violet-400',
  punct: 'text-faint',
  bool: 'text-emerald-600 dark:text-emerald-400',
};

const K = ({ children, indent = 0 }) => (
  <span>
    {'  '.repeat(indent)}
    <span className={tokens.key}>{children}</span>
    <span className={tokens.punct}>:</span>
  </span>
);

const line = (content, key) => (
  <div key={key} className="whitespace-pre">
    {content}
  </div>
);

export default function ManifestCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/70 shadow-lift backdrop-blur-xl">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </span>
        <span className="ml-1 font-mono text-2xs text-faint">engineer.yaml</span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-2xs text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Running
        </span>
      </div>

      <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-muted sm:p-5 sm:text-[13px]">
        <code>
          {[
            <>
              <K>apiVersion</K> <span className={tokens.str}>xammaops.win/v1</span>
            </>,
            <>
              <K>kind</K> <span className={tokens.str}>Engineer</span>
            </>,
            <K>metadata</K>,
            <>
              <K indent={1}>name</K> <span className={tokens.str}>max-bickel</span>
            </>,
            <>
              <K indent={1}>labels</K>
            </>,
            <>
              <K indent={2}>role</K>{' '}
              <span className={tokens.str}>cloud-solution-architect</span>
            </>,
            <>
              <K indent={2}>company</K> <span className={tokens.str}>bechtle-clouds</span>
            </>,
            <K>spec</K>,
            <>
              <K indent={1}>clouds</K>{' '}
              <span className={tokens.punct}>[</span>
              <span className={tokens.str}>aws</span>
              <span className={tokens.punct}>, </span>
              <span className={tokens.str}>azure</span>
              <span className={tokens.punct}>, </span>
              <span className={tokens.str}>gcp</span>
              <span className={tokens.punct}>, </span>
              <span className={tokens.str}>stackit</span>
              <span className={tokens.punct}>, </span>
              <span className={tokens.str}>ionos</span>
              <span className={tokens.punct}>, </span>
              <span className={tokens.str}>exoscale</span>
              <span className={tokens.punct}>]</span>
            </>,
            <K indent={1}>focus</K>,
            <>
              {'    '}
              <span className={tokens.punct}>- </span>
              <span className={tokens.str}>kubernetes-platforms</span>
            </>,
            <>
              {'    '}
              <span className={tokens.punct}>- </span>
              <span className={tokens.str}>gitops-everything</span>
            </>,
            <>
              {'    '}
              <span className={tokens.punct}>- </span>
              <span className={tokens.str}>developer-experience</span>
            </>,
            <>
              <K indent={1}>certifications</K> <span className={tokens.num}>10</span>
            </>,
            <K>status</K>,
            <>
              <K indent={1}>ready</K> <span className={tokens.bool}>true</span>
            </>,
          ].map((content, index) => line(content, index))}
        </code>
      </pre>
    </div>
  );
}
