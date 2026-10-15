import React, { useState } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Mail, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { ResumeLink } from '../ui/ResumeLink';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact & Internship Opportunities"
          subtitle="Currently open for AI/ML, Generative AI, and Backend Engineer internship discussions."
        />

        <div className="rounded-lg bg-[#1A2535] border border-[#243447] p-6 sm:p-10 max-w-3xl">
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
            Whether you are discussing engineering internships, RAG retrieval architectures, or evaluation benchmarking, I would be glad to connect.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* Email Card */}
            <div className="p-4 rounded-md bg-[#101827] border border-[#243447] flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded bg-[#1A2535] text-[#78A9FF] shrink-0">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-[#64748B] block uppercase">Direct Email</span>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="text-xs sm:text-sm font-medium text-[#F3F5F8] hover:text-[#78A9FF] truncate block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78A9FF] rounded"
                  >
                    {PROFILE_DATA.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label={copied ? 'Email copied to clipboard' : 'Copy email to clipboard'}
                className="p-1.5 rounded text-[#94A3B8] hover:text-[#F3F5F8] hover:bg-[#1A2535] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF]"
              >
                {copied ? <Check size={16} className="text-emerald-400" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Kamal S. Patil on LinkedIn (opens in new window)"
              className="p-4 rounded-md bg-[#101827] border border-[#243447] flex items-center gap-3 hover:border-[#78A9FF]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF]"
            >
              <div className="p-2 rounded bg-[#1A2535] text-[#78A9FF] shrink-0">
                <LinkedinIcon size={18} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-[#64748B] block uppercase">Professional Network</span>
                <span className="text-xs sm:text-sm font-medium text-[#F3F5F8] block truncate">
                  linkedin.com/in/kamal-patil-04895035a
                </span>
              </div>
            </a>
          </div>

          <div className="pt-6 border-t border-[#243447] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Kamal S. Patil on GitHub (opens in new window)"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#101827] border border-[#243447] text-xs font-mono text-[#94A3B8] hover:text-[#78A9FF] hover:border-[#78A9FF]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF]"
              >
                <GithubIcon size={14} aria-hidden="true" />
                <span>github.com/kamalp27</span>
              </a>
            </div>

            <ResumeLink variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
