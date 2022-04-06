module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-70px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'ping-short': 'ping 1s ease-in-out 5',
        'bounce-short': 'bounce 1s ease-in-out 5',
        'pulse-short': 'pulse 1s ease-in-out 1',
        'fade-in-down': 'fade-in-down 1.8s ease-out'
      }

    },
  },
  plugins: [],
}
