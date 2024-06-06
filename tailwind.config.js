/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueS1: "#caf0f8",
        blueS2: "#90e0ef",
        blueS3: "#00b4d8",
        blueS4: "#0077b6",
        blueS5: "#03045e",
      },
      fontFamily: {
        dosis: ["Dosis"],
        raleway: ["Raleway"],
      },
    },
  },
  plugins: [],
};
