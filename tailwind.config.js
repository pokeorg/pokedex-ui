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
  },
  },
  plugins: [],
};
