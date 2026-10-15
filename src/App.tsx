import React from 'react';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { EducationSection } from './components/sections/EducationSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#101827] text-[#F3F5F8] flex flex-col selection:bg-[#78A9FF]/20 selection:text-[#78A9FF]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#78A9FF] text-[#101827] font-semibold text-xs rounded-md shadow-lg outline-none ring-2 ring-offset-2 ring-[#78A9FF]"
      >
        Skip to main content
      </a>

      {/* Header Landmark */}
      <SiteHeader />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer Landmark */}
      <SiteFooter />
    </div>
  );
};

export default App;
