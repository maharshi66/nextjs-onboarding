module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      animation: {
        'ping-short': 'ping 1s ease-in-out 5',
        'bounce-short': 'bounce 1s ease-in-out 5'
      }

    },
  },
  plugins: [],
}
