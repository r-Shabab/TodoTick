/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#de483a",
        primary2: "#fcfaf6",
        accent: "#f9e9e3",
        "light-sidebar": "#FFFFFF",
        "dark-sidebar": "#050505",
        "light-body": "#EEEEEE",
        "dark-body": "#191919",
        "light-menu-bg": "#E2F4FF",
        "dark-menu-bg": "#4A5769",
        "dark-tasks-bg": "#1E1E1E",
        "add-btn": "#3282B8",
        "priority-btn": "#835494",
        "due-date-btn": "#545B77",
        "edit-btn": "#249F7F",
        "delete-btn": "#DE483A",
        "cancel-btn": "#F7F7F7",
      },
      fontFamily: {
        title: ["Titillium Web"],
        body: ["Montserrat"],
        logo: ["Bellota"],
      },
    },
  },
  plugins: [],
};
