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
      backgroundColor:
      {
        main: "#272A31"
      },
      height: {
        lesson: "650px"
      }

    },
  },
  plugins: [],
}

