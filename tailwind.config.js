/** @type {import('tailwindcss').Config} */
import { default as defaultTheme } from "tailwindcss/defaultTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "bg-color": "#F6F6F6", 
      },
    },
  },
  plugins: [],
};

export default config;
