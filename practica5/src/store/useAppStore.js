import { create } from "zustand";
import { createRecipeSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create(devtools((...args) => ({
    ...createRecipeSlice(...args)
})));
