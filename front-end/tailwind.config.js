
/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
          colors:{
            gray: {
              100: 'rgb(235, 232, 231)',
              200:'#E5E5E5',
            },
            orange: {
              200: 'rgb(240, 126, 45)', 
            }
          }, 
          // fontFamily: {
          //   futura: ['"Futura Bk BT"', 'sans'],
          //   sans: ['"Futura Bk BT"', 'sans'],
          // },
    },
  },
  plugins: [scrollbarHide],
}
