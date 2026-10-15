import React from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Brain, Sparkles, Server, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="section-container">
        <SectionHeading
          eyebrow="Profile Overview"
          title="About Me"
          subtitle="Applied AI engineering undergraduate focused on RAG architectures, answer evaluation, and backend service integration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-lg bg-[#1A2535] border border-[#243447] p-6 sm:p-8">
              <p className="text-base sm:text-lg text-[#F3F5F8] leading-relaxed font-normal">
                {PROFILE_DATA.aboutText}
              </p>

              {/* Three Pipeline Competencies */}
              <div className="mt-8 pt-6 border-t border-[#243447] grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded bg-[#101827] border border-[#243447]">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#78A9FF] mb-1.5">
                    <Brain size={14} aria-hidden="true" />
                    <span>01. Retrieval</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Preparing document chunks, embedding spaces, and semantic search pipelines.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#101827] border border-[#243447]">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#78A9FF] mb-1.5">
                    <Sparkles size={14} aria-hidden="true" />
                    <span>02. Evaluation</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Benchmarking retrieval accuracy, response faithfulness, and context grounding.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#101827] border border-[#243447]">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#78A9FF] mb-1.5">
                    <Server size={14} aria-hidden="true" />
                    <span>03. Serving</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Exposing capabilities through secure FastAPI backends and role-based access control.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Target Role Positioning Card (4 cols) */}
          <div className="lg:col-span-4 rounded-lg bg-[#1A2535] border border-[#243447] p-6 space-y-5">
            <div>
              <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider block mb-1">
                Primary Target Roles
              </span>
              <div className="space-y-2 mt-2">
                {PROFILE_DATA.primaryTargetRoles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2 text-xs font-mono font-medium text-[#78A9FF] bg-[#101827] px-3 py-2 rounded border border-[#78A9FF]/30"
                  >
                    <CheckCircle2 size={13} aria-hidden="true" className="shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#243447]">
              <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider block mb-1">
                Secondary Strength
              </span>
              <div className="space-y-2 mt-2">
                {PROFILE_DATA.secondaryTargetRoles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] bg-[#101827] px-3 py-2 rounded border border-[#243447]"
                  >
                    <Server size={13} aria-hidden="true" className="shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#243447] text-xs text-[#94A3B8]">
              <span className="font-mono text-[#64748B] block uppercase text-[10px] mb-1">
                Academic Standing
              </span>
              <p>
                B.Tech CSE (Core) &bull; VIT-AP University &bull; Class of 2027
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
