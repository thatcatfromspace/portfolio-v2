/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}", "index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: "'DM Sans'",
      }
    },
  },
  plugins: [],
}

