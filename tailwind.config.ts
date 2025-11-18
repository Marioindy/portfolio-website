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
        // Retro 8-bit pixel art palette
        pixel: {
          red: '#FF0040',
          blue: '#00E0FF',
          yellow: '#FFED00',
          purple: '#B200FF',
          green: '#00FF41',
          orange: '#FF6A00',
          pink: '#FF10F0',
          black: '#0A0A0A',
          white: '#FFFFFF',
          gray: '#8B8B8B',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        pixel: '0px',
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
        pixel: [
          '"Press Start 2P"',
          '"Courier New"',
          'monospace',
        ],
        bitmap: [
          'monospace',
          'Courier',
          '"Courier New"',
        ],
      },
      spacing: {
        pixel: '8px',
        'pixel-2': '16px',
        'pixel-3': '24px',
        'pixel-4': '32px',
        'pixel-6': '48px',
        'pixel-8': '64px',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideUp: 'slideUp 0.5s ease-out',
        bounce: 'bounce 1s infinite',
        glitch: 'glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'glitch-2': 'glitch-2 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        scanline: 'scanline 8s linear infinite',
        flicker: 'flicker 0.15s infinite',
        'pixel-pulse': 'pixel-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pixel-bounce': 'pixel-bounce 1s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
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
        glitch: {
          '0%, 100%': {
            transform: 'translate(0)',
          },
          '20%': {
            transform: 'translate(-2px, 2px)',
          },
          '40%': {
            transform: 'translate(-2px, -2px)',
          },
          '60%': {
            transform: 'translate(2px, 2px)',
          },
          '80%': {
            transform: 'translate(2px, -2px)',
          },
        },
        'glitch-2': {
          '0%, 100%': {
            transform: 'translate(0)',
            opacity: '1',
          },
          '25%': {
            transform: 'translate(4px, 0)',
            opacity: '0.8',
          },
          '50%': {
            transform: 'translate(-4px, 0)',
            opacity: '0.8',
          },
          '75%': {
            transform: 'translate(2px, 0)',
            opacity: '0.8',
          },
        },
        scanline: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(100%)',
          },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'pixel-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.9',
          },
        },
        'pixel-bounce': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-8px)',
          },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      boxShadow: {
        pixel: '4px 4px 0px rgba(0, 0, 0, 0.25)',
        'pixel-lg': '8px 8px 0px rgba(0, 0, 0, 0.25)',
        'pixel-glow-red': '0 0 10px #FF0040, 0 0 20px #FF0040',
        'pixel-glow-blue': '0 0 10px #00E0FF, 0 0 20px #00E0FF',
        'pixel-glow-yellow': '0 0 10px #FFED00, 0 0 20px #FFED00',
      },
    },
  },
  plugins: [],
};

export default config;
