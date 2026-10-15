import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

interface ResumeLinkProps {
  variant?: 'primary' | 'secondary' | 'nav';
  className?: string;
}

export const ResumeLink: React.FC<ResumeLinkProps> = ({
  variant = 'primary',
  className = '',
}) => {
  const filePath = PROFILE_DATA.resume.filePath;
  const isAvailable = PROFILE_DATA.resume.status === 'Available' && Boolean(filePath);

  if (isAvailable && filePath) {
    const resumeUrl = filePath.startsWith('/')
      ? `${import.meta.env.BASE_URL}${filePath.slice(1)}`
      : filePath;

    return (
      <a
        href={resumeUrl}
        download={PROFILE_DATA.resume.fileName || 'Kamal_Patil_Resume.pdf'}
        aria-label="Download Kamal S. Patil's resume PDF"
        className={`inline-flex items-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF] ${
          variant === 'primary'
            ? 'px-4 py-2.5 bg-[#78A9FF] text-[#101827] hover:bg-[#5B93F7] text-sm font-semibold'
            : variant === 'nav'
            ? 'px-3 py-1.5 text-xs font-mono text-[#78A9FF] border border-[#78A9FF]/40 rounded hover:bg-[#78A9FF]/10'
            : 'px-4 py-2.5 bg-[#1A2535] border border-[#243447] text-[#F3F5F8] hover:border-[#78A9FF]/50 text-sm'
        } ${className}`}
      >
        <FileText size={16} aria-hidden="true" />
        <span>Download Resume</span>
      </a>
    );
  }

  // Fallback when PDF is not yet uploaded to local workspace
  return (
    <a
      href={`mailto:${PROFILE_DATA.email}?subject=Resume%20Request%20-%20Kamal%20S.%20Patil`}
      aria-label="Request Kamal S. Patil's resume via email (local PDF pending upload)"
      title="Resume PDF pending local workspace upload. Click to request directly via email."
      className={`inline-flex items-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF] ${
        variant === 'primary'
          ? 'px-4 py-2.5 bg-[#1A2535] border border-[#78A9FF]/40 text-[#78A9FF] hover:bg-[#78A9FF]/10 text-sm font-semibold'
          : variant === 'nav'
          ? 'px-3 py-1.5 text-xs font-mono text-[#78A9FF] border border-[#78A9FF]/40 rounded hover:bg-[#78A9FF]/10'
          : 'px-4 py-2.5 bg-[#1A2535] border border-[#243447] text-[#94A3B8] hover:text-[#F3F5F8] hover:border-[#78A9FF]/40 text-sm'
      } ${className}`}
    >
      <Mail size={16} aria-hidden="true" />
      <span>Resume (Request via Email)</span>
    </a>
  );
};
