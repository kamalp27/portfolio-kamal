import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS, PROFILE_DATA } from '../../data/profile';
import { ResumeLink } from '../ui/ResumeLink';

export const SiteHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#243447]/80 bg-[#101827]/90 backdrop-blur-md">
      <div className="section-container h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-center gap-2 text-sm sm:text-base font-bold font-mono tracking-tight text-[#F3F5F8] hover:text-[#78A9FF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF] rounded px-1"
        >
          <span className="text-[#78A9FF] font-semibold">&gt;</span>
          <span>{PROFILE_DATA.name}</span>
          <span className="hidden sm:inline-block text-xs font-normal text-[#94A3B8] font-mono border-l border-[#243447] pl-2 ml-1">
            AI/ML Intern
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#94A3B8] hover:text-[#F3F5F8] transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF] rounded px-1.5 py-1"
            >
              {item.label}
            </a>
          ))}
          <ResumeLink variant="nav" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 rounded-md bg-[#1A2535] border border-[#243447] text-[#94A3B8] hover:text-[#F3F5F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF]"
        >
          {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-[#243447] bg-[#1A2535] px-4 pt-3 pb-5 space-y-3 shadow-xl"
        >
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#F3F5F8] hover:text-[#78A9FF] py-2 px-2 rounded hover:bg-[#101827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#243447]">
            <ResumeLink variant="primary" className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
};
