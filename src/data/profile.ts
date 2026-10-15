import type { ProfileRecord, NavItem } from '../types';

export const PROFILE_DATA: ProfileRecord = {
  name: 'Kamal S. Patil',
  title: 'AI/ML & Generative AI Systems Engineer',
  roleLabel: 'AI/ML ENGINEERING · GENERATIVE AI · RAG SYSTEMS',
  headline: 'I build practical AI systems that retrieve, reason, and respond.',
  heroDescription:
    "I'm a Computer Science undergraduate at VIT-AP University focused on applied AI and Generative AI engineering. I build document-focused RAG applications, evaluate retrieval and answer quality, and develop secure APIs.",
  aboutText:
    "I'm a Computer Science undergraduate at VIT-AP University interested in building practical AI systems. My work focuses on retrieval-augmented generation (RAG), document retrieval, embeddings, evaluation of AI-generated answers, and secure API development. I enjoy working across the pipeline—from preparing and retrieving relevant information to exposing capabilities through reliable backend services.",
  primaryTargetRoles: [
    'AI/ML Engineer Intern',
    'Generative AI / LLM Engineer Intern',
  ],
  secondaryTargetRoles: [
    'Backend Engineer Intern',
  ],
  bio: 'Computer Science and Engineering undergraduate at VIT-AP University specializing in RAG architectures, LLM pipelines, vector search optimization, and scalable backend services.',
  education: [
    {
      id: 'btech',
      degree: 'B.Tech in Computer Science and Engineering (Core)',
      institution: 'VIT-AP University',
      boardOrUniversity: 'VIT-AP University',
      expectedGraduationOrYear: 'Expected 2027',
      score: '8.0 / 10',
      scoreLabel: 'CGPA',
    },
    {
      id: 'class-xii',
      degree: 'Class XII (Senior Secondary)',
      institution: 'Karnataka State Board',
      boardOrUniversity: 'Karnataka State Board',
      expectedGraduationOrYear: 'Completed',
      score: '93.55%',
      scoreLabel: 'Score',
    },
  ],
  email: 'kamalpatil2027@gmail.com',
  githubUrl: 'https://github.com/kamalp27',
  linkedinUrl: 'https://www.linkedin.com/in/kamal-patil-04895035a',
  resume: {
    status: 'Pending Upload',
    fileName: 'Kamal_Patil_Resume.pdf',
    filePath: '/resume/Kamal_Patil_Resume.pdf',
  },
  proofPoints: [
    {
      label: 'Degree & University',
      value: 'B.Tech CSE (Core)',
      detail: 'VIT-AP University',
    },
    {
      label: 'Timeline',
      value: 'Expected 2027',
      detail: 'Class of 2027',
    },
    {
      label: 'Academic Standing',
      value: '8.0 / 10',
      detail: 'Cumulative CGPA',
    },
    {
      label: 'Core Focus',
      value: 'RAG & GenAI',
      detail: 'Applied Engineering',
    },
  ],
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
