import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeData {
  theme: string;
  setTheme: (theme: string) => void;
}
export const useTheme = create<ThemeData>()(
  persist(
    (set) => ({
      theme: "light",

      setTheme: (theme: string) => {
        set({ theme });
      },
    }),
    {
      name: "theme",
    },
  ),
);
