/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        ravi: ["Ravi", "sans-serif"],
      },
      colors: {
        "custom-500": "#5e60c1",
      },
    },
  },
  variants: {},
  plugins: [],
};
