import { create } from "zustand";
import { devtools, combine } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import ShopPage from "../pages/shop";
import TodosPage from "../pages/todos";

type Theme = "dark" | "light";

export const pages = {
  todo: TodosPage,
  shop: ShopPage,
} as const;

export type Pages = keyof typeof pages;

type AppStore = {
  theme: Theme;
  page: Pages;
  setPage: (page: Pages) => void;
  toggleTheme: () => void;
};

export const appStoreStorageName = "app-storage";

export const useApp = create<AppStore>()(
  devtools(
    persist(
      immer(
        combine(
          {
            theme: "light" as Theme,
            page: "todo" as Pages,
          },
          (set) => ({
            setPage: (page: Pages) =>
              set((state) => {
                state.page = page;
              }),
            toggleTheme: () =>
              set((state) => {
                const newTheme = state.theme === "dark" ? "light" : "dark";
                document.documentElement.classList.toggle(
                  "dark",
                  newTheme === "dark"
                );
                state.theme = newTheme;
              }),
          })
        )
      ),
      {
        name: appStoreStorageName,
        onRehydrateStorage: () => (state) => {
          if (state) {
            document.documentElement.classList.toggle(
              "dark",
              state.theme === "dark"
            );
            console.log("Hydrated theme:", state.theme);
          }
        },
      }
    ),
    { name: "AppStoreDevtools" }
  )
);
