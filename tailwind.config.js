/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fdc2c1',
        secondary: '#514241',
        accent: '#0d0a0a',
        blush: '#f2d6d4',
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
