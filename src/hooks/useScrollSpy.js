import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently under the header.
 *
 * A plain scroll listener beats IntersectionObserver here: sections have very
 * different heights, and "the last one whose top has passed the header" is
 * exactly the behaviour a reader expects from the nav.
 */
export default function useScrollSpy(ids, offset = 96) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const line = window.scrollY + offset + 1;
      let current = ids[0] ?? null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      }

      // At the very bottom the last section wins even if it is short.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 8;
      if (atBottom) current = ids[ids.length - 1] ?? current;

      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, offset]);

  return activeId;
}
