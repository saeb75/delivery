module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-bg": "url('./assents/background.jpg')",
        "pizza-hand": "url('./assents/bg/1.png')",
      }),
      colors: {
        softBlack: "#141212",
        primary: "#f4ebdd",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
