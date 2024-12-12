import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      keyframes: {
        flash: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        'fade-slide-in-from-bottom': {
          "0%": {
            opacity: '0',
            transform: 'translateY(1rem)'
          },
          "100%": {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scrolling: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          }
        }
      },
      animation: {
        flash: 'flash 1s ease-in-out',
        scrolling: 'scrolling 10s linear infinite',
        'fade-slide-in-from-bottom': 'fade-slide-in-from-bottom 1s ease-in-out',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
