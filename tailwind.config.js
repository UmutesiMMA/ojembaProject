/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/sections/*.html', './build/js/*.js'],
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
        'primary-green': '#8ACC50',
      },
    },
    fontFamily: {
      'roboto': 'Roboto, sans-serif',
      'raleway': 'raleway, Helvetica',
      'montserrat': 'Montserrat, Helvetica'
    }
  },
  plugins: [],
}

