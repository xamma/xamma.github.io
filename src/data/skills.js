import {
  SiAnsible,
  SiArgo,
  SiDocker,
  SiFlux,
  SiGithub,
  SiGo,
  SiHuggingface,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTerraform,
} from 'react-icons/si';

/**
 * Grouped so the section reads as a capability map instead of a word cloud.
 * `color` is the vendor brand color, used only on hover.
 */
const skillGroups = [
  {
    id: 'cloud-native',
    title: 'Cloud Native',
    caption: 'Runtime, packaging and delivery',
    items: [
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'ArgoCD', icon: SiArgo, color: '#EF7B4D' },
      { name: 'FluxCD', icon: SiFlux, color: '#5468FF' },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & IaC',
    caption: 'Everything declared, nothing clicked',
    items: [
      { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
      { name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
      { name: 'GitHub Actions', icon: SiGithub, color: '#8B949E' },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    caption: 'Services, controllers and interfaces',
    items: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
    ],
  },
  {
    id: 'data-ai',
    title: 'Data & AI',
    caption: 'Persistence and inference',
    items: [
      { name: 'SQL Databases', icon: SiPostgresql, color: '#4169E1' },
      { name: 'NoSQL Databases', icon: SiMongodb, color: '#47A248' },
      { name: 'Hugging Face', icon: SiHuggingface, color: '#FFD21E' },
    ],
  },
];

export default skillGroups;
