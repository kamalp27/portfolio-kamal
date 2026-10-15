import React from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-spacing">
      <div className="section-container">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          subtitle="Formal academic foundations in computer science and senior secondary education."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROFILE_DATA.education.map((item) => (
            <div
              key={item.id}
              className="rounded-lg bg-[#1A2535] border border-[#243447] p-6 sm:p-7 flex flex-col justify-between hover:border-[#78A9FF]/40 transition-colors"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#78A9FF] font-medium bg-[#101827] px-2.5 py-0.5 rounded border border-[#243447]">
                    {item.id === 'btech' ? (
                      <GraduationCap size={13} aria-hidden="true" />
                    ) : (
                      <BookOpen size={13} aria-hidden="true" />
                    )}
                    <span>{item.id === 'btech' ? 'Undergraduate Degree' : 'Senior Secondary'}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[#94A3B8]">
                    <Calendar size={13} className="text-[#64748B]" aria-hidden="true" />
                    <span>{item.expectedGraduationOrYear}</span>
                  </span>
                </div>

                {/* Degree / Certificate Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#F3F5F8] tracking-tight mb-1">
                  {item.degree}
                </h3>

                {/* Institution / Board */}
                <p className="text-sm font-medium text-[#94A3B8]">
                  {item.institution}
                </p>
              </div>

              {/* Score / CGPA Card */}
              <div className="pt-5 border-t border-[#243447] mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-[#101827] border border-[#243447] text-[#78A9FF]">
                    <Award size={16} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#64748B] block uppercase">
                      {item.scoreLabel}
                    </span>
                    <span className="text-base font-bold font-mono text-[#F3F5F8]">
                      {item.score}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#64748B]">
                  Verified Academic Record
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
