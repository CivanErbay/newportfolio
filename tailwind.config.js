/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "code-latin": ['"M PLUS Code Latin"', "sans-serif"],
      },
      keyframes: {
        "bounce-high": {
          "0%, 100%": {
            transform: "translateY(-100%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(20%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "bounce-high": "bounce-high 5s ease-out infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


