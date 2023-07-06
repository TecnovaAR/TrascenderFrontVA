/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html", 
  "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          800: "#005F73",
          900: "#003A49",
        },
        green: {
          700: "#9CBEAC",
          800: "#809C8E",
        }
      }
    },
  },
  plugins: [],
}

