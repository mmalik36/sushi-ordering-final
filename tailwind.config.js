const defaultTheme=require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        brown:'#C69749',
        darkBrown:'#735F32'
      }
    },
  },
  plugins: [],
}