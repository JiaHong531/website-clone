/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      top: {
        '9p': '9%',
      },
      rotate: {
        '360': '360deg',
      },
      screens: {
        'xl': '1240px',
      },
      colors: {
        'blue-1': '#64CCC5',
      },
      fontFamily: {
        'proza': ['Proza Libre', 'sans-serif'],
        'russo': ['Russo One', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'skranji': ['Skranji', 'sans-serif'],
      },
      animation: {
        rotate: 'rotateOnce 1s ease forwards',  
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      backgroundColor: {
        'primary': '#0F171A',
        'secondary': '#1a2428',
        'hover': '#2a343a',
        'button': '#E88B67',
        'button-hover': '#e07f57',
      },
    },
    
  },
  plugins: [require('daisyui')],
}

