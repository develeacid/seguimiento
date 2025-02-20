/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primario: "#9D2449",
        secundario: "#B38E5D",
        terciario: "#285C4D",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
