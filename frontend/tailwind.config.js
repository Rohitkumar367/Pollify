/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: "#75E52D",
        secondaryLight: "#77431F",
      },
      fontFamily: {
        myFont: ['MyFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

