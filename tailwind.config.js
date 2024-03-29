const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        firaCode: ['Fira Code'],
        poppins: ['Poppins'],
      },
      colors: {
        // primary: {
        //   400: '#00E0F3',
        //   500: '#00c4fd',
        // },
        // dark: '#333333',
        primary: '#00B2FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
