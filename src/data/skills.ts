import type { SkillCategory } from '../types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'AI & Generative AI',
    description: 'Core focus on document retrieval, embedding spaces, and evaluation-grounded generation.',
    skills: [
      'RAG',
      'LLMs',
      'embeddings',
      'semantic search',
      'prompt engineering',
      'RAG evaluation',
    ],
  },
  {
    category: 'Programming',
    description: 'Foundational and systems programming languages for pipelines and backends.',
    skills: [
      'Python',
      'SQL',
      'JavaScript',
      'Java',
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'Secondary strength in asynchronous web APIs, authentication protocols, and access control.',
    skills: [
      'FastAPI',
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT authentication',
      'role-based access control (RBAC)',
    ],
  },
  {
    category: 'Data & Retrieval',
    description: 'Vector stores and relational databases powering scalable retrieval systems.',
    skills: [
      'Qdrant',
      'PostgreSQL',
      'vector databases',
    ],
  },
  {
    category: 'Frontend',
    description: 'Component-driven interfaces for interactive applications and dashboards.',
    skills: [
      'React.js',
    ],
  },
  {
    category: 'Cloud & Tools',
    description: 'Certified cloud fundamentals and version control workflows.',
    skills: [
      'Microsoft Azure',
      'AWS',
      'Git',
      'GitHub',
    ],
  },
];
