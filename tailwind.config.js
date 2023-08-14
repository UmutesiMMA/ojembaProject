/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','./js/index.js'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem'
      }
    },
    extend: {
      colors: {
        'green-ojemba': '#8ACC50',
      },
    },
  },
  plugins: [],
}

