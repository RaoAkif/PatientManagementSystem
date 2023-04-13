module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "InterRegular",
        InterBold: "InterBold",
        InterLight: "InterLight",
      },
      colors: {
        customBlack: "#0D3F67",
        customPurple: "#6B48FF",
      },
    },
  },
  plugins: [],
};
