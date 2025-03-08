import { create } from "zustand";
import { Theme } from "../types/theme";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Partial<Theme>) => void;
  toggleDarkMode: () => void;
}

const defaultTheme: Theme = {
  id: "default",
  name: "Default Theme",
  colors: {
    primary: "#3B82F6",
    secondary: "#64748b",
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    neutral: {
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.5rem",
    full: "9999px",
  },
  isDark: false,
};
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: defaultTheme,
      setTheme: (newTheme) =>
        set((state) => ({
          theme: { ...newTheme, ...state.theme },
        })),
      toggleDarkMode: () =>
        set((state) => ({
          theme: {
            ...state.theme,
            isDark: !state.theme.isDark,
            colors: {
              ...state.theme.colors,
              neutral: {
                ...state.theme.colors.neutral,
                500: state.theme.isDark ? "#6B7280" : "#374151",
              },
            },
          },
        })),
    }),
    { name: "theme" }
  )
);
