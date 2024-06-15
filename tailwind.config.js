/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(50, 90, 180)",
        lightBlue: "#c8d2e7",
        desc: "#8595a5",
      },
      boxShadow: {
        default: "0 4px 8px 0 #c8d2e7, 0 6px 20px 0 #c8d2e7",
      },
      animation: {
        "fade-in": "fade-in 0.3s",
        "fade-out": "fade-out 0.3s",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
