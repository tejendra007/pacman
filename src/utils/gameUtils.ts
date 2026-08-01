import { CELL_TYPES } from "../constants/cellTypes";
import { INITIAL_MAZE } from "../constants/maze";

export function isValidMove(row: number, col: number) {
  if (row < 0 || col < 0) {
    return false;
  }

  if (row >= INITIAL_MAZE.length) {
    return false;
  }

  if (col >= INITIAL_MAZE[0].length) {
    return false;
  }

  return INITIAL_MAZE[row][col] !== CELL_TYPES.WALL;
}
