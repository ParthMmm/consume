/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: {
        DEFAULT: "#3AF613",
        50: "#CEFDC4",
        100: "#BDFCB0",
        200: "#9CFA89",
        300: "#7CF962",
        400: "#5BF73A",
        500: "#3AF613",
        600: "#29C908",
        700: "#1E9306",
        800: "#135D04",
        900: "#082701",
      },
      purple: {
        DEFAULT: "#D013F6",
        50: "#F3C4FD",
        100: "#EFB0FC",
        200: "#E789FA",
        300: "#E062F9",
        400: "#D83AF7",
        500: "#D013F6",
        600: "#A908C9",
        700: "#7B0693",
        800: "#4E045D",
        900: "#210127",
      },
      black: {
        DEFAULT: "#000000",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      gray: {
        DEFAULT: "#141414",
        50: "#707070",
        100: "#666666",
        200: "#515151",
        300: "#3D3D3D",
        400: "#282828",
        500: "#141414",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
    },
    extend: {
      fontFamily: {
        ObjectSans: ["Object Sans", "sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
