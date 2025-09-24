/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./ui/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#7c3aed",
          600: "#7c3aed",
          200: "#ddd6fe"
        }
      }
    }
  },
  plugins: []
};
