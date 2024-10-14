/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        fantasy: ['"Press Start 2P"', 'cursive'], // Custom fantasy font
      },
    },
  },
  plugins: [],
}
