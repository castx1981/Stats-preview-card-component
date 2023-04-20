/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lexend-deca': ['"Lexend Deca"', 'sans-serif']
      },
      fontSize: {
        'body': ['15px', {
          lineHeight: '1.625',
          fontWeight: '400',
        }],
      },
    }
  },
  plugins: [],
}

