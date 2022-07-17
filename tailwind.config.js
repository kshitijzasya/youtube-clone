/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '13': '50px',
        '68': '270px'
      }
    },
  },
  plugins: [],
}
