const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Times New Roman", "sans-serif"],
    },
    extend: {
      colors: {
        ...colors,
        primary: "#151515",
        secondary: "#31363F",
        third: "#818FB4",
        fourth: "#8B322C",
        fifth: "rgb(13,12,34)",
        sixth: "#F2994A",
        bgpr: "#070F44",
        bgdk: "#060723",
        bgcr: "#05071B",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        customBounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-30px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "bounce-slow": "customBounce 2s infinite",
      },
    },
  },
  plugins: [],
};
