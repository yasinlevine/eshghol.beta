/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        '2.5xl': '1.25rem',
        '3.5xl': '1.75rem',
      },
    },
  },
  plugins: [],
};
