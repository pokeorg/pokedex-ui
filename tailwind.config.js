/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#3A5B22',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      ringColor: {
        DEFAULT: '#3A5B22',
      },
      backdropBlur: {
        'md': '8px',
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['focus', 'focus-visible'], 
    },
  },
  plugins: [],
};
