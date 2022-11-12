/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'quiz': "url('/public/images/quiz.jpg')",
      }
    },
  },
  plugins: [],
}
