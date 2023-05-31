const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'accent-green': '#b3d7c5',
        'accent-offwhite': '#f3f3f3'
      },
      backgroundImage: {
        'hero-bg': "url('../../src/assets/hero.jpg')",
      },
      fontFamily: {
        'serif': ['Cormorant',...defaultTheme.fontFamily.serif],
      }
    },
  },
  variants: {},
  plugins: []
};