/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  safelist: [
    "col-start-1", "col-start-2", "col-start-3", "col-start-4", "col-start-5",
    "row-start-1", "row-start-2", "row-start-3",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


