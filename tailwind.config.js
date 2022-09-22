/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgray: '#8E8E93'
      },
      scale: {
        "04": ".4",
      },
      borderRadius: {
        "54-px": "54px",
        "42-px": "42px",
      },
      width: {
        "66-px": "66px",
        "22-px": "22px",
        "2-px": "2px",
      },
      height: {
        "66-px": "66px",
        "20-px": "20px",
      },
      keyframes: {
        quiet: {
          "25%": { transform: "scaleY(.6)" },
          "50%": { transform: "scaleY(.4)" },
          "75%": { transform: "scaleY(.8)" },
        },
        normal: {
          "25%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(.4)" },
          "75%": { transform: "scaleY(.6)" },
        },
        loud: {
          "25%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(.4)" },
          "75%": { transform: "scaleY(1.2)" },
        },
      },
      animation: {
        'quiet': 'quiet 1.2s ease-in-out infinite',
        'normal': 'normal 1.2s ease-in-out infinite',
        'loud': 'loud 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
