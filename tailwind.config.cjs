/** @type {import('tailwindcss').Config}*/

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: {
          ...require("tailwindcss/colors").teal,
        },
        secondary: {
          ...require("tailwindcss/colors").sky,
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
