import create from "zustand";

export const useAddtoList = create((set) => ({
  addedGames: [],

  // Function to set the entire addedGames array to a new value
  setAddedGames: (newValue) =>
    set({
      addedGames: newValue,
    }),

  addGame: (id) =>
    set((state) => ({
      addedGames: state.addedGames.includes(id)
        ? state.addedGames.filter((gameId) => gameId !== id)
        : [...state.addedGames, id],
    })),

  removeGame: (index) =>
    set((state) => ({
      addedGames: state.addedGames.filter((_, i) => i !== index),
    })),
}));
