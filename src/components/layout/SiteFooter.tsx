import React from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { SocialLinks } from '../ui/SocialLinks';

const CURRENT_YEAR = new Date().getFullYear();

export const SiteFooter: React.FC = () => {

  return (
    <footer className="border-t border-[#243447] bg-[#101827] py-12">
      <div className="section-container space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <a
              href="#home"
              className="text-sm font-semibold text-[#F3F5F8] tracking-tight hover:text-[#78A9FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78A9FF] rounded"
            >
              &copy; {CURRENT_YEAR} {PROFILE_DATA.name} &bull; Personal Portfolio
            </a>
            <p className="text-xs text-[#94A3B8] mt-1 max-w-sm">
              Targeting AI/ML &amp; Generative AI Engineering Internships (Class of 2027)
            </p>
          </div>

          <SocialLinks showLabels={false} />
        </div>

        {/* Anchor Navigation Links & Technical Note */}
        <div className="pt-6 border-t border-[#243447]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer Quick Links">
            <a href="#home" className="hover:text-[#78A9FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78A9FF] rounded">Top</a>
            <a href="#projects" className="hover:text-[#78A9FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78A9FF] rounded">Projects</a>
            <a href="#about" className="hover:text-[#78A9FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78A9FF] rounded">About</a>
            <a href="#skills" className="hover:text-[#78A9FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78A9FF] rounded">Skills</a>
            <a href="#education" className="hover:text-[#78A9FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78A9FF] rounded">Education</a>
            <a href="#certifications" className="hover:text-[#78A9FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78A9FF] rounded">Certifications</a>
            <a href="#contact" className="hover:text-[#78A9FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78A9FF] rounded">Contact</a>
          </nav>

          <div className="text-[11px] text-[#64748B]">
            Static SPA &bull; React &bull; TypeScript &bull; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
