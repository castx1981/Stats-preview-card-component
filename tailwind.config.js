/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lexendDeca': ['"Lexend Deca"', 'sans-serif']
      },
      colors: {
        'veryDarkBlue': 'hsl(233, 47%, 7%)',
        'darkBlue': 'hsl(233, 28%, 13%)',
        'darkDesaturatedBlue': 'hsl(246, 38%, 16%)',
        'softViolet': 'hsl(277, 64%, 61%)',
      },
      spacing: {
        '18': '4.5rem',
      }
    }
  },
  plugins: [],
}

