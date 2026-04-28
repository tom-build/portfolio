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
          background: "#ecece0ff", // fundo geral claro
          hero: "#172d3a",         // HERO / área da foto
          surface: "#000000",      // caixas neutras (about, footer)
          card: "#e8efe19",         // cards de projetos (independente)
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
