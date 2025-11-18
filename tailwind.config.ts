import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Neon color palette inspired by Jeton/Mother Design
        neon: {
          pink: '#FF006E',
          magenta: '#FF0080',
          electric: '#FF00FF',
          cyan: '#00F0FF',
          lime: '#CCFF00',
          yellow: '#FFFF00',
          orange: '#FF6B00',
          purple: '#9D00FF',
          blue: '#0066FF',
          hotpink: '#FF1493',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideUp: 'slideUp 0.5s ease-out',
        bounce: 'bounce 1s infinite',
        neonPulse: 'neonPulse 2s ease-in-out infinite',
        colorShift: 'colorShift 4s ease-in-out infinite',
        chromaticGlitch: 'chromaticGlitch 3s ease-in-out infinite',
        hueRotate: 'hueRotate 10s linear infinite',
        floatUp: 'floatUp 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        neonPulse: {
          '0%, 100%': {
            opacity: '1',
            filter: 'brightness(1) saturate(1)',
          },
          '50%': {
            opacity: '0.85',
            filter: 'brightness(1.3) saturate(1.5)',
          },
        },
        colorShift: {
          '0%, 100%': {
            filter: 'hue-rotate(0deg)',
          },
          '25%': {
            filter: 'hue-rotate(90deg)',
          },
          '50%': {
            filter: 'hue-rotate(180deg)',
          },
          '75%': {
            filter: 'hue-rotate(270deg)',
          },
        },
        chromaticGlitch: {
          '0%, 100%': {
            textShadow: '2px 2px 0 #FF006E, -2px -2px 0 #00F0FF',
          },
          '25%': {
            textShadow: '-2px 2px 0 #CCFF00, 2px -2px 0 #FF00FF',
          },
          '50%': {
            textShadow: '2px -2px 0 #00F0FF, -2px 2px 0 #FF006E',
          },
          '75%': {
            textShadow: '-2px -2px 0 #FF00FF, 2px 2px 0 #CCFF00',
          },
        },
        hueRotate: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
