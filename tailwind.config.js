export default {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1a73e8",
        secondary: "#f1f3f4",
        accent: "#34d399",
      },
    },
  },
  plugins: [],
};
