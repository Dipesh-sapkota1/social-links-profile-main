/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/index.html"],
  theme: {
    extend: {
      colors:{
        primary:'#c5f82a',
        grey:{
          800:'#333333',
          900:'#1f1f1f'
        },
        Offdark: '#141414'
      },
      fontFamily:{
        body:['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

