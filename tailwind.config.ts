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
        bg:            "rgb(var(--c-bg) / <alpha-value>)",
        surface:       "rgb(var(--c-surface) / <alpha-value>)",
        "surface-2":   "rgb(var(--c-surface-2) / <alpha-value>)",
        accent:        "rgb(var(--c-accent) / <alpha-value>)",
        "accent-light":"rgb(var(--c-accent-light) / <alpha-value>)",
        fg:            "rgb(var(--c-fg) / <alpha-value>)",
        "fg-2":        "rgb(var(--c-fg-2) / <alpha-value>)",
        "fg-3":        "rgb(var(--c-fg-3) / <alpha-value>)",
        "fg-4":        "rgb(var(--c-fg-4) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans:  ["var(--font-dm-sans)",  "system-ui", "sans-serif"],
        mono:  ["var(--font-jetbrains-mono)", "Menlo", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
