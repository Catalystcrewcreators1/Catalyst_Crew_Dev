import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#111111",
          soft: "#1A1917",
          cream: "#F4EFE6",
          white: "#FFFFFF",
          neutral: "#6F6A63",
          light: "#E8E2D8",
          border: "#E8E2D8",
          red: "#D83A35",
          "red-hover": "#BD2C27",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        button: "8px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        card: "0 4px 20px -2px rgba(17, 17, 17, 0.05)",
        "card-hover": "0 10px 30px -4px rgba(17, 17, 17, 0.1)",
        dark: "0 8px 30px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
