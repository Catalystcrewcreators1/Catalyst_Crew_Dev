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
          border: "#111111",
          red: "#D83A35",
          "red-hover": "#BD2C27",
          // Neo-brutalist accent colors
          yellow: "#FFD166",
          blue: "#4ECDC4",
          lavender: "#C3B1E1",
          peach: "#FFBE98",
          mint: "#A8E6CF",
        },
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        button: "8px",
        brutal: "4px",
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #111111",
        "brutal-sm": "3px 3px 0px 0px #111111",
        "brutal-lg": "6px 6px 0px 0px #111111",
        "brutal-xl": "8px 8px 0px 0px #111111",
        "brutal-red": "4px 4px 0px 0px #D83A35",
        "brutal-hover": "2px 2px 0px 0px #111111",
        subtle: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        card: "4px 4px 0px 0px #111111",
        "card-hover": "6px 6px 0px 0px #111111",
        dark: "4px 4px 0px 0px #111111",
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};

export default config;
