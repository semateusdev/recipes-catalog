/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc2f02'
      },
      height: {
        withoutheader: 'calc(100vh - 8rem)'
      }
    },
    screens: {
      'FHD': '1920px',
      'HD': '1280px',
      'Tablet': '768px',
    }
  },
  plugins: [],
}