/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**/*.html",
    "./scripts/**/*.js",
    "./shared/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2c3e50',
        'secondary': '#34495e',
        'accent': '#3498db',
        'background': '#f9f9f6',
        'card-bg': '#fff',
        'card-border': '#e0e0e0',
        'header-bg': '#ecebe4',
        'nav-bg': '#f5f5fa',
        'nav-active': '#3498db',
        'text-color': '#222',
        'muted': '#888',
        'success': '#27ae60',
        'warm-accent': '#e74c3c',
        'gold-accent': '#f39c12',
      },
      fontFamily: {
        'serif': ['Libre Baskerville', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
