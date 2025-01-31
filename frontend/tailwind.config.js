/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#82ff33",
        secondary: "#EF863E",
      },
      fontFamily: {
        myFont: ['MyFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

