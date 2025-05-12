/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f1f7',
          100: '#d5d9e9',
          200: '#aab5d3',
          300: '#7f90bd',
          400: '#586fa7',
          500: '#3e538e',
          600: '#324272',
          700: '#273256',
          800: '#1b233b',
          900: '#0A1C3F',
        },
        green: {
          50: '#f0fdf5',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#29FF7E', // Artbyte green
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7209B7', // Artbyte purple
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'scale(1)',
          },
          '33%': {
            transform: 'scale(1.1)',
          },
          '66%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};