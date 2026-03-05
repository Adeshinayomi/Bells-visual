/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(-50%)' },
          '100%': { transform: 'translate(0)' },
        },
        show:{
          '0%': { opacity:'0' },
          '100%': { opacity:'1' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out 1',
        show:'show 1s ease-in-out 1'
      },
      colors:{
        primary:'#F9FAFB',
        secondary:'#000000',
        accent:'#111827',
        White:'#FFFFFF'
      },
      backgroundImage:{
        'hero':'linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%)',
        'soft-ui':
          'radial-gradient(circle at top left, rgba(99,102,241,0.08), transparent 40%), radial-gradient(circle at bottom right, rgba(59,130,246,0.08), transparent 40%)',
        'port':
        "url('../assets/image/background-pattern.jpg')"  
      },
       fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}