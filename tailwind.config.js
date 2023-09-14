/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  variants: {
    extend: {
      textOpacity: ['dark'],
      backgroundColor: ['dark']
    }
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
