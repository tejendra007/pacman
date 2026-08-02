import { create } from "zustand";
import { eatPellet, isValidMove } from "../utils/gameUtils";
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

type PelletResult = {
  pelletEaten: boolean;
  scoreDelta: number;
  updatedMaze: CellType[][];
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
      const nextPosition = { row: nextRow, col: nextCol };

      if (!isValidMove(nextRow, nextCol)) {
        return state;
      }

      const pelletResult: PelletResult = eatPellet(state.maze, nextPosition);

      console.log("pelletResult", pelletResult);

      return {
        maze: pelletResult.updatedMaze,
        score: state.score + pelletResult.scoreDelta,
        pacman: nextPosition,
      };
    }),
}));
