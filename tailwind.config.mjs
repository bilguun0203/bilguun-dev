import defaultTheme from "tailwindcss/defaultTheme";

const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "ping-once": "ping 1s cubic-bezier(0, 0, 0.2, 1) forwards",
      },
      keyframes: {
        "ping-once": {
          "75%, 100%": { transform: "scale(2)", opacity: 0 },
        },
      },
    },
    colors: {
      gray: {
        darkest: "#0a0a0a",
        dark: "#3f3f3f",
        DEFAULT: "#787878",
        light: "#b7b7b7",
        lightest: "#eeeeee",
      },
      emerald: colors.emerald,
      blue: colors.blue,
      red: colors.red,
      yellow: colors.yellow,
      purple: colors.purple,
    },
    fontFamily: {
      sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
};
