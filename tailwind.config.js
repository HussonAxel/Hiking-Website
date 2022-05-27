module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "custom-lightgreen":"#B4F2AA",
        "custom-mediumgreen":"#5FA054",
        "custom-darkgreen":"#004C3F",
        "custom-dark":"#231F1F",
        "custom-card-green":"#516C47",
        "custom-red":"#B13837"
      }
    },
    fontFamily: {
      Poppins:["Poppins, sans-serif"],
    },
    container:{
      center:true,
      padding:"1rem",
      screens : {
        lg:"1440px",
        xl:"1440px",
        "2xl":"1440px",

      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
