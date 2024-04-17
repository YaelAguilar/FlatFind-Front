/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'dark-brown': '#3d2c2e',
      },
    },
  },
  plugins: [],
}

