/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      p: '1.5em',
      h2: '6em',
      h3: '3em',
      h2t: '2.9em',
      logo: '3.3em',
      mini: '0.4em',
      sm: '1em',
      md: '3em',
     
  
    },

    extend: {
      colors: {
        'blue-logo': '#1D52FF',
        'hover': '#3276fb',
      },

      screens: {
        'sm': {'max': '415px'},
      // => @media (min-width: 580px) { ... }

      'md': {'max': '810px'},
      // => @media (min-width: 900px) { ... }

      'lg': {'max': '1150px'},
      },
    },
  },
  plugins: [],
}