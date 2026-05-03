import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a2744",
          light: "#243252",
          dark: "#111c33",
          50: "#f0f3fa",
          100: "#d9e0f0",
          200: "#b3c1e0",
          800: "#1a2744",
          900: "#111c33",
        },
        gold: {
          DEFAULT: "#c8a96e",
          light: "#d4b97e",
          dark: "#a88d5a",
          50: "#fdf8f0",
          100: "#f5e9d0",
        },
        silver: {
          DEFAULT: "#8c9cb0",
          light: "#b8c5d4",
          dark: "#6a7a8e",
        },
        chrome: "#c0c0c0",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #111c33 0%, #1a2744 50%, #243252 100%)",
        "gradient-gold": "linear-gradient(135deg, #a88d5a 0%, #c8a96e 50%, #d4b97e 100%)",
        "gradient-hero": "linear-gradient(to bottom, rgba(17,28,51,0.85) 0%, rgba(26,39,68,0.7) 60%, rgba(17,28,51,0.9) 100%)",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee2": "marquee2 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(200, 169, 110, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(200, 169, 110, 0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "gold": "0 4px 24px rgba(200, 169, 110, 0.25)",
        "gold-lg": "0 8px 40px rgba(200, 169, 110, 0.35)",
        "navy": "0 4px 24px rgba(26, 39, 68, 0.2)",
        "navy-lg": "0 8px 40px rgba(26, 39, 68, 0.3)",
        "card": "0 2px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
