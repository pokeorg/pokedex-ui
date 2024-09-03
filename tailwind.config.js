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
    backgroundImage: {
      'custom-gradient-left': 'linear-gradient(to left, #3a5b22, #3a5b22, #3a5b22, #3a5b22, #3a5b22, #3d6737, #42744b, #48805f, #5e9b8b, #80b6b3, #aad0d6, #d7eaf2)',
    },
    backdropBlur: {
      'md': '8px', // You can adjust the value according to your needs
    },
  },
  },
  plugins: [],
};
