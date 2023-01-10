/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brightRed: 'hsl(12, 88%, 59%)',
      }
    },
  },
  plugins: [],
}
