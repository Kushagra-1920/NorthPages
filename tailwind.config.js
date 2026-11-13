/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0A0A0A',
          gold: '#C9A227',
          'gold-light': '#E8BC3A',
          'gold-dark': '#A88520',
          white: '#FFFFFF',
          gray: '#9CA3AF',
          'gray-dark': '#374151',
          surface: '#111111',
          'surface-2': '#1A1A1A',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.25em',
      }
    },
  },
  plugins: [],
}
