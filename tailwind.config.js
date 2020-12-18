const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // gray: colors.trueGray,
      gray: {
        darkest: '#0a0a0a',
        dark: '#3f3f3f',
        DEFAULT: '#787878',
        light: '#b7b7b7',
        lightest: '#eeeeee',
      },
      emerald: colors.emerald,
      blue: colors.blue,
      red: colors.red,
      yellow: colors.yellow,
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
