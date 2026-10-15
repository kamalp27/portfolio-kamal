/**
 * TypeScript Design Tokens for Kamal S. Patil's Portfolio.
 *
 * NOTE ON ARCHITECTURE:
 * CSS Custom Properties and `@theme` in `src/index.css` serve as the single source
 * of truth for styling rules and DOM rendering.
 * This TypeScript module mirrors those exact values to enable typed programmatic consumption
 * (e.g., SVG canvas attributes, theme test assertions, or programmatic charting) without
 * needing runtime CSS parsing.
 */

export const DESIGN_TOKENS = {
  colors: {
    bgPrimary: '#101827',
    bgElevated: '#1A2535',
    bgSubtle: '#0d1421',
    borderSubtle: '#243447',
    borderHover: '#364b66',
    borderFocus: '#78A9FF',
    accentBlue: '#78A9FF',
    accentHover: '#5B93F7',
    accentMuted: 'rgba(120, 169, 255, 0.12)',
    textPrimary: '#F3F5F8',
    textSecondary: '#94A3B8',
    textMuted: '#64748B',
  },
  typography: {
    heading: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, monospace',
  },
  layout: {
    maxContentWidth: '72rem', // 1152px (max-w-6xl)
  },
  focus: {
    ringClass: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A9FF]',
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
