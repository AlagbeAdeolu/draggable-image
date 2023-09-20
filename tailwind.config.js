/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'serif': ['Mooli', 'ui-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1025px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}

