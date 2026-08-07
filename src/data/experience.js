/**
 * Rendered as a timeline. `kind` switches the marker icon, `current` pins the
 * live role, and `tags` carry the stack so the entries stay short.
 */
const experience = [
  {
    title: 'Cloud Solution Architect',
    company: 'Bechtle Clouds GmbH',
    duration: 'Mar 2022 — Present',
    period: '2022',
    kind: 'work',
    current: true,
    description:
      'Developing cloud-native services and applications. Leading DevOps initiatives.',
    tags: ['Kubernetes', 'GitOps', 'Go', 'Terraform', 'Multi-Cloud'],
  },
  {
    title: 'C++/Qt Developer',
    company: 'alfatraining',
    duration: 'Nov 2021 — Feb 2022',
    period: '2021',
    kind: 'work',
    description: 'Writing desktop applications with the Qt Framework in C++.',
    tags: ['C++', 'Qt', 'Desktop'],
  },
  {
    title: 'Project Engineer',
    company: 'BÖLLINGER GROUP',
    duration: 'Oct 2020 — Oct 2021',
    period: '2020',
    kind: 'work',
    description:
      'Researching and implementing 3D-printing technology, project management.',
    tags: ['Additive Manufacturing', 'Project Management'],
  },
  {
    title: 'Process Engineer',
    company: 'AUDI',
    duration: 'Feb 2019 — Aug 2019',
    period: '2019',
    kind: 'work',
    description:
      'Observing and optimizing the resistance spot welding technology. TPM and Lean Management.',
    tags: ['Lean', 'TPM', 'Process Optimization'],
  },
  {
    title: 'Bachelor of Engineering',
    company: 'Techn. Hochschule Heilbronn (HHN)',
    duration: '2016 — 2021',
    period: '2016',
    kind: 'education',
    description: 'Studying Production- and Process management (PPM).',
    tags: ['B.Eng.', 'Production Management'],
  },
  {
    title: 'Electronics Engineer for Industrial Engineering',
    company: 'ILLIG Maschinenbau',
    duration: 'Sep 2011 — Mar 2015',
    period: '2011',
    kind: 'education',
    description:
      'Automation via SPS and PLC, electrical installation and machine testing.',
    tags: ['PLC', 'Automation', 'Apprenticeship'],
  },
];

export default experience;
