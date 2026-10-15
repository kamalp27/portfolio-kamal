import React from 'react';
import { PROJECTS_DATA } from '../../data/projects';
import { ProjectCard } from '../projects/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Info } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const flagshipProject = PROJECTS_DATA.find((p) => p.isFlagship);
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="section-spacing">
      <div className="section-container">
        <SectionHeading
          eyebrow="Technical Case Studies"
          title="Featured Engineering Projects"
          subtitle="Applied systems focusing on RAG retrieval pipelines, quantitative evaluation benchmarks, RBAC authorization boundaries, and full-stack APIs."
        />

        {/* Recruiter Transparency & Provenance Note */}
        <div className="mb-8 p-4 rounded-md bg-[#1A2535] border border-[#243447] flex items-start gap-3">
          <Info size={18} className="text-[#78A9FF] mt-0.5 shrink-0" aria-hidden="true" />
          <div className="text-xs text-[#94A3B8] leading-relaxed">
            <span className="text-[#F3F5F8] font-semibold block mb-0.5">
              Evaluation Integrity & Provenance Notice
            </span>
            <p>
              Metrics (Recall@5, median retrieval latency, answer faithfulness, and test scenarios) reflect resume-reported evaluation figures on project evaluation sets. Project repository and deployment links are indicated where available.
            </p>
          </div>
        </div>

        {/* Projects Layout: Prominent Flagship Project followed by 2-Column Grid */}
        <div className="space-y-8">
          {/* Flagship Project Showcase */}
          {flagshipProject && (
            <div>
              <ProjectCard project={flagshipProject} isProminent={true} />
            </div>
          )}

          {/* Secondary Technical Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
