/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      colors: {
        bodyColor: '#030d25',
      },
      fontFamily: {
        bodyFont: ['Poppins', 'sans-serif'],
        titleFont: ['Montesrrat', 'sans-serif'],
      },
      boxShadow: {
        todoSahdow: '0px 0px 20px 4px rgba(11, 4, 209, 1)',
      },
    },
  },
  plugins: [],
}