/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    fontFamily:{
      scaniaCondensed: ['ScaniaCondensed', 'sans-serif'],
      scaniaHeadline: ['ScaniaHeadline', 'sans-serif']
    },
    extend: {
      keyframes: {
        contentShow: {
          '0%': {transform: 'translate(-50%, -48%) scale(0.96)', opacity: '0'},
          '100%': {transform: 'translate(-50%, -50%) scale(1)', opacity: '1'}
        },
        overlayShow: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        jump: {
          '0%': {marginBottom: '0px'},
          '50%': {marginBottom: '4px'},
          '100%': {marginBottom: '0px'},
        }
      },
      animation: {
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        jumpAnimation1: "jump 1s infinite ease-in-out",
        jumpAnimation2: "jump 1.02s infinite ease-in-out",
        jumpAnimation3: "jump 1.04s infinite ease-in-out",
      },
    },
  },
  plugins: [],
}
