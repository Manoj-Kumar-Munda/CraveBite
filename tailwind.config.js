/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container :{
      center :true,
      
    },
    extend: {
      screens: {
        'xs': '480px',     // Custom extra-small screen size
        'sm': '640px',     // Custom small screen size
        'md': '768px',     // Custom medium screen size
        'lg': '1024px',    // Custom large screen size
        'xl': '1280px',    // Custom extra-large screen size
        '2xl': '1536px',   // Custom 2xl screen size
        // Add more custom screen sizes if needed
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

