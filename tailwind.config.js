/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // SaintSal Empire Palette
        gold: "#FFC700",
        charcoal: "#10161C",
        "glow-yellow": "#FDE68A",
        "empire-dark": "#0A0E13",
        "empire-light": "#1C2431",
        "gold-hover": "#E6B800",
        "gold-light": "#FFD633",
        // Semantic Colors
        primary: "#FFC700",
        secondary: "#10161C",
        accent: "#FDE68A",
        background: "#000000",
        surface: "#10161C",
        "surface-light": "#1C2431",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Monaco", "Consolas", "monospace"],
      },
      fontSize: {
        hero: ["4rem", { lineHeight: "1.1", fontWeight: "900" }],
        empire: ["2.5rem", { lineHeight: "1.2", fontWeight: "800" }],
      },
      spacing: {
        18: "4.5rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      animation: {
        "empire-glow": "empire-glow 2s ease-in-out infinite alternate",
        float: "float 3s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
      },
      keyframes: {
        "empire-glow": {
          "0%": { boxShadow: "0 0 20px rgba(255, 199, 0, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(255, 199, 0, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
      backdropBlur: {
        empire: "8px",
      },
      borderRadius: {
        empire: "1.5rem",
      },
    },
  },
  plugins: [],
};
