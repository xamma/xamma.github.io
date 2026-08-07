/**
 * `kind` selects the marker icon in the card header — one of
 * 'controller' | 'cli' | 'action' | 'webapp' | 'api' | 'bot' | 'demo'.
 */
const opensource = [
  {
    name: 'Presetter',
    kind: 'controller',
    description: 'Custom controller for adding resource presets to K8s deployments.',
    tags: ['Kubernetes', 'Controller'],
    link: 'https://github.com/xamma/presetter',
  },
  {
    name: 'Helm Release Action',
    kind: 'action',
    description: 'GitHub Action for creating a Helm release in your helm-charts repo.',
    tags: ['GitHub Actions', 'Helm'],
    link: 'https://github.com/xamma/helm-release-action',
  },
  {
    name: 'yck',
    kind: 'cli',
    description: 'Tool for comparing existing keys in YAML files.',
    tags: ['CLI', 'YAML'],
    link: 'https://github.com/xamma/yck',
  },
  {
    name: 'gcp-sa2bearer',
    kind: 'cli',
    description: 'A CLI tool for creating a bearer token from a GCP service account JSON.',
    tags: ['CLI', 'GCP', 'Auth'],
    link: 'https://github.com/xamma/gcp-sa2bearer',
  },
  {
    name: 'GitHub Monitor',
    kind: 'bot',
    description: 'A Discord bot for monitoring GitHub repos.',
    tags: ['Discord', 'Monitoring'],
    link: 'https://github.com/xamma/github-monitor',
  },
  {
    name: 'Microservice Demo',
    kind: 'demo',
    description: 'Event-driven, cloud-native software engineering.',
    tags: ['Microservices', 'Event-Driven'],
    link: 'https://github.com/xamma/microservice-demo',
  },
  {
    name: 'kotlin-restapi-pokedex',
    kind: 'api',
    description: 'Sample project for a REST API performing CRUD operations on a MongoDB.',
    tags: ['Kotlin', 'MongoDB', 'REST'],
    link: 'https://github.com/xamma/kotlin-restapi-pokedex',
  },
  {
    name: 'Passphoria',
    kind: 'webapp',
    description: 'Web app implementation of diceware.',
    tags: ['Web App', 'Security'],
    link: 'https://github.com/xamma/passphoria',
  },
  {
    name: 'Tabula',
    kind: 'webapp',
    description: 'A beautiful CSV viewer web app written with Next.js.',
    tags: ['Next.js', 'CSV'],
    link: 'https://github.com/xamma/tabula',
  },
  {
    name: 'Pokescale',
    kind: 'webapp',
    description: 'A cloud-native web app for learning DevOps and software engineering.',
    tags: ['Cloud Native', 'DevOps'],
    link: 'https://github.com/xamma/pokescale',
  },
  {
    name: 'Replicat',
    kind: 'cli',
    description:
      'A CLI tool for creating backups of your GitHub repos locally, to S3, mirrored or zipped.',
    tags: ['CLI', 'Backup', 'S3'],
    link: 'https://github.com/xamma',
  },
  {
    name: 'Structly',
    kind: 'api',
    description:
      'Small API for creating JSON schemas from YAML (json-schema.org/draft-07/schema#).',
    tags: ['API', 'JSON Schema', 'YAML'],
    link: 'https://github.com/xamma',
  },
];

export default opensource;
