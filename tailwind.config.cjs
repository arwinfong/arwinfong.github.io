/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': 'Lato, sans-serif'
    },
    screens: {
      'small': {'max': '1023px'},
      'big': {'min': '1024px'}
    },
    extend: {
      keyframes: {
        reveal: {
          '0%': {
            opacity: '0',
            top: '80px'
          },
          '100%': {
            opacity: '1',
            top: '0px'
          }
        },
        underline: {
          '0%' : { 
            opacity: '0',
            transform: 'scaleX(0%)'
          },
          '50%' : { 
            opacity: '1',
            transform: 'scaleX(0%)'
          },
          '100%' : { 
            opacity: '1',
            transform: 'scaleX(100%)'
          }
        },
        tempOpac: {
          '0%': { opacity: '1'},
          '50%':{ opacity: '1'},
          '51%':{ opacity: '0' }
        }, 
      },

      animation: {
        'reveal': 'reveal 1s ease-in-out',
        'underline': 'underline 2s ease-in-out',
        'textIn': 'textIn 1.5s ease-in-out',
        'tempOpac': 'tempOpac 2s',
      }
    }
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
