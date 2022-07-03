module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#349AC0",
        secondary: "#E2D6AF",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
