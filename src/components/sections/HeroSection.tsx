import React from 'react';
import { ArrowDown, ExternalLink, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';
import { ResumeLink } from '../ui/ResumeLink';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { RagArchitecturePanel } from '../ui/RagArchitecturePanel';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-10 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-[#243447]">
      <div className="section-container">
        {/* Main Hero Grid: Dominant Text Column (Left) + Architecture Panel (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-12 sm:mb-16">
          {/* Left / Dominant Column */}
          <div className="lg:col-span-7">
            {/* Compact Role Label (Responsive flex wrap to prevent 320px overflow) */}
            <div className="inline-flex flex-wrap items-center gap-1.5 text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-[#78A9FF] uppercase bg-[#1A2535] px-3 py-1.5 rounded-md border border-[#243447] mb-5">
              <span>AI/ML ENGINEERING</span>
              <span className="text-[#64748B]">&bull;</span>
              <span>GENERATIVE AI</span>
              <span className="text-[#64748B]">&bull;</span>
              <span>RAG SYSTEMS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-fluid-display font-bold text-[#F3F5F8] tracking-tight leading-[1.15] mb-5">
              I build practical AI systems that retrieve, reason, and respond.
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#94A3B8] max-w-2xl mb-8 leading-relaxed">
              {PROFILE_DATA.heroDescription}
            </p>

            {/* Primary & Secondary Action Cluster */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-8">
              {/* Primary Action: Explore Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#78A9FF] text-[#101827] text-sm font-semibold hover:bg-[#5B93F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF] shadow-sm w-full sm:w-auto text-center"
              >
                <span>Explore Projects</span>
                <ArrowDown size={16} aria-hidden="true" />
              </a>

              {/* Secondary Action: View GitHub */}
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Kamal S. Patil's GitHub profile (opens in new tab)"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#1A2535] border border-[#243447] text-[#F3F5F8] text-sm font-medium hover:border-[#78A9FF]/50 hover:bg-[#101827] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF] w-full sm:w-auto text-center"
              >
                <GithubIcon size={16} aria-hidden="true" />
                <span>View GitHub</span>
                <ExternalLink size={13} className="text-[#94A3B8]" aria-hidden="true" />
              </a>

              {/* Resume Action (Graceful fallback) */}
              <ResumeLink variant="secondary" className="w-full sm:w-auto justify-center" />
            </div>

            {/* Additional Direct Connect Links (Wrapped for narrow mobile screens) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1 text-xs text-[#94A3B8]">
              <span className="font-mono text-[#64748B]">Connect:</span>
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kamal S. Patil on LinkedIn (opens in new tab)"
                className="inline-flex items-center gap-1.5 hover:text-[#78A9FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78A9FF] rounded px-1 py-0.5"
              >
                <LinkedinIcon size={15} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <span className="text-[#243447] hidden sm:inline">&bull;</span>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                aria-label={`Send email to ${PROFILE_DATA.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#78A9FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78A9FF] rounded px-1 py-0.5 break-all sm:break-normal"
              >
                <Mail size={15} aria-hidden="true" className="shrink-0" />
                <span>{PROFILE_DATA.email}</span>
              </a>
            </div>
          </div>

          {/* Right / Visual Column: Applied RAG Architecture Panel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <RagArchitecturePanel />
          </div>
        </div>

        {/* Supporting Proof Points Row */}
        <div className="pt-8 border-t border-[#243447]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {PROFILE_DATA.proofPoints.map((item) => (
              <div
                key={item.label}
                className="p-3.5 sm:p-4 rounded-lg bg-[#1A2535] border border-[#243447] flex flex-col justify-between"
              >
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-1">
                  {item.label}
                </span>
                <div className="text-sm sm:text-base font-bold text-[#F3F5F8] tracking-tight">
                  {item.value}
                </div>
                {item.detail && (
                  <span className="text-xs text-[#78A9FF] font-mono mt-0.5">
                    {item.detail}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
