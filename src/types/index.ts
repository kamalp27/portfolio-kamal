/**
 * Core TypeScript definitions for Kamal S. Patil's portfolio.
 * Strict typing prevents fabricated or unverified claims.
 */

export interface MetricItem {
  metric: string;
  label: string;
  context: string;
  category?: string;
  verified: boolean; // Must be false for self-reported/unverified resume claims
}

export type ProjectStatus = 'Resume Reported' | 'Prototype' | 'In Progress' | 'Completed';

export interface ProjectScreenshot {
  url: string;
  caption: string;
}

export interface ProjectRecord {
  id: string;
  title: string;
  categoryLabel: string;
  isFlagship?: boolean;
  shortDescription: string;
  problem: string;
  approach: string;
  technicalHighlights: string[];
  evaluationMethodology?: string;
  resultsAndMetrics: MetricItem[];
  projectStatus: ProjectStatus;
  technologyStack: string[];
  githubUrl?: string; // Optional/nullable: only set if verified repository exists
  liveDemoUrl?: string; // Optional/nullable: only set if live demo exists
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface CertificationRecord {
  id: string;
  name: string;
  issuer: 'Microsoft' | 'Amazon Web Services';
  code: string;
  verificationUrl?: string; // Nullable until Credly or official link provided
  status: 'Resume Reported' | 'Verified';
  badgeCategory: 'AI / ML' | 'Cloud & Architecture';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  boardOrUniversity?: string;
  expectedGraduationOrYear: string;
  score: string;
  scoreLabel: string;
}

export interface ProofPoint {
  label: string;
  value: string;
  detail?: string;
}

export interface ProfileRecord {
  name: string;
  title: string;
  headline: string;
  roleLabel: string;
  heroDescription: string;
  aboutText: string;
  primaryTargetRoles: string[];
  secondaryTargetRoles: string[];
  bio: string;
  education: EducationItem[];
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resume: {
    status: 'Pending Upload' | 'Available';
    fileName?: string;
    filePath?: string;
  };
  proofPoints: ProofPoint[];
}

export interface NavItem {
  label: string;
  href: string;
}
