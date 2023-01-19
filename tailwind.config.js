/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'theme-black': '#0A0908',
        'theme-pink': '#3c01ca',
        'theme-blue-dark': '#eb589e',
      },
      boxShadow: {
        'theme-1': '0 0 60px -15px rgba(0, 0, 0, 0.7)',
        'theme-2': '15px 0 35px -5px rgba(0, 0, 0, 0.5)',
      },
      fontSize: {
        '18xl': '18rem',
        '19xl': '19rem',
        '20xl': '20rem',
      },
      fontFamily: {
        'body': ['Permanent Marker']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
