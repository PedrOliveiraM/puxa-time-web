import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6',
          dark: '#1E40AF',
        },
        secondary: {
          light: '#10B981',
          dark: '#065F46',
        },
        accent: {
          light: '#F59E0B',
          dark: '#B45309',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;