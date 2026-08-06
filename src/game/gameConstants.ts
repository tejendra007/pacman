import type { CellType } from "../constants/cellTypes";
import type { Ghost, Position } from "../types/types";

// export type Direction

export type GameStore = {
  maze: CellType[][];
  score: number;
  pacman: Position;
  ghosts: Ghost[];
  movePacman: (dx: number, dy: number) => void;
  moveGhosts: () => void;
};
