
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // Ghibli-inspired colors
        ghibli: {
          green: "#8BD0B4",
          blue: "#A8D8EA",
          pink: "#FFCAD4",
          yellow: "#FFF5BA",
          brown: "#CCB6A2",
          darkgreen: "#5F9E7E",
          skyblue: "#CAE7F7",
          sunset: "#F7C59F",
          forest: "#607D5F",
          cloud: "#F1F0FB",
        },
      },
      fontFamily: {
        sans: ["Neue Haas Grotesk", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "sway": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "float": "float 6s ease-in-out infinite",
        "sway": "sway 8s ease-in-out infinite",
      },
      backgroundImage: {
        "ghibli-gradient": "linear-gradient(135deg, #E0F2E9 0%, #A8D8EA 100%)",
        "ghibli-sunset": "linear-gradient(to right, #F7C59F 0%, #FFCAD4 100%)",
        "ghibli-forest": "linear-gradient(to right, #8BD0B4 0%, #607D5F 100%)",
        "ghibli-sky": "linear-gradient(to top, #A8D8EA 0%, #CAE7F7 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
