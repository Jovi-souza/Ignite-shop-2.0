/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',

        title: '#E1E1E6',
        text: '#C4C4CC',
        icon: '#8D8D99',
        elements: '#202024',
        backgroud: '#121214',

        greenDark: '#00875f',
        greenLight: '#00b37e',

        bgGradient1: '#1ea483',
        bgGradient2: '#7465d4',
      },

      fontSizes: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },

      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },

      translate: {
        maxCover: '110%',
      },

      height: {
        maxCover: '32rem',
      },
    },
  },
  plugins: [],
}
