import React from 'react';
import { CERTIFICATIONS_DATA } from '../../data/certifications';
import { SectionHeading } from '../ui/SectionHeading';
import { Shield } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="section-spacing">
      <div className="section-container">
        <SectionHeading
          eyebrow="Industry Credentials"
          title="Cloud & AI Certifications"
          subtitle="Foundational and associate-level credentials across Microsoft Azure and Amazon Web Services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="rounded-lg bg-[#1A2535] border border-[#243447] p-5 sm:p-6 flex flex-col justify-between hover:border-[#78A9FF]/40 transition-colors"
            >
              <div>
                {/* Code badge and issuer */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-[#101827] text-[#78A9FF] border border-[#243447]">
                    {cert.code}
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">
                    {cert.issuer}
                  </span>
                </div>

                {/* Plain certification name without fake links */}
                <h3 className="text-base font-bold text-[#F3F5F8] mb-2 leading-snug">
                  {cert.name}
                </h3>
              </div>

              {/* Status footer without fake verification buttons */}
              <div className="pt-4 border-t border-[#243447] mt-4 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 text-[#94A3B8]">
                  <Shield size={13} className="text-[#78A9FF]" aria-hidden="true" />
                  <span className="text-[11px] font-mono">{cert.badgeCategory}</span>
                </span>

                <span className="text-[11px] font-mono text-[#64748B] bg-[#101827] px-2 py-0.5 rounded border border-[#243447]">
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
