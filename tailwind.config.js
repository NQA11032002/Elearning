/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      width:{
        detail: "63.666667%"
      },
      gridTemplateColumns: {
        gridTable: '50px auto',
      }
    },
  },
  plugins: [],
}

