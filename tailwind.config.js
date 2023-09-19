/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: '#1A1A1D',
        second: '#4E4E50',
        third: '#6F2232',
        fourth: '#950740',
        fifth: '#C3073F',
      }
    },
  },
  plugins: [],
}

