import { createContext } from "react";

export const theme = {
  light: {
    foreground: "orange",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}

export const ThemeContext = createContext(theme)