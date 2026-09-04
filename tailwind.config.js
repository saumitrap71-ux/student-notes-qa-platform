/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'vey-black': '#0a0a0a',
        'vey-dark': '#1a1a1a',
        'vey-charcoal': '#2a2a2a',
        'vey-gray': '#404040',
        'vey-light': '#f5f5f5',
        'vey-white': '#ffffff',
        'vey-red': '#dc2626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
