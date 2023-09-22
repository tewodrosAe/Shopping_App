/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#0c0e1c',
        'background':'#f5f5f7',
        'btn':'#4681f4'
      },
      fontSize: {
        'text1': '0.8rem',
        'text2': '0.9rem',
        'product': '0.91rem'
      },
      height: {
        'single': '1px'
      },
      backgroundColor: {
        'error': '#EF5350'
      },
      padding: {
        'double': '0.15rem'
      }
    },
  },
  plugins: [],
}

