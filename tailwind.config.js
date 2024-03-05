const colors = require('tailwindcss/colors')

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      textColor: "#ffff",
      scoreColor: "hsl(229, 25%, 31%)",
      outlineColor: "hsl(217, 16%, 45%)",
      indigo:colors.indigo,
      white:colors.white,
      yellow:colors.yellow,
      red:colors.red,
      blue:colors.blue,
    },
    extend: {},
  },
  plugins: [],
};
