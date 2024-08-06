/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '-1/2': '-50%',
        '10px': '10px',
      },
      fontFamily: {
        'Lufga': ['Lufga', 'system-ui'],
        'hallelujah' :["Gloria Hallelujah", 'cursive']
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/banner.png')",
        'about': "url('/src/assets/images/about.png')",
        'campare': "url('/src/assets/images/banner12.png')",
      },
      screens: {
        's': '320px',
        // => @media (min-width: 320px) { ... }

        'sm': '540px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}