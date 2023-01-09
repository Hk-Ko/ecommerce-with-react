/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "poppins": 'Poppins'
      },
      colors:{
        'primary':'#fffffe',
        'header':'#272343',
        'para':'#2d334a',
        'buttom':'#ffd803',
        'secondary':'#e3f6f5'
      }
    },
  },
  plugins: [],
};
