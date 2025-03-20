/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight1: "#75E52D",
        secondaryLight1: "#77431F",
        primaryLight2: "#FCA5A5",
        secondaryLight2: "#F5C0A9",
      },
      fontFamily: {
        myFont: ['MyFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

