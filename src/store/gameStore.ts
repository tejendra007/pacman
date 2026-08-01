import { create } from "zustand";

type Position = {
  row: number;
  col: number;
};

type GameStore = {
  pacman: Position;
  movePacman: (dx: number, dy: number) => void;
};

export const useGameStore = create<GameStore>((set) => ({
  pacman: {
    row: 1,
    col: 1,
  },

  movePacman: (dx, dy) =>
    set((state) => ({
      pacman: {
        row: state.pacman.row + dy,
        col: state.pacman.col + dx,
      },
    })),
}));
