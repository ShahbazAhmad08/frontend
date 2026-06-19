import { COLORS } from "./src/constants/theme.js";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        accent: COLORS.accent,
        // Light theme colors
        "theme-bg": COLORS.bg,
        "theme-bg-secondary": COLORS.bgSecondary,
        "theme-bg-tertiary": COLORS.bgTertiary,
        "theme-text": COLORS.text,
        "theme-text-secondary": COLORS.textSecondary,
        "theme-text-tertiary": COLORS.textTertiary,
        "theme-border": COLORS.border,
        "theme-border-secondary": COLORS.borderSecondary,
        "theme-border-accent": COLORS.borderAccent,
        // Legacy dark theme colors
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
