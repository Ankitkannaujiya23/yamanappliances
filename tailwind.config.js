/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefbff",
          100: "#d6f4ff",
          200: "#b0eaff",
          300: "#75dcff",
          400: "#31c6ff",
          500: "#06aaf5",
          600: "#0086d1",
          700: "#026aa9",
          800: "#075a8b",
          900: "#0c4b73",
          950: "#082f4a",
        },
        accent: {
          500: "#ff7a1a",
          600: "#f2610a",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(8,47,74,0.10)",
        cardHover: "0 12px 32px -8px rgba(8,47,74,0.22)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
