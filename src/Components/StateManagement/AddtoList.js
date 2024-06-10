import create from 'zustand';

const useAddtoList = create((set) => ({
  addedGames: [],
  addGame: (id) =>
    set((state) => ({
      addedGames: state.addedGames.includes(id)
        ? state.addedGames.filter((gameId) => gameId !== id)
        : [...state.addedGames, id],
    })),
}));

export default useAddtoList;
