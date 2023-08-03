/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        anim: {
          "0%": { "stroke-dashoffset": 450 },
          "100%": { "stroke-dashoffset": 0 },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "100%": { opacity: "1", transform: "translateY(200px))" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(200px))" },
          "100%": { opacity: "0", transform: "translateY(0)" },
        },
      },
      animation: {
        "progress-animate": "anim 2s linear forwards",
        "fade-in": "fade-in 0.8s ease-in-out",
        "fade-out": "fade-out 3s ease-in-out",
      },
    },
  },

  plugins: [],
};
