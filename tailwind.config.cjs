/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif']
      }
    }
  },
  plugins: []
}
