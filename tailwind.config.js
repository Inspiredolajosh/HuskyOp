module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        cyan: { A200: "#17f3dd" },
        black: { 900: "#000000" },
        blue_gray: { 500: "#677395", 700: "#3c4a71", 900: "#1e2740" },
        gray: { 900: "#0e1321", "900_01": "#081b2f" },
        yellow: { 900: "#f67711" },
        deep_purple: { A200: "#9c51ff" },
        teal: { "900_35": "#10403635" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { roboto: "Roboto" },
      boxShadow: { bs: "0px 1px  3px 0px #10403635" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
