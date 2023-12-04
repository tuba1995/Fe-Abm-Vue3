/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
    },
    colors: {
      orangeff7: "#ff740b",
    },
  },
  plugins: [],
};
