import { create } from "zustand";
import { eatPellet, isValidMove } from "../utils/gameUtils";
import { INITIAL_MAZE } from "../constants/maze";
import type { GameStore } from "../game/gameConstants";
import { BLINKY } from "../components/Ghost/ghostConstants";
import moveGhost from "../components/Ghost/moveGhost";
import type { PelletResult } from "../types/types";

export const useGameStore = create<GameStore>((set) => ({
  maze: INITIAL_MAZE,
  score: 0,
  pacman: {
    row: 1,
    col: 1,
  },
  ghosts: [BLINKY],
  movePacman: (dx, dy) =>
    set((state) => {
      const nextRow = state.pacman.row + dy;
      const nextCol = state.pacman.col + dx;
      const nextPosition = { row: nextRow, col: nextCol };

      if (!isValidMove(state.maze, nextRow, nextCol)) {
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
  moveGhosts: () => {
    set((state) => ({
      ghosts: state.ghosts.map((ghost) => moveGhost(ghost, state.maze)),
    }));
  },
}));
