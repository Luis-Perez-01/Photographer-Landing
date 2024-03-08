/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Akshar"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: { min: "640px" },

        md: { min: "768px" },

        lg: { min: "1024px" },

        xl: { min: "1280px" },

        "2xl": { min: "1536px" },
      },
    },
  },
  plugins: [],
};
