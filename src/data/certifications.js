import awsArchitect from '../assets/aws-certified-solutions-architect-associate.png';
import awsDeveloper from '../assets/aws-certified-developer-associate.png';
import awsDevOps from '../assets/aws-certified-devops-engineer-professional.png';
import azureAdmin from '../assets/azure-administrator-associate.png';
import azureAiEngineer from '../assets/azure-ai-engineer.png';
import azureArchitect from '../assets/azure-solutions-architect-expert.png';
import ckad from '../assets/ckad.png';
import ghactions from '../assets/github-actions.png';
import itil4 from '../assets/itil4.png';
import finops from '../assets/finops-certified-engineer.png';

/**
 * Named badges — the alt text and the caption are the point. A wall of logos
 * with `alt="Certification 3"` tells a recruiter (and a screen reader) nothing.
 */
const certifications = [
  {
    image: azureArchitect,
    name: 'Solutions Architect Expert',
    issuer: 'Microsoft Azure',
    level: 'Expert',
  },
  {
    image: awsDevOps,
    name: 'DevOps Engineer Professional',
    issuer: 'AWS',
    level: 'Professional',
  },
  {
    image: awsArchitect,
    name: 'Solutions Architect Associate',
    issuer: 'AWS',
    level: 'Associate',
  },
  {
    image: awsDeveloper,
    name: 'Developer Associate',
    issuer: 'AWS',
    level: 'Associate',
  },
  {
    image: azureAdmin,
    name: 'Administrator Associate',
    issuer: 'Microsoft Azure',
    level: 'Associate',
  },
  {
    image: azureAiEngineer,
    name: 'AI Engineer Associate',
    issuer: 'Microsoft Azure',
    level: 'Associate',
  },
  {
    image: ckad,
    name: 'Certified Kubernetes Application Developer',
    issuer: 'CNCF',
    level: 'CKAD',
  },
  {
    image: ghactions,
    name: 'GitHub Actions',
    issuer: 'GitHub',
    level: 'Certified',
  },
  {
    image: finops,
    name: 'FinOps Certified Engineer',
    issuer: 'FinOps Foundation',
    level: 'Certified',
  },
  {
    image: itil4,
    name: 'ITIL 4 Foundation',
    issuer: 'Axelos',
    level: 'Foundation',
  },
];

export default certifications;
