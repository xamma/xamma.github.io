/**
 * Single source of truth for identity, links and copy that appears in more
 * than one place. Change it here and the whole site follows.
 */
const site = {
  name: 'Max Bickel',
  handle: 'xamma',
  domain: 'xammaops.win',
  url: 'https://xammaops.win',
  role: 'Cloud Solution Architect',
  company: 'Bechtle Clouds GmbH',
  // Rotated one at a time in the hero.
  roles: [
    'Cloud Solution Architect',
    'Platform Engineer',
    'Kubernetes Operator Author',
    'DevOps Advocate',
  ],
  tagline:
    'I design and run cloud-native platforms — Kubernetes at the core, GitOps end to end, and the controllers and services that hold it together.',
  availability: 'Building managed platforms at Bechtle Clouds',
  email: 'max@xammaops.win',
  social: {
    github: 'https://github.com/xamma',
    linkedin: 'https://linkedin.com/in/maxbickel',
  },
  // Deliberately factual: each number is backed by a section further down.
  stats: [
    { value: '10+', label: 'Cloud & K8s certifications', hint: 'AWS, Azure, CNCF, FinOps' },
    { value: '5+', label: 'Clouds in production', hint: 'AWS, Azure, GCP, StackIT, IONOS' },
    { value: '12+', label: 'Open source projects', hint: 'Controllers, CLIs, apps' },
    { value: '6+', label: 'Years in cloud native', hint: 'Since 2020' },
  ],
};

export default site;
