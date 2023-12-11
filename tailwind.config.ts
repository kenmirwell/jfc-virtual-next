import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        md: { max: "1024px" },
        xl: { max: "1280px" },
      },
      aspectRatio: {
        year: "319 / 170",
        yearImage: "353 / 126",
      },
      keyframes: {
        arrow: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(10%)" },
        },
      },
      animation: { arrow: "arrow 2s linear 0s infinite alternate" },
    },
  },
  plugins: [],
};
export default config;
