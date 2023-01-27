/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "divider-desktop": "url('./images/pattern-divider-desktop.svg')",
        "divider-mobile": "url('./images/pattern-divider-mobile.svg')",
      },
      boxShadow: {
        button: "0 0 10px 15px rgba(82, 255, 168, 1)",
      },
      colors: {
        attribute: "#3e52a3",
        primary: {
          lyan: "#cee3e9", // Light Cyan
          neen: "#52ffa8", // Neon Green
        },
        grue: "#4e5d73", // Grayish Blue
        dish: "#323a49", // Dark Grayish Blue
        darb: "#1f2632", // Dark Blue
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
