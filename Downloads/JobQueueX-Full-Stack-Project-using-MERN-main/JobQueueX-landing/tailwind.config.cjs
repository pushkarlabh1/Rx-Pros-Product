/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2F6CFF',
          green: '#27D47B',
        },
        deep: '#0B1226',
        light: '#F3F6FF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '18px',
      },
      boxShadow: {
        'card': '0px 10px 30px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}