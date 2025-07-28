/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',      // add this
          600: '#0066cc',
          700: '#005bb5',      // add this
          900: '#004d99'
        },
        secondary: {
          50: '#f8fafc',
          300: '#64748b',
          600: '#334155',
          900: '#213547'
        },
        accent: {
          DEFAULT: '#ff6b00',
          100: '#ffe5d0',      // add this
          700: '#cc5500'       // add this
        }
      }
    },
  },
  plugins: [],
}
