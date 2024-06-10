import {
    create
} from "zustand";

export const useMenuStore = create((set) => ({
    menuVisible: false,
    setMenuVisible: (newValue) => set({
        menuVisible: newValue
    }),
    toggleMenuVisible: () => set((state) => ({
        menuVisible: !state.menuVisible,
    }))
}));

export default useMenuStore;