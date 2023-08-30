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
      backgroundImage: {
        'hero': "url('../images/win win.png')"
      }
    },
    fontFamily: {
      'roboto': 'Roboto',
      'roboto-Medium': 'Roboto-Medium',
      'roboto-Bold': 'Roboto-Bold',
      'roboto-Black': 'Roboto-Black',

      'raleway': 'Raleway',
      'raleway-Medium': 'Raleway-Medium',
      'raleway-Bold': 'Raleway-Bold',
      'raleway-ExtraBold': 'Raleway-ExtraBold',

      'montserrat': 'Montserrat',
      'montserrat-Medium': 'Montserrat-Medium',
      'montserrat-Bold': 'Montserrat-Bold',
      'montserrat-ExtraBold': 'Montserrat-ExtraBold',
    }
  },
  plugins: [],
}

