/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      clipPath: {
        'circle': 'circle(50%)',
        'polygon': 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
      },
      colors: {
        'brown-200': 'rgba(75, 40, 5, 0.75)',
        'brown-100': 'rgba(184, 129, 72, 0.75)',
        'brown-900': 'rgba(75, 40, 5, 1)'
      },
      screens: {
        'set':  '320px' ,
        // => @media (min-width: 320px) { ... }

        'phone': '480px',
        // => @media (min-width: 480px) { ... }

        'fold': '640px' ,
        // => @media (min-width: 640px) { ... }

        'tablet': '768px' ,
        // => @media (min-width: 768px) { ... }
  
        'laptop':'1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      keyframes: {
        reversePinchZoom: {
          '0%': { transform: 'scale(2)'},
          '60%': { transform: 'scale(1)' },
          '100%': {}
        },
        heading: {
          '0%': { transform: 'translateY(2rem)',  opacity: '0'},
          '100%': {transform: 'translateY(0)',  opacity: '1'}
        },
        fallIn: {
          '0%':{transform: 'translateX(2rem)', wordSpacing: '10px', opacity: '0'},
          '100%':{transform: 'translateX(0)', wordSpacing: '0px', opacity: '1'}
        },
        slideIn: {
          '0%':{transform: 'translateX(100rem)', opacity: '0'},
          '100%':{transform: 'translateX(0)', opacity: '1'}
        },
        
      },
      animation: {
        reversePinchZoom: 'reversePinchZoom 0.6s cubic-bezier(0, 0.25, 1, 0.98)',
        heading: 'heading 0.6s ease-in-out',
        heading2: 'heading 0.8s ease-in-out',
        fallIn: 'fallIn 1s ease-in',
        slideIn: 'slideIn 1.5s ease-in-out',
      }
    },
  },
  plugins: [],
}

