import type { CellType } from "../../constants/cellTypes";
import type { Ghost } from "../../types/types";
import {
  canMove,
  getAvailableDirections,
  getNextPosition,
} from "../../utils/gameUtils";

export default function moveGhost(ghost: Ghost, maze: CellType[][]) {
  const { row, col } = ghost.position;

  let direction = ghost.direction;

  const canContinue = canMove(maze, row, col, direction);

  if (!canContinue) {
    const directions = getAvailableDirections(maze, row, col, direction);

    if (directions.length === 0) {
      return ghost;
    }

    direction = directions[Math.floor(Math.random() * directions.length)];
  }

  const nextPosition = getNextPosition(row, col, direction);

  return {
    ...ghost,
    position: nextPosition,
    direction,
  };
}
