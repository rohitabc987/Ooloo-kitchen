import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    // Keep false during incremental migration to prevent stripping existing button/heading styles
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E64A19',
          hover: '#D83B0B',
          light: '#FFF2ED',
          dark: '#BF3A10',
        },
        brand: {
          orange: '#FF7B54',
          green: '#05B865',
          'green-light': '#E6F8F0',
          yellow: '#FFA114',
          dark: '#18191B',
          bg: '#FAF7F2',
        },
        dark: {
          DEFAULT: '#18191B',
          surface: '#202124',
          card: '#121417',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
