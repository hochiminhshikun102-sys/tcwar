import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: "#f4efe5",
        ink: "#1f211c",
        moss: "#3e4532",
        clay: "#a85d35",
        bronze: "#c9a86a"
      },
      fontFamily: {
        display: ["var(--font-oswald)", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(31, 33, 28, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
