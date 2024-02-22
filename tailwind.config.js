/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    fontSize: {
      xs: "0.75rem", // Extra small size
      sm: "0.875rem", // Small size
      base: "1rem", // Base size
      lg: "1.125rem", // Large size
      xl: "1.25rem", // Extra large size
      "2xl": "1.5rem", // 2x large size
      "3xl": "1.875rem", // 3x large size
      "4xl": "2.6rem", // 4x large size
      "5xl": "3rem", // 5x large size
      "6xl": "4rem", // 6x large size
      "7xl": "5rem", // 7x large size
      // Add more custom sizes as needed
    },
    lineHeight: {
      27: "2.7rem",
    },
  },
  plugins: [],
};
