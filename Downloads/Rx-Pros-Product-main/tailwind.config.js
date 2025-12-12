/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#52b2cf',
          light: '#48d1d8',
          dark: '#4e7882',
        },
        accent: {
          green: '#64d2a4',
        },
        text: {
          primary: '#333333',
          secondary: '#000000',
          muted: '#999999',
        },
        background: {
          DEFAULT: '#ffffff',
          gray: '#f3f3f3',
          light: '#fafafa',
        },
        border: {
          DEFAULT: '#c0c0c0',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': '56px',
        'h1': '40px',
        'h2': '28px',
        'h3': '20px',
        'body': '16px',
        'small': '14px',
        'tiny': '10px',
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '24px',
        'card-xl': '32px',
      },
      boxShadow: {
        'card': '0px 3.97px 49.59px rgba(0, 0, 0, 0.01)',
        'product': '24.41px 5.09px 47.70px rgba(0, 0, 0, 0.25)',
        'button': '0px 4.29px 16.07px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '116': '29rem',
      },
    },
  },
  plugins: [],
}