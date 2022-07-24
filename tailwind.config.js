/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow-pastel': '#fffde3',
        'pink-pastel': '#ffb8d887',
      },
    },
  },
  plugins: [],
};