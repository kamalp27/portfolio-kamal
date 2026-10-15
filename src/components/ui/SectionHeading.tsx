import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  headingLevel?: 'h2' | 'h3';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  className = '',
  headingLevel = 'h2',
}) => {
  const HeadingTag = headingLevel;

  return (
    <div className={`mb-8 sm:mb-12 ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#78A9FF] mb-2 font-medium">
          {eyebrow}
        </span>
      )}
      <HeadingTag className="text-fluid-h2 font-bold tracking-tight text-[#F3F5F8]">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="mt-2.5 text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
