import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx,json}",
    "./data/**/*.{ts,json}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F7F4",
        surface: "#FFFFFF",
        primary: {
          text: "#1F2328",
          green: "#3F6B3C",
        },
        secondary: {
          text: "#586069",
          green: "#6D8A5C",
        },
        accent: {
          earth: "#8B6F47",
        },
        border: "#E5E7EB",
        success: "#3E7A43",
        warning: "#B88935",
        error: "#C0392B",
      },
      maxWidth: {
        site: "1600px",
        content: "1200px",
        reading: "760px",
      },
      borderRadius: {
        image: "16px",
        card: "18px",
        button: "14px",
        input: "12px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
};

export default config;
