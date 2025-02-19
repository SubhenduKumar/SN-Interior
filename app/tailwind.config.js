/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/tailwindComponents/*",],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
