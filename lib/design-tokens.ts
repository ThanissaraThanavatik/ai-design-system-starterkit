/**
 * Design Tokens - Centralized design system values
 * Extracted from Figma: Yadom Herbal Inhaler Landing Page
 * File ID: IasfDpqUwtRZOaWQ6C5Mtn
 */

// Color Tokens - From Figma Variables
export const colors = {
  // Primary Brand Color (Teal/Green from Yadom)
  primary: {
    DEFAULT: '#009689',
    50: '#e6f7f5',
    100: '#b0e8e2',
    200: '#8addd4',
    300: '#54cec2',
    400: '#33c4b6',
    500: '#009689', // Main brand color
    600: '#00897d',
    700: '#006b61',
    800: '#00534b',
    900: '#003f39',
    950: '#002926',
  },
  // Background Colors
  background: {
    DEFAULT: '#ffffff',
    secondary: '#fafafa',
    muted: '#f5f5f5',
  },
  // Foreground/Text Colors
  foreground: {
    DEFAULT: '#0a0a0a', // Primary text (VariableID:374:416)
    secondary: '#525252',
    muted: '#737373',
    inverse: '#ffffff',
  },
  // Semantic Colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  // Neutral/Gray Scale
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#0a0a0a', // Primary text color
    950: '#030303',
  },
  // Border Colors
  border: {
    DEFAULT: '#e5e5e5',
    strong: '#d4d4d4',
    subtle: '#f5f5f5',
  },
}

// Typography Tokens - From Figma Variables (Inter font family)
export const typography = {
  // Font Families
  fontFamily: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, monospace',
  },
  // Font Sizes - Based on Figma node 5024-368
  fontSize: {
    xs: ['12px', { lineHeight: '16px' }],
    sm: ['14px', { lineHeight: '20px' }],      // Button text
    base: ['16px', { lineHeight: '24px' }],    // Body text, nav items
    lg: ['18px', { lineHeight: '28px' }],
    xl: ['20px', { lineHeight: '28px' }],      // Logo text (20px, lineHeight 28px)
    '2xl': ['24px', { lineHeight: '32px' }],
    '3xl': ['30px', { lineHeight: '36px' }],
    '4xl': ['36px', { lineHeight: '40px' }],
    '5xl': ['48px', { lineHeight: '48px' }],
    '6xl': ['60px', { lineHeight: '60px' }],
    '7xl': ['72px', { lineHeight: '72px' }],
  },
  // Font Weights - From Figma
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,      // Nav items, buttons (VariableID:1043:1100)
    semibold: 600,    // Logo (VariableID:1043:1102)
    bold: 700,
    extrabold: 800,
  },
  // Line Heights - From Figma
  lineHeight: {
    tight: 1.2,
    normal: 1.5,      // 150% for 16px text
    relaxed: 1.625,
    loose: 2,
    '140': '1.4',     // Logo: 140% (28px line height for 20px font)
    '150': '1.5',     // Body: 150% (24px line height for 16px font)
    '143': '1.43',    // Button: 142.857% (20px line height for 14px font)
  },
  // Letter Spacing
  letterSpacing: {
    tight: '-0.02em',
    normal: '0em',    // From Figma VariableID:1043:1112
    wide: '0.02em',
    wider: '0.05em',
  },
}

// Spacing Tokens - From Figma Variables
export const spacing = {
  0: '0',
  1: '0.25rem',     // 4px
  2: '0.5rem',      // 8px - button padding vertical (VariableID:90:290)
  3: '0.75rem',     // 12px
  4: '1rem',        // 16px - button padding horizontal (VariableID:90:295)
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  8: '2rem',        // 32px - nav item spacing (VariableID:455:677)
  10: '2.5rem',     // 40px
  12: '3rem',       // 48px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
}

// Border Radius Tokens - From Figma (VariableID:90:555)
export const borderRadius = {
  none: '0',
  sm: '4px',
  base: '6px',
  md: '8px',        // Button border radius (VariableID:90:555)
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '24px',
  full: '9999px',
}

// Shadow Tokens (Elevation) - From Figma
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  // Button shadow from Figma
  button: '0 1px 2px 0 rgb(0 0 0 / 0.1)',
  // Card shadow
  card: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
}

// Duration Tokens (Animations)
export const durations = {
  fast: '150ms',
  base: '200ms',
  slow: '300ms',
  slower: '500ms',
}

// Z-Index Tokens
export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
}

// Breakpoints (Responsive)
export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
