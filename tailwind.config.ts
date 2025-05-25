import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        jet: '#0D0D0D',
        charcoal: '#1C1C1E',
        softWhite: '#F5F5F5',
        mutedGray: '#D4D4D4',

        mutedBlue: '#5DADE2',
        slateCyan: '#7FBEC8',
        dustyRose: '#B97C8F',
        ashGold: '#BDA968',
        steelRed: '#A14E4E'
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideInFromLeft: "slideInFromLeft 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },}
    },
  },
  plugins: [],
} satisfies Config;
