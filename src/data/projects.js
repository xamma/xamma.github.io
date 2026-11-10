/**
 * `category` drives the filter chips in the Projects section — keep the values
 * in sync with `projectCategories` below. `featured` entries render wide.
 */
export const projectCategories = ['All', 'Platform', 'Kubernetes', 'Fullstack', 'AI'];

const projects = [
  {
    name: 'Managed Kubernetes Service',
    category: 'Platform',
    featured: true,
    description:
      'Building a fully automated and sovereign Kubernetes managed service. Provisioning of clusters via GitOps, creating a customer facing API with OAuth2 to manage the clusters and several automation workflows.',
    tags: ['Kubernetes', 'GitOps', 'OAuth2', 'REST API', 'Automation'],
  },
  {
    name: 'Managed Services Production Platform',
    category: 'Platform',
    featured: true,
    description:
      'Building the production platform for running managed services at scale. Including a set of custom tools and controllers to gain GitOps and DevOps excellence.',
    tags: ['Platform Engineering', 'Controllers', 'GitOps', 'Scale'],
  },
  {
    name: 'AI integration gateway',
    category: 'Platform',
    featured: true,
    description:
      'Building and designing an integration gateway to connect external agents, systems and workflows to our services. Enabling reusable AI integrations.',
    tags: ['Platform Engineering', 'AI', 'Cloud', 'Scale'],
  },
  {
    name: 'CSP Automation',
    category: 'Platform',
    description:
      'Automation project for a Cloud Service Provider that gathers contracts and invoices of all customers for automated controlling and billing processes. Built in a cloud-native and containerized microservice architecture.',
    tags: ['Microservices', 'Containers', 'Billing', 'FinOps'],
  },
  {
    name: 'Managed Service for Nextcloud',
    category: 'Platform',
    description:
      'Developing a service for running Nextcloud with all needed components on Kubernetes. This includes a fully functional app suite, per-customer encapsulation, domain and DNS config as well as a CI/CD pipeline.',
    tags: ['Kubernetes', 'Multi-Tenancy', 'DNS', 'CI/CD'],
  },
  {
    name: 'K8ccess',
    category: 'Kubernetes',
    description:
      'A Kubernetes operator that lets you handle access to your clusters via custom resources for external actors.',
    tags: ['Operator', 'RBAC', 'CRD', 'Go'],
  },
  {
    name: 'Gloss',
    category: 'Kubernetes',
    description:
      'Kubernetes controller for creating globally synced secrets across a cluster.',
    tags: ['Controller', 'Secrets', 'CRD', 'Go'],
  },
  {
    name: 'Hibear',
    category: 'Kubernetes',
    description:
      'Kubernetes controller for implementing hibernation functionality for deployments based on business hours.',
    tags: ['Controller', 'Cost Saving', 'Scheduling', 'Go'],
  },
  {
    name: 'AI Interfaces & Services',
    category: 'AI',
    description:
      'Development of custom AI solutions including AI data enrichment, RAG, backend functionality and REST APIs for running own models and inferencing.',
    tags: ['RAG', 'Inference', 'REST API', 'Python'],
  },
  {
    name: 'KubeS3',
    category: 'Fullstack',
    description:
      'Fullstack app for moving data to and from S3 storage via REST API and SPA. Written in microservice architecture and running on Kubernetes.',
    tags: ['S3', 'Microservices', 'Kubernetes', 'SPA'],
    link: 'https://github.com/xamma/KubeS3',
  },
  {
    name: 'Cloud Automation Suite',
    category: 'Fullstack',
    description:
      'Fullstack app for CSPs containing a React frontend and a Flask backend with PostgreSQL for automation tasks like invoicing, user management and report generation.',
    tags: ['React', 'Flask', 'PostgreSQL', 'Automation'],
  },
];

export default projects;
