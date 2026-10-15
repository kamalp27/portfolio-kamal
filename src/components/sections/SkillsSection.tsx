import React from 'react';
import { SKILLS_DATA } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';
import { Cpu, Terminal, Server, Database, Layout, Cloud } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Generative AI':
        return Cpu;
      case 'Programming':
        return Terminal;
      case 'Backend & APIs':
        return Server;
      case 'Data & Retrieval':
        return Database;
      case 'Frontend':
        return Layout;
      default:
        return Cloud;
    }
  };

  return (
    <section id="skills" className="section-spacing">
      <div className="section-container">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills & Technologies"
          subtitle="Grouped capabilities across Generative AI pipelines, backend engineering, data stores, and cloud environments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((cat) => {
            const Icon = getCategoryIcon(cat.category);
            return (
              <div
                key={cat.category}
                className="rounded-lg bg-[#1A2535] border border-[#243447] p-5 sm:p-6 flex flex-col justify-between hover:border-[#78A9FF]/40 transition-colors"
              >
                <div>
                  {/* Category Title with Icon */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-1.5 rounded bg-[#101827] border border-[#243447] text-[#78A9FF]">
                      <Icon size={16} aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-[#F3F5F8] tracking-tight">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs text-[#94A3B8] mb-4 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#243447]/60">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-2.5 py-1 rounded bg-[#101827] border border-[#243447] text-xs font-mono text-[#F3F5F8] hover:border-[#78A9FF]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
