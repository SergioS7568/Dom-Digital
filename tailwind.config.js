import containerQuery from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgCustomGray: "rgb(214, 214, 214)",
        bgCustomDark: "rgb(54, 54, 54)",
        textCustomNaturalBlack: "#000000DE",
        textCustomDarkFriendlyWhite: "#9E9E9E",
        btnCustomFriendlyBlue: "rgb(63, 117, 168)",
        btnCustomBackgroundColor: "#3f75a8",
        btnCustomTableColor: "#121212",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        slab: ["Roboto Slab", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        mmd: "960px",
        xmd: "1024px",
      },
      darkMode: "class",
    },
  },
  plugins: [containerQuery, require("daisyui")],
};
