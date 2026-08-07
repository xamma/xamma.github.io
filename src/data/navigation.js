/** Shared by the header, the scroll spy and the command palette. */
export const sections = [
  { id: 'hero', label: 'Home', index: '00' },
  { id: 'about', label: 'About', index: '01' },
  { id: 'skills', label: 'Skills', index: '02' },
  { id: 'experience', label: 'Experience', index: '03' },
  { id: 'projects', label: 'Projects', index: '04' },
  { id: 'opensource', label: 'Open Source', index: '05' },
  { id: 'contact', label: 'Contact', index: '06' },
];

/** Stable reference — `useScrollSpy` takes this as an effect dependency. */
export const sectionIds = sections.map((section) => section.id);

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // Move keyboard focus with the viewport without adding a visible outline.
  el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}
