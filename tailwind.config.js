const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'aha-menu': 'url("/menu.svg")',
        'aha-menu-alt': 'url("/menu-alt.svg")',
      },
      colors: {
        'aha-black': {
          200: '#262626',
          300: '#1B1B1B',
          400: '#181818',
          500: '#121212',
        },
        'aha-blue': {
          400: '#00D1FF',
        },
        'aha-grey': {
          400: '#B2B2B2',
          600: '#929292',
        },
        'aha-orange': {
          400: '#FF9B33',
          800: '#FF5C01',
        },
        'aha-yellow': {
          350: '#FFD05D',
          400: '#FFD25F',
        },
      },
      fontFamily: {
        sans: ['Ubuntu', 'Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      sm: '376px',
      md: '960px',
      lg: '1440px',
    },
  },
};
