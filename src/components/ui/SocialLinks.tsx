import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_DATA } from '../../data/profile';

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  showLabels = false,
}) => {
  const links = [
    {
      name: 'GitHub',
      href: PROFILE_DATA.githubUrl,
      icon: GithubIcon,
      label: 'Kamal S. Patil on GitHub (opens in new window)',
    },
    {
      name: 'LinkedIn',
      href: PROFILE_DATA.linkedinUrl,
      icon: LinkedinIcon,
      label: 'Kamal S. Patil on LinkedIn (opens in new window)',
    },
    {
      name: 'Email',
      href: `mailto:${PROFILE_DATA.email}`,
      icon: Mail,
      label: `Send email to Kamal S. Patil (${PROFILE_DATA.email})`,
    },
  ];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        const isMail = link.href.startsWith('mailto:');
        return (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.label}
            {...(!isMail && { target: '_blank', rel: 'noopener noreferrer' })}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#1A2535] border border-[#243447] text-[#94A3B8] hover:text-[#78A9FF] hover:border-[#78A9FF]/50 hover:bg-[#101827] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF]"
          >
            <Icon size={18} aria-hidden="true" />
            {showLabels && <span className="text-xs font-medium">{link.name}</span>}
          </a>
        );
      })}
    </div>
  );
};
