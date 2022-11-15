/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-cyan': '#141e24',
        'burned-gold': '#CD955C',
        'indian-red': '#CD5C5C',
      },
      fontFamily: {
        neue: ("NeueMachine"),
        italics: ("NeueMachina-PlainRegularItalic"),
      },
    },
  },
  plugins: [],
};
