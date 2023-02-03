/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-mobile': "url('/src/assets/images/home-hero-mobile.jpg')",
        'home-tablet': "url('/src/assets/images/home-hero-tablet.jpg')",
        'home-desktop': "url('/src/assets/images/home-hero-desktop.jpg')",
        'banner-pattern': "url('/src/assets/patterns/semi-circles.svg')",
        'about-mobile':"url('/src/assets/images/about-hero-mobile.jpg')",
        'about-tablet':"url('/src/assets/images/about-hero-tablet.jpg')",
        'about-desktop':"url('/src/assets/images/about-hero-desktop.jpg')",
        'our-tech':"url('/src/assets/images/our-tech.jpg')",
        'our-integrity':"url('/src/assets/images/our-integrity.jpg')",
        'our-tech':"url('/src/assets/images/our-community.jpg')",
        
      },
      fontFamily: {
        'space': ['Space mono', 'monospace'],
        'lexend': ['Lexend Deca', 'sans-serif']
      },
      fontSize: {
        'mobile-p': ['15px', '25px'],
        'mobile-h1': ['40px', '40px'],
        'mobile-h2': ['32px', '32px'],
        'mobile-h3': ['24px', '28px'],
        'mobile-h4': ['20px', '28px'],
        'accordian-title': ['18px', '24px']
      },
      colors:{
        'yellow': '#FCB72B',
        'dark-navy': 'hsl(216,17%,35%)',
        'dim-grey': 'hsl(217,12%,62%)',
        'light-grey': '#e5EcF4',
        'snow': '#f2f5f9',
        'light-yellow': '#fff4df',
        'footer': 'hsl(215,14%,23%)'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
