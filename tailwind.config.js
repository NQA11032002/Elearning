/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      width:{
        detail: "63.666667%",
        course: "360px"
      },
      backgroundColor:
      {
        main: "#272A31"
      },
      height: {
        lesson: "650px"
      },
      gridTemplateColumns: {
        gridTable: '50px auto',
      },
      zIndex:{
        zIndex: "99999"
      },
      colors:{
        title: "#061469",
        content: "#a1a1a1",
        background: "#DEE1F3",
        footer: "#181821"
      }
    },
  },
  plugins: [],
}
