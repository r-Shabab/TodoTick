/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#de483a",
        primary2: "#fcfaf6",
        accent: "#f9e9e3",
      },
      fontFamily: {
        dosis: ["Dosis"],
        raleway: ["Raleway"],
      },
    },
  },
  plugins: [],
};
