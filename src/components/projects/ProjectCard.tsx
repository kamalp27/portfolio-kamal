import React, { useState } from 'react';
import {
  ExternalLink,
  ShieldCheck,
  Activity,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import type { ProjectRecord } from '../../types';

interface ProjectCardProps {
  project: ProjectRecord;
  isProminent?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isProminent = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`rounded-lg bg-[#1A2535] border transition-all ${
        project.isFlagship || isProminent
          ? 'border-[#78A9FF]/50 shadow-lg shadow-[#78A9FF]/5 p-6 sm:p-8'
          : 'border-[#243447] p-6 sm:p-7 hover:border-[#78A9FF]/40'
      } flex flex-col justify-between`}
    >
      <div>
        {/* Header: Category, Flagship Badge, and Links */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.isFlagship && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#78A9FF]/15 text-[#78A9FF] border border-[#78A9FF]/40">
                <Sparkles size={12} aria-hidden="true" />
                <span>Flagship Project</span>
              </span>
            )}
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-[#101827] text-[#94A3B8] border border-[#243447]"
              dangerouslySetInnerHTML={{ __html: project.categoryLabel }}
            />
          </div>

          {/* Real Links (Only rendered if URL exists) */}
          <div className="flex items-center gap-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source repository on GitHub`}
                className="p-2 rounded bg-[#101827] border border-[#243447] text-[#94A3B8] hover:text-[#78A9FF] hover:border-[#78A9FF]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF]"
              >
                <GithubIcon size={16} aria-hidden="true" />
              </a>
            ) : null}

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live deployment for ${project.title}`}
                className="p-2 rounded bg-[#101827] border border-[#243447] text-[#94A3B8] hover:text-[#78A9FF] hover:border-[#78A9FF]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF]"
              >
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Project Title */}
        <h3
          className={`font-bold text-[#F3F5F8] tracking-tight mb-3 ${
            project.isFlagship
              ? 'text-2xl sm:text-3xl'
              : 'text-xl sm:text-2xl'
          }`}
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-[#94A3B8] mb-6 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Problem & Approach Grid */}
        <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
          <div className="bg-[#101827]/70 p-4 rounded border border-[#243447]">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-[#78A9FF] font-semibold mb-1">
              Problem Addressed
            </span>
            <p className="text-[#94A3B8] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="bg-[#101827]/70 p-4 rounded border border-[#243447]">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-[#78A9FF] font-semibold mb-1">
              Engineering Approach & Architecture
            </span>
            <p className="text-[#94A3B8] leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Evaluation Metrics / Benchmark Grid */}
        {project.resultsAndMetrics.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F3F5F8] font-semibold flex items-center gap-1.5">
                <Activity size={13} className="text-[#78A9FF]" aria-hidden="true" />
                Evaluation & Results
              </span>
              <span className="text-[10px] font-mono text-[#64748B] bg-[#101827] px-2 py-0.5 rounded border border-[#243447]">
                Resume-Reported Claims
              </span>
            </div>

            <div
              className={`grid gap-2.5 ${
                project.isFlagship
                  ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
                  : 'grid-cols-2 sm:grid-cols-3'
              }`}
            >
              {project.resultsAndMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded bg-[#101827] border border-[#243447] text-left flex flex-col justify-between"
                >
                  <div className="text-base sm:text-lg font-mono font-bold text-[#78A9FF]">
                    {item.metric}
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-[#F3F5F8] leading-tight">
                      {item.label}
                    </div>
                    <div className="text-[10px] text-[#64748B] mt-0.5 line-clamp-1">
                      {item.context}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expandable Technical Deep-Dive */}
        {isExpanded && (
          <div
            id={`details-${project.id}`}
            className="mb-6 pt-5 border-t border-[#243447] space-y-5 animate-in fade-in duration-200"
          >
            {/* Technical Highlights */}
            {project.technicalHighlights.length > 0 && (
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-[#F3F5F8] font-semibold mb-2 flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#78A9FF]" aria-hidden="true" />
                  Technical Highlights & Implementation
                </span>
                <ul className="space-y-1.5 text-xs text-[#94A3B8] list-disc list-inside">
                  {project.technicalHighlights.map((highlight, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Evaluation Methodology Note */}
            {project.evaluationMethodology && (
              <div className="p-3.5 rounded bg-[#101827] border border-[#243447]">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[#78A9FF] font-semibold mb-1">
                  Evaluation Methodology & Context
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {project.evaluationMethodology}
                </p>
              </div>
            )}

            {/* Repository & Demo Availability Notice (Neutral Wording) */}
            <div className="p-3 rounded bg-[#101827] border border-[#243447] text-xs text-[#94A3B8] flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
              <div>
                <span className="text-[#64748B]">Repository: </span>
                <span className="text-[#F3F5F8]">
                  {project.githubUrl ? 'Publicly Available' : 'Repository link not provided'}
                </span>
              </div>
              <div>
                <span className="text-[#64748B]">Deployment: </span>
                <span className="text-[#F3F5F8]">
                  {project.liveDemoUrl ? 'Active Live Demo' : 'Live demo not available on this portfolio'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer: Tech Stack Badges & Toggle Button */}
      <div className="pt-4 border-t border-[#243447] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologyStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#101827] text-[#94A3B8] border border-[#243447]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Lightweight Expand/Collapse Button */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls={`details-${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#78A9FF] hover:text-[#5B93F7] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78A9FF] rounded py-1 shrink-0"
        >
          <span>{isExpanded ? 'Hide Technical Details' : 'View Technical Details'}</span>
          {isExpanded ? (
            <ChevronUp size={14} aria-hidden="true" />
          ) : (
            <ChevronDown size={14} aria-hidden="true" />
          )}
        </button>
      </div>
    </article>
  );
};
