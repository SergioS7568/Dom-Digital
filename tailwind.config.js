import containerQuery from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { darkModw: "class" },
    colors: {
      bgCustomGray: "rgb(214, 214, 214)",
      bgCustomDark: "rgb(54, 54, 54)",

      btnCustomFriendlyBlue: "rgb(63, 117, 168)",
    },
  },
  plugins: [containerQuery, require("daisyui")],
};
