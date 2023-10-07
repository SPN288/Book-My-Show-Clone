/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],

  theme: {
    extend: {
      colors:{
        navCol:
      {
        50: '#2b3149',
        100: '#ccd1e5',
        200: '#abb2d1',
        300: '#8a93bf',
        400: '#6974ad',
        500: '#4f5b93',
        600: '#3e4773',
        700: '#2c3253',
        800: '#1a1e33',
        900: '#333544',
      },
      }
    },
  },
  plugins: [],
}

