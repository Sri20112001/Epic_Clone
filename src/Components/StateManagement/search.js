import { create } from "zustand";

export const useSearch = create((set) => ({
    search: '',
    setSearch: (newValue) => set({
        search: newValue
    }),
}));