/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBlack: '#121212',
        spotifyGray: '#979695',
        spotifyHover: '#2a2a2a',
        spotifyGreen: '#1db954',
        rangeInputBackground: '#4d4d4d',
      },
    },
  },
  plugins: [],
}
