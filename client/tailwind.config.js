/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      
      screens: {
        sp: { min: '410px' },
        ...defaultTheme.screens,
      },
      
      colors: {
        primary: '#FFFFFF',
        secondary: '#E6E6E6',
        secondarySoft: '#F4F4F4',
        textDark: '#191919',
        textGray: '#878787',
        softGray: '#0D0D0D',
        darkGray: '#070707',
        softDark: '#191919',
        footerBg: '#404040',
        blackBg: '#000000',
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        '3xl': '0px 0px 80px rgba(0, 0, 0, 0.3)',
        '4xl': '5px 5px 80px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'Mhero-img':
          "url('../images/TinyBg.png')",
        'Dhero-img':
          "url('../images/DeskBg.png')",
      },
      gridTemplateColumns: {
        card1: 'repeat(1, minmax(0, 300px))',
        card2: 'repeat(2, minmax(0, 163px))',
        card3: 'repeat(3, minmax(0, 163px))',
        cardDesktop2: 'repeat(2, minmax(0, 600px))',
        cardDesktop3: 'repeat(3, minmax(0, 647px))',
        cardDesktop4: 'repeat(4, minmax(0, 647px))',
      },
      width: {
        containMax: '440px',
      },
    },
  },
  plugins: [],
};
