/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        portfolio: {
          background: "#ecece0ff", 
          hero: "#172d3a",         
          surface: "#000000",     
          card: "#e8efe19",  
          accent: "#7a8484",
          textLight: "#000000",
          textDark: "#ffffff",
          grayish: "#000000",
        },
      },
    },
  },
  plugins: [],
};
