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
        'hero': "url('../images/winWin.webp')",
        'managedTeam':"url('../images/teamlogo.webp')",
        'skillset':"url('../images/bgteam.webp')",
        'qualitat':"url('../images/qualitat.webp')",
        'partners':"url('../images/BG_partners.webp')",
        'founder':"url('../images/BG_Founder.svg')",
        'founderFooter':"url('../images/bg_hero.webp')",
        'rwandaWords':"url('../images/bg-rectangle.webp')",
        'rwandabg':"url('../images/rwandabg.webp')",
        'iconic':"url('../images/iconic.png')",
        'africa':"url('../images/my-background.webp')",
        'footer':"url('../images/bg_footer.webp')",

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

