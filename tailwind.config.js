/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
           'pulse-slow': 'customPulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite', 
      },
      colors: {
        'dark-cyan': '#141e24',
        'burned-gold': '#CD955C',
        'indian-red': '#CD5C5C',
        'purple900': '#1C0337',
      },
      fontFamily: {
        neue: ("NeueMachine"),
        italics: ("NeueMachina-PlainRegularItalic"),
      },
      keyframes: {
        customPulse: {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '.64'
          },
        },
      },
    },
  },
  plugins: [
      require("flowbite/plugin")
  ],
};
