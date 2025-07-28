/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        max650: { max: "649px" }, // applies when screen is ≤ 649px
      },
      colors: {
        themeColor: "var(--themeColor)",
        bgColor: "var(--bgColor)",
        textColor: "var(--textColor)",
        liteblack: "var(--litegrey)",
      },
    },
  },
  plugins: [],
};
