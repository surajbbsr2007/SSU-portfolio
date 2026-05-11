import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.mdx"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        surface: "#F6F8FB",
        "surface-2": "#EEF2F7",
        text: "#0A0E1A",
        "text-muted": "#5A6478",
        "text-faint": "#8B95A8",
        hairline: "#E5EAF2",
        "blue-deep": "#1E3A8A",
        blue: "#2563EB",
        "blue-bright": "#3B82F6",
        "blue-tint": "#DBEAFE",
        green: "#059669",
        gold: "#C9A24A",
        primary: {
          DEFAULT: "#6366F1",
          hover: "#4F46E5",
          soft: "#EEF2FF"
        },
        app: "#F8FAFC",
        card: "#FFFFFF",
        sidebar: "#0F172A",
        "sidebar-active": "#1E293B",
        border: "#E2E8F0",
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
        info: "#3B82F6",
        ink: "#0A0A0A",
        paper: "#FAFAFA"
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"],
        hand: ["var(--font-hand)", "Caveat", "cursive"]
      },
      boxShadow: {
        lift: "0 22px 55px rgb(10 10 10 / 0.12)",
        soft: "0 16px 45px rgb(10 10 10 / 0.08)"
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
