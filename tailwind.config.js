/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "nunito-sans": ['"Nunito Sans"', "sans-serif"],
        "nanum-myeongjo": ['"Nanum Myeongjo"', "serif"],
      },
      colors: {
        primary: "#081F2D",
        secondary: "#006580",
        tertiary: "#003E52",
        quaternary: "#EE7623",
        quinary: "#F3F4F6",
      },
    },
  },
  plugins: [],
};
