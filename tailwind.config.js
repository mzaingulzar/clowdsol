/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',

  content: ['./src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',],
  theme: {
    extend: {},
    colors: {
      primary: '#00000008',
      secondary: '#ffffff',
      tertiary: {
        100: '#374151',
        200: '#4b5563',
        300: '#263240'
      }
    

    },
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles (optional)
    display: false, // Disable Tailwind's `display` utility to prevent conflicts
  },
  plugins: [],
}

