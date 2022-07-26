/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#02050E",
        primary: "#1E50FF",
        secondary: "#FFB830",
        card: "#272D37",
      },
      boxShadow: {
        p: "8px 8px 18px 0px rgba(30,80,255,0.25)",
      },
    },
  },
  plugins: [],
};
