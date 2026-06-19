import { COLORS } from "./src/constants/theme.js";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        accent: COLORS.accent,
        "theme-dark": COLORS.dark,
        "theme-dark-light": COLORS.darkLight,
        "theme-slate-600": COLORS.slate600,
        "theme-gray": COLORS.gray,
        "theme-light-gray": COLORS.lightGray,
        "theme-white": COLORS.white,
        "theme-black": COLORS.black,
      },
    },
  },
  plugins: [],
};
