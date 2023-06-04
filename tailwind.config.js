/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm:"450px",
        lg: '991px',
    }},
  },
  plugins: [],
}

