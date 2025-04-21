export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#3563E9",
        secondary: "#90A3BF",
        body: "#1A202C",
        grey: "#787878",
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      container: {
        center: true, // Ensures centering
        padding: "1rem", // Adds padding inside the container
      },
      letterSpacing: {
        tight: "-3%",
      },
    },
  },
  plugins: [],
};
