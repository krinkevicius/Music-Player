/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customCharcoal: '#121212',
        customGray: '#979695',
        singleTrackHover: '#2a2a2a',
        customGreen: '#1db954',
        rangeInputBackground: '#4d4d4d',
      },
    },
  },
  plugins: [],
}
