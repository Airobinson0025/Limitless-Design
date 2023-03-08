/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel Decoratives', 'cursive'],
        playfair: ['Playfair Display SC', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
        taviraj: ['Taviraj', 'serif'],
        redhat: ['Red Hat Text', 'sans-serif'],
        libre: ['Libre Baskerville', 'serif'],
        dark: ['Darker Grotesque', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
