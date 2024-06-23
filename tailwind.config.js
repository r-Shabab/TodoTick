/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-sidebar": "hsl(var(--sidebar) / <alpha-value>)",
        "color-background": "hsl(var(--background) / <alpha-value>)",
        "color-menu": "hsl(var(--menu) / <alpha-value>)",
        "color-tasks-bg": "hsl(var(--tasks-bg) / <alpha-value>)",
        "color-primary-btn": "hsl(var(--primary-btn) / <alpha-value>)",
        "color-priority-btn": "hsl(var(--priority-btn) / <alpha-value>)",
        "color-due-date-btn": "hsl(var(--due-date-btn) / <alpha-value>)",
        "color-edit-btn": "hsl(var(--edit-btn) / <alpha-value>)",
        "color-delete-btn": "hsl(var(--delete-btn) / <alpha-value>)",
        "color-cancel-btn": "hsl(var(--cancel-btn) / <alpha-value>)",
        "color-text": "hsl(var(--color-text) / <alpha-value>)",
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
