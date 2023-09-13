/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
          colors:{
            gray: {
              100: 'rgb(235, 232, 231)',
              200:'#E5E5E5',
            }
          }
    },
  },
  plugins: [],
}

