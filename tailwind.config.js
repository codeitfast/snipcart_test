/** @type {import('tailwindcss').Config} */
//npx tailwindcss -i ./styles/input.css -o ./public/output.css --watch
module.exports = {
  content: ["./pages/**/*.{html,js,jsx}", "./main_comps/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}