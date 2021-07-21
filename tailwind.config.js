// const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  // purge: [],
  purge: [
      './public/**/*.html',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    screens : {
      'sm':'550px',
      'md':'950px',
      'lg': '1024px',
      'xl': '1450px',
      '2xl': '1920px',


    },
    extend: {
      backgroundImage: theme =>({
        'hero-gradient': "linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)",

      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // corePlugins: {
  //   preflight : false,
  // }
}
