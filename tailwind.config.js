/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      footer: "url('/images/footer.png')",
    },
    colors: {
      ...defaultColors,
      "primary-green": "#1A7E17",
      "dark-green": "#19653E",
      "transparent-green": "#1DA9194A",
    },
    screens: {
      xs: "320px",
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
    },
  },
  plugins: [],
};
