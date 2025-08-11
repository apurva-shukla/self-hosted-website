import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_pages/**/*.{md,mdx}",
    "./_posts/**/*.md",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    gridTemplateColumns: {
      '12': 'repeat(12, minmax(0, 1fr))',
    },
    gridTemplateRows: {
      '12': 'repeat(12, minmax(0, 1fr))',
    },
    extend: {
      fontFamily: {
        // Use Inter for a clean developer-friendly look; keep existing aliases working
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif'],
        jjannon: ['Inter', 'system-ui', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif'],
        instrument: ['"Instrument Serif"', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Token-based palette powered by CSS variables
        background: "var(--bg)",
        foreground: "var(--fg)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        border: "var(--border)",

        // Keep existing names mapped to the new system for compatibility
        "hero-bg": "var(--bg)",
        primary: "#111827", // slate-900 for headings and key text
        "primary-light": "#475569", // slate-600 for secondary text

        // Category colors
        category: {
          all: "#3b82f6", // blue-500
          programming: "#8b5cf6", // purple-500
          "personal-development": "#22c55e", // green-500
          productivity: "#f59e0b", // amber-500
        },

        // Callout colors exposed for utilities
        callout: {
          DEFAULT: "var(--callout-bg)",
          bg: "var(--callout-bg)",
          border: "var(--callout-border)",
          foreground: "var(--callout-foreground)",
        },
      },
      spacing: {
        28: "4rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
        "high-quality": "0 16px 24px -1px rgba(0, 0, 0, 0.08), 0 4px 8px -1px rgba(0, 0, 0, 0.03)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--fg)',
            a: {
              color: 'var(--accent)',
              textDecoration: 'none',
              fontWeight: '500',
            },
            'a:hover': {
              textDecoration: 'underline',
            },
            h1: { color: '#111827' },
            h2: { color: '#111827' },
            h3: { color: '#111827' },
            code: { backgroundColor: 'transparent' },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
