// Store de tema con persistencia segura en almacenamiento del navegador.
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { defaultThemeId } from "@/features/theme/themes";
import type { ThemeId } from "@/features/theme/themeTypes";

interface ThemeStore {
  currentTheme: ThemeId;
  setTheme: (theme: ThemeId) => void;
}

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

const memoryStorage = new Map<string, string>();

function getSafeStorage(): StorageLike {
  if (typeof window === "undefined") {
    return {
      getItem: (key) => memoryStorage.get(key) ?? null,
      setItem: (key, value) => {
        memoryStorage.set(key, value);
      },
      removeItem: (key) => {
        memoryStorage.delete(key);
      },
    };
  }

  return window.localStorage;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      currentTheme: defaultThemeId,
      setTheme: (currentTheme) => set({ currentTheme }),
    }),
    {
      name: "pokemon-web-theme",
      storage: createJSONStorage(getSafeStorage),
      partialize: (state) => ({ currentTheme: state.currentTheme }),
    },
  ),
);
