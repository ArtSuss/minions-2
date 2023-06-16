const {fontFamily} = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#274C5B',
        'hero-green': '#7EB693',
        green: '#68A47F',
        buton: '#EFD372',
        p: '#525C60',

      },
      fontFamily: {
        'roboto': ['Roboto', ...fontFamily.sans],
        'yellowtail': ['Yellowtail', ...fontFamily.serif],
      },
      backgroundImage: {
        'hero-img': "url('/img/hero-img.png')",
        'natural-img': "url('/img/natural.png')",
        'offer-img': "url('/img/offer.png')",
        'grapefruites-img': "url('/img/grapefruites.png')",
        'cinnamon-img': "url('/img/cinnamon-bg.png')",
        'jucie-img': "url('/img/juice.png')",
        'food-img': "url('/img/food.png')",
        'cookies': "url('/img/cookis.png')"
        
      }
    },
  },
  plugins: [],
}

