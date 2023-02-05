/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: "'Ubuntu', serif",
      },
      width: {
        1: "12.28px",
        2: "28.56px",
        3: "42.84px",
        4: "57.12px",
        5: "71.4px",
        6: "85.68px",
        7: "99.96px",
      },
      dropShadow: {
        "3xl": "0 10px 10px #4c1d95",
      },
    },
  },
  plugins: [],
};
