import { CELL_TYPES, type CellType } from "../constants/cellTypes";
import { DIRECTION_MAP } from "../constants/direction";
import { OPPOSITE_DIRECTION } from "../constants/oppositeDirection";
import type { Direction, Position } from "../types/types";

export function isValidMove(maze: CellType[][], row: number, col: number) {
  if (row < 0 || col < 0) {
    return false;
  }

  if (row >= maze.length) {
    return false;
  }

  if (col >= maze[0].length) {
    return false;
  }

  return maze[row][col] !== CELL_TYPES.WALL;
}

export function eatPellet(maze: CellType[][], position: Position) {
  const { row, col } = position;

  const cell = maze[row][col];

  if (cell === CELL_TYPES.EMPTY) {
    return {
      pelletEaten: false,
      scoreDelta: 0,
      updatedMaze: maze,
    };
  }

  const updatedMaze = maze.map((row) => [...row]);

  updatedMaze[row][col] = CELL_TYPES.EMPTY;

  return {
    pelletEaten: true,
    scoreDelta: 10,
    updatedMaze,
  };
}

export function getNextPosition(
  row: number,
  col: number,
  direction: Direction,
) {
  const move = DIRECTION_MAP[direction];

  return {
    row: row + move.row,
    col: col + move.col,
  };
}

export function canMove(
  maze: CellType[][],
  row: number,
  col: number,
  direction: Direction,
) {
  const nextPosition = getNextPosition(row, col, direction);

  return isValidMove(maze, nextPosition.row, nextPosition.col);
}

export function getAvailableDirections(
  maze: CellType[][],
  row: number,
  col: number,
  currentDirection: Direction,
) {
  const directions: Direction[] = ["up", "down", "left", "right"];

  return directions.filter((direction) => {
    const isReverse = direction === OPPOSITE_DIRECTION[currentDirection];

    return !isReverse && canMove(maze, row, col, direction);
  });
}
