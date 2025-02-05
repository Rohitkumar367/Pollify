/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: "#82ff33",
        secondaryLight: "#EF863E",
      },
      fontFamily: {
        myFont: ['MyFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

