import type { CertificationRecord } from '../types';

export const CERTIFICATIONS_DATA: CertificationRecord[] = [
  {
    id: 'ai-102',
    name: 'Microsoft Certified: Azure AI Engineer Associate',
    issuer: 'Microsoft',
    code: 'AI-102',
    verificationUrl: undefined, // Pending Credly/official verification link
    status: 'Resume Reported',
    badgeCategory: 'AI / ML',
  },
  {
    id: 'az-204',
    name: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    code: 'AZ-204',
    verificationUrl: undefined,
    status: 'Resume Reported',
    badgeCategory: 'Cloud & Architecture',
  },
  {
    id: 'ai-900',
    name: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    code: 'AI-900',
    verificationUrl: undefined,
    status: 'Resume Reported',
    badgeCategory: 'AI / ML',
  },
  {
    id: 'az-900',
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    code: 'AZ-900',
    verificationUrl: undefined,
    status: 'Resume Reported',
    badgeCategory: 'Cloud & Architecture',
  },
  {
    id: 'aws-ccp',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    code: 'CLF-C02',
    verificationUrl: undefined,
    status: 'Resume Reported',
    badgeCategory: 'Cloud & Architecture',
  },
];
