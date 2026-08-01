import { create } from "zustand";
import { isValidMove } from "../utils/gameUtils";
import type { CellType } from "../constants/cellTypes";
import { INITIAL_MAZE } from "../constants/maze";

type Position = {
  row: number;
  col: number;
};

type GameStore = {
  maze: CellType[][];
  score: number;
  pacman: Position;
  movePacman: (dx: number, dy: number) => void;
};

export const useGameStore = create<GameStore>((set) => ({
  maze: INITIAL_MAZE,
  score: 0,
  pacman: {
    row: 1,
    col: 1,
  },

  movePacman: (dx, dy) =>
    set((state) => {
      const nextRow = state.pacman.row + dy;
      const nextCol = state.pacman.col + dx;

      if (!isValidMove(nextRow, nextCol)) {
        return state;
      }

      return {
        pacman: {
          row: state.pacman.row + dy,
          col: state.pacman.col + dx,
        },
      };
    }),
}));
