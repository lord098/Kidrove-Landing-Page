/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:    "#2563EB",
          indigo:  "#4F46E5",
          amber:   "#F59E0B",
          mint:    "#10B981",
          navy:    "#0F172A",
          softblue:"#EFF6FF",
          light:   "#DBEAFE",
        },
      },
      fontFamily: {
        display: ["Nunito", "sans-serif"],
        body:    ["Inter", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
