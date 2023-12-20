import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LIGHT_THEME } from "../constant";

interface ThemeData {
  theme: string;
  setTheme: (theme: string) => void;
}
export const useTheme = create<ThemeData>()(
  persist(
    (set) => ({
      theme: LIGHT_THEME,

      setTheme: (theme: string) => {
        set({ theme });
      },
    }),
    {
      name: "theme",
    },
  ),
);
