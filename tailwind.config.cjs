/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Helvetica, Arial, sans-serif'
    },
    extend: {
      keyframes: {
        hide: {
          '0%': { transform: 'translateY(-75px)'},
          '50%': { transform: 'translateY(-70px)'}
        },
        underline: {
          '0%' : { 
            opacity: '0',
            scale: '0%'
          },
          '50%' : { 
            opacity: '1',
            transform: 'scaleX(0%)'
          },
          '100%' : { 
            opacity: '1',
            transform: 'scaleX(100%)'
          }
        }
      },

      animation: {
        hide: 'hide 1s ease-in-out',
        underline: 'underline 2s ease-in-out',
      }
    }
  },
  plugins: [],
}
